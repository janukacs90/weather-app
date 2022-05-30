# Weather Mobile Application (iOS & Android)

version 1.0.0 v | Release Date: 31/05/2022

## Project Structure

User will be able to check 5 Day / 3 Hour Forecast. application data will be load through [openweathermap](https://openweathermap.org/forecast5)

## Technologies

* React Native
* TypeScript
* Redux and Saga (Redux tool kit)
* React Navigation

## Code Structure

```
.env                                      --------------------------------> (Secure ENV file)
.eslintrc.js
.gitignore
.prettierrc.js
.ruby-version
.vscode
   |-- settings.json
.watchmanconfig
Gemfile
__tests__
   |-- App-test.tsx
android
ios
metro.config.js
package.json
src
   |-- Main.tsx
   |-- components                         --------------------------------> (Common componets)
   |   |-- CustomButton
   |   |   |-- index.tsx
   |   |-- GeoFlatListItem
   |   |   |-- index.tsx
   |   |-- InputField
   |   |   |-- index.tsx
   |   |-- WeatherItem
   |   |   |-- index.tsx
   |   |-- index.ts
   |-- config                             --------------------------------> (Application Configurations and constant)
   |   |-- config.ts
   |   |-- constant.ts
   |-- helpers                            --------------------------------> (Application Services and helpers)
   |   |-- colors.ts
   |   |-- httpClient.ts
   |   |-- utils.ts
   |-- navigations                        --------------------------------> (Navigations)
   |   |-- AppStackNavigation.tsx         --------------------------------> (Application Inner Navigation)
   |   |-- MainNavigation.tsx             --------------------------------> (Root Navigation file)
   |-- screens                            --------------------------------> (Application Screens)
   |   |-- LocationScreen
   |   |   |-- index.tsx
   |   |-- WeatherScreen
   |   |   |-- index.tsx
   |   |-- index.ts
   |-- store                              --------------------------------> (Store and Redux related files)
   |   |-- actions                        --------------------------------> (Application Actions)
   |   |   |-- geo.actions.ts
   |   |   |-- index.ts
   |   |   |-- weather.actions.ts
   |   |-- configureStore.ts              --------------------------------> (store configuration)
   |   |-- index.ts                       --------------------------------> (Multi store configuration)
   |   |-- interfaces                     --------------------------------> (Interfaces)
   |   |   |-- app.interface.ts
   |   |   |-- geo.interface.ts
   |   |   |-- weather.interfaces.ts
   |   |-- reducers                       --------------------------------> (Reducers)
   |   |   |-- geo.reducers.ts
   |   |   |-- index.ts
   |   |   |-- weather.reducers.ts
   |   |-- sagas                          --------------------------------> (Sagas)
   |   |   |-- geo.sagas.ts
   |   |   |-- index.ts
   |   |   |-- weather.sagas.ts
tsconfig.json
yarn.lock
```

## Code Run ios

```
yarn install
npx react-native run-ios
cd ios
pod install
```

## Code Run Android

```
yarn install
npx react-native run-android
```