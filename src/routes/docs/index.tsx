import React from "react";

import Markdown from "react-markdown";
import {intro} from "./intro";


export const DocsRoute: React.FC<{}> = props => {


    return (
        <div>
            <Markdown >
                {intro}
            </Markdown>
        </div>
    );
};