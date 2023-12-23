import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataLanguages } from '../../interfaces/data.interface';
import { LanguageService } from '../../services/language.service';
import { TablerIconModule } from '../../tabler-icon/tabler-icon.module';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [
    TablerIconModule
  ],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent implements OnInit {

  dataLanguages?: DataLanguages;

  constructor( private dataService: DataService, private languageService: LanguageService ){}

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataLanguages = this.dataService.getLanguages(lang);
    })
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value);
  }
}
