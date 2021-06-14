import { Component, OnInit } from '@angular/core';

export interface timelineItem {
    title: string;
    subject: string;
    dates: string;
}

export interface skillListSubcategoryItem {
    title?: string;
    items: string[];
}

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
    timelines = [
        {
            title: 'experiences',
            items: [
                {
                    title: 'European Commission',
                    subject: 'support Angular engineer',
                    dates: 'october 2020 - now',
                },
                {
                    title: 'Design is Dead',
                    subject: 'front-end developer',
                    dates: 'august 2019 - july 2020',
                },
                {
                    title: 'Single Digital Gateway Hackathon',
                    subject: 'developer',
                    dates: '30 / 31 mars 2019',
                },
                {
                    title: 'Villa botanique (Sleephere)',
                    subject: 'adjoint',
                    dates: 'january 2018 - june 2018',
                },
                {
                    title: 'MédiaMarkt',
                    subject: 'reception | checkout | customer service',
                    dates: 'september 2016 - december 2017',
                },
                {
                    title: 'LJE (Pixsay-it)',
                    subject: 'head of ICT',
                    dates: '2012 - 2013',
                },
            ],
        },
        {
            title: 'studies & trainings',
            items: [
                {
                    title: 'BeCode',
                    subject: 'junior full stack web development training',
                    dates: 'january 2019 - august 2019',
                },
                {
                    title: 'Fij',
                    subject: 'digital businesses',
                    dates: 'september 2018 - december 2018',
                },
                {
                    title: 'Ecam',
                    subject: 'industrial ing. bac.',
                    dates: '2015 - 2016',
                },
                {
                    title: 'ULB',
                    subject: 'economic sc. bac.',
                    dates: '2014 - 2015',
                },
                {
                    title: 'ULB',
                    subject: 'computing bac.',
                    dates: '2013 - 2014',
                },
            ],
        },
    ];

    skillLists = [
        {
            title: 'hard skills',
            subCategories: [
                {
                    title: 'technologies',
                    items: ['Javascript', 'HTML5', 'CSS3', 'PHP'],
                },
                {
                    title: 'Frameworks & Libraries',
                    items: ['Angular', 'Vue.js', 'React.js'],
                },
                {
                    title: 'Backend & Services',
                    items: ['Firebase', 'Node.js', 'MongoDB', 'MySQL'],
                },
                {
                    title: 'Tools',
                    items: ['Git', 'AEM'],
                },
            ],
        },
        {
            title: 'soft skills',
            subCategories: [
                {
                    items: [
                        'Cooperative',
                        'Optimistic',
                        'Patient',
                        'Honest',
                        'Receptive',
                        'Flexible',
                        'Self-motivated',
                        'Self-employed',
                    ],
                },
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
