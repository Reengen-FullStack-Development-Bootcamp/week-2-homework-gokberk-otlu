import Home from './pages/Home'
import HotelDetail from './pages/HotelDetail'
import ReservationForms from './pages/ReservationForms'
import Payment from './pages/Payment'

export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/hotels/:id', name: 'HotelDetail', component: HotelDetail },
    { path: '/reservation/:price', name: 'ReservationForms', component: ReservationForms },
    { path: '/payment/:price', name: 'Payment', component: Payment },
    { path: '*', redirect: '/' }
]