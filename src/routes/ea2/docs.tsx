import React from "react";

import Markdown from "react-markdown";
import {intro} from "./intro"
import {sources} from "./sources";


const EA2DocsRoute: React.FC<{}> = props => {


    return (
        <div>
        <Markdown >
            {sources}
        </Markdown>
        </div>
    );
};

export default EA2DocsRoute;