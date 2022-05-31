# Dokumentation - BewertungsToll-Frontend

## Anfoderungen:

Das Ziel der Anwendung ist die erleichertung der Notenübersicht für die Schriftliche und Mündliche Prüfungen der

## Techstack

- Javascritp
- CSS
- HTML
- librarys
  - Bootstrap 5
  - Jquery
  - DataTables

## endpoint.js

endpoint.js ist eine Klasse zur verwaltung der Schnitstellen um nicht immer umständliche Fetch Anfragen schreiben zu müssen und die adresse der API global festlegen zu könnnen

```js
endpoint().get("/pruefilinge", (data) => {
  console.log(data);
});
// zum holen aller Prüflinge aus der API
```

## Ordnerstruktur:

Jede Unterseite wird in einem Ordern angelegt, die Unterseite ist als `index.html`zu speichern und kann dann über
derem namen angesprochen werden z.B. "/home"
für die Homeseite

- Data
  - home
    - index.html
    - index.css
    - index.js
  - libs
    - bootstrap
    - datatables
  - scripts
    - jquery.js
    - endpoint.js

## Design

Die home-Seite, dient unteranderem als designvorlage.
diese ist mit Bootstrap 5 und einer custom-css gemacht.

## Dockercompose

Die dockercompose setzt einen einfachen Apache-Webserver auf, der unter dem Port 8081 erreichbar ist.

## Entwickler:

[Lucas Palomo Lauterbach](https://github.com/lucaspalomodevelop/)

[Dennis Vollmer](https://github.com/ntaadennis)

Kevin Stapel

Hannes Ursel

Samantha Krosch
