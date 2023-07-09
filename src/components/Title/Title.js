import React from "react";
import Music from "../../assets/svgs/Music.svg";
import Music1 from "../../assets/svgs/Music1.svg";
import Regalo from "../../assets/svgs/Regalo.svg";
import Regalo1 from "../../assets/svgs/Regalo1.svg";
import logo from "../../assets/svgs/logoko.png";

const Title = ({
  title,
  subtitulo,
  description,
  footer,
  footerMusic,
  footerUbicacion,
  buttonText,
  onPress,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        textAlign: "center",
        paddingBottom: "5vmin",
        paddingTop: "3vmin",
        paddingRight: "8vmin",
        paddingLeft: "8vmin",
      }}
    >
      <h1
        style={{
          color: "#BF6A66",
          fontSize: "6vmin",
        }}
      >
        {title}
      </h1>
      <h2 style={{ color: "#7E6449", fontSize: "4vmin" }}>{subtitulo}</h2>
      {footerUbicacion && (
        <div>
          <img
            src={logo}
            className="App-logo"
            alt="Regalo"
            style={{
              width: 70,
              height: 70,

              left: 10,
              marginTop: "1vmin",
            }}
          />
        </div>
      )}
      <h1
        style={{
          color: "#7E6449",
          fontSize: "4vmin",
          fontWeight: "lighter",
        }}
      >
        {description}
      </h1>
      {footer && (
        <div>
          <img
            src={Regalo}
            className="App-logo"
            alt="Regalo"
            style={{
              width: 100,
              height: 100,
              position: "absolute",
              right: 10,
              marginTop: "-2vmin",
            }}
          />
          <img
            src={Regalo1}
            className="App-logo"
            alt="Regalo"
            style={{
              width: 70,
              height: 70,
              position: "absolute",
              left: 10,
              marginTop: "1vmin",
            }}
          />
          <h2
            style={{
              color: "#7E6449",
              fontSize: "4vmin",
              paddingBottom: "6vmin",
              paddingTop: "6vmin",
            }}
          >
            {footer}
          </h2>
        </div>
      )}
      {footerMusic && (
        <div>
          <img
            src={Music1}
            className="App-logo"
            alt="Regalo"
            style={{
              width: 70,
              height: 70,
              position: "absolute",
              right: 10,
              marginTop: "2vmin",
            }}
          />
          <img
            src={Music}
            className="App-logo"
            alt="Regalo"
            style={{
              width: 70,
              height: 70,
              position: "absolute",
              left: 10,
              marginTop: "1vmin",
            }}
          />
          <h2
            style={{
              color: "#7E6449",
              fontSize: "4vmin",
              paddingBottom: "6vmin",
              paddingTop: "6vmin",
            }}
          >
            {footerMusic}
          </h2>
        </div>
      )}

      {buttonText && (
        <button
          onClick={onPress}
          style={{
            backgroundColor: "#F2AAA8",
            color: "white",
            fontSize: "4vmin",
            padding: "3vmin",
            borderRadius: "10vmin",
            border: "none",
            marginTop: "2vmin",
            width: "90%",
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Title;
