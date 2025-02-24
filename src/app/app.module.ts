import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PoModule } from "@po-ui/ng-components";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [AppComponent],
	imports: [CommonModule, BrowserModule, AppRoutingModule, PoModule],
	exports: [],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
