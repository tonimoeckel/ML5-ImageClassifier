export const sources = `   
## Technische Dokumentation

### 1) Frameworks und Libraries
Die Webanwendung basiert auf verschiedenen Frameworks und Libraries:

- **React (v18.2.0)**: Eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen, insbesondere zur Erstellung von interaktiven, state-driven Frontends.
- **Ant Design (antd, v5.10.1)**: Eine Designbibliothek, die eine Sammlung von qualitativ hochwertigen React-Komponenten bereitstellt, um eine effiziente und einfache Entwicklung von Benutzeroberflächen zu ermöglichen.
- **Chart.js (v4.4.0) und React-Chartjs-2 (v5.2.0)**: Libraries zur Visualisierung von Daten in Form von verschiedenen Diagrammen.
- **ml5 (v0.12.2)**: Eine benutzerfreundliche Bibliothek, die Zugang zu Machine-Learning-Algorithmen und -Modellen bietet, um Bildklassifikationen im Browser durchzuführen.
- **React Router DOM (v6.18.0)**: Eine Standardbibliothek für das Routing in React-Anwendungen, um die Navigation zwischen verschiedenen Ansichten zu ermöglichen.
- **React-Markdown (v9.0.0)**: Eine Bibliothek zur Darstellung von Markdown-Inhalten als React-Komponenten.

#### Technische Besonderheiten
- Die Bildklassifikation wird clientseitig im Browser mit der ml5-Bibliothek (Mobile) durchgeführt.
- Verwendung von React Router für eine Single-Page-Application (SPA) Navigation und Struktur.
- Markdown-Dokumente werden für den "Docs"-Bereich über die React-Markdown-Bibliothek gerendert.

### 2) Fachlich
Die Hauptfunktionalität der Anwendung besteht in der Möglichkeit, eigene Bilder hochzuladen und klassifizieren zu lassen. Die Implementierung der Logik umfasst folgende Punkte:

- Einrichtung einer React-Anwendung mit Routing, um zwischen dem Playground und der Dokumentationsseite zu navigieren.
- Einbindung der ml5-Bibliothek zur Klassifikation der hochgeladenen Bilder direkt im Browser.
- React Component die Bilder klassifiziert und die Ergebnisse anzeigt.
- Anzeige der Klassifikationsergebnisse und Verwendung von Chart.js, um die Klassifikationsergebnisse visuell darzustellen.
- Bereitstellung einer Sammlung von Beispielbildern, die bereits klassifiziert wurden, zur Veranschaulichung der Funktionalität.
- Verwendung von Ant Design für ein ansprechendes und benutzerfreundliches Design.

#### Quellen
- Eigene Bildersammlung
- [ImageNet](http://image-net.org/)
- [Unsplash](https://unsplash.com/)

### 3) Quellen und Anmerkungen
- Die Dokumentation und Benutzungshinweise befinden sich im Bereich "Docs" der Webanwendung.
- Alle verwendeten Bilder stammen entweder aus der eigenen Fotobibliothek, von ImageNet oder von der Fotoplattform Unsplash.
- Die Verwendung der oben aufgeführten Frameworks und Libraries wurde durch ihre Community-Support, Dokumentation und ihre Eignung für die gestellten Aufgaben motiviert.

Diese Dokumentation bietet einen Überblick über die Struktur und die verwendeten Technologien in der Webanwendung, sowie über die fachliche Umsetzung der Hauptfunktionalitäten.

`;