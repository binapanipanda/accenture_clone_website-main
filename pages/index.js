import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation'

const Home=()=>{
    const quotes = [
        "Accenture Invests in Open Cosmos to expand access to satellite data",
        "Accenture Invests in writer to accelerate enterprise use of generative AI",
        "Accenture reports fourth-quarter and strong full-Year Fiscal 2023 Reports",
      ];
      
    const [isSticky, setIsSticky] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const position = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
  
        if (position > (bodyHeight - windowHeight - 200)) {
          setLoading(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
       
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        
        <div>
                 <div className="container">


<div className="below">
  <div className="logo">
    <p>Accenture</p>
  </div>
  <div className="left">
    <ul className="nav-list">
      <li>
        <a href='#' className="shop">Insight</a>
        <div className='submenucontainer'>
          <ul id="submenu" className='submenu'>
          </ul>
        </div>
      </li>
      <li>
        <a href="#" className="shop">Services</a>
        <div className='submenucontainer'>
          <ul id="submenu" className='submenu'>

          </ul>
        </div>
      </li>
      <li>
        <a href="#" className="shop">Industries</a>
        <div className='submenucontainer'>
        </div>
      </li>
      <li>
        <a href="#" className="shop">Careers</a>

      </li>
      <li>
        <a href="#" className="shop">About Us</a>
      </li>
    </ul>
  </div>
  <div className="right">
   
  </div>
</div>

</div>








        <div className="secondr">
            <div className="secondr_r1">

                <div className="secondr_r1_c" id='image1'>
                  
                </div>
                <div  className="secondr_r1_c" id='image2'>

                </div>
                <div  className="secondr_r1_c" id='image3'>

                </div>
                <div  className="secondr_r1_c" id='image4'>

                </div>

            </div>
            <div className="secondr_r2">

                <div className="secondr_r1_c" id='image4'>
                  
                </div>
                <div  className="secondr_r1_c" id='image3'>

                </div>
                <div  className="secondr_r1_c" id='image2'>

                </div>
                <div  className="secondr_r1_c" id='image1'>

                </div>

            </div>
        </div>



        <div className="third_r2">
            <div className="text_h">
                360  VALUE
            </div>

            <div className="text">Every day, we embrace change and create 
                value for all    our stakeholders, 
                in every part of the world.</div>

                <div className="text">our stakeholders, 
                in every part of the world.</div>
        </div>
        <div className="loading-icon">
        {loading && <div className="loading-icon__fill"></div>}
      </div>
        <div className='fourth'>
       
        <div id="box1">

        </div>
        <div id="box2">
            
        </div>
        <div id="box3">
            
            </div>
        </div>

            <div className='fifth'>
                 <div id='fifth_left'>
                    <Image src='/fifth.jpg' width={500} height={500} id='fifth_image'></Image>

                </div>
                    <div className='fifth_content'>
                        <h2>OUR CULTURE</h2>
                        <p>We combine technology with human<br></br> ingenuity 
                            to solve some of the world's <br></br>biggest challenges. When you work<br></br>
                             with us, the possibilities are endless.<br></br></p>
                   </div>
            </div>
       
      
    </div>

      
    );
  };
export default Home;