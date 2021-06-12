import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    title = 'contact';
    contactFields = [
        {
            name: 'birthday',
            value: '29 Septembre 1994',
            icon: 'assets/icons/cake_white_24dp.svg',
        },
        {
            name: 'mail',
            value: 'mondt.alexandre@gmail.com',
            icon: 'assets/icons/email_white_24dp.svg',
            linkType: 'mail',
        },
        {
            name: 'phone',
            value: '+32 493 56 53 85',
            icon: 'assets/icons/phone_white_24dp.svg',
            linkType: 'tel',
        },
        {
            name: 'linkedIn',
            value: 'linkedin.com/in/alexandre-mondt',
            icon: 'assets/icons/linkedin.svg',
            linkType: 'web',
        },
        {
            name: 'github',
            value: 'github.com/Amondt',
            icon: 'assets/icons/github.svg',
            linkType: 'web',
        },
        {
            name: 'website',
            value: 'amondt.github.io',
            icon: 'assets/icons/home_white_24dp.svg',
            linkType: 'web',
        },
    ];

    constructor() {}

    getLink = (linkType: string, link: string): string => {
        let finalLink = '';
        switch (linkType) {
            case 'mail':
                finalLink = `mailto:${link}`;
                break;
            case 'tel':
                finalLink = `tel:${link.replace(/ /g, '')}`;
                break;
            case 'web':
                finalLink = `https://${link}`;
                break;
        }
        return finalLink;
    };

    ngOnInit(): void {}
}
