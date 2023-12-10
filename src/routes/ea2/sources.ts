export const sources = `   
## Übersicht
Der bereitgestellte Code umfasst mehrere React-Komponenten und Funktionen, die in Kombination eine Webanwendung zur Erstellung, Training und Vorhersage mit neuronalen Netzen unter Verwendung von TensorFlow.js und Ant Design darstellen. Hauptkomponenten sind TrainingDataGenerator, FFNNModelForm und die Landingpage der Route.

#### TrainingDataGenerator
- Zweck: Generiert Trainingsdaten für das neuronale Netz.
- Wichtige Funktionen: Erzeugt eine Datensammlung für den Plot. Mit der Eingabemöglichkeit für Varianz.
- UI-Komponenten: Ein Slider zur Auswahl der Stichprobengröße und ein Input für die Rauschvarianz.
#### FFNNModelForm
- Zweck: Ermöglicht das Erstellen und Trainieren eines Feedforward-Neural-Network (FFNN) Modells.
- Hauptfunktionen: Erstellt ein neues TensorFlow-Modell basierend auf den Benutzereingaben und startet den Trainingsprozess des Modells.
- UI-Komponenten: Formularfelder zur Eingabe von Modellparametern wie Epochen, Optimierer, Lernrate und Schichten.
#### Route
- Zweck: Hauptseite der Webanwendung, auf der die anderen Komponenten verwendet werden.
- Funktionen: Kombiniert die Trainingsdaten mit den vorhergesagten Daten und zeigt sie in einem Diagramm an.
- Verwaltet die Daten für das Chart, das die originalen, Trainings- und vorhergesagten Daten zeigt.
- UI-Komponenten: Enthält TrainingDataGenerator, FFNNModelForm und Diagramme zur Visualisierung der Daten.

## Technologien und Bibliotheken
- [React](https://reactjs.org/docs/getting-started.html): Eine Bibliothek zur Erstellung von Benutzeroberflächen. 
- [TensorFlow.js](https://www.tensorflow.org/js): Eine JavaScript-Bibliothek für maschinelles Lernen. 
- [Ant Design](https://ant.design): Eine Design-Bibliothek für React, die eine Vielzahl von UI-Komponenten bietet. 

## Anwendung und Nutzung
Diese Anwendung ermöglicht es Benutzern, eigene neuronale Netzwerkmodelle zu erstellen, zu trainieren und Vorhersagen zu treffen. Die Benutzeroberfläche ist interaktiv und benutzerfreundlich, wobei Ant Design für ein ansprechendes Design sorgt. Der Schwerpunkt liegt auf der Flexibilität bei der Modellkonfiguration und der Visualisierung von Trainings- und Vorhersagedaten.

### Interaktionen mit der Anwendung:
- Generieren Sie Trainingsdaten mit dem TrainingDataGenerator.
    - Wählen Sie die Stichprobengröße und die Rauschvarianz.
- Laden von bestehenden, vortrainierten Modellen.
- Erstellen, trainieren und vorhersagen Sie ein Modell in dem sie auf den Button "Create" drücken.
    - Wählen Sie die Anzahl der Epochen, den Optimierer, die Lernrate und die Anzahl der Schichten.
- Trainingsdaten, vorhergesagte Daten und die originalen Daten werden in einem Diagramm angezeigt.

## Details zur Trainingsdatengenerierung
Tensorflow übernimmt das erstellen der Zufallswerte. Die Trainingsdaten werden mit einer Normalverteilung erzeugt. Die Varianz kann über den Slider eingestellt werden. Die Varianz wird dann als Standardabweichung verwendet. Die Trainingsdaten werden dann mit der Funktion "tf.randomNormal" erzeugt. Die Funktion erzeugt eine Tensor mit der angegebenen Form und der Standardabweichung. Die Werte werden dann in einem Array gespeichert und zurückgegeben.

## Details zur Modellerstellung
Der Nutzer kann die Anzahl der Epochen, den Optimierer, die Lernrate und die Anzahl der Schichten auswählen. Wurde ein Modell erstellt, kann nach erfolgreichen Training die Vorhersage gestartet werden. Die Vorhersage wird dann in einem Array gespeichert und zurückgegeben. Das Modell kann außerdem heruntergeladen werden.

## Overfitting und Underfitting

In der Machine Learning ist es wichtig, ein Modell zu entwickeln, das sowohl auf dem Trainingsdatensatz als auch auf neuen Daten gut funktioniert. Dies kann jedoch schwierig sein, da Modelle dazu neigen, sich an die Details des Trainingsdatensatzes anzupassen, was zu Overfitting führen kann.

### Overfitting

Overfitting tritt auf, wenn ein Modell die Details des Trainingsdatensatzes zu genau lernt und sich nicht auf die allgemeinen Muster konzentriert. Dies führt dazu, dass das Modell auf dem Trainingsdatensatz gut funktioniert, aber auf neuen Daten schlecht abschneidet.
Im Anwendung war das dann der Fall, wenn die Epochen zu hoch waren. Trainingsdaten die durch das Rauschen sich zu fällig gesammelt haben, wurden dann zu genau gelernt. 

- Gute Leistung auf dem Trainingsdatensatz
- Schlechte Leistung auf neuen Daten
- Hohe Varianz
- Hohe Fehlerrate

![Overfitting](/images/over-fit.png)

### Underfitting

Underfitting tritt auf, wenn ein Modell zu einfach ist, um die Muster im Trainingsdatensatz zu lernen. Dies führt dazu, dass das Modell auf dem Trainingsdatensatz schlecht abschneidet und auch auf neuen Daten schlecht abschneidet.
Im Der Anwendung war das dann der Fall, wenn das Rauschen zu hoch war. Das Modell konnte dann nicht mehr die Muster im Trainingsdatensatz lernen. 
Oder aber die Layer waren zu klein, sodass das Modell nicht genug Parameter hatte um die Muster zu lernen.

- Schlechte Leistung auf dem Trainingsdatensatz
- Schlechte Leistung auf neuen Daten
- Hohe Bias
- Hohe Fehlerrate

![Underfit](/images/under-fit.png)

### Best fit

Best Fit tritt auf, wenn ein Modell die Details des Trainingsdatensatzes genau genug lernt, um auf neuen Daten gut zu funktionieren.
Es stellt einen Kompromiss zwischen Overfitting und Underfitting dar.

![Bestfit](/images/best-fit.png)

`;