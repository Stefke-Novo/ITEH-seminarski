import React from 'react'
import "./Dashboard.css"
import { Link,Route,Switch } from 'react-router-dom'
import {IoAtCircleOutline,
        IoHomeOutline,
        IoPersonOutline,
        IoChatboxOutline,
        IoSettingsOutline,
        IoLockClosedOutline,
        IoLogOutOutline,
        IoEyeOutline,
        IoMenuOutline,
        IoSearchOutline,
        IoChatbubblesOutline,
        IoWalletOutline,
        IoCartOutline,
        IoArrowForwardOutline
        } from "react-icons/io5";
        import {
            Chart as ChartJS,
            RadialLinearScale,
            ArcElement,
            Tooltip,
            Legend,
          } from 'chart.js';
          import { PolarArea } from 'react-chartjs-2';
          import { VBarChart } from '../../VBarChart';
          import ShowGenre from "../Genre/Show genre/ShowGenre";
          import AddGenre from "../Genre/Add genre/AddGenre";
          import EditGenre from "../Genre/Edit genre/EditGenre";
          import ShowTitle from "../Titles/Show title/ShowTitle";
          import AddTitle from "../Titles/Add title/AddTitle";
          import EditTitle from "../Titles/Edit title/EditTitle";

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state={
            data: {
                labels: ['Music', 'Thriller', 'Historical', 'Graphic Novels', 'Fantasy', 'Art'],
                datasets: [
                  {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.5)',
                      'rgba(54, 162, 235, 0.5)',
                      'rgba(255, 206, 86, 0.5)',
                      'rgba(75, 192, 192, 0.5)',
                      'rgba(153, 102, 255, 0.5)',
                      'rgba(255, 159, 64, 0.5)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }
        }
        ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
    }
    componentDidMount(){
        document.querySelectorAll(".dashboardNavigation li").forEach((item)=>item.addEventListener('mouseover',this.activeLink));
    }
    componentDidUpdate(){
    }
    activeLink(){
        document.querySelectorAll(".dashboardNavigation li").forEach((item) => item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    navigationToggle(){
        document.querySelectorAll('.dashboardNavigation')[0].classList.toggle("active");
        document.querySelectorAll('.dashboardMain')[0].classList.toggle("active");
        document.querySelectorAll('.title1').forEach((title)=>{title.classList.toggle("active")});
    }
    render(){
    return (
        <div id='dashboard'>
            <div id='dashboardContainer'>
                <div className='dashboardNavigation'>
                    <ul>
                        <li>
                            <Link to="/admin/show-genre">
                                <span className='icon'><IoAtCircleOutline/></span>
                                <span className='title'>BestReads Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/dashboard">
                                <span className='icon'><IoHomeOutline/></span>
                                <span className='title'>Dashboard</span>
                            </Link>
                        </li> 
                        <h2 className='title1'>Genre</h2>
                        <li>
                            <Link to="/admin/show-genre">
                                <span className='icon'><IoPersonOutline/></span>
                                <span className='title'>Show genre</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/admin/add-genre">
                                <span className='icon'><IoChatboxOutline/></span>
                                <span className='title'>Add genre</span>
                            </Link>
                        </li>  
                        <h2  className='title1'>Title</h2>
                        <li>
                            <Link to="/admin/show-title">
                                <span className='icon'><IoSettingsOutline/></span>
                                <span className='title'>Show title</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/admin/add-title">
                                <span className='icon'><IoLockClosedOutline/></span>
                                <span className='title'>Add title</span>
                            </Link>
                        </li>
                        <h2 className='title1'>Home Page</h2>
                        <li>
                            <Link to="/home">
                                <span className='icon'><IoLogOutOutline/></span>
                                <span className='title'>Exit</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* main */}
            <div className='dashboardMain'>
                <div className='dashboardTopbar'>
                    <div className='dashboardToggle' onClick={this.navigationToggle}>
                        <IoMenuOutline/>
                    </div>
                    <div className='dashboardSearch'>
                        <label htmlFor="">
                            <input type="text" placeholder='Search here'/>
                            <IoSearchOutline/>
                        </label>
                    </div>
                    <div id='dashboardUser'>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                    </div>
                </div>
                <Switch>
                    <Route path="/admin/dashboard">
                        <div className='dashboardCardBox'>
                            <div className='dashboardCard'>
                                <div>
                                    <div className='dashboardNumbers'>756</div>
                                    <div className='dashboardCardName'>Daily Views</div>
                                </div>
                                <div className='dashboardIconBx'><IoEyeOutline/> </div>
                            </div>
                            <div className='dashboardCard'>
                                <div>
                                    <div className='dashboardNumbers'>83</div>
                                    <div className='dashboardCardName'>Leads</div>
                                </div>
                                <div className='dashboardIconBx'><IoArrowForwardOutline/> </div>
                            </div>
                            <div className='dashboardCard'>
                                <div>
                                    <div className='dashboardNumbers'>284</div>
                                    <div className='dashboardCardName'>Comments</div>
                                </div>
                                <div className='dashboardIconBx'><IoChatbubblesOutline/> </div>
                            </div>
                            <div className='dashboardCard'>
                                <div>
                                    <div className='dashboardNumbers'>23,579din</div>
                                    <div className='dashboardCardName'>Sponsorships</div>
                                </div>
                                <div className='dashboardIconBx'><IoWalletOutline/> </div>
                            </div>
                        </div>
                        <div className='dashboardGraphBox'>
                            <div className='dashboardBox'><PolarArea data={this.state.data} /></div>
                            <div className='dashboardBox'><VBarChart/></div>
                        </div>

                        <div className='dashboardDetails'>
                            <div className='dashboardRecentOrders'>
                                <div className='dashboardCardHeader'>
                                    <h2>Recent activity</h2>
                                    <Link to="/" className='dashboardBtn'>View all</Link>
                                </div>
                                <table >
                                    <thead>
                                        <tr>
                                        <td>Name</td>
                                        <td>Rating</td>
                                        <td>Popularity</td>
                                        <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Gone Girl</td>
                                            <td>8.4</td>
                                            <td>Medium</td>
                                            <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td>Mo Dao Zu Shi</td>
                                            <td>9.8</td>
                                            <td>High</td>
                                            <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                        </tr>
                                        <tr>
                                            <td>Sapiens</td>
                                            <td>9.3</td>
                                            <td>High</td>
                                            <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>A Game of Thrones</td>
                                            <td>9.0</td>
                                            <td>Very High</td>
                                            <td><span className='dashboardStatus dashboardInProgress'>In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <td>The Wheel of Time</td>
                                            <td>9.2</td>
                                            <td>Low</td>
                                            <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td>The Silent Patient</td>
                                            <td>9.0</td>
                                            <td>Medium</td>
                                            <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                        </tr>
                                        <tr>
                                            <td>Scar Tissue</td>
                                            <td>8.8</td>
                                            <td>High</td>
                                            <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>Uzumaki</td>
                                            <td>7.0</td>
                                            <td>Low</td>
                                            <td><span className='dashboardStatus dashboardInProgress'>In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <td>Batman: Day One</td>
                                            <td>6.3</td>
                                            <td>Medium</td>
                                            <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                        </tr>
                                        <tr>
                                            <td>The Demon Cycle</td>
                                            <td>7.8</td>
                                            <td>High</td>
                                            <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                        </tr>
                                        <tr>
                                            <td>Inside Out</td>
                                            <td>7.9</td>
                                            <td>Low</td>
                                            <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='dashboardRecentCustomers'>
                                <div className='dashboardCardHeader'>
                                    <h2>Recent visitors</h2>
                                </div>
                                <table>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Laura <br /><span>Italy</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Amal <br /><span>Turkey</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Hiruko <br /><span>Japan</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Stephanie <br /><span>France</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>David <br /><span>UK</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Marco <br /><span>Spain</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Simon <br /><span>US</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Nikola <br /><span>Serbia</span></h4></td>
                                    </tr>
                                    <tr>
                                        <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                        <td><h4>Greta <br /><span>Sweden</span></h4></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Route>
                    <Route path="/admin/show-genre">
                        <ShowGenre/>
                    </Route>
                    <Route path="/admin/add-genre">
                        <AddGenre/>
                    </Route>
                    <Route path="/admin/edit-genre/:id" component={EditGenre}/>
                    <Route path="/admin/show-title">
                        <ShowTitle/>
                    </Route>
                    <Route path="/admin/add-title">
                        <AddTitle/>
                    </Route>
                    <Route path="/admin/edit-title/:id" component={EditTitle}/>
                </Switch>
            </div> 
        </div>
    )}
}

export default Dashboard
