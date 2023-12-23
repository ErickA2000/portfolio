import { Injectable } from '@angular/core';
import * as dataEnglish from "../../assets/info-english.json";
import * as dataSpanish from "../../assets/info-spanish.json";
import { Data } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getHeader( language: string ){
    if( language === "es" ){

      return ( dataSpanish as Data ).header;

    }else{
      return ( dataEnglish as Data ).header;
    }
  }

  getStart( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).start;
    
    return ( dataEnglish as Data ).start;
    
  }

  getAbount( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).abount;

    return ( dataEnglish as Data ).abount;
  }

  getSkills( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).skills;

    return ( dataEnglish as Data ).skills;
  }

  getLanguages( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).languages;

    return ( dataEnglish as Data ).languages;
  }

  getProjects( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).projects;

    return ( dataEnglish as Data ).projects;
  }

  getContacMe( language: string ){
    if( language == "es" ) return ( dataSpanish as Data ).contact;

    return ( dataEnglish as Data ).contact;
  }

}
