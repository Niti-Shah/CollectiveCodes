import React from 'react'
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton  className="swipeButtons__repeat">
            <ReplayIcon fontSize="large" style={{fill: 'rgb(226, 195, 58)'}}/>
            </IconButton>
            <IconButton  className="swipeButtons__left">
            <CloseIcon fontSize="large" style={{fill: 'rgb(226, 116, 208)'}}/>
            </IconButton>
            <IconButton  className="swipeButtons__star">
            <StarRateIcon fontSize="large" style={{fill: 'rgb(100, 177, 228)'}}/>
            </IconButton>
            <IconButton  className="swipeButtons__right">
            <FavoriteIcon fontSize="large" style={{fill: 'rgb(60, 235, 133)'}}/>
            </IconButton>
            <IconButton  className="swipeButtons__lightning">
            <FlashOnIcon fontSize="large" style={{fill: 'rgb(186, 116, 226)'}} />
            </IconButton>
        </div>
    )
}

export default SwipeButtons

