import React from 'react';
import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import { sidebars } from './config';
import Home from './components/home';
import Editor from './components/editor'
import IconPage from './pages/icon'
import BackTopPage from './pages/backTop'
import './App.scss'

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
        <Layout className="site">
            <Sider
                width={200}
                className="site-layout-sider"
            >
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['editor']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    onSelect={menuClick}
                >
                    {setMenu()}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header 
                    className="site-layout-header" 
                    style={{ padding: 0, backgroundColor: '#fff' }}
                />
                <Content
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
    );
}

export default App;
