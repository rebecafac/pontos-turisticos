
import { Component } from '@angular/core'

import {
    PoMenuItem,
    PoMenuModule,
    PoPageModule,
    PoToolbarModule,
} from '@po-ui/ng-components'

@Component({
    selector: 'app-root',
    imports: [PoToolbarModule, PoMenuModule, PoPageModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    readonly menus: Array<PoMenuItem> = [
        { label: 'Home', action: this.onClick.bind(this) },
    ]

    private onClick() {
        alert('Clicked in menu item')
    }
}
