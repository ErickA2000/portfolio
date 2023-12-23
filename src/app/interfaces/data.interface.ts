export interface Data {
    header:    Header;
    start:     Start;
    abount:    Abount;
    skills:    Skills;
    languages: DataLanguages;
    projects:  Projects;
    contact:   Contact;
}

// START HEADER
export interface Header {
    options:   Option[];
    languages: Language[];
}

export interface Option {
    option: string;
}

export interface Language {
    language: string;
    iso:      string;
}
//END HEADER

//START <<START>>
export interface Start {
    title:         string;
    img:           string;
    name:          string;
    collageDegree: string;
    position:      string;
}
//END <<START>>


//START ABOUNT
export interface Abount {
    title: string;
    p1:    string;
    p2:    string;
    p3:    string;
}
//END ABOUNT

//START SKILLS
export interface Skills {
    title:             string;
    languages:         ElementSkill;
    libraryFrameworks: ElementSkill;
    toolsPlatforms:    ElementSkill;
}

export interface ElementSkill {
    title: string;
    items: ItemSkill[];
}

export interface ItemSkill {
    title: string;
    icon:  string;
}
//END SKILLS

//START LANGUAGES
export interface DataLanguages {
    title: string;
    items: ItemLanguage[];
}

export interface ItemLanguage {
    name:  string;
    level: string;
}
//END LANGUAGES

//START PROJECT
export interface Projects {
    title: string;
    items: ProjectsItem[];
}

export interface ProjectsItem {
    date:       string;
    position:   string;
    name:       string;
    location:   string;
    activities: string[];
}
//END PROJECT

//START CONTACT
export interface Contact {
    title:         string;
    name:          string;
    company:       string;
    mail:          string;
    message:       string;
    button:        string;
    errorMessages: ErrorMessages
}

export interface ErrorMessages {
    name:    Error;
    company: Error;
    mail:    Error;
    message: Error;
    form:    Error;
}

export interface Error {
    required: string;
    letter:   string;
    min:      string;
    max:      string;
    invalid:  string;
    button?:  string;
}
//END CONTACT