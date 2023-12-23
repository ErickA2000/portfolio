import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconModule } from '../../tabler-icon/tabler-icon.module';
import { DataService } from '../../services/data.service';
import { Header } from '../../interfaces/data.interface';
import { LanguageService } from '../../services/language.service';
import { AllLanguages } from '../../interfaces/language.interface';
import { openURL } from '../../helper/openURL';
import { DocumentService } from '../../services/document.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TablerIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  dataHeader?: Header;
  isDarkMode: boolean | undefined = false;
  iconTheme: string = "sun-filled";

  private document: Document;

  @ViewChild('asIconTheme') themeIcon!: any;

  constructor( private dataService: DataService, private languageService: LanguageService, 
    private render2: Renderer2, private documentService: DocumentService ){
      this.document = this.documentService.document();
    }

  ngOnInit(): void {

    this.isDarkMode = this.documentService.getColorSchema('dark');
    
    setTimeout( () => {
      this.languageService.getLanguague();
      this.documentService.isDarkTheme.emit(this.isDarkMode);
    }, 500)

    this.languageService.language.subscribe( lang => {
      
      this.dataHeader = this.dataService.getHeader(lang);
    } )

  }
  
  
  changeLanguage( language: string ){
    this.languageService.setLanguage(language as AllLanguages);
  }

  changeMode( ){
    const asIconTheme = this.themeIcon.elem.nativeElement;
    if( this.isDarkMode ){


      this.render2.addClass(asIconTheme, "rotate-center");

      this.document.body.classList.remove('dark-mode');
      this.document.body.classList.add('light-mode');
      this.isDarkMode = false;
      this.documentService.isDarkTheme.emit(this.isDarkMode);
      this.iconTheme = "moon-filled";

      setTimeout( () => {
        this.render2.removeClass(asIconTheme, "rotate-center");

      }, 500)

    }else{
      this.render2.addClass(asIconTheme, "rotate-center");

      this.document.body.classList.remove('light-mode');
      this.document.body.classList.add('dark-mode');
      this.isDarkMode = true;
      this.documentService.isDarkTheme.emit(this.isDarkMode);
      this.iconTheme = "sun-filled";

      setTimeout( () => {
        this.render2.removeClass(asIconTheme, "rotate-center");

      }, 500)
    }
  }

  openUrl(url: string){
    openURL(url);
  }

  deleteSpace( value: string ){
    return deleteSpaceStr(value);
  }

}
