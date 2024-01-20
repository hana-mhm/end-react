import { Style } from "./style";

export default function Footer (){

    return(
        <Style> 
        <div className="footer">
           <div className="container">
            <div className="footer-menu">
                <ul className="flex gap-25">
                    <li><a href="/about">About</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Pro</a></li>
                    <li><a href="#">App</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li className=" flex gap ">
                    <li><a href="#"><i className="fa-brands fa-x"/></a></li>
                    
                    <li><a href="#"><i className="fa-brands fa-facebook"/></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"/></a></li>
                    <li><a href="#"><i className="fa-brands fa-tiktok"/></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube"/></a></li>
                    </li>
                </ul>
                <p> Letterboxd Limited. Made by fans in Aotearoa New Zealand. Film data from TMDb. Mobile site.</p>
            </div>
           </div>
        </div>

        </Style>
    );
}