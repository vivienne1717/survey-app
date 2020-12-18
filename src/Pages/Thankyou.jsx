import React from "react";

import {  Icon } from 'antd';
import Cookies from 'universal-cookie';

export default class Thankyou extends React.Component {
    
    componentWillMount(){
        const cookies = new Cookies();
      //  cookies.remove('survey1', { path: '/' });
       // cookies.remove('survey2', { path: '/' });
       // cookies.remove('survey2a', { path: '/' });
      //  cookies.remove('survey3', { path: '/' });
    }
    render() {
        return (

            <div>
                <div style={{marginTop:200}}>
                <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" style={{fontSize:'90px'}}/>
                
                    <div style={{fontSize:'30px',marginTop:10}}>
                        Thank you for your participation. 
                        <p style = {{fontSize:'30px', fontWeight:'bold'}}>
                             Please enter SUCOM5 + last four characters of your worker ID as your completion code in MTurk.
                            </p>
                        <p style = {{fontSize:'25px'}}>E.g., if your work ID is "A0123456789XYZ", then your completion code is "SUCOM59XYZ". </p>
                    </div>
                
                </div>
            </div>


        );
    }
}
