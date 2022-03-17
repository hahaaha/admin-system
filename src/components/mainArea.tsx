import { Tabs } from 'antd'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Router from '../router'


const { TabPane } = Tabs


const MainArea: React.FC<{ activeKey: string, setTabActiveKey: (activeKey: string) => void }> = (props) => {
    const navigate = useNavigate()
    const [tabPane, setTabPane] = useState([{ title: '首页', key: 'home', closable: false }])
    const { activeKey, setTabActiveKey } = props

    const onChange = (activeKey: string) => {
        setTabActiveKey(activeKey)
        navigate(`/${activeKey}`)
    }

    const onEdit = (targetKey: any, action: any) => {
        if (action === 'remove') {
            remove(targetKey)
        }
    }

    useEffect(() => {
        add(activeKey)
    }, [activeKey])

    const add = (targetKey: string) => {
        if (tabPane.every(pane => pane.key !== targetKey)) {
            const newTabPane = tabPane.concat({ title: targetKey, key: targetKey, closable: true })
            setTabPane(newTabPane)
        }
        setTabActiveKey(targetKey)
    }

    const remove = (targetKey: string) => {
        // 如果只剩下一个tab就不删除
        if (!tabPane.length) return
        let lastIndex = 0
        const removedPane = tabPane.filter((pane, i) => {
            const { key } = pane
            if (key === targetKey)
                // 记录最后一个tab的索引
                lastIndex = i - 1
            return key !== targetKey
        })
        if (removedPane.length && activeKey === targetKey) {
            lastIndex = lastIndex >= 0 ? lastIndex : 0
            setTabActiveKey(removedPane[lastIndex].key)
        }
        setTabPane(removedPane)
    }
    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            hideAdd
        >
            {tabPane.map((pane) => (
                <TabPane
                    tab={pane.title}
                    key={pane.key}
                    closable={pane.closable}>
                    <Router />
                </TabPane>
            ))}
        </Tabs>
    )
}

export default MainArea