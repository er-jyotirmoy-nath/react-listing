import React,{Component} from 'react';
import {ButtonGroup, Button, DropdownButton, MenuItem, Collapse, Well, SplitButton, Glyphicon, Table, Checkbox, FormGroup, ControlLabel, FormControl,Modal} from 'react-bootstrap';

import Userprofile from '../admin/components/Userprofile';
import Login from './Login';
export default class Admin extends Component {

    render() {
        return (
            <Userprofile />
        );
    }
}
