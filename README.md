# AngularTutorial

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Deploying to Firebase

1. Log into Firebase and go to [https://console.firebase.google.com/](https://console.firebase.google.com/).
2. Go select `Create New Project`.
3. Install Firebase CLI via NPM. Go to console and run `npm install -g firebase-tools`.
4. Once installed, run `firebase login` to login to your Firebase account.

### Setting up deployment
1. Go to the root of your Angular CLI project and run `firebase init`. This will walk you through a series of steps for setting up your app to be deployable to Firebase Hosting.
2. Select the Hosting option in the command line.
3. Select your project name that you have created earlier.
4. Use default Firebase real time database rules.
5. Choose `dist/` as the public directory instead of the default `public/` directory.
6. Select <b>yes</b> to rewrite all urls to `index.html`.
7. Select <b>no</b> to overwrite the `index.html` file.

Now you are ready to deploy your app. In the root of your app, you should have a new file `firebase.json` file created. This file lets the Firebase CLI knows how to deploy your application.

Run `firebase deploy` to deploy your app.

## Integrate Angular 2 with Polymer

Documentation: [https://vaadin.com/docs/-/part/elements/angular2-polymer/ng-cli-webpack.html](https://vaadin.com/docs/-/part/elements/angular2-polymer/ng-cli-webpack.html)

### Issues
1. Can't Use in Angular cli 22: [https://github.com/vaadin/angular2-polymer/issues/111](https://github.com/vaadin/angular2-polymer/issues/111)

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
