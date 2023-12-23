import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from 'angular-tabler-icons';
import { 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconSunFilled,
  IconMoonFilled,
  IconLanguageHiragana,
  IconBrandTypescript,
  IconBrandJavascript,
  IconFileTypeHtml,
  IconFileTypeCss,
  IconBrandPython,
  IconBrandAngular,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandDocker,
  IconArrowBigRight 
} from "angular-tabler-icons/icons";

const icons = {
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconSunFilled,
  IconMoonFilled,
  IconLanguageHiragana,
  IconBrandTypescript,
  IconBrandJavascript,
  IconFileTypeHtml,
  IconFileTypeCss,
  IconBrandPython,
  IconBrandAngular,
  IconBrandReact,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandDocker,
  IconArrowBigRight 
};

@NgModule({
  declarations: [],
  imports: [
    TablerIconsModule.pick(icons)
  ],
  exports: [
    TablerIconsModule
  ]
})
export class TablerIconModule { }
