import React from "react";
import "../assets/style/index.css";
import { useNavigate } from "react-router-dom";
import { events } from "../utils/images";

const Timeline = () => {
  const navigate = useNavigate();

  return (
    <div id="container">
      <button className="scrollBtn">
        <a href="#scrollTarget">▼</a>
      </button>
      <section id="c_timeline">
        <button
          className="carousel-control-prev-icon bg-transparent border-0"
          aria-hidden="true"
          id="btnPrev"
          onClick={() => navigate("/")}
        />
        <div className="py-5" id="timeline">
          <div className="main-timeline-2">
            {events.map((event, index) => (
              <div
                key={index}
                id={`${event.date === "22/11/23" ? "scrollTarget" : ""}`} //última atualização
                className={`timeline-2 ${
                  index % 2 === 0 ? "right-2" : "left-2"
                }`}
              >
                <div
                  className={`cardtl ${index % 2 !== 0 ? "cardtl-left" : ""}`}
                >
                  {event.url !== undefined && (
                    <img
                      src={event.url}
                      className="card-img-top"
                      alt="Timeline Event"
                    />
                  )}
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-4">{event.date}</h4>
                    <p className="mb-0">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="bottom">
        <p className="lead text-center text-white py-10">
          Espaço reservado para uma eternidade de momentos incríveis ao teu lado
        </p>
        <footer>☾✹</footer>
        <div id="stars" />
      </div>
    </div>
  );
};

export default Timeline;
