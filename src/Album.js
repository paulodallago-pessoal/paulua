import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { images } from "./resources/images/images";

const Album = () => {
  const navigate = useNavigate();

  return (
    <div id="container">
      <div className="text-white" id="c_album">
        <button
          className="carousel-control-prev-icon bg-transparent border-0"
          aria-hidden="true"
          id="btnPrev"
          onClick={() => navigate("/")}
        />
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light display-5">Álbum</h1>
              <p className="lead">Nossas fotos boas (e algumas nem tanto).</p>
            </div>
          </div>
        </section>
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {images.map((image, index) => {
                if (image.label != undefined) {
                  return (
                    <div key={index} className="col card-alb">
                      <div className="card shadow-sm">
                        <img src={image.url} alt={`Foto ${index + 1}`} />
                        <div className="card-body">
                          <p className="card-text">{image.label}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
