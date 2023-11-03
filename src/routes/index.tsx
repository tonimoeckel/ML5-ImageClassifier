import React from "react";

import {HomeRoute} from "./home";
import {Outlet, Route, Routes} from "react-router-dom";
import {DocsRoute} from "./docs";
import {AppLayout} from "../components/Layout";

export const Router: React.FC<{}> = props => {
    return (
        <Routes>
            <Route
                element={
                <AppLayout>
                    <Outlet />
                </AppLayout>
                }
            >
                <Route path="/" element={<HomeRoute />}/>
                <Route path="/docs" element={<DocsRoute/>}/>
            </Route>
        </Routes>
    );
};