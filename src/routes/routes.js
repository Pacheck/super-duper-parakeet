import HomePage from '../pages/home-page';
import StarAndCancel from '../pages/start-cancel-page';
import QuestionPage from '../pages/question-page';
import ScorePage from '../pages/score-page';

const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true 
    },
    {
        path: '/start',
        component: StarAndCancel
    },
    {
        path: '/question',
        component: QuestionPage
    },
    {
        path: '/score',
        component: ScorePage
    }
];

export default routes;