import { Fragment } from "react";
import { Style } from "./style";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


export default function ContactUs(){
    return(
        <Fragment>
            <Header/>
        <Style>
            <div className="container">
                <div className="contact">
                    <div className="image">
                        <img src="https://s.ltrbxd.com/static/img/contact-poster.0d674a6b.jpg"/>
                    </div>
                    <div className="end-content">
                    <h1 className="start">Contact Letterboxd!</h1>
                    <p className="paragraph">We’d love to hear from you regarding any aspect of Letterboxd. Please check our Frequent Questions page, and if your enquiry is not answered there, send it to us by email (use the links below or click the “Help” button in the bottom right corner of this page) and general messages of delight or dismay via email or tweet.
                                           Please direct email enquiries to one of the following addresses:
               </p>
               <span>
                <a href="mailto:help@letterboxd.com">✉️ General support enquiries</a>
               </span>
               <span><a href="mailto:press@letterboxd.com">✉️ Press enquiries</a></span>
               <span><a href="mailto:sponsorship@letterboxd.com">✉️Sponsorship enquiries</a></span>
               <span><a href="mailto:ads@letterboxd.com">✉️ Advertising enquiries</a></span>
               <p className="end">To make feature requests, please use our Feedback channel. Your feature may already have been requested by another member, so check first, and add a vote or comment to their entry.</p>
               <span>
               <a class="button" data-feedback-url="/s/save-feedback-optin" href="https://letterboxd.nolt.io/">Provide Feedback</a>
               </span>
               </div>
                </div>
            </div>
        </Style>
        <Footer/>
        </Fragment>
    )

}