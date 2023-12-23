import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { DataService } from '../../services/data.service';
import { Skills } from '../../interfaces/data.interface';
import { Subscription } from 'rxjs';
import { TablerIconModule } from '../../tabler-icon/tabler-icon.module';
import { DocumentService } from '../../services/document.service';
import { deleteSpaceStr } from '../../helper/deleteSpaceStr';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TablerIconModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, OnDestroy {

  dataSkills?: Skills;
  colorFill: string = "black";
  private $languageService?: Subscription;
  private $documentService?: Subscription;

  constructor( private languageService: LanguageService, private dataService: DataService, private documentService: DocumentService ){}

  ngOnInit(): void {
    this.$languageService = this.languageService.language.subscribe( lang => {
      this.dataSkills = this.dataService.getSkills(lang);
    });

    this.$documentService = this.documentService.isDarkTheme.subscribe( isDark => {
      if( isDark ){
        this.colorFill = "white";
      }else{
        this.colorFill = "black";
      }

    });

  }

  ngOnDestroy(): void {
    this.$languageService?.unsubscribe();
    this.$documentService?.unsubscribe();
  }

  deleteSpace( value: string | undefined ){
    if( !value ) return "";
    return deleteSpaceStr(value);
  }
}
