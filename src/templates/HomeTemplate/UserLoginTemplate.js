import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export const UserLoginTemplate = (propsRoute) => {
    let { Component, ...restRoute } = propsRoute;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider style={{ height: window.innerHeight }}>
                    sider
                </Sider>
                <Content>
                    <Component />
                </Content>
            </Layout>
            {/* <Component {...propsRoute} /> */}
        </>
    }} />
}