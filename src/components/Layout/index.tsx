import React from 'react';
import {Layout, Menu, theme} from 'antd';
import {Link, useLocation} from "react-router-dom";

const { Header, Content, Footer } = Layout;


export const AppLayout: any = (props: any) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();

    return (
        <Layout>
            <Header
                style={{
                    gap: 16,
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo">
                    Image Classifier
                </div>
                <Menu
                    style={{width: 300}}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname]}
                    items={[{
                        key: '/',
                        label: <Link to={"/"}>Playground</Link>,
                    },{
                        key: '/docs',
                        label: <Link to={"/docs"}>Dokumentation</Link>,
                    }]}
                />
            </Header>
            <Content className="site-layout">

                <div style={{minHeight: "calc(100%-50px)", padding: 24, background: colorBgContainer,  }}>
                    {props.children}
                </div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Toni Möckel</Footer>
        </Layout>
    );
};