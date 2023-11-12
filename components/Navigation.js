import React, { useState , useEffect } from "react"
const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container">


        <div className="below">
          <div className="logo">
            <p>JWELL CARE</p>
          </div>
          <div className="left">
            <ul className="nav-list">
              <li>
                <Link to="/" className="shop">Gifting</Link>
                <div className='submenucontainer'>
                  <ul id="submenu" className='submenu'>

                    <li><a href="/">Personal Gift</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Gifts for Him</a></li>
                        <li><a href='/'>Gifts for Her</a></li>
                        <li><a href='/'>Gifts for Babies</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu2" className='submenu'>
                    <li><a href="/">Festival Gifts</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>New Launches</a></li>
                        <li><a href='/'>Diwali</a></li>
                        <li><a href='/'>Rakhi</a></li>
                        <li><a href='/'>Cristmas</a></li>
                        <li><a href='/'>New Year</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu3" className='submenu'>
                    <li><a href="/">By Occasion</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Wedings</a></li>
                        <li><a href='/'>Anniversary</a></li>
                        <li><a href='/'>Birthday</a></li>
                      </ul>

                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="shop">Variety</Link>
                <div className='submenucontainer'>
                  <ul id="submenu" className='submenu'>

                    <li><a href="/">Vega</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Rings</a></li>
                        <li><a href='/'>Bangles</a></li>
                        <li><a href='/'>Earings</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu2" className='submenu'>
                    <li><a href="/">Wodden</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Rings</a></li>
                        <li><a href='/'>Set</a></li>
                        <li><a href='/'>Bangles</a></li>
                        <li><a href='/'>Chain</a></li>
                        <li><a href='/'>Bainda</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu3" className='submenu'>
                    <li><a href="/">Other</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Moorti</a></li>
                        <li><a href='/'>Purse</a></li>
                        <li><a href='/'>Nose Pin</a></li>
                      </ul>

                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="shop">Brands</Link>
                <div className='submenucontainer'>
                  <ul id="submenu" className='submenu'>

                    <li><a href="/">Nexa</a>
                    </li>
                  </ul>
                  <ul id="submenu2" className='submenu'>
                    <li><a href="/">Vega</a>
                    </li>
                  </ul>
                  <ul id="submenu3" className='submenu'>
                    <li><a href="/">Other</a>
                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="shop">Catalouge</Link>
                <div className='submenucontainer'>
                  <ul id="submenu" className='submenu'>

                    <li><a href="/">Personal Gift</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Gifts for Him</a></li>
                        <li><a href='/'>Gifts for Her</a></li>
                        <li><a href='/'>Gifts for Babies</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu2" className='submenu'>
                    <li><a href="/">Festival Gifts</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>New Launches</a></li>
                        <li><a href='/'>Diwali</a></li>
                        <li><a href='/'>Rakhi</a></li>
                        <li><a href='/'>Cristmas</a></li>
                        <li><a href='/'>New Year</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu3" className='submenu'>
                    <li><a href="/">By Occasion</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Wedings</a></li>
                        <li><a href='/'>Anniversary</a></li>
                        <li><a href='/'>Birthday</a></li>
                      </ul>

                    </li>

                  </ul>
                </div>
              </li>
              <li>
                <Link to="/" className="shop">Wedings</Link>
                <div className="submenucontainer">
                  <ul id="submenu" className='submenu'>
                    <li><a href="/">Personal Gift</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Gifts for Him</a></li>
                        <li><a href='/'>Gifts for Her</a></li>
                        <li><a href='/'>Gifts for Babies</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu2" className='submenu'>
                    <li><a href="/">Festival Gifts</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>New Launches</a></li>
                        <li><a href='/'>Diwali</a></li>
                        <li><a href='/'>Rakhi</a></li>
                        <li><a href='/'>Cristmas</a></li>
                        <li><a href='/'>New Year</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul id="submenu3" className='submenu'>
                    <li><a href="/">By Occasion</a>
                      <ul className='subsubmenu'>
                        <li><a href='/'>Wedings</a></li>
                        <li><a href='/'>Anniversary</a></li>
                        <li><a href='/'>Birthday</a></li>
                      </ul>

                    </li>

                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={search}></img>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;