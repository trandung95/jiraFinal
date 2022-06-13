import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export const UserLoginTemplate = (propsRoute) => {
    let { Component, ...restRoute } = propsRoute;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>
                <Sider style={{ height: window.innerHeight, backgroundImage:'url(https://picsum.photos/500)'}}>
                    <h3 className='bg-danger'>sider ở chỗ này</h3>
                </Sider>
                <Content>
                    <p className='bg-danger'>start content</p>
                    <Component />
                    <p className='bg-danger'>end content</p>
                </Content>
            </Layout>
            {/* <Component {...propsRoute} /> */}
        </>
    }} />
}