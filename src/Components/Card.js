import React from "react";
import './styles/card.css'
import { motion } from 'framer-motion';

export default function Card (props) {
    const trailer = (props.content.trailer) === "" ? "Yet to be released" : <p className="trailer"><a href={props.content.trailer} target="_blank" rel="noreferrer" className="trailerLink">Watch the
    Teaser Trailer here!</a></p>

    const [render, setRender] = React.useState(false);

    function handleChange() {
        setRender(prevState => !prevState);
    }

    return (
        <motion.div className="updateStyle" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.18}}>
            {!render && <motion.div 
                className="img--container" 
                whileHover={{scale: 1.05}}
                animate={{scale: 1}}
                initial={{scale: 0}}
                transition={{delay: 0.1}}
            >
                <img src={props.content.image} alt="banner" className="img" onClick={handleChange} />
                {/* <button onClick={handleChange} className="btn" >{!render ? "Read" : "Hide"}</button> */}
            </motion.div>}

            {render && <motion.div className="content"
                animate={{scale: 1}}
                initial={{scale: 0}}
                transition={{delay: 0.1}}
                onClick={handleChange}
                style={{
                    backgroundColor: 'black',
                    backgroundImage: `url(${props.content.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    color: 'white',
                    // opacity: '0.5'
                }}
            >
                <p className="description">{props.content.description}</p>
                <div className="links--section">
                    <p className="twitter">
                        <a href={props.content.twitterLink} className="twitterLink" target="_blank" rel="noreferrer">Follow Captain America on Twitter</a>
                    </p>
                    {trailer}
                </div>
            </motion.div>}
    </motion.div>
    )
}