# My config of nakarte.me with maps:
## Base layers:
* OpenStreetMap
* OpenTopoMap
* ESRI Sattelite
* Yandex Sattelite
* Google Sattelite
* Bing Sattelite
* Yandex Map
* Google Map
* Topomapper 1km (Soviet topo map)
## Overlays:
* OpenRailwayMap
* Wikimapia

# How to build and Original Readme from Wladich below
[![tests status](https://github.com/wladich/nakarte/workflows/check/badge.svg)](https://github.com/wladich/nakarte/actions?query=workflow%3Atest)

Source code of site http://nakarte.me (former http://nakarte.tk)

Install locally for development

```bash
git clone https://github.com/wladich/nakarte.git
cd nakarte
yarn
```

Create a dummy `secrets.js` file:
```bash
cp src/secrets.js.template src/secrets.js
```

Run dev server:
```bash
yarn start
```

Check code for errors:
```bash
yarn run lint
```

Some features require keys stored in src/secrets.js. 
In repository those keys are replaced with dummy ones.
    
Some of server side components:
https://github.com/wladich/westra_passes_for_nakarte
https://github.com/wladich/ElevationServer
