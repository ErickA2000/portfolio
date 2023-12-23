import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { Start } from '../../interfaces/data.interface';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    SpinnerComponent,
    MatDividerModule
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements OnInit {

  dataStart?: Start;

  constructor( private languageService: LanguageService, private dataService: DataService ){  }

  ngOnInit(): void {
    this.languageService.language.subscribe( lang => {
      this.dataStart = this.dataService.getStart(lang);
    })
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value)
  }
}
