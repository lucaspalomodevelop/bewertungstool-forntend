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

Jede Unterseite wird in einem Ordern angelegt, die Unterseite ist als `index.html` zu speichern und kann dann über
derem namen angesprochen werden z.B. "/home"
für die Homeseite

- assets
- home <i>-> verzwichnis für die dateien der homeseite</i> (grundaufbau)
  - index.html
  - index.css
  - index.js
- lib
  - bootstrap
  - datatables
- scripts
  - jquery.js
  - endpoint.js
- api_endpunkte.txt <i>-> dokumentation der api-schnittstellen</i>
- docker-compose.yml

## Design

Die home-Seite, dient unteranderem als designvorlage.
diese ist mit Bootstrap 5 und einer custom-css gemacht.

## Dockercompose

Die dockercompose setzt einen einfachen Apache-Webserver auf, der unter dem Port 8081 erreichbar ist.

## Homepage

Die Homepage der Applikation ist, so wie auch jede Unterseite, eine einfache, statische Website.
Hier kann der Anwender auf die einzelnen Module navigieren.

Die einzelen Module werden mit klickbaren Karten dar gestellt.

Außerdem wird hier auch ein footer und header benutzt, welche, sobald diese fertig ausgefüllt wurden, auch auf den anderen Seiten importiert werden können.

## Prüflingsauflistungs-Seite

- Alle mit dem Tool erfassten Prüflinge werden aufgelistet und können einzeln ausgewählt werden.
- Für den ausgewählten Prüfling werden Informationen angezeigt.

Prüflingsbearbeitung

- Alle mit dem Tool erfassten Prüflinge werden aufgelistet und können einzeln ausgewählt werden.
- Für den ausgewählten Prüfling werden Informationen angezeigt.
- Neben jedem Prüfling befinden sich jeweils ein Button zum Löschen und ein Button zum Bearbeiten des entsprechenden Prüflings.
- Weiter unten, unter der Auflistung an Prüflingen befindet sich ein Buttons mit denen sich Prüflinge exportieren und auch importieren lassen.

Import von Prüflingen

- Eine neue Seite öffnet sich auf der eine CSV-Datei vom System ausgewählt und hochgeladen werden kann.
- Wenn die Datei vom Tool verarbeitet wurde, wird man zurück zum Prüflingsbearbeitungsberech geleitet wo nun die neuen, importieren Prüflinge
  mit aufgelistet sind.

Export von Prüflingen

- Nach dem Klicken auf den "Prüflinge exportieren"-Button wird vom Tool eine CSV-Datei mit allen Prüflignen erstellt und diese
  wird vom Browser heruntergeladen.

## TODOs:

### TODOs Home-Seite

Die Homepage ist prinzipiell abgeschlossen. Es fehlt jedoch noch das hinterlegen der sub seiten im href Attribut der jeweiligen Karte.

Außerdem müssen die Links auf die Unterseiten auch noch in der Navbar und im Footer hinterlegt werden.

Zusätzlich fehlt im Footer noch ein informativer Text (momentan noch placeholder) und, falls gewünscht, Social Media verlinkungen in den dazu gehörigen Icons (es muss der Link in das href attribut des link `<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">` eingefügt werden, je nach dem um welches Soziale Netzwerk es sich handelt).

### TODOs Prüfungs-Seite

Prüfung HTML
noch nicht erstellt!

soll die Prüfung im Detail zeigen:
Prüfling
Prüfling-Nr.
Zeit
Ort
Ab hier DataTable
Fragen
Bewertungspunkte der Fragen
Auswertungs der Punkte

Alles auswählbar und bearbeitbar

Button zur weiterleitung an ander Seiten wie Home, Liste aller Prüfling und export.

## Entwickler:

[Lucas Palomo Lauterbach](https://github.com/lucaspalomodevelop/)

[Dennis Vollmer](https://github.com/ntaadennis)

Kevin Stapel

Hannes Ursel

Samantha Krosch
