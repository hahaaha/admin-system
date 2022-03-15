import { DashboardFilled, AppstoreFilled } from '@ant-design/icons';

export const sidebars = [
    {
      key: 'home',
      icon: <DashboardFilled />,
      title: '首页'
    },
    {
      key: 'components',
      title: '组件',
      icon: <AppstoreFilled />,
      children: [{
        title: 'icon',
        key: 'icon'
      },{
        title: '返回顶部',
        key: 'backTop'
      },{
        title: '富文本编辑器',
        key: 'editor'
      }]
    }
  ]