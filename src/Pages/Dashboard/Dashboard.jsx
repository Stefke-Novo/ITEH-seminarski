import React,{useState,useEffect} from 'react'
import "./Dashboard.css"
import { Link } from 'react-router-dom'
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
        IoCartOutline
        } from "react-icons/io5";
import { Component } from 'react/cjs/react.production.min';
class Dashboard extends Component {
    constructor(){
        super()
        this.state={
        }
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
                            <Link to="/">
                                <span className='icon'><IoHomeOutline/></span>
                                <span className='title'>Dashboard</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/">
                                <span className='icon'><IoPersonOutline/></span>
                                <span className='title'>Customers</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/">
                                <span className='icon'><IoChatboxOutline/></span>
                                <span className='title'>Help</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/">
                                <span className='icon'><IoSettingsOutline/></span>
                                <span className='title'>Settings</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/">
                                <span className='icon'><IoLockClosedOutline/></span>
                                <span className='title'>Password</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span className='icon'><IoLogOutOutline/></span>
                                <span className='title'>Sign out</span>
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
                <div className='dashboardCardBox'>
                    <div className='dashboardCard'>
                        <div>
                            <div className='dashboardNumbers'>1234</div>
                            <div className='dashboardCardName'>Daily Views</div>
                        </div>
                        <div className='dashboardIconBx'><IoEyeOutline/> </div>
                    </div>
                    <div className='dashboardCard'>
                        <div>
                            <div className='dashboardNumbers'>80</div>
                            <div className='dashboardCardName'>Sales</div>
                        </div>
                        <div className='dashboardIconBx'><IoCartOutline/> </div>
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
                            <div className='dashboardNumbers'>$7,842</div>
                            <div className='dashboardCardName'>Earning</div>
                        </div>
                        <div className='dashboardIconBx'><IoWalletOutline/> </div>
                    </div>
                </div>

                <div className='dashboardGraphBox'>
                    <div className='dashboardBox'></div>
                    <div className='dashboardBox'></div>
                </div>

                <div className='dashboardDetails'>
                    <div className='dashboardRecentOrders'>
                        <div className='dashboardCardHeader'>
                            <h2>Recent orders</h2>
                            <Link to="/" className='dashboardBtn'>View all</Link>
                        </div>
                        <table >
                            <thead>
                                <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Star Refrigerator</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Window Coolers</td>
                                    <td>$620</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                </tr>
                                <tr>
                                    <td>Speakers</td>
                                    <td>$6000</td>
                                    <td>Due</td>
                                    <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Hp Laptop</td>
                                    <td>$6000</td>
                                    <td>Due</td>
                                    <td><span className='dashboardStatus dashboardInProgress'>In Progress</span></td>
                                </tr>
                                <tr>
                                    <td>Star Refrigerator</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Window Coolers</td>
                                    <td>$620</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                </tr>
                                <tr>
                                    <td>Speakers</td>
                                    <td>$6000</td>
                                    <td>Due</td>
                                    <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Hp Laptop</td>
                                    <td>$6000</td>
                                    <td>Due</td>
                                    <td><span className='dashboardStatus dashboardInProgress'>In Progress</span></td>
                                </tr>
                                <tr>
                                    <td>Star Refrigerator</td>
                                    <td>$1200</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardDelivered'>delivered</span></td>
                                </tr>
                                <tr>
                                    <td>Window Coolers</td>
                                    <td>$620</td>
                                    <td>Paid</td>
                                    <td><span className='dashboardStatus dashboardReturn'>Return</span></td>
                                </tr>
                                <tr>
                                    <td>Speakers</td>
                                    <td>$6000</td>
                                    <td>Due</td>
                                    <td><span className='dashboardStatus dashboardPending'>Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='dashboardRecentCustomers'>
                        <div className='dashboardCardHeader'>
                            <h2>Recent customers</h2>
                        </div>
                        <table>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                            <tr>
                                <td width={"60px"}><div className='dashboardImgBx'><img src="" alt="" /></div></td>
                                <td><h4>David <br /><span>Italy</span></h4></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div> 
        </div>
    )}
}

export default Dashboard
