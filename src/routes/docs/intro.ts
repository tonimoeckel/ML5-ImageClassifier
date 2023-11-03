export const intro = `
# Dokumentation zu ml5.js

ml5.js ist eine benutzerfreundliche Bibliothek, die auf TensorFlow.js aufbaut und den Zugang zu verschiedenen Machine Learning- und Deep Learning-Algorithmen direkt im Browser ermöglicht. Die Bibliothek ist darauf ausgerichtet, Machine Learning für eine breite Palette von Entwicklern zugänglich zu machen, insbesondere für diejenigen, die in der JavaScript-Community aktiv sind.

## Stärken und Schwächen von ml5.js

### Stärken:

- **Benutzerfreundlichkeit**: ml5.js erleichtert den Zugang zu vielen vortrainierten Machine Learning-Algorithmen im Browser, sodass es für verschiedene Zwecke wie die Erkennung von menschlicher Körpersprache und Tonhöhe, das Anpassen von Bildern, das Generieren von Texten, das Finden von Sprachbeziehungen in Englisch und das Komponieren von Musikstücken verwendet werden kann ([LogRocket](https://blog.logrocket.com/best-javascript-machine-learning-libraries-in-2021)).
- **Integration mit TensorFlow.js**: ml5.js ist über TensorFlow.js aufgebaut und nutzt die Funktionalität von TensorFlow.js im Backend, was das Leben für Personen erleichtert, die neu im Bereich des maschinellen Lernens sind ([Towards Data Science](https://towardsdatascience.com/introduction-to-ml5-js-efb6fdf8636f)).

### Schwächen:

- **Bildgrößenprobleme**: Die Notwendigkeit, Bilder auf eine bestimmte Größe zu skalieren, kann zu Problemen bei der Bildklassifikation führen ([Stack Overflow](https://stackoverflow.com/questions/67513441/failure-to-use-ml5-js-image-classification-model)).
- **Unzureichende Klassifikationsleistung**: Einige Benutzer berichten von unzureichender Bildklassifikationsleistung und unklaren Fehlermeldungen ([GitHub](https://github.com/ml5js/ml5-library/issues/262)) ([Github](https://github.com/ml5js/ml5-library/issues?q=is%3Aissue+is%3Aopen+label%3Aimage-classification)).

## Empfehlung für das Testen von Bildern

Die Art der Bilder, die für Tests verwendet werden sollten, hängt vom spezifischen Modell und den Daten ab, auf denen es trainiert wurde. Es könnte sinnvoll sein, Bilder zu testen, die repräsentativ für die Daten sind, mit denen das Modell trainiert wurde, und die Bildklassifikation unter verschiedenen Bedingungen zu testen, um ein besseres Verständnis für die Modellleistung zu erhalten.

Für spezifischere Informationen über die Trainingsdaten der vorab trainierten Modelle in ml5.js wird empfohlen, die offizielle Dokumentation von ml5.js oder die Community-Ressourcen zu konsultieren.

    `;