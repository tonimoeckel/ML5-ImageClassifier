import React from "react";
import {ML5ImageCard} from "../../components/ML5ImageCard";
import panda from "./../../assets/IMG_2634.jpg";
import schneeleo from "./../../assets/IMG_2681.jpg";
import arabica from "./../../assets/216602-00-GPIE.jpg"
import tiki2 from "./../../assets/IMG001.jpg"
import pizza2 from "../../assets/imagenet/n07873807_pizza.jpg";
import trici from "../../assets/imagenet/n01704323_triceratops.jpg";

export const ImagesDoc: React.FC<{  }> = props => {
    return (
        <div>


            <div className="section">
                <h2>Dokumentation der Bildklassifikation mit ml5.js</h2>
                <p>
                    Nachfolgend werden die Ergebnisse der Bildklassifikation mit ml5.js auf Basis der ImageNet-Klassen dargestellt. Die Auswertung erfolgte mittels eigener Bilder sowie Bildern aus dem ImageNet-Datensatz.
                </p>
            </div>

            <div className="section">
                <h3>1) ImageNet</h3>
                <p>
                    - Die meisten ImageNet-Bilder wurden korrekt erkannt, allerdings variierte die Genauigkeit.<br/>
                    - Die Klassifikation einer Pizza war nicht erfolgreich, obwohl diese Kategorie im trainierten Modell vorhanden ist.
                </p>

                <ML5ImageCard image={pizza2}/>
                    <div className="caption">Abbildung 1: Beispielbild aus ImageNet</div>
            </div>

            <div className="section">
                <h3>2) Gute Ergebnisse</h3>
                <p>
                    - Die Suche nach geeigneten eigenen Bildern erforderte einige Anstrengung, um gute Ergebnisse zu erzielen.<br/>
                    - Ein Blick in die Liste der vortrainierten Bilder half dabei, geeignete Kandidaten zu finden.<br/>
                    - Das beste Ergebnis wurde mit einem Bild eines Roten Pandas erzielt, das mit einer Zuversicht von 95% korrekt klassifiziert wurde.
                </p>

                <ML5ImageCard image={panda}/>
                    <div className="caption">Abbildung 2: Bild eines Roten Pandas</div>
            </div>

            <div className="section">
                <h3>3) Schlechte Ergebnisse</h3>

                <ML5ImageCard image={schneeleo}/>
                    <div className="caption">Abbildung 3: Bild eines Schneeleoparden hinter Gittern. <ul><li>Ein Bild eines Schneeleoparden hinter Gittern wurde fälschlicherweise als Labyrinth klassifiziert, vermutlich aufgrund der Gitterstruktur.<br/></li></ul></div>
                <ML5ImageCard image={arabica}/>
                        <div className="caption">Abbildung 4: Bild einer Kaffeepflanze<ul><li>
                            Eine Kaffeepflanze wurde als Tasse erkannt, was in diesem Kontext nicht zielführend ist. Die Kaffeetasse ist eine der Klassen im trainierten Modell, was die falsche Klassifikation erklärt.
                        </li></ul></div>
                <div style={{display: "flex", flexDirection: "row", gap: 16}}>
                    <ML5ImageCard image={tiki2}/>
                    <ML5ImageCard image={trici}/>
                </div>

                            <div className="caption">Abbildung 5: Bild einer Katze <ul><li>Eine Katze wurde fälschlicherweise als Triceratops identifiziert. Ein Vergleich mit dem entsprechenden ImageNet-Bild verdeutlicht die Ursache des Fehlers.</li></ul></div>
            </div>
            
        </div>
    );
};