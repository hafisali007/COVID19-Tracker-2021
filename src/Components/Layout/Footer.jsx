import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Footer = () => {
  const [nav, showNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 200 ? showNav(true) : showNav(false);
    };
  }, []);

  const scrollUP = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div
        className={nav ? `upBtn showBotNav` : `upBtn hideBotNAv`}
        onClick={scrollUP}
      >
        <i className="fas fa-angle-up"></i>
      </div>
      <div className="footer">
        <div className="botNavbar">
          <span>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/hafisali007"
              title="My Github"
              target="_blank"
            >
              Hafis Ali
            </a>
          </span>
          <p>
            Developed using{" "}
            <a href="https://corona.lmao.ninja/" target="_blank">
              NOVELCovid/API
            </a>
          </p>
        </div>

        {/* <Navbar
          className='botNavbar'
          variant='light'
          expand='lg'
          sticky='bottom'>
          <Container>                 
            <Nav className='mr-auto justify-content-center navWidth'>          
            <Nav.Link
                href='https://github.com/hafisali007'
                target='_blank'>
               made with <i className="fas fa-heart" style={{color:'red'}} title='My Github'></i>  by Hafis Ali 
              </Nav.Link>
              <Nav.Link
                href='https://corona.lmao.ninja/'
                target='_blank'>
                <i
                  className='fas fa-code navIcons'
                  title='Data Source: NOVELCovid/API'></i>
              </Nav.Link>             
            </Nav>
          </Container>
        </Navbar> */}
      </div>
    </div>
  );
};

export default Footer;
