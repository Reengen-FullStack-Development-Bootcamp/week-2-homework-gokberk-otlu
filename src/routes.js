import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'

export const routes = [
    { path: '/', component: Home },
    { path: '/hotels/:id', name: 'HotelDetail', component: HotelDetail },
    { path: '*', redirect: '/' }
]