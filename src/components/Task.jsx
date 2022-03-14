import React from "react";
import { Container } from "react-bootstrap";

const Task = () => {
  return (
    <>
      <div className="main-content">
        <Container>
          <h3>Aufgabe</h3>
          <p>
            Als Bewerber entwickelst du bei deiner Probearbeit eine kleine
            Single-Page-Application (SPA) Demo-Anwendung. Die Architektur der
            Anwendung ist dem Bewerber überlassen, ebenso die Auswahl eines
            geeigneten komponentenbasierten Frameworks (z.B. Vue.js).
          </p>
          <p>
            1. Lege eine öffentliches Github-Repository an, in welches du deine
            Projekt / Änderungen hochlädst.
          </p>
          2. Entwerfe zunächst der Grundgerüst der Anwendung:
          <ul>
            <li>
              Die Anwendung benötigt eine “Startseite” (Hauptview) und ein Menü
            </li>
            <li> Über das Menü können später weitere Views erreicht werden</li>
            <li>Die Anwendung soll optisch ansprechend gestaltet werden.</li>
            <li>
              Bootstrap oder eine andere Bibliothek für UI Elemente darf benutzt
              werden.
            </li>
          </ul>
          3. Die Hauptview soll als “Dashboard” den aktuellen Bitcoin-Preis in
          unterschiedlichen Währungen anzeigen. Dabei ist dir die Darstellung
          selbst überlassen. Angezeigt werden soll jeweils mindestens der
          Verkauf- und Einkaufspreis.
          <ul>
            <li>
              Verwende dazu die Blockchain API:
              https://www.blockchain.com/de/api
            </li>
            <li>
              Der GET Aufruf “https://blockchain.info/ticker” liefert dir ein
              passendes JSON.
            </li>
          </ul>
          4. Erstelle eine neue View “Bitcoin Details” und füge sie dem Menü
          hinzu. Die View soll dem Benutzer folgende Details anzeigen:
          <ul>
            <li>Marktkapitalisierung (marketcap)</li>
            <li>Anzahl aller Bitcoins im Umlauf (totalbc)</li>
            <li>
              Anzahl der Transaktionen in den letzten 24h (24hrtransactioncount)
            </li>
            <li>Anzahl gesendeter Bitcoin in den letzten 24h (24hrbtcsent) </li>
            <li>Aktuelle Hashrate (hashrate)</li>
            <li>Aktueller Schwierigkeitsgrad (getdifficulty)</li>
          </ul>
          5. Erstelle eine weitere View “Bitcoin Umrechner" und füge sie dem
          Menü hinzu.
          <ul>
            <li>Die View erlaubt eine Eingabe in EUR, USD, AUD, NZD und GBP</li>
            <li>
              Output: Angezeigt wird der umgerechnete Betrag in BTC (Bitcoin)
            </li>
            <li>
              Die Darstellung und Auswahl der “Quellwährung” ist dir überlassen
            </li>
          </ul>
          6. Erstelle eine weitere View “Bitcoin Diagramm” und füge sie dem Menü
          hinzu.
          <ul>
            <li>
              Nutze die Dokumentation unter
              https://www.blockchain.com/de/api/charts_api um ein sinnvolles
              Diagramm anzeigen zu können.
            </li>
            <li>
              Hierzu kann eine Bibliothek wie z.B. Chart.js verwendet werden
            </li>
          </ul>
          7. Bonus: Erstelle eine letzte View “Meine Bitcoin”. Hier kann der
          Benutzer seinen Bitcoin-Bestand einpflegen.
          <ul>
            <li>
              Der vom Nutzer hinterlegte Wert wird abgespeichert (z.B.
              LocalStorage)
            </li>
            <li>
              Das Dashboard wird um eine weitere Anzeige erweitert. Hier sieht
              er ab sofort wie viel Bitcoin er hat und was diese aktuell in EUR
              Wert ist.
            </li>
            <li>
              Optional soll der Benutzer gleich mehrere Bitcoin-Bestände
              einpflegen können, oder sogar real existierende Wallets...
            </li>
          </ul>
          <p>
            Abschluss Schreib uns eine E-Mail in dem du den Link zum Repository
            mitteilst. Ist deine Anwendung noch nicht fertig, so stelle bitte
            den aktuellen Stand vor und gebe einen Ausblick.
          </p>
        </Container>
      </div>
    </>
  );
};

export default Task;
