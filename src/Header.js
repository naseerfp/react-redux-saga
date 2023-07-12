import React, {Component}  from "react";
import logo from './logo.svg';


class Header extends Component {
    
    render() {
        
        return (

            <div>
             
              

                <div className="d-flex justify-content-center">
                    <img width="100" height="100" src={logo} alt="Logo" />
                </div>
                

            </div>
        );
    }



}

export default Header;
