import React, { Component } from 'react';
import './About_page.css';
import contact from '../Images/contact.jpg';
import contact1 from '../Images/contact1.jpeg';
import contact2 from '../Images/contact2.jpeg';
import Navbar from '../Navbar/Navbar';
import FooterPage from '../Footer/Footer';

class About_page extends Component {
    render() {
        return (
            <div>
                <Navbar/>
               <div class="row" id="container">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={contact} className="contact_img7"></img>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="card7">
                    <h2><i class="fa fa-quote-right inverted_comma_icon7"></i></h2>
                    <h2 className="text10">Making Machinery</h2>
                    <h3 className="text8">World</h3>
                    <div className="paragraph7">
                    <p className="font7">Agricultural machinery is machinery used in farming or other agriculture. There are many types of such
                        equipment, from hand tools and power tools to tractors and the countless kinds of farm implements
                        that they tow or operate. Diverse arrays of equipment are used in both organic and nonorganic farming.</p></div>
                    <p className="text_align8">Jessica Moore</p>
                    <p className="text_align9">Co-Founder and Creative Director</p>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                <div class="row" id="container1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 card1" id="card7">
                <h2><i class="fa fa-quote-right inverted_comma_icon7"></i></h2>
                    <h2 className="text2">Turning a Vision into </h2>
                    <h3 className="text11">Reality</h3>
                    <div className="paragraph7">
                    <p className="font7">Agricultural machinery is machinery used in farming or other agriculture. There are many types of such
                        equipment, from hand tools and power tools to tractors and the countless kinds of farm implements
                        that they tow or operate. Diverse arrays of equipment are used in both organic and nonorganic farming.</p></div>
                    <p className="text_align8">Angela Bradshow</p>
                    <p className="text_align9">Co-Founder and Creative Director</p>
                </div>
                {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 alignment">
                        <img src={contact1} className="contact_img7"></img>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
                <div class="row" id="container2">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={contact2} className="contact_img7"></img>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="card7">
                    <h2><i class="fa fa-quote-right inverted_comma_icon7"></i></h2>
                    <h2 className="text10">A Perfectionist on</h2>
                    <h3 className="text12">Every Detail</h3>
                    <div className="paragraph7">
                    <p className="font7">Agricultural machinery is machinery used in farming or other agriculture. There are many types of such
                        equipment, from hand tools and power tools to tractors and the countless kinds of farm implements
                        that they tow or operate. Diverse arrays of equipment are used in both organic and nonorganic farming.</p></div>
                    <p className="text_align8">Jessica Moore</p>
                    <p className="text_align9">Co-Founder and Creative Director</p>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
             <FooterPage/>
            </div>
        );
    }
}

export default About_page;