import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { Start } from '../../interfaces/data.interface';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';
import { MatDividerModule } from '@angular/material/divider';
import { NgStyle } from '@angular/common';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    SpinnerComponent,
    MatDividerModule,
    NgStyle
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements OnInit {

  dataStart?: Start;
  dividerStyle = {
    'border-right-color': 'white'
  }

  constructor( private languageService: LanguageService, private dataService: DataService, private documentService: DocumentService ){  }

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataStart = this.dataService.getStart(lang);
    });

    this.documentService.isDarkTheme.subscribe( isDark => {
      if( isDark ){
        this.dividerStyle['border-right-color'] = 'white';
      }else{
        this.dividerStyle['border-right-color'] = 'black';
      }
    });
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value)
  }
}
