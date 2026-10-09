import React, { Component } from "react";

import styles from "../css/screen.module.css";

const images = {
  "Cover Flow":
    "https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-concert-music-festival-and-celebrate-image_15746657.jpg",

  Music:
    "https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg",

  Games:
    "https://img.magnific.com/free-vector/cute-astronaut-chill-relaxation-game-controller-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3717.jpg?semt=ais_hybrid&w=740&q=80",

  Settings:
    "https://media.istockphoto.com/id/1416937202/vector/settings-or-gear-icon-cog-setting-vector-illustration.jpg?s=612x612&w=0&k=20&c=3vVNW4ssuNPwKUMT5HSMEbUlknZmp5FeEBF1eZTzJYA=",

  "All Songs":
    "https://static.vecteezy.com/system/resources/thumbnails/000/435/728/small/1404.i033.096.S.m003.c10.Headphones_grunge.jpg",

  Artists:
    "https://thumbs.dreamstime.com/b/young-hip-hop-singer-stage-music-hall-rap-mic-hand-singing-popular-song-bright-blue-lights-artist-performing-live-scene-156396881.jpg",

  Albums:
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/classic-song-mixtape-album-cover-template-design-3ba3255137894fac49ae81b1346b289e_screen.jpg?ts=1635384548",
};

class Screen extends Component {
  render() {
    return (
      <div
        className={styles.screen}
        style={{
          width: this.props.showMenu ? "50%" : "100%",
        }}
      >
        <img src={images[this.props.activeMenu]} alt={this.props.activeMenu} />
      </div>
    );
  }
}

export default Screen;
