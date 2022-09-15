import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-address',
    template: `
        <input type="text" placeholder="Enter your address here..." #addressInput/>
        <!-- <p>Address: {{ addressInput. }}</p> -->
        `
        // ``: backticks are used for multiple text lines
})
export class AddressComponent { }
