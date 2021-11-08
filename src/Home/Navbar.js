import React, { Component } from 'react'; 
import {
    Navbar,         
    NavbarBrand,
} from 'reactstrap';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar color="faded"  light expand="md">
                    <NavbarBrand href="/">FFXIV</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default SiteBar;