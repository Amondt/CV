import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
    name = 'Alexandre MONDT';
    employment = 'Front-end Web Developer';

    constructor() {}

    ngOnInit(): void {}
}
