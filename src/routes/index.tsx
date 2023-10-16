import Route from "../components/Route";
import {HomeRoute} from "./home";

export const Router: React.FC<{}> = props => {
    return (
        <>
            <Route path="/">
                <HomeRoute />
            </Route>
            <Route path="/docs">
                Docs
            </Route>
        </>
    );
};