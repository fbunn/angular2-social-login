import { Component } from '@angular/core';

@Component({
  template:  `
   <!-- <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    </nav> -->
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/