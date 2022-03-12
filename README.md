# react-bitcoin
Probearbeit Frontend 

Als Bewerber entwickelst du bei deiner Probearbeit eine kleine
Single-Page-Application (SPA) Demo-Anwendung. Die Architektur der Anwendung
ist dem Bewerber überlassen, ebenso die Auswahl eines geeigneten
komponentenbasierten Frameworks (z.B. Vue.js).

1. Lege eine öffentliches Github-Repository an, in welches du deine Projekt /
Änderungen hochlädst.

2. Entwerfe zunächst der Grundgerüst der Anwendung:
○ Die Anwendung benötigt eine “Startseite” (Hauptview) und ein Menü
○ Über das Menü können später weitere Views erreicht werden
○ Die Anwendung soll optisch ansprechend gestaltet werden.
○ Bootstrap oder eine andere Bibliothek für UI Elemente darf benutzt
werden

3. Die Hauptview soll als “Dashboard” den aktuellen Bitcoin-Preis in
unterschiedlichen Währungen anzeigen. Dabei ist dir die Darstellung selbst
überlassen. Angezeigt werden soll jeweils mindestens der Verkauf- und
Einkaufspreis.
○ Verwende dazu die Blockchain API: https://www.blockchain.com/de/api
○ Der GET Aufruf “https://blockchain.info/ticker” liefert dir ein passendes
JSON

4. Erstelle eine neue View “Bitcoin Details” und füge sie dem Menü hinzu. Die
View soll dem Benutzer folgende Details anzeigen:
○ Marktkapitalisierung (marketcap)
○ Anzahl aller Bitcoins im Umlauf (totalbc)
○ Anzahl der Transaktionen in den letzten 24h (24hrtransactioncount)
○ Anzahl gesendeter Bitcoin in den letzten 24h (24hrbtcsent)
○ Aktuelle Hashrate (hashrate)
○ Aktueller Schwierigkeitsgrad (getdifficulty)

5. Erstelle eine weitere View “Bitcoin Umrechner" und füge sie dem Menü hinzu.
○ Die View erlaubt eine Eingabe in EUR, USD, AUD, NZD und GBP
○ Output: Angezeigt wird der umgerechnete Betrag in BTC (Bitcoin)
○ Die Darstellung und Auswahl der “Quellwährung” ist dir überlassen
6. Erstelle eine weitere View “Bitcoin Diagramm” und füge sie dem Menü hinzu.
○ Nutze die Dokumentation unter
https://www.blockchain.com/de/api/charts_api um ein sinnvolles
Diagramm anzeigen zu können.
○ Hierzu kann eine Bibliothek wie z.B. Chart.js verwendet werden

7. Bonus: Erstelle eine letzte View “Meine Bitcoin”. Hier kann der Benutzer
seinen Bitcoin-Bestand einpflegen.
○ Der vom Nutzer hinterlegte Wert wird abgespeichert (z.B.
LocalStorage)
○ Das Dashboard wird um eine weitere Anzeige erweitert. Hier sieht er
ab sofort wie viel Bitcoin er hat und was diese aktuell in EUR Wert ist.
○ Optional soll der Benutzer gleich mehrere Bitcoin-Bestände einpflegen
können, oder sogar real existierende Wallets...

Abschluss
Schreib uns eine E-Mail in dem du den Link zum Repository mitteilst. Ist deine
Anwendung noch nicht fertig, so stelle bitte den aktuellen Stand vor und gebe einen
Ausblick.
