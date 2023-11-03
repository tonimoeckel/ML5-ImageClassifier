import React from "react";

import Markdown from "react-markdown";
import {intro} from "./intro";


const DocsRoute: React.FC<{}> = props => {


    return (
        <div>
            <Markdown >
                {intro}
            </Markdown>
        </div>
    );
};

export default DocsRoute;