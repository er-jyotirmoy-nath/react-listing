import React,{Component} from 'react';
import { Link} from 'react-router';
export default class Sidebar extends Component {

    render() {
        return (
           
                <div id="sidebar-wrapper" style={{ "background": "#2196f3" }}>
                    <ul className="sidebar-nav">
                        <li className="sidebar-brand" style={{ "color": "#fff" }} >
                            <a href="#/" style={{ "color": "#fff" }} >
                                <span className="glyphicon 	glyphicon glyphicon-th-list"></span> NSF |  Listings
                                
                     </a>
                            
                        </li>
                        <li>
                            <Link to="/tmv2" activeClassName="active">NSF TMV2</Link>
                        </li>
                        <li>
                            <Link to="/tmv3" activeClassName="active">NSF TMV3</Link>
                        </li>
                        <li>
                            <Link to="/pdcert" activeClassName="active">UKAS product certification</Link>
                        </li>
                        <li>
                            <Link to="/cias" activeClassName="active">NSF CIAS</Link>
                        </li>
                        <li>
                            <Link to="/dtc" activeClassName="active">BS EN 15092</Link>
                        </li>

                        <li>
                            <Link to="/admin" activeClassName="active">Admin</Link>
                        </li>
                    </ul>
                </div>
        );
    }
}
