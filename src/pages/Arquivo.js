import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/index.css";
import { useNavigate } from "react-router-dom";

const Arquivo = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "♡ Feliz mesversário ♡",
      content: (
        <>
          <p className="fs-5 mb-4 text-white text-center">
            Esse é o nosso sitezinho, espero que goste e muito obrigado por
            esses 4 meses. Você é tudo pra mim e sou infinitamente grato por
            tudo que vivemos nesses meses, desde o início da nossa amizade, as
            conversinhas na 153 e os cafézinhos do intervalo até o que ainda
            vamos viver. Espero que goste da surpresa (que eu não escondi muito
            bem) e espero que eu te faça tão feliz quanto você merece.
            <br />
            Te amo lu♡.
          </p>
        </>
      ),
    },
    {
      title: "♡ Feliz mesversário ♡",
      content: (
        <>
          <p className="fs-5 mb-4 text-white text-center">
            Parabéns pra nós pelos 9 meses juntos ♡
          </p>
          <p className="fs-5 mb-4 text-white text-center">
            Finalmente atualizei o site, como você queria, pra que você saiba o
            que você significa pra mim. Apesar de eu ter feito isso pra escrever
            esse texto, a verdade é que eu não tenho palavras pra descrever o
            carinho e a paixão que sinto quando olho pra você. Não tenho
            palavras pra descrever a alegria e a honra que foi ter passado
            momentos tão maravilhosos do teu lado. Não tenho palavras pra
            descrever o quanto você é incrível, o quanto me surpreendo com você
            e o quanto sou feliz em ter você na minha vida. Você é a pessoa mais
            inteligente, gentil, linda e talentosa nesse mundo. Luanny, você é
            quem guia as marés na minha vida, e eu quero estar contigo até o fim
            do mundo.
            <br />
            Te amo lu♡.
          </p>
        </>
      ),
    },
    {
      title: "♡ Feliz aniversário ♡",
      content: (
        <>
          <p className="fs-5 mb-1 text-center">
            Parabéns pra nós por esse ano incrível ♡
          </p>
          <p className="fs-5 mb-4 text-center">
            Enfim completamos um ano de namoro. Escrever um texto completamente
            diferente aqui seria demais da parte não-artística do casal, mas não
            posso deixar de te dizer por aqui também o quanto eu te amo. O
            quanto eu admiro você, o jeito que você me faz sentir, como você me
            acompanha em tudo, e como sua companhia faz tudo incrível. Esse site
            serviu pra registrar nossos momentos mais marcantes, mas a verdade é
            que do teu lado todo dia é maravilhoso. Todo café da tarde com
            panqueca, toda janta assistindo masterchef, todo pôr do sol, toda
            noite dormindo cedo por causa da aula, você faz todos esses momentos
            valiosíssimos. Eu nem tenho como agradecer, mas quero fazer você
            feliz pra sempre.
          </p>
          <p className="fs-5 mb-5 text-center">Te amo lu ♡.</p>
        </>
      ),
    },
  ];

  return (
    <div id="container">
      <div className="text-white" id="c_album">
        <button
          className="carousel-control-prev-icon bg-transparent border-0"
          aria-hidden="true"
          id="btnPrev"
          onClick={() => navigate("/")}
        />
        <div>
          {sections.map((section, index) => (
            <div id="c_arquivo" key={index}>
              <h1 className="display-5 fw-bold text-center text-white">
                {section.title}
              </h1>
              <div className="col-lg-6 mx-auto">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
      <footer>☾✹</footer>
    </div>
  );
};

export default Arquivo;
