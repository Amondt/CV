import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
    title = 'languages';
    languages = [
        { name: 'French', skillLevel: 6 },
        { name: 'English', skillLevel: 6 },
        { name: 'Dutch', skillLevel: 3 },
    ];
    maxNumberOfSkillBullets = new Array(6);

    constructor() {}

    ngOnInit(): void {
        console.log(this.maxNumberOfSkillBullets);
    }
}
