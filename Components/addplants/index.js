import React, { Component } from 'react'

import './addplants.css'
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

class Addplants extends Component {
    render() {
        //let urlpath="http://www.baidu.com/img/";//Data interface from the background
         
        let list=[];
        // let result=[];
        // for(let i=0;i<result.length;i++){
        //     list.push(result[i]);
        // }

        //here are some interface show
        list.push(<div>
            <div class="box1">
                <p>
                <img  src={img1} alt="This is a img tag"/>
                where to grow lettuce
                <br/>
                
                You'll need some cloches-transparent frame that make the most of weak sunlight and the 
                plants own heat,warming the crop and its soil.A collapsible poly-tunnels is a handy
                alternative to a rigid cloche.Cloches available at our e-shop soon.
                A moist well drained fertile soil which has had plenty of compost dug in the previous.
                </p>
            <button> ADD NOW</button>
            <br/><br/>
            </div>


        <br/>
            </div>);

list.push(<div>
            <div class="box2">
            <p>
              <img  src={img2}   alt="This is a img tag"/>
              <br/>
              Onions are one of the most popular vegetables for growing in home gardens and are one of
              the first crops of spring.They can be stored over winter thus making a versatile crop.They
              are used in a huge range of culinary dishes,both raw and cooked and are quite easy to
              grow.
            </p>
            <button>ADD NOW</button>
            <br/><br/>
          </div>
          
  
          <br/>
          </div>);


list.push(<div>

<div class="box3">
<p>
  <img  src={img3}   alt="This is a img tag"/>
  How to grow your own tomatoes,A complete how to guide on growing tomatoes,including
  what are the best varieties to grow in our climate as well as when and where to grow.Also
  included is planting and transplanting,crop care,pests and diseases(including tomato
  blight and aphids),harvesting,and storage.
</p>
<button>ADD NOW</button>
<br/><br/>
</div>

<br/>
</div>);

list.push(<div>
<div class="box4">
          <p>
            <img  src={img4} alt="This is a img tag"/>
            Get the soil conditions correct and carrots are one of the easiest vegetables to grow in the 
            cooler climates.Incorrect soil conditions lead to misshapen carrots-these may well cause a 
            chuckle when dug up,but they are not so well appreciated at cooking time! Carrots are rich
            in vitamin A,calcium and trace elements and a good source of fibra.Maincrop varieties can
            be stored for up to three months making it possible to have a near year round supply. 
          </p>
          <button>ADD NOW</button>
          <br/><br/>
        </div>
        </div>)


        return (
            <div>
            <div className="P-addplants">
                
                
            </div>
            <div class="container">
            <br/>
            <h1>What are you planning to grow?</h1>


        <div class="input">
            <input type="text" name="search plants" placeholder="search plants"/>
            <input type="submit" name="submit" value="submit"/>
        </div>
        
        <button>MY PLANTS</button>
        <br/><br/>
        {list}

        </div> 
        </div>
        )
    }
}

export default Addplants