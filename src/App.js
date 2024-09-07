import React, { useEffect, useState } from "react";
import "./App.css";
import countdown from "./assets/svgs/countdown.svg";
import invitation from "./assets/svgs/invitacion2.png";

//Photos
import photo1 from "./assets/fotos/1.jpg";
import photo2 from "./assets/fotos/2.jpg";
import photo3 from "./assets/fotos/3.jpg";
import photo4 from "./assets/fotos/4.jpg";
import photo5 from "./assets/fotos/5.jpg";
import photo6 from "./assets/fotos/6.jpg";
import photo7 from "./assets/fotos/7.jpg";
import photo8 from "./assets/fotos/8.jpg";
import fondo from "./assets/fotos/fondo.png";

import Title from "./components/Title";

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

  const targetDate = new Date("December 07, 2024 17:00:00").getTime();
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
            //background image
            backgroundImage: "url(" + fondo + ")",
            backgroundSize: "cover",
            flexDirection: "column",
          }}
        >
          <Title
            description={
              "Tenemos el Honor de invitarlos a nuestra ceremonia religiosa en:"
            }
            footerUbicacion={"K0 Eventos 2"}
          />
          <iframe
            frameBorder={0}
            style={{ width: "100%" }}
            height="550"
            loading="lazy"
            allowFullscreen
            referrerpolicy="no-referrer-when-downgrade"
            title="mapa"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwASquGLlakbT_jhAezIJb1ZeDTu9hCtM&q=Parroquia+Niño+-+Jesus+Peñalolen+Chile&maptype=satellite&zoom=13"
          ></iframe>
          <div>
            <Title
              description={"Y despues nos transladaremos a la fiesta en:"}
              footerUbicacion2={"K0 Eventos 2"}
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4583.210900106528!2d-70.6819280447085!3d-33.665812404684274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663210c269fb48f%3A0x64782269547f5d04!2s88MF%2BM5%2C%20Buin%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e1!3m2!1ses!2snz!4v1725746133346!5m2!1ses!2snz"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <Title
            dressCode={true}
            title="Dress Code: Formal"
            description={
              "El blanco es exclusivo para la Novia, al igual que el lila para las Damas de Honor. Todos los demas colores estan disponibles. "
            }
          />
        </div>

        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <Title
            title="Regalos"
            description={
              "El mejor regalo es que compartan con nosotros en este día tan especial. Si desean contribuir de alguna otra manera, aquí una idea. "
            }
            footer={"Aporte para Luna de Miel"}
            buttonText={"Haz click aquí para los detalles"}
            onPress={() => {
              window.open(
                "https://milistadenovios.cl/lista/jesuyalvaro",
                "_blank"
              );
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
          }}
        >
          <Title
            title="Canciones que no pueden faltar"
            description={
              "Agrega a nuestra playlist de Spotify tus mejores recomendaciones"
            }
            buttonText={"Únete aquí"}
            onPress={() => {
              window.open("https://spotify.link/pJlVSjO5uDb");
            }}
            footerMusic={"Se parte de nuestra playlist"}
          />
        </div>

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
