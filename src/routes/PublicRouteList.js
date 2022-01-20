import Home from '../components/front/Home';
import About from '../components/front/About';
import Contact from '../components/front/Contact';
import Register from '../components/front/Auth/Register';
import Login from '../components/front/Auth/Login';
import ShowGenre from '../components/front/collections/ShowGenre';
import ShowTitle from '../components/front/collections/ShowTitle';
import TitleDetails from '../components/front/collections/TitleDetails';

const PublicRouteList = [
    {path:'/', exact: true, name:'Home',component:Home},
    {path:'/about', exact: true, name:'About', component: About},
    {path:'/contact', exact: true, name:'Contact', component: Contact},
    {path:'/login', exact: true, name:'Login',component:Login},
    {path:'/register', exact: true, name:'Register',component:Register},
    {path:'/collections', exact: true, name:'ShowGenre',component:ShowGenre},
    {path:'/collections/:slug', exact: true, name:'ShowTitle',component:ShowTitle},
    {path:'/collections/:genre/:title', exact: true, name:'TitleDetails',component:TitleDetails},
];
export default PublicRouteList;