Thema: Regression Lernen mit feed-forward Neural Network (FFNN) als Model und mit TensorFlow.js  (TFJS) als Framework/API.

Bearbeitungszeit: 12--15 Stunden, je nach Vorkenntnissen und Erfahrung.

Voraussetzungen: Kapitel 1--13 bis einschließlich IDA -- Input Daten.

Kompetenzerwerb/Lernziele: Nach der Bearbeitung der Aufgabe sollten Sie: 

-   Verstehen, wie ein neuronales Netz eine Funktion approximiert.
-   Ein normales Netz anhand von Daten an lernen können.

Vorbereitung: Verschaffen Sie sich einen Überblick über das [TensorFlow.js Framework](https://www.tensorflow.org/js). Vollziehen Sie das ["Making predictions from 2d data" Tutorial](https://www.tensorflow.org/js/tutorials/training/linear_regression) nach.

Aufgabenstellung:  

Nutzen Sie ein feed-forward neural Network (FFNN) zur Regression der reellwertigen Funktion:  y(x) = (x+0.8)*(x-0.2)*(x-0.3)*(x-0.6) im Wertebereich [-1,+1]. 

Zum Erzeugen der Trainingsdaten samplen Sie N zufällige, gleich-verteilte x Werte (mit N= 5, 10, 20, 50, 100) aus dem Intervall [-1,+1]  und berechnen dazu y(x).

Dann verrauschen Sie die Trainingsdaten künstlich. Dazu addieren Sie zu y(x) normal-verteiles Rauchen (Gaussian Noise) mit einer Varianz von entweder 0.1 oder 0.3. (Kein Rauschen und keine Normalverteilung für die x-Werte.)

Experimente und Fragestellungen: 

Stellen Sie die Größe des Netzwerkes und die Anzahl N der Trainingsdaten so ein, dass Sie die Phänomene Under-Fitting und Over-Fitting simulieren können. 

Experimentieren Sie mit den unterschiedlichen Trainingsdaten, der Netzwerkarchitektur und den Parametern der Neuronen und des Lernalgorithmus:

-   Anzahl der hidden Layer und Neuron pro Layer
-   Aktivierungsfunktionen (ReLU, etc.)
-   Lernrate und Optimizer 
-   Anzahl der Trainings Epochs

Was ist das beste Ergebnis, das Sie erzielen können?  Dokumentieren und begründen Sie Ihre Parameter und Einstellungen. Erklären Sie in diesem Zusammenhang die Begriffe Bias und Variance. 

Resultate und Diskussion: Stellen Sie auf einer separaten HTML-Seite Ihre Experimente mit den zugehörigen Resultaten übersichtlich dar und diskutieren Sie diese (was hat funktioniert, was nicht und warum wohl).

Hinweise:  Schauen Sie sich die Funktion, die gelernt werden soll als Graph an, z. B. bei https://www.mathsisfun.com/data/function-grapher.php

Als Objektivfunktion/Loss verwenden Sie den MSE. Input- und Output-Neuronen sollten linear sein, als Activation-Function nutzen Sie also "none" (y=x). Oder versuchen Sie mit ReLU als Activation-Function (statt im Input und Output None). 

Wenn Sie die Daten normalisieren, denn müssen Sie das immer machen: beim Training und auch bei der Prediction. Wenn die Daten nicht normalisiert sind, muss die Range der Output-Activation-Function dazu passen (diese darf also z. B. nicht [0,1] sein).

Versuchen Sie es zunächst ohne das Rauchen. Dann testen Sie das Rauschen, siehe:

https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve

Oder auch (mit Bezug zum Zentralen Grenzwertsatz):

https://riptutorial.com/javascript/example/8330/random--with-gaussian-distribution

https://de.wikipedia.org/wiki/Zentraler_Grenzwertsatz

Interaktion: In Ihrer Applikation sollte es möglich sein, ein Modell neue zu trainieren und ein von Ihnen vor-trainiertes Modell zu testen, dazu sollte es möglich sein:

-   Einen Trainingsdatensatz auszuwählen.
-   Parameter für ein Modell einzustellen, basierend auf drei Parametersätzen (Under-Fitting, Over-Fitting, Best-Fit) und dieses zu trainieren. 
-   Ein vor-trainiertes Modell zu laden (nicht unbedingt mit Upload Dialog, es reichen Buttons zu Auswahl).
-   Ein Modell zu testen.

Visualisierung: Visualisieren Sie die Vorhersagen innerhalb eines Plots. Sie können, dazu außer der API von TF, z.B. folgende Bibliotheken nutzen: [Plotly](https://plotly.com/javascript/), [D3](https://d3js.org/).

Fehlerbehandlung, Test und QA: Prüfen Sie alle Eingaben auf korrektes Format.

Anwendung und Abgabe: Sie erstellen eine Web-Anwendung und darin verlinkte HTML-Seiten für die Dokumentation Ihre Ergebnisse und stellen diese auf einem öffentlichen Web-Server bereit, siehe Kursplan.

Dokumentation: Nutzen Sie eine separate HTML-Seite, die über ein Link/Button von Ihrer Anwendung aus erreichbar ist, zur Dokumentation Ihrer Resultate.

1) Interaktion: Listen Sie die möglichen Interaktionen mit den zugehörigen Tasten auf der HTML-Seite auf.

2) Technisch: Listen Sie alle verwendeten Frameworks auf und erklären Sie kurz (1--3 Sätze) wozu Sie diese verwenden. Dokumentieren Sie technische Besonderheiten Ihrer Lösung.

3) Fachlich: Erläutern Sie Ihre Implementierung der Logik und alles, was für ihre Lösung wichtig ist (Ansatz, Resultate, Quellen, etc.)

4) Quellen: Dokumentieren Sie Ihre Quellen, Benutzungshinweise und Anmerkungen (falls notwendig).

Schreiben Sie bitte nichts in die Moodle Abgabe-Felder.

User Experience (UX):  Beachten Sie die Human/Mensch-Computer-Interaktion (HCI) Kriterien beim Interaktionsdesign: [ISO 9241-11 Anforderungen an die Gebrauchstauglichkeit](https://de.wikipedia.org/wiki/ISO_9241#ISO_9241-11_Gebrauchstauglichkeit:_Begriffe_und_Konzepte) und [ISO 9241-110 Interaktionsprinzipien](https://de.wikipedia.org/wiki/ISO_9241#ISO_9241-110_Interaktionsprinzipien). Ihre Anwendung sollte funktional (Aufgabenangemessenheit) und benutzerfreundlich (Usability) und mit angemessenem Feedback und einer [kontextsensitive] Hilfe ausgestattet sein.

Gestaltung: Achten Sie auf eine sinnvolle Semantik bei der Farbgestaltung und ein übersichtliches Layout. Siehe dazu: [material.io - Design Guidance and Code](https://material.io/)

Daten: Keine.

Hintergrundwissen: Keines.

Coding: siehe Vorbereitung und <https://js.tensorflow.org/api/latest/>

[](https://examples.ml5js.org/)

Arbeitsumgebung: JS-, HTML-IDE (z. B. Atom, WebStorm, Visual Studio Code), [local] Web-Server.

Testumgebung: Chrome [unter macOS].

Bewertungskriterien und Punkte: 

Bewertet werden Logik, User Experience (UX) und Gestaltung:

1.  Funktionsfähigkeit und Vollständigkeit der Anwendung entsprechend der Aufgabenstellung (5 Punkte)

2.  Korrekte Verarbeitung der Daten (5 Punkte)
3.  Experimente, Resultate und Diskussion (5 Punkte)
4.  Dokumentation, technisch und fachlich (5 Punkte)
5.  User Experience (UX) und User Interaktion (HCI, Interaktionsdesign, Dialoggestaltung, Usability, Hilfe) (5 Punkte)

6.  Gestaltung und Visualisierung (Farben, Formen, Screen-Layout, Text, Semantik) (5 Punkte)

Gesamtpunktzahl: 30 Punkte