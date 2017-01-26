import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar',
    template: require('./navbarComponent.html'),
    styles: [require("./navbarComponent.scss")]
})
export class NavbarComponent {
    @Input() isLoggedIn: boolean = false;
    @Input() isStudent: boolean = false;
    @Input() isCompany: boolean = false;

    @Output() logout = new EventEmitter;

    constructor() {
    }

    ngOnInit() {

    }

    logOutUser() {
        this.logout.emit();
    }
}
