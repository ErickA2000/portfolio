import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { Contact } from '../../interfaces/data.interface';
import { TablerIconModule } from '../../tabler-icon/tabler-icon.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { DocumentService } from '../../services/document.service';
import { openURL } from '../../helper/openURL';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { SendMailService } from '../../services/send-mail.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TablerIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit{

  dataContact?: Contact;
  cssClass = "color-light";
  isSending: boolean = false;
  isSend: boolean = false;

  constructor( private dataService: DataService, private languageService: LanguageService, private documentService: DocumentService,
    private fb: FormBuilder, private _snackBar: MatSnackBar, private mailService: SendMailService ){}

  contactForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z ]+$/) ]],
    company: [ '', [ Validators.minLength(2) ]],
    email: [ '', [ Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) ]],
    message: [ '', [ Validators.required, Validators.minLength(50), Validators.maxLength(2000) ]]
  });

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataContact = this.dataService.getContacMe(lang);
    });

    
  }

  ngAfterViewInit(): void {
    this.documentService.isDarkTheme.subscribe( isDark => {
      if( !isDark ) {
        this.cssClass = "color-light";
      }else{
        this.cssClass = "";
      }
    });
  }

  openUrl( url: string ){
    openURL(url);
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value);
  }

  checkExistError( errors: ValidationErrors | null | undefined, error: string ){
    if( !errors ) return false;

    const keys = Object.keys(errors);
    let exist: boolean = false;

    for( let key of keys){
      if( key === error ) return exist = true;
    }

    return exist;
  }

  sendEmail(){

    if( !this.contactForm.valid ){
      this.openSnackBar( this.dataContact?.errorMessages.form.invalid || "Error", this.dataContact?.errorMessages.form.button || "Close" );
    }else{
      this.isSending = true;
      this.mailService.sendMail( this.contactForm.value ).subscribe( res => {

        if( res.ok ){
            this.isSending = false;
            this.isSend = true;

            setTimeout( () => {
              this.isSend = false;
            }, 2000);

        }else{
          this.openSnackBar( "Error", "Close" );
          this.isSending = false;
        }
      })

    }
  }

  private openSnackBar( message: string, textButton: string ){
    this._snackBar.open( message, textButton);
  }
}
