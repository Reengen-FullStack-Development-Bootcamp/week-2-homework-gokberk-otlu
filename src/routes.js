import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'
import ReservationForms from './pages/ReservationForms'

export const routes = [
    { path: '/', component: Home },
    { path: '/hotels/:id', name: 'HotelDetail', component: HotelDetail },
    { path: '/reservation', name: 'ReservationForms', component: ReservationForms },
    { path: '*', redirect: '/' }
]