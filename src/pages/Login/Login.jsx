
import React from 'react';
import './Login.css';
import { ChangeView } from '../../common/ChangeView/ChangeView';

 
export const Login = () => {
     return (
         <div className='loginDesign'>soy login
            <ChangeView 
                path={"/"}
                name={"Home"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            />
         </div>
     )
}