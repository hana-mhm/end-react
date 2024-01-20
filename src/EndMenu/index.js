import { Style } from "./style";

export default function EndMenu(){
    return(
        <Style> 
         <div className="container">
            <div className="endmenu">
                <h1 className="recent">RECENT SHOWDOWNS</h1>
                <h1 className="enemore">MORE</h1>
            </div>
           <div className="end-image">
            <div className="first-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/uc/5y/kp/tw/bridesmaids-620-620-348-348-crop-fill.jpg?k=3ed0900e4a"/>
            <h2 className="flight">Flight Plan</h2>
            <p className="best">Best films to watch on a plane</p>
            </div>
            <div className="second-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/mb/3s/em/4y/beguiled-620-620-348-348-crop-fill.jpg?k=cd566a41c6"/>
            <h2 className="flight">No Reservations</h2>
            <p className="best">Best meal scenes in film</p>
            </div>
            <div className="third-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/tx/w8/ui/ml/leave-her-to-heaven-620-620-348-348-crop-fill.jpg?k=c9cce6fb6d"/>
            <h2 className="flight">Fatal Attraction</h2>
            <p className="best">Best femmes fatale in film</p>
            </div>
           </div>
           <div className="endmenu">
                <h1 className="recent">RECENT NEWS</h1>
                <h1 className="enemore">MORE</h1>
            </div>
           <div className="end-image">
            <div className="first-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/o5/ok/u9/oz/header-620-620-348-348-crop-fill.jpg?k=c75734d5fa"/>
            <h2 className="flight">Sins of Omission</h2>
            <p className="best">Killers of the Flower Moon author David Grann reveals more to the story.</p>
            </div>
            <div className="second-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/h0/oe/na/km/chantal-620-620-348-348-crop-fill.jpg?k=59ab719895"/>
            <h2 className="flight">Japanuary Giallo and Little Darlings</h2>
            <p className="best">Katie Rife picks our January restoration, repertory and re-release highlights.</p>
            </div>
            <div className="third-image">
            <img src="https://a.ltrbxd.com/resized/sm/upload/2y/aa/i5/h2/2023-news-620-620-348-348-crop-fill.jpg?k=6b10dfaf40"/>
            <h2 className="flight">2023 Year in Review</h2>
            <p className="best">All the winners, highlights, trends and themes, new categories and people behind our annual retrospective.</p>
            </div>
           </div>
           </div>
        </Style>
    )
   
}