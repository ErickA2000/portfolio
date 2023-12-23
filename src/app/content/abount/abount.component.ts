import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { Abount } from '../../interfaces/data.interface';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';

@Component({
  selector: 'app-abount',
  standalone: true,
  imports: [],
  templateUrl: './abount.component.html',
  styleUrl: './abount.component.scss'
})
export class AbountComponent implements OnInit{

  dataAbount?: Abount;

  constructor( private languageService: LanguageService, private dataService: DataService ){}

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataAbount = this.dataService.getAbount(lang);
    } )
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value);
  }

}
