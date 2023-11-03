import React, {lazy, Suspense} from "react";

import {Outlet, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/Layout";

// @ts-ignore
const HomeRoute = lazy(() => import('./home/index.tsx'));

// @ts-ignore
const DocsRoute = lazy(() => import('./docs/index.tsx'));

export const Router: React.FC<{}> = props => {


    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>

    );
};