import React, { Component } from 'react'

import './weather.css'


class Weather extends Component {
    render() {
        let list=[];
    
        
        list.push(
         <div class="flex-row">
             <div>
                <div class="weather sunny">
                </div>
            </div>

       <div>
           
       <div class="weather snowy">
    </div>
    
    </div>
    <div>
        <div class="weather rainy">
        </div>
        </div>
        <div>
               <div class="weather cloudy">
               </div>
            </div>
            </div>);

        return (
            <div>
            <div className="Your City's Weather">
                
            </div>
            <div className="city">
                <p>Your City's Weather</p>
        {list}

        </div> 
        </div>
        
        )
        
    }
}

export default Weather