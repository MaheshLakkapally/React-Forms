
import ReactDOM from 'react-dom';
import React from 'react';
import Custombutton from './Custombutton.jsx';
import CustomInput from './CustomInput.jsx';
import CustomMail from './CustomMail.jsx';
import Gender from './Gender.jsx';
import Password from './Password.jsx';
import CustomSelect from './Dropdown.jsx';
import Checkbox from './Checkbox.jsx';
import Date from './Date.jsx';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name1: "FirstName", name2: "LastName", Pswd: "Password", Gender: "Gender", mail: "Email", Dob: "Date of Birth" };

    }
    render() {
        return (
            <div id="Form">
                <img src="./src/bofa.jpg" />
                    <h1><b>BankAmericard Cash Rewards™ Credit Card</b></h1>
                <CustomInput name="FirstName"></CustomInput>&nbsp;&nbsp;
                <Password Password="Middle name"></Password>&nbsp;&nbsp;
                <CustomInput name="LastName"></CustomInput>
                <CustomSelect name="Suffix" value="Jr" value1="Sr" value2="I"/><br />
                <CustomInput name="Address1"></CustomInput><br/><br/>
                <CustomInput name="Address2"></CustomInput><br/><br/>
                <CustomInput name="City*"></CustomInput>&nbsp;&nbsp;
                <CustomInput name="State*"></CustomInput>&nbsp;&nbsp;
                <CustomInput name="Zipcode*"></CustomInput><br />
                <Checkbox t2 ="checkbox" value = "Send my statement to a different address" name = "remember"/><br/>
                <CustomInput name="Primary phone number *"></CustomInput><br/><br/>
                <CustomMail  mail="Email address *"></CustomMail><br /><br />
                <p>Are you a US citizen? *</p><Gender t2="radio" value="Yes" name="gender" />
                <Gender t2="radio" value="No :" name="gender" />
               <p>Do you have a dual citizenship? *</p><Gender t2="radio" value="Yes" name="" />
                <Gender t2="radio" value="No :" name="" />
                Please select your country of residence:<CustomSelect name="Country Of Residence" value="California" value1="Texas" value2="New York"></CustomSelect><br />
                Please enter your date of birth.<Date name="Date of birth *"></Date><br/><br/>
                Employment & finances<CustomSelect name="Employed" value="Employed" value1="Homemaker" value2="Retired" value3="Self-Employed"/><br />
                <Custombutton value="Review Your Information"></Custombutton>&nbsp;&nbsp;
                <Custombutton value="Save for Later"></Custombutton>
            </div>
        )
    }
}

module.exports = Login;