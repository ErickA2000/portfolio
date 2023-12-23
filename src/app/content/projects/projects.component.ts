import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Projects } from '../../interfaces/data.interface';
import { LanguageService } from '../../services/language.service';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{

  dataProjects?: Projects;
  lineAndDotStyle  = {
    background: 'white'
  };

  constructor( private dataService: DataService, private languageService: LanguageService, private documentService: DocumentService ){}

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataProjects = this.dataService.getProjects(lang);
    });

    this.documentService.isDarkTheme.subscribe( isDark => {
      if( isDark ) {
        this.lineAndDotStyle.background = 'white';
      }else{
        this.lineAndDotStyle.background = 'black';
      }
    })
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value);
  }
}