import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { PoHttpRequestModule, PoModule } from "@po-ui/ng-components";

import {
	ApplicationConfig,
	importProvidersFrom,
	provideBrowserGlobalErrorListeners,
	provideZoneChangeDetection,
} from "@angular/core";

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(routes),
		importProvidersFrom(PoModule),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideHttpClient(withInterceptorsFromDi()),
	],
};
