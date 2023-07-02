import React, { useEffect, useState } from "react";
import "./App.css";
import countdown from "./assets/svgs/countdown.svg";
import invitation from "./assets/svgs/invitacion.png";
import regalos from "./assets/svgs/regalos.svg";
import spotify from "./assets/svgs/spotify.svg";
import ubicacion from "./assets/svgs/ubicacion.svg";

//Photos
import photo1 from "./assets/photos/1.JPG";
import photo2 from "./assets/photos/2.jpg";
import photo3 from "./assets/photos/3.jpg";
import photo4 from "./assets/photos/4.JPG";
import photo5 from "./assets/photos/5.jpg";
import photo6 from "./assets/photos/6.JPG";
import photo7 from "./assets/photos/7.JPG";
import photo8 from "./assets/photos/8.jpg";

import { ElfsightWidget } from "react-elfsight-widget";

const App = () => {
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // La fecha objetivo ya ha pasado
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const targetDate = new Date("November 24, 2023 18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/*   <div>
          <img src={topleft} className="App-logo" alt="logo" />
          <img src={toprigth} className="App-logo-right" alt="logo" />
        </div>

        <div>
          <img src={nombres} className="Nombres" alt="logo" />
        </div>
        <img src={estamos} className="Estamos" alt="logo" />
        <img src={footer} className="Footer" alt="logo" />
        <img src={footerleft} className="FooterLeft" alt="logo" />
        <img src={footerr} className="FooterRight" alt="logo" />
 */}
        <img src={invitation} className="App-logo" alt="logo" />
        <div
          style={{
            paddingBottom: "5vmin",
            background: "#F2AAA8",
            alignItems: "center",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            style={{ width: "85%" }}
            src={countdown}
            className="Countdown"
            alt="logo"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "#F2AAA8",
              alignSelf: "center",
              padding: 5,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 20px",
                color: "#7e6449",
                fontWeight: 300,
              }}
            >
              <span>{timeLeft.days}</span>
              <span>días</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 10px",
                color: "#7e6449",
                fontWeight: 300,
              }}
            >
              <span>{timeLeft.hours}</span>
              <span>horas</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 10px",
                color: "#7e6449",
                fontWeight: 300,
              }}
            >
              <span>{timeLeft.minutes}</span>
              <span>minutos</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0 10px",
                color: "#7e6449",
                fontWeight: 300,
              }}
            >
              <span>{timeLeft.seconds}</span>
              <span>segundos</span>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingLeft: "25vmin",
            paddingRight: "25vmin",
          }}
        >
          <div
            style={{
              background: "#F2AAA8",
              height: 0.4,
              width: "100%",
              alignSelf: "center",
            }}
          ></div>
        </div>
        <div
          style={{
            alignContent: "center",
            alignItems: "center",
            paddingTop: "5vmin",
            paddingBottom: "5vmin",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              marginBottom: "5vmin",
              width: "90%",
              margin: "0 auto",
              marginTop: "-5vmin",
            }}
            src={ubicacion}
            className="App-logo"
            alt="logo"
          />
        </div>
        <iframe
          frameBorder={0}
          style={{
            marginRight: "2vmin",
            marginLeft: "2vmin",
            border: "2px solid white",
            marginTop: "-20vmin",
          }}
          height="550"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          title="mapa"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwASquGLlakbT_jhAezIJb1ZeDTu9hCtM&q=Ko+Eventos+-+Camino+Al+Volcán,+El+Manzano,+San+Jose+de+Maipo,+Chile&maptype=satellite&zoom=13"
        ></iframe>
        <div
          onClick={() => {
            window.open(
              "https://milistadenovios.cl/lista/jesuyalvaro",
              "_blank"
            );
          }}
          style={{
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            display: "flex",
            cursor: "pointer",

            paddingBottom: "20px",
          }}
        >
          <img
            style={{
              alignSelf: "center",
              width: "100%",
              margin: "0 auto",
            }}
            src={regalos}
            className="App-logo"
            alt="logo"
          />
        </div>
        <ElfsightWidget
          style={{ backgroundColor: "white", paddingBottom: 20 }}
          widgetId="e2b22dfa-3014-4286-b1c7-6bddb5d4823f"
        />
        <img
          style={{
            alignSelf: "center",
            width: "100%",
            margin: "0 auto",
          }}
          src={spotify}
          className="App-logo"
          alt="logo"
          onClick={() => {
            window.open(
              "https://open.spotify.com/playlist/3g90UpMfBU2AnmuzzOZwFp?si=BkdmXw5RQiOij8L1X_X1IA&pt=c0d10d45647b03f994980edc7ab90ecb"
            );
          }}
        />
        <iframe
          style={{
            paddingLeft: "2vmin",
            paddingRight: "2vmin",
            marginTop: "-15vmin",

            backgroundColor: "white",
          }}
          src="https://open.spotify.com/embed/playlist/3g90UpMfBU2AnmuzzOZwFp?utm_source=generator"
          width="100%"
          height="200"
          frameBorder="0"
          title="spotify"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div style={{ paddingTop: "5vmin" }} class="container">
          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo1} alt="nature" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo2} alt="people" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-2 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo4} alt="fitness" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-4 h-1">
            <div class="gallery-item">
              <div class="image">
                <img src={photo5} alt="food" />
              </div>
            </div>
          </div>

          <div class="gallery-container">
            <div class="gallery-item">
              <div class="image">
                <img src={photo6} alt="travel" />
              </div>
            </div>
          </div>
          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo7} alt="art" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo3} alt="sport" />
              </div>
            </div>
          </div>
          <div class="gallery-container w-3 h-1">
            <div class="gallery-item">
              <div class="image">
                <img src={photo8} alt="sport" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
