import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
})
export class HobbiesComponent implements OnInit {
    title = 'hobbies';
    hobbies = [
        { name: 'techno', icon: 'assets/icons/desktop_windows_white_24dp.svg' },
        { name: 'music', icon: 'assets/icons/music_note_white_24dp.svg' },
        { name: 'travel', icon: 'assets/icons/map_white_24dp.svg' },
        { name: 'coffee', icon: 'assets/icons/local_cafe_white_24dp.svg' },
        { name: 'hiking', icon: 'assets/icons/hiking_white_24dp.svg' },
        { name: 'biking', icon: 'assets/icons/directions_bike_white_24dp.svg' },
    ];

    constructor() {}

    ngOnInit(): void {}
}
