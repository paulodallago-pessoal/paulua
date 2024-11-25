import Card from "../components/Card";
import SpotifyEmbbed from "../components/SpotifyEmbbed";

const Main = () => {
  return (
    <div id="container">
      <div>
        <div id="c_hero">
          <div
            className="text-secondary px-auto text-center d-flex align-items-center text-white"
            id="hero"
          >
            <div>
              <h1 className="display-5 fw-bold">♡ Feliz aniversário ♡</h1>
              <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-1">Sobrevivemos esse ano!</p>
                <p className="fs-5 mb-4">
                  Enfim completamos dois anos juntos, e acho que nunca foi tão
                  difícil escrever uma atualização pra esse site. Muita coisa
                  mudou desde o ano passado, e parece que nada relevante
                  aconteceu. Foi um ano terrível, mas tá acabando, e nós
                  continuamos juntos. Você não desistiu de mim, e continuou
                  estando ao meu lado (a distância) mesmo comigo beirando a
                  loucura, o que tem sido bem frequente.
                  <br /> Muito obrigado por ter acreditado em mim quando eu
                  precisei.
                </p>
                <p className="fs-5 mb-5">Te amo lu ♡.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <a
                    href="#c_cards"
                    className="btn btn-outline-light btn-lg px-4"
                  >
                    Ver mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5" id="c_cards">
          <h2 className="pb-2 border-bottom text-white">
            <a
              href="#hero"
              className="carousel-control-prev-icon bg-transparent border-0"
              aria-hidden="true"
              id="btnPrev"
            ></a>
            Páginas
          </h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <Card
              address={"timeline"}
              title={"Linha do tempo"}
              description={"Alguns dos nossos melhores momentos"}
            />

            <Card
              address={"album"}
              title={"Fotos"}
              description={"Nossas fotos boas"}
            />

            <Card
              address={"arquivo"}
              title={"Arquivo"}
              description={"Conteúdos antigos"}
            />
            <SpotifyEmbbed />
          </div>
        </div>
        <footer>☾✹</footer>
      </div>
    </div>
  );
};

export default Main;
