Krafthack mot kreft - Web
====

Dette prosjektet inneholder en minimal node server som server en web-app.

Kom i gang
----
1. Klon ned prosjektet ```https://github.com/Krafthack/mot-kreft-web.git```
2. Kjør [APIet](https://github.com/krafthack/mot-kreft-api.git) på ```localhost:4000``` eller sett env variabelen MOTKREFTAPI til ønsket endepunkt (f.eks [api.mot-kreft.krafthack.io](http://api.mot-kreft.krefthack.io)).
3. ```npm install```
4. Kjør web appen med ```node server```

:star: Frontend blir bygd automatisk når man kjører npm install. Ønsker du å bygge frontend direkte kan ```gulp```eller ```gulp watch``` benyttes.

:warning: Environment variabler blir satt som en del av gulp-bygget. Endrer du en variabel må altså gulp kjøres på nytt for å oppdatere verdiene.

Struktur
---
- Mappen ```gulpscripts``` inneholder byggescript, de blir orkestrert fra ```Gulpfile.js```.
- Mappen ```public``` inneholder en statisk html fil assets og bygde filer.
- Mappen ```src``` inneholder web-applikasjonen.

#### Web-applikasjonen
- ```app.js``` er startpunktet for web-applikasjonen, det er denne filen som orkestrerer det hele.
- ```config.js``` inneholder diverse konfigurasjon fra menystruktur til URL til APIet.
- ```common``` inneholder de forskjellige mithril modulene.
- ```models``` inneholder datastruktur og integrasjon mot APIet.
- ```style``` inneholder less filene.
