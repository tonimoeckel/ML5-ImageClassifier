import React, {lazy, Suspense} from "react";

import {Outlet, Route, Routes} from "react-router-dom";
import {AppLayout} from "../components/Layout";
import {EA2Route} from "./ea2";
import {ImageClassifierProvider} from "../provider/MLProvider";

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
                    <Route path={"/ea1"} element={
                        <ImageClassifierProvider>
                            <Outlet/>
                        </ImageClassifierProvider>
                    }>
                            <Route path="/ea1" element={<HomeRoute />}/>
                            <Route path="/ea1/docs" element={<DocsRoute/>}/>
                    </Route>

                    <Route path="/ea2" element={<EA2Route />}/>
                </Route>
            </Routes>
        </Suspense>

    );
};