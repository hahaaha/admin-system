import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import MainArea from './components/mainArea/mainArea'
import HeaderArea from './headerArea/headerArea'
import { sidebars } from './config'
import './App.scss'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const App: React.FC<{}> = () => {
    const navigate = useNavigate()
    const [tabActiveKey, setTabActiveKey] = useState('home')
    const menuClick = ({ key }: { key: string }) => {
        setTabActiveKey(key)
        navigate(`/${key}`)
    }

    const setMenu = () => {
        return sidebars.map((sidebar) => {
            const { title, key, icon, children } = sidebar
            let subMenu
            if (children) {
                const menuItem = children.map((child) => {
                    const { title, key } = child
                    return (
                        <Menu.Item
                            title={title}
                            key={key}
                        >
                            {title}
                        </Menu.Item>)
                })
                subMenu = (
                    <SubMenu
                        key={key}
                        title={title}
                        icon={icon}
                    >
                        {menuItem}
                    </SubMenu>
                )
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
                    defaultSelectedKeys={['home']}
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
                >
                    <HeaderArea />
                </Header>
                <Content
                    style={{
                        margin: 0,
                        minHeight: 500,
                    }}
                >
                    <MainArea activeKey={tabActiveKey} setTabActiveKey={setTabActiveKey} />
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
