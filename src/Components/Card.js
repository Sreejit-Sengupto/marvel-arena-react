import React from "react";
import './styles/card.css'

const mountedStyle = {
    animation: "inAnimation 500ms ease-in"
};
const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards"
}
export default function Card (props) {
    const trailer = (props.content.trailer) === "" ? "Yet to be released" : <p className="trailer"><a href={props.content.trailer} target="_blank" rel="noreferrer" className="trailerLink">Watch the
    Teaser Trailer here!</a></p>

    const [isMounted, setIsMounted] = React.useState(false);
    const [render, setRender] = React.useState(false);

    function handleChange() {
        setIsMounted(prevState => !prevState);
        setRender(prevState => !prevState);
    }

    return (
        <div className="updateStyle">
            <div className="img--container">
                <img src={props.content.image} alt="captain america new world order" className="img" />
                <button onClick={handleChange} className="btn" >{!render ? "Read" : "Hide"}</button>
            </div>

            {render && <div className="content" 
                style={isMounted ? mountedStyle : unmountedStyle}
                onAnimationEnd={() => {
                  if (!isMounted) setRender(false);}}
            >
                <p>{props.content.description}</p>
                <p className="twitter">
                    <a href={props.content.twitterLink} className="twitterLink" target="_blank" rel="noreferrer">Follow Captain America on Twitter</a>
                </p>
                {trailer}
            </div>}
    </div>
    )
}