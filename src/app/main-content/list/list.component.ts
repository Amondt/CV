import { Component, Input, OnInit } from '@angular/core';
import { skillListSubcategoryItem } from '../main-content.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    @Input() title!: string;
    @Input() items!: skillListSubcategoryItem[];
    // @Input() items!: any;

    constructor() {}

    ngOnInit(): void {
        console.log(this.items);
    }
}
