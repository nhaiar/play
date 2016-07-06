import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Portfolio Website</h1>
    <p>{{notes}}</p>`,
})
export class AppComponent {
    notes = 'Welcome to the my site!';

}