import { Fragment } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Style } from "./style";


export default function AboutUs(){
    return(
        <Fragment>
        <Header/>
        <Style>
            <div className="container">
                <div className="all-about">
                    <div className="right">
                        <p>Frequent questions
Paid subscriptions
Annual sale
HQ membership
Film data
Importing data
Migrating from IMDb
Account deactivation
Podcast transcripts
Letterboxd brand
Behind the scenes

</p>
<h5>Quick find…</h5>
                    </div>
                
                <div className="left">
                    <h2 className="letter">What is Letterboxd?</h2>
                    <p>
                    Letterboxd is a global social network for grass-roots film discussion and discovery. Use it as a diary to record and share your opinion about films as you watch them, or just to keep track of films you’ve seen in the past. Showcase your favorites on your profile page. Rate, review and tag films as you add them. Find and follow your friends to see what they’re enjoying. Keep a watchlist of films you’d like to see, and create lists/collections on any given topic. We’ve been described as “like GoodReads for movies”.

                       We have apps for iOS, Android and Apple TV. Paying members get an ad-free experience, personalized all-time and annual stats pages, the option to select and filter by what’s available on their favorite streaming services, watchlist notifications, the ability to filter activity streams by entry type and to clone other members’ lists, and much more. Learn about Pro.

                        Read more about the genesis of Letterboxd and follow us on Twitter, Facebook, Instagram, YouTube and TikTok.
                    </p>
                    <h2 className="boxed">Why is it called Letterboxd?</h2>
                    <p>
                    Wikipedia defines letterboxing as the practice of transferring film shot in a widescreen aspect ratio to standard-width video formats while preserving the original aspect ratio. Generally this is accomplished by adding mattes (or ‘black bars’) above and below the picture area. Letterboxd is named for our love of the widescreen format, and has nothing whatsoever to do with orienteering or that thing in Stand By Me. Here’s some history 
                    </p>
                    <h4>MEMBERSHIP</h4>
                    <h2>Do I need to create an account to use this site?</h2>
                    <p>No. You may freely browse all of Letterboxd without an account, but you’ll need to create one if you want to log any films or otherwise participate.</p>
                    <h2>
                    How do I become a member?
                    </h2>
                    <p>Create an account—there is no requirement to be invited by another member.</p>
                    <h2>Will I be paid for my reviews?</h2>
                    <p>No. We don’t offer payment for reviews, but we’re very happy for our members to build their own paying audience via services such as Patreon.</p>
                    <h4>
                    GENERAL USE
                    </h4>
                    <h2>
                    How should I use Letterboxd?
                    </h2>
                    <p>
                    Short answer: however you like. We invite new members to read our Welcome page, which covers a number of common actions and helpful tips. The easiest interaction is to mark films you’ve seen using the ‘eye’ icon on each poster. You can rate films and perform other actions from the Actions menu on the poster as well. Each film you mark as watched is added to your profile, allowing others to see what you’ve watched, and the site to optionally hide films we know you’ve seen when browsing some pages.

                      Use the ‘+ Log’ button in the website header or the ‘+’ button in our apps to log a film, including the date you watched it and an optional review. Do this as you watch films (to populate your Diary) or to share your opinion of a film you’ve seen in the past (providing a watched date is optional). When logging/reviewing a film, you can also rate and/or like it, and add tags (for the film itself or to remind you how/with whom  
                    </p>
                    <h4>
                    PROFILE AND SETTINGS
                    </h4>
                    <h2>How do I validate my email address?</h2>
                    <p>Each time you change the email address associated with your account, we send you an email containing a link, to ensure you’ve provided an address that you can receive messages to. To resend the email for a non-validated account, Save Changes on your Settings page. If you don’t receive our automated emails, please check your junk/spam folder, and try adding robot@letterboxd.com to your email contacts to increase the likelihood of receiving them.</p>
                    <h2>Can I block another member?</h2>
                    <p>
                    Yes. Use the flag icon on a member’s profile or comment to block or report them (in our apps, go to their profile screen and open the action sheet from the more-options icon). When you block a member, the follower relationship is terminated in both directions, comments they’ve posted on your reviews and lists are hidden for everyone who visits those pages, and their avatar and content (including comments they’ve posted elsewhere) is hidden for you. The blocked member is also prevented from replying to (or liking) any of your content, and you won’t see activity relating to them in your feed.

If you feel that a member’s content is generally inappropriate or otherwise contravenes our Community Policy, we encourage you to report the content via the flag icon, in addition to blocking them.

Blocking a member does not hide your content from them, as Letterboxd does not have private accounts, which would be required to protect your content in this way.
                    </p>
                    <h4>MISCELLANEOUS</h4>
                    <h2>Can I embed content from Letterboxd into my site?</h2>
                      <p>We have previously conducted a pilot program where selected partners were able to show a summary of Letterboxd activity for a film on their websites. Recent changes to browser security policy have limited our ability to customize content embeds, because we can no longer determine if the visitor to the third-party website is signed in to a Letterboxd account (required to show their rating or their friends’ activity, etc). We are not accepting new content-embed partners at this time. It’s possible we might look at embeddable reviews and/or lists in the future, but this facility is not available today.</p>
                </div>
                </div>
            </div>
        </Style>
        <Footer/>
        </Fragment>
    )
}