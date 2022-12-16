import React from "react";
export const Banner = () => {
  var BannerStyle = {
    width: "100%",
    height: "600px",
    backgroundImage:
      "url(https://sxcontent9668.azureedge.us/cms-assets/assets/SWOT_Homepage_Launch_Tile_DESKTOP_36ea0a3735.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    border: "1px solid black",
  };
  var contentStyle = {
    marginTop: "180px",
    marginLeft: "70px",
    width: "30%",
    height: "200px",
  };

  var ButtonStyle = {
    backgroundColor: "transparent",
    color: "white",
    border: " 1px solid white",
    width: "200px",
    height: "40px",
  };
  return (
    <div style={BannerStyle}>
      <div style={contentStyle}>
        <p>UPCOMING LAUNCH</p>
        <h1>NASA’S SWOT MISSION</h1>

        <button style={ButtonStyle}>Learn More</button>
      </div>
    </div>
  );
};
