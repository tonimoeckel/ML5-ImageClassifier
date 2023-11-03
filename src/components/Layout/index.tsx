import React from 'react';
import {Layout, Menu, theme} from 'antd';
import {Link} from "react-router-dom";

const { Header, Content, Footer } = Layout;


export const AppLayout: any = (props: any) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

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
                    defaultSelectedKeys={['home']}
                    items={[{
                        key: 'home',
                        label: <Link to={"/"}>Home</Link>,
                    },{
                        key: 'docs',
                        label: <Link to={"/docs"}>Docs</Link>,
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