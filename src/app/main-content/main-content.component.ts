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
                    subject: '30 / 31 mars 2019',
                    dates: 'developer',
                },
                {
                    title: 'Villa botanique (Sleephere)',
                    subject: 'january 2018 - june 2018',
                    dates: 'adjoint',
                },
                {
                    title: 'MédiaMarkt',
                    subject: 'september 2016 - december 2017',
                    dates: 'reception | checkout | customer service',
                },
                {
                    title: 'LJE (Pixsay-it)',
                    subject: '2012 - 2013',
                    dates: 'head of ICT',
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
                    subject: 'september 2018 - december 2018',
                    dates: 'digital businesses',
                },
                {
                    title: 'Ecam',
                    subject: '2015 - 2016',
                    dates: 'industrial ing. bac.',
                },
                {
                    title: 'ULB',
                    subject: '2014 - 2015',
                    dates: 'economic sc. bac.',
                },
                {
                    title: 'ULB',
                    subject: '2013 - 2014',
                    dates: 'computing bac.',
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
                    title: 'Version Control',
                    items: ['Git'],
                },
                {
                    title: 'Other',
                    items: ['AEM'],
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
