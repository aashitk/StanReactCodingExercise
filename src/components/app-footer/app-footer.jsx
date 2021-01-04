import React from 'react';
import './app-footer.css';
import fb from '../../assets/social/facebook-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import ig from '../../assets/social/instagram-white.svg';
import appStore from '../../assets/store/app-store.svg';
import playStore from '../../assets/store/play-store.svg';
import winStore from '../../assets/store/windows-store.svg';
import { ROUTES } from '../../routers/routes.util';
import { useHistory } from 'react-router-dom';

const AppFooter = () => {
    const history = useHistory();
    
    return (
        <div className="app-footer">
            <div className="container-fluid d-flex align-items-center 
                justify-content-between flex-wrap"
            >
                <div className="d-flex align-items-center flex-wrap mr-2">
                    <div className="separator d-flex align-items-center">
                        <button className="btn btn-link-sm px-0"
                            onClick={() => history.push(ROUTES.HOME)}
                        >Home</button>
                    </div>
                    <div className="separator d-flex align-items-center">
                        <button className="btn btn-link-sm px-0">Terms and Conditions</button>
                    </div>
                    <div className="separator d-flex align-items-center">
                        <button className="btn btn-link-sm px-0">Privacy Policy</button>
                    </div>
                    <div className="separator d-flex align-items-center">
                        <button className="btn btn-link-sm px-0">Collection Statement</button>
                    </div>
                    <div className="separator d-flex align-items-center">
                        <button className="btn btn-link-sm px-0">Help</button>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-link-sm px-0">Manage Account</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid d-flex align-items-center 
                justify-content-between flex-wrap flex-sm-nowrap py-2"
            >
                <span className="copyright">Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</span>
            </div>

            <div className="container-fluid d-flex align-items-center 
                justify-content-between flex-wrap flex-sm-nowrap logos-container"
            >
                <div className="d-flex align-items-center flex-wrap mb-2 mr-2">
                    <img src={fb} alt="facebook" className="footer-social-logo mr-5"/>
                    <img src={twitter} alt="twitter" className="footer-social-logo mr-5"/>
                    <img src={ig} alt="instagram" className="footer-social-logo"/>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                    <img src={appStore} alt="app-store" className="footer-store-logo mb-2 mr-5"/>
                    <img src={playStore} alt="play-store" className="footer-store-logo mb-2 mr-5"/>
                    <img src={winStore} alt="windows-store" className="footer-store-logo mb-2"/>
                </div>
            </div>
        </div>
    );
}

export default AppFooter;
