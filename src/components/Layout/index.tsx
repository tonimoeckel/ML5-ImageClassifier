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
                    background: 'none',
                    gap: 16,
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" style={{color: 'black'}}>
                    Deep Learning
                </div>
                <Menu
                    style={{width: 300, background: 'none'}}
                    mode="horizontal"
                    defaultSelectedKeys={[location.pathname]}
                    items={[{
                        key: '/ea2',
                        label: <Link to={"/ea2"}>EA2</Link>,
                        children: [{
                            key: '/ea2/docs',
                            label: <Link to={"/ea2/docs"}>Dokumentation</Link>,
                        }]
                    }]}
                />
            </Header>
            <Content className="site-layout">

                <div style={{minHeight: "calc(100%-50px)", padding: 24, background: colorBgContainer,  }}>
                    {props.children}
                </div>

            </Content>

        </Layout>
    );
};