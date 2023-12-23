import { DOCUMENT } from '@angular/common';
import { EventEmitter, Inject, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  @Output() isDarkTheme: EventEmitter<boolean | undefined> = new EventEmitter();

  constructor( @Inject(DOCUMENT) private docuemet: Document) { }

  document(): Document{
    return this.docuemet;
  }

  getColorSchema( scheme: string ): boolean | undefined{
    return this.docuemet.defaultView?.matchMedia(`(prefers-color-scheme: ${scheme})`).matches;
  }


}
