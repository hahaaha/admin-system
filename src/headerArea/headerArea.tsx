import { Avatar } from 'antd'
import './index.scss'
const HeaderArea = () => {
    return (
        <div className="header-area">
            <div className='header-area-name'>
                admin-system
            </div>
            <div></div>
            <div className='header-area-avatar'>
                <Avatar />
            </div>
        </div>
    )
}

export default HeaderArea