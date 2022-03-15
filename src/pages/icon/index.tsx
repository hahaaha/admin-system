import { Space } from 'antd'
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  } from '@ant-design/icons';
  

export default function Icon() {
    return (
        <Space>
            <HomeOutlined />
            <SettingFilled />
            <SmileOutlined />
            <SyncOutlined spin />
            <SmileOutlined rotate={180} />
            <LoadingOutlined />
        </Space>
    )
}

