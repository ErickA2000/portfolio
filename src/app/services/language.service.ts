import { EventEmitter, Injectable, Output } from '@angular/core';
import type { AllLanguages } from '../interfaces/language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {


  @Output() language: EventEmitter<AllLanguages> = new EventEmitter();

  constructor() { }

  getLanguague(){
    const language = navigator.language || "es";
    const lang = language.substring(0, 2);
    this.setLanguage(lang as AllLanguages);
  }

  setLanguage( language: AllLanguages ){
    this.language.emit(language);
  }
}
