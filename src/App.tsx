import React from 'react';
import { Layout, Menu, Breadcrumb, BackTop } from 'antd';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { sidebars } from './config';
import Home from './components/home';
import Editor from './components/editor'
import IconPage from './pages/icon'
import BackTopPage from './pages/backTop'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App: React.FC<{}> = () => {
    const navigate = useNavigate();

    const menuClick = ({ key }: { key: string; }) => {
        navigate(`/${key}`)
    }

    const setMenu = () => {
        return sidebars.map((sidebar) => {
            const { title, key, icon, children } = sidebar;
            let subMenu;
            if (children) {
                const menuItem = children.map((child) => {
                    const { title, key } = child;
                    return (
                        <Menu.Item
                            title={title}
                            key={key}
                        >
                            {title}
                        </Menu.Item>)
                });
                subMenu = (
                    <SubMenu
                        key={key}
                        title={title}
                        icon={icon}
                    >
                        {menuItem}
                    </SubMenu>
                );
            } else {
                subMenu = (
                    <Menu.Item
                        title={title}
                        icon={icon}
                        key={key}
                    >{title}</Menu.Item>
                )
            }
            return subMenu
        })
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/editor">editor</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/home">nav 2</Link></Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['editor']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={menuClick}
                    >
                        {setMenu()}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 500,
                        }}
                    >
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/icon" element={<IconPage />} />
                            <Route path="/backTop" element={<BackTopPage />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
