import { Routes, Route } from 'react-router-dom'
import Home from '../components/home'
import Editor from '../components/editor'
import IconPage from '../pages/icon'
import BackTopPage from '../pages/backTop'

export default function Router() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/icon" element={<IconPage />} />
            <Route path="/backTop" element={<BackTopPage />} />
        </Routes>
    )
}   