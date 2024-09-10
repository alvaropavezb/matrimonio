import React, { useEffect, useState } from "react";
import "./App.css";
import countdown from "./assets/svgs/countdown.svg";
import invitation from "./assets/svgs/invitacion.png";

//fotos
import photo1 from "./assets/fotos/1.jpeg";
import photo2 from "./assets/fotos/2.jpeg";
import photo3 from "./assets/fotos/3.jpeg";
import photo4 from "./assets/fotos/4.jpeg";
import photo5 from "./assets/fotos/5.jpeg";
import photo6 from "./assets/fotos/6.jpeg";
import photo7 from "./assets/fotos/7.jpeg";
import photo8 from "./assets/fotos/8.jpeg";
import photo9 from "./assets/fotos/9.jpeg";

//Audio
import ReactAudioPlayer from "react-audio-player";
import song from "./assets/songs/song.mp3";

//Photos
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
            title={
              "Tenemos el Honor de invitarlos a nuestra ceremonia religiosa en:"
            }
            description={
              "Parroquia Niño Jesús, Avenida Quilín 11300, Peñalolén"
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
              title={"y posteriormente... nos vamos a la fiesta!"}
              description={
                "Centro de eventos Colibri 88MF+M5, Buin, Región Metropolitana"
              }
              footerUbicacion2={"K0 Eventos 2"}
            />
            <iframe
              frameBorder={0}
              style={{ width: "100%" }}
              height="550"
              loading="lazy"
              allowFullscreen
              referrerpolicy="no-referrer-when-downgrade"
              title="mapa"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwASquGLlakbT_jhAezIJb1ZeDTu9hCtM&q=EventosColibri,+Buin,+Región+Metropolitana,+Chile&maptype=satellite&zoom=15"
            ></iframe>
          </div>
        </div>

        <div
          style={{
            flexDirection: "column",
          }}
        >
          <Title
            dressCode={true}
            title="Dress Code: Formal"
            description={
              "El blanco es EXCLUSIVO para la Novia, al igual que el lila para las Damas de Honor. Todos los demas colores estan disponibles. "
            }
          />
        </div>

        <div
          style={{
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Title
            title="Regalos"
            description={
              "Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros, ayudanos a construir nuestro pequeño nidito de amor."
            }
            footer={"Aporte para Luna de Miel"}
            buttonText={"Haz click aquí para los detalles"}
            onPress={() => {
              window.open(
                "https://milistadenovios.cl/enviar-regalo?id=19484",
                "_blank"
              );
            }}
          />
        </div>

        <div
          style={{
            flexDirection: "column",
          }}
        >
          <Title
            title="Por favor confirma tu asistencia!"
            description={
              "Nos gustaría verte en nuestra boda y crear juntos recuerdos inolvidables. Por favor, confirma tu asistencia con 3 semanas de  anticipación para que podamos tener todo listo!!"
            }
            buttonText={"Confirma aquí"}
            onPress={() => {
              window.open("https://forms.gle/fdgsyQyqhdqaEQfD6");
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
              "Para que bailemos hasta abajo puedes incluir las canciones que quieras en spotify y ¡ no olvides traer zapatos comodos de recambio!"
            }
            buttonText={"Únete aquí"}
            onPress={() => {
              window.open(
                "https://open.spotify.com/playlist/2LRJGLnwsIDhlFSpdadfD8?si=5wvAeF5JQiiIU1ogh1ReYw"
              );
            }}
            footerMusic={"Se parte de nuestra playlist"}
          />
        </div>

        <ReactAudioPlayer src={song} autoPlay={true} />

        <div style={{ paddingTop: "5vmin" }} class="container">
          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo2} alt="people" />
              </div>
            </div>
          </div>
          <div class="gallery-container w-6 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo1} alt="nature" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo4} alt="fitness" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-6 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo5} alt="food" />
              </div>
            </div>
          </div>

          <div class="gallery-container w-3 h-2">
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

          <div class="gallery-container w-3 h-2">
            <div class="gallery-item">
              <div class="image">
                <img src={photo8} alt="sport" />
              </div>
            </div>
          </div>
          <div class="gallery-container w-6 h-3">
            <div class="gallery-item">
              <div class="image">
                <img src={photo9} alt="sport" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
