import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'navbar',
    template: require('./navbarComponent.html'),
    styles: [require("./navbarComponent.scss")]
})
export class NavbarComponent {

    constructor() {
    }


}
