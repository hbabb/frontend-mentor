import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const root = document.documentElement;
const baseSize = getComputedStyle(root).fontSize;
root.style.setProperty('--base-font-size', baseSize);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
