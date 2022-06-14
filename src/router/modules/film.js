import Film from '@/views/film/Film'
import NowPlaying from '@/views/film/NowPlaying'
import ComingSoon from '@/views/film/ComingSoon'
const routes = [{
    path: '/film',
    component: Film,
    redirect: '/film/NowPlaying',
    children: [{
        path: 'NowPlaying',
        component: NowPlaying
    }, {
        path: 'ComingSoon',
        component: ComingSoon
    }]
}]
export default routes