import React from "react";

import Markdown from "react-markdown";
import {intro} from "./intro";
import {ImagesDoc} from "./images";
import {sources} from "./sources";


const DocsRoute: React.FC<{}> = props => {


    return (
        <div>
            <Markdown >
                {intro}
            </Markdown>
            <ImagesDoc/>
            <Markdown >
                {sources}
            </Markdown>
        </div>
    );
};

export default DocsRoute;