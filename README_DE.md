## Public Bikes
Du hast die Aufgabe, eine Desktop-React-Anwendung zu erstellen, die alle lokalen Fahrradverleiher weltweit auf einer Weltkarte anzeigt. (siehe Bild unten)


### Aufgabe
- Deine Seite sollte ein Eingabefeld haben
- Deine Seite sollte eine `Map` mit `Markers` für jeden Fahrradverleiher anzeigen
- Deine Karte sollte ein `ZoomControl` enthalten.
- Deine Seite sollte alle Fahrradverleiher unterhalb der ``Karte`` auflisten.
- Während der Nutzer tippt, sollte deine App die Markierungen auf der Karte und die Liste der Fahrradverleiher aktualisieren.
- Wenn der Nutzer auf einen `Marker` klickt, sollten zusätzliche Informationen über den Anbieter angezeigt werden.

### Zu beachtende Punkte
- Du verwendest die [CityBikes API] (https://api.citybik.es/v2/), um alle Fahrradverleiher zu finden.
- Verwende `useEffect`, um deine states zu kontrollieren und zu ändern, sobald ein Nutzer eine Suchanfrage stellt.
- Du kannst [Pigeon Maps](https://pigeon-maps.js.org/docs/) verwenden, um deine Karte mit allen abgefragten Anbietern anzuzeigen.
- Recherchiere über ``Karte, Marker, ZoomControl, Overlay``

## Beispiel

![Öffentliche Fahrräder](images/bike_rental1.png)
![Public Bikes](images/Peek%202022-09-14%2016-10.gif)

## Bonus
- Verwende die [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) in Javascript, um deine Karte standardmäßig an deinem aktuellen Standort zu zentrieren.
