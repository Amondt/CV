import { Component, Input, OnInit } from '@angular/core';
import { timelineItem } from '../main-content.component';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
    @Input() title!: string;
    @Input() items!: timelineItem[];

    constructor() {}

    ngOnInit(): void {}
}
