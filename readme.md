Krafthack mot kreft - Web
====

Dette prosjektet inneholder en minimal node server som server en web-app.

Web-appen er for nå konfigurert til å snakke med APIet som ligger på [api.mot-kreft.krafthack.it](http://api.mot-kreft.krafthack.it).

Kom i gang
----
1. Klon ned prosjektet ```https://github.com/Krafthack/mot-kreft-web.git```
2. ```npm install```
3. Kjør web appen med ```node server```

:star: Frontend blir bygd automatisk når man kjører npm install. Ønsker du å bygge frontend direkte kan ```gulp```eller ```gulp watch``` benyttes.

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
