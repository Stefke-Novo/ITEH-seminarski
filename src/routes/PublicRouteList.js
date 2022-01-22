import Home from '../components/front/Home';
import Contact from '../components/front/Contact';
import Register from '../components/front/Auth/Register';
import Login from '../components/front/Auth/Login';
import Book from '../Pages/Book';
import Collection from '../Pages/Collection/Collection';

const PublicRouteList = [
    {path:'/', exact: true, name:'Home',component:Home},
    {path:'/aboutus', exact: true, name:'AboutUs', component: AboutUs},
    {path:'/contact', exact: true, name:'Contact', component: Contact},
    {path:'/login', exact: true, name:'Login',component:Login},
    {path:'/register', exact: true, name:'Register',component:Register},
    {path:'/collections', exact: true, name:'Collection',component:Collection},
    {path:'/collections/:slug', exact: true, name:'Category',component:Category},
    {path:'/collections/:genre/:title', exact: true, name:'Book',component:Book},
];
export default PublicRouteList;