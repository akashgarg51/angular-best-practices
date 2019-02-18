import { Component } from '@angular/core';

@Component({
    selector: 'error-page',
    template: `
      <h1 class="center">{{notFound404Message}}</h1>
    `,
    styles: [`
      .center {
        text-align: center;
      }
    `]
})
export class NotFound404PageComponent {
    notFound404Message = 'Page not found.';
}
