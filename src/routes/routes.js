import HomePage from '../pages/home-page';
import StarAndCancel from '../pages/start-cancel-page';

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true 
    },
    {
        path: '/start',
        component: StarAndCancel
    }
];

export default routes;