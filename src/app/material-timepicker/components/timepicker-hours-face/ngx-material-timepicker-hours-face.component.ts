import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {ClockFaceTime} from '../../models/clock-face-time.interface';

const HOURS = 12;

@Component({
    selector: 'ngx-material-timepicker-hours-face',
    templateUrl: './ngx-material-timepicker-hours-face.component.html'
})
export class NgxMaterialTimepickerHoursFaceComponent {

    hoursList: ClockFaceTime[] = [];

    @Input() selectedHour: ClockFaceTime;
    @Output() hourChange = new EventEmitter<ClockFaceTime>();
    @Output() hourSelected = new EventEmitter<null>();

    constructor() {
        const angleStep = 360 / HOURS;
        this.hoursList = Array(HOURS).fill(1).map((v, i) => {
            return {time: v + i, angle: angleStep * (v + i)};
        });
    }

    @HostListener('touchend')
    @HostListener('click')
    onClick() {
        this.hourSelected.next();
    }
}
