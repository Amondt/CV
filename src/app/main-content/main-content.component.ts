import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
    timelines = [
        {
            title: 'experiences',
        },
        {
            title: 'studies & trainings',
        },
    ];

    skillLists = [
        {
            title: 'hard skills',
        },
        {
            title: 'soft skills',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
