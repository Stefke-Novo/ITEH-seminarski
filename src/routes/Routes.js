import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';

import Genre from '../components/admin/genre/Genre';
import ShowGenre from '../components/admin/genre/ShowGenre';
import EditGenre from '../components/admin/genre/EditGenre';

import Title from '../components/admin/title/Title';
import ShowTitle from '../components/admin/title/ShowTitle';
import EditTitle from '../components/admin/title/EditTitle';

const Routes = [

    //Auth Routes
    {path:'/admin', exact: true, name:'Admin'},
    {path:'/admin/dashboard', exact: true, name:'Dashboard', component: Dashboard},
    {path:'/admin/profile', exact: true, name:'Profile', component: Profile},
    //Genre Routes
    {path:'/admin/show-genre', exact: true, name:'ShowGenre', component: ShowGenre},
    {path:'/admin/edit-genre/:id', exact: true, name:'EditGenre', component: EditGenre},
    {path:'/admin/add-genre', exact: true, name:'Genre', component: Genre},
    //Title Routes
    {path:'/admin/show-title', exact: true, name:'ShowTitle', component: ShowTitle},
    {path:'/admin/edit-title/:id', exact: true, name:'EditTitle', component: EditTitle},
    {path:'/admin/add-title', exact: true, name:'Title', component: Title},

];
export default Routes;
