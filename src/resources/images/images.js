//o q tem label aparece no album, oq tem description aparece na timeline

const images = [
  {
    date: "10/09/22",
    label: "10/09/22 - Gare",
    description:
      "Evento da Drum na Gare com exposição de arte e depois cafézinho no Bella. Nesse dia criamos o grupo dos gays e eu carreguei a sacola com a garrrafa de vinho com as duas mãos. Ótimo dia apesar do breve trauma.",
    url: require("../images/10.09.22.jpg"),
  },
  {
    date: "27/09/22",
    label: "27/09/22 - Porto Alegre",
    description:
      "Viagem pra museu da PUC em Porto Alegre. O dia em que eu te apresentei Matt Maltese, você sonhou comigo, conversamos e nos conhecemos muito, jogamos uno e ficamos de mãos dadas de noite. O dia em que tive certeza que eu gosto de você.",
    url: require("../images/27.09.22.jpg"),
  },
  {
    date: "01/10/22",
    description:
      "Nós dois bebemos, cada um em sua respectiva casa, e entrando no assunto das nossas vidas amorosas, eu tive coragem de me confessar. Você não acha tanto, mas esse dia foi muito importante pra mim.",
    url: require("../images/01.10.22.jpg"),
  },
  {
    date: "08/10/22",
    label: "08/10/22 - Maroca",
    description:
      "O inesquecível dia do maroca. Quando eu tive a honra de perder meu bv com você e pela primeira de muitas vezes, passamos o rolê do fofoquinha grudadinhos.",
    url: require("../images/08.10.22.jfif"),
  },
  {
    date: "18/10/22",
    label: "Sua casa",
    description:
      "Eu cheguei e saí da sua casa nos horários exatos pra sua mãe não me ver e assistimos a Sociedade do Anel.",
    url: require("../images/18.10.22.jfif"),
  },
  {
    date: "22/10/22",
    label: "22/10/22 - Batatas",
    url: require("../images/22.10.22.jfif"),
  },
  {
    date: "22/10/22",
    label: "22/10/22 - Batatas",
    url: require("../images/22.10.22-1.jfif"),
  },
  {
    date: "22/10/22",
    label: "22/10/22 - Batatas",
    url: require("../images/22.10.22-2.jfif"),
    description:
      "O dia em que conheci sua familia. Sua mãe me encontrou na sala, sem aviso prévio, e fomos no Batatas com o Luan e Felipe. Ficamos muito agarradinhos.",
  },
  {
    date: "23/10/22",
    description:
      "Nos encontramos na avenida, demos uma caminhadinha e pegamos aqueles dois adesivos do Lula, coincidentemente esperando por nós naquele muro aleatório.",
    url: require("../images/23.10.22.jfif"),
  },
  {
    date: "24/10/22",
    description:
      "Fui na sua casa de tarde montar o pc do Luan, demorou mais do que o esperado e dormimos juntos pela primeira vez (e durou menos que o esperado).",
  },
  {
    date: "28/10/22",
    label: "28/10/22 - Casa da Gaby",
    description:
      "Halloween na casa da Gabrielly. Nos fantasiamos muito bem, bebemos e passamos a noite agarradinhos.",
    url: require("../images/28.10.22.jfif"),
  },
  {
    date: "04/11/22",
    label: "04/11/22 - IF",
    url: require("../images/04.11.22.jfif"),
  },
  {
    date: "07/11/22",
    label: "07/11/22 - Sua casa",
    description:
      "Você tirou meu V card. Não preciso dizer mais nada, olha pra minha cara ali em cima. :)",
    url: require("../images/07.11.22.jfif"),
  },
  {
    date: "14/11/22",
    label: "14/11/22 - Minha casa",
    url: require("../images/14.11.22.jfif"),
  },
  {
    date: "15/11/22",
    label: "15/11/22 - Sua casa",
    url: require("../images/15.11.22.jfif"),
  },
  {
    date: "21/11/22",
    description:
      "Parte 1 do nosso início de namoro. Via zap decidimos que estávamos namorando.",
  },
  {
    date: "22/11/22",
    description:
      "Parte 2 e início oficial do namoro. Agora pessoalmente, tocamos no assunto e decidimos oficializar.",
  },
  {
    date: "27/11/22",
    label: "27/11/22 - Sua casa",
    url: require("../images/27.11.22.jfif"),
  },
  {
    date: "27/11/22",
    label: "27/11/22 - Sua casa",
    url: require("../images/27.11.22-1.jfif"),
  },
  {
    date: "03/12/22",
    label: "03/12/22 - Sua casa",
    url: require("../images/03.12.22.jfif"),
  },
  {
    date: "04/12/22",
    label: "04/12/22 - Sua casa",
    url: require("../images/04.12.22.jfif"),
  },
  {
    date: "07/12/22",
    label: "07/12/22 - Gare",
    url: require("../images/07.12.22.jfif"),
  },
  {
    date: "11/12/22",
    label: "11/12/22 - Toca do ratão",
    url: require("../images/11.12.22.jfif"),
  },
  {
    date: "11/12/22",
    description:
      "Nossa primeira Toca do ratão. Bebemos um pouquinho, passamos muito calor e nos divertimos muito na gare.",
    url: require("../images/11.12.22-1.jfif"),
  },
  {
    date: "14/12/22",
    description:
      "Incidente do mullet. Foi bom enquanto durou. Quando acabou foi terrível, mas você estava lá pra me consolar.",
    url: require("../images/14.12.22.jfif"),
  },
  {
    date: "16/12/22",
    description:
      "Último dia antes de você ir pra Santa Maria. Te levei chocolatinho e presentinho de niver. Começamos a usar nossas pulseirinhas.",
    url: require("../images/16.12.22.jfif"),
  },
  {
    date: "30/12/22",
    label: "30/12/22 - Sua casa",
    url: require("../images/30.12.22.jfif"),
  },
  {
    date: "09/01/23",
    label: "09/01/23 - Sua casa",
    url: require("../images/09.01.23.jfif"),
  },
  {
    date: "09/01/23",
    label: "09/01/23 - Sua casa",
    url: require("../images/09.01.23-1.jfif"),
  },
  {
    date: "18/01/23",
    description:
      "Último dia que passamos juntos antes de você ir pro Rio. Andamos muito, passeamos com as cachorras e nos preparamos ao webnamoro.",
  },
  {
    date: "20/01/23",
    label: "20/01/23 - Praia",
    url: require("../images/20.01.23.jfif"),
  },
  {
    date: "17/02/23",
    description:
      "Você voltou do Rio, fomos na janta do fofoquinha e depois para a praia.",
  },
  {
    date: "18/02/23",
    url: require("../images/18.02.23.jfif"),
    description:
      "Mais ou menos descansados, fomos pra Guarda e fizemos aquela trilha incrível.",
  },
  {
    date: "19/02/23",
    url: require("../images/19.02.23.jfif"),
    description: "Comemos churrasquinho, bebemos chopp e fomos para a praia.",
  },
  {
    date: "20/02/23",
    url: require("../images/20.02.23-1.jfif"),
    description:
      "Fomos para a Guarda de novo, comemos camarão, passeamos nas lojinhas e compramos mais pulseirinhas.",
  },
  {
    date: "20/02/23",
    label: "20/02/23 - Praia",
    url: require("../images/20.02.23.jfif"),
  },
  {
    date: "21/02/23",
    description: "Voltamos da praia.",
  },
  {
    date: "10/03/23",
    label: "10/03/23 - Não-me-toque",
    url: require("../images/10.03.23.jfif"),
  },
  {
    date: "10/03/23",
    label: "10/03/23 - Não-me-toque",
    url: require("../images/10.03.23-1.jpg"),
  },
  {
    date: "11/03/23",
    url: require("../images/11.03.23.jpg"),
    description:
      "Ficamos um dia sozinhos na minha casa. Compramos porcariazinhas, comemos sushi (demais) e assistimos the office. Ficamos de boa na sacada fumando vendo as estrelas.",
  },
  {
    date: "17/03/23",
    label: "17/03/23 - Sua casa",
    url: require("../images/17.03.23.jfif"),
  },
  {
    date: "18/03/23",
    label: "18/03/23 - Batatas",
    url: require("../images/18.03.23.jfif"),
  },
  {
    date: "19/03/23",
    url: require("../images/19.03.23.jfif"),
    description:
      "Segunda vez na Toca do ratão, depois do sábado no Batatas. Bebemos bastante chopp, comemos crepe triplo, compramos bottons e vimos bandas fodas.",
  },
  {
    date: "22/03/23",
    description: "Nosso aniversário de 4 meses.",
  },
  {
    date: "31/03/23",
    url: require("../images/31.03.23.jpg"),
    description:
      "Fomos comer Sushi presencialmente pela primeira e até então única vez, compramos paçoca e flor.",
  },
  {
    date: "17/04/23",
    url: require("../images/17.04.23.jpg"),
    label: "17/04/23",
    description: "Fomos na ultragaz beber e sair com os amigos.",
  },
  {
    date: "19/04/23",
    label: "19/04/23",
    url: require("../images/19.04.23.jpg"),
  },
  {
    date: "29/04/23",
    description:
      "Fomos na orquestra de carazinho pela primeira vez ver trilha sonora de filme.",
  },
  {
    date: "30/04/23",
    url: require("../images/30.04.23.jpg"),
    label: "30/04/23 - Minha casa",
    description:
      "Fritamos pastel e ficamos vendo Mr. Robot na sala, grudadinhos.",
  },
  {
    date: "05/05/23",
    label: "05/05/23",
    url: require("../images/05.05.23.jpg"),
  },
  {
    date: "13/05/23",
    url: require("../images/13.05.23.jpg"),
    label: "13/05/23",
    description:
      "Começamos a usar nossas alianças depois de muito tempo de espera.",
  },
  {
    date: "20/05/23",
    url: require("../images/20.05.23.jpg"),
    label: "20/05/23",
    description:
      "Fomos no Velopark ver a corrida de drift. Quase desistimos de última hora, e você não acreditava muito que ia gostar, mas foi uma experiência incrível.",
  },
  {
    date: "02/06/23",
    url: require("../images/02.06.23.jpg"),
    label: "02/06/23",
    description:
      "Fomos no porão tomar litrão de Amstel e ver a banda do Marcelo. Ótima banda.",
  },
  {
    date: "03/06/23",
    url: require("../images/03.06.23.jpg"),
    label: "03/06/23",
    description:
      "Logo no dia seguinte, finalmente voltamos ao maroca e reencenamos nosso primeiro beijo.",
  },
  {
    date: "07/06/23",
    url: require("../images/07.06.23.jpg"),
    label: "07/06/23",
    description:
      "Janta do fofoquinha na casa do cauê. Tivemos conversas desconfortáveis e ficamos bem agarradinhos.",
  },
  {
    date: "09/06/23",
    url: require("../images/09.06.23.jpg"),
    label: "09/06/23",
    description:
      "Aquela festa na associação de funcionários do HSVP. Bebemos demais e aprendemos a lição, mas apesar de tudo nos divertimos. Ficamos no balanço falando da vida, contando planos para o futuro.",
  },
  {
    date: "11/06/23",
    url: require("../images/11.06.23.jpg"),
    label: "11/06/23",
    description:
      "Fomos ver a orquestra pela segunda vez, agora o concerto do Vivaldi. Fiquei tão feliz quando tocaram Bach.",
  },
  {
    date: "11/06/23",
    label: "11/06/23",
    url: require("../images/11.06.23-1.jpg"),
  },
  {
    date: "11/06/23",
    label: "11/06/23",
    url: require("../images/11.06.23-2.jpg"),
  },
  {
    date: "25/06/23",
    label: "25/06/23",
    url: require("../images/25.06.23.jpg"),
  },
  {
    date: "25/06/23",
    description:
      "Agora estávamos terminando nosso sofrido primeiro semestre da faculdade. Nesse dia ficamos estudando na minha casa. Tinhamos que estudar mas ainda demos um jeito de aproveitar essas últimas semanas ficando juntinhos, e até fomos no Quiero Café depois do trabalho.",
  },
  {
    date: "29/06/23",
    description:
      "Fomos no Batatas sozinhos ouvir rock acústico, e ficamos sentadinhos escutando Elvis e Beatles como os idosos que nós somos.",
  },
  {
    date: "04/07/23",
    label: "04/07/23",
    url: require("../images/04.07.23.jpg"),
  },
  {
    date: "08/07/23",
    url: require("../images/08.07.23.jpg"),
    label: "08/07/23",
    description:
      "Nos últimos dias antes de você ir pro Rio, não desgrudávamos.",
  },
  {
    date: "09/07/23",
    description:
      "Você foi pro Rio mais uma vez e tivemos que ficar longe um do outro. Seguimos nossas vidas sozinhos por uns dias que pareciam não passar, e nisso você foi melhor do que eu.",
  },
  {
    date: "01/08/23",
    description:
      "Você voltou e nos encontramos na rua, na frente do trabalho, vi você do outro lado da rua, com o cabelo mais lindo do que nunca e fiquei sem palavras. Atravessei correndo, falei qualquer coisa e te dei o abraço que esperei três semanas pra dar.",
  },
  {
    date: "06/08/23",
    url: require("../images/06.08.23.jpg"),
    label: "06/08/23",
    description:
      "Ainda sem desgrudar, tentando matar uma saudade interminável, voltamos pra nossa simples e agradável vidinha de frequentar o Batatas",
  },
  {
    date: "12/08/23",
    description:
      "Finalmente fomos andar de bicicleta na Rui Barbosa. Você descobriu que ainda conseguia andar de bicicleta, e eu corri atrás de você, do jeito que tem que ser (hihi). Voltamos no frio de mãozinhas dadas e tomamos um banho quente juntinhos.",
  },
  {
    date: "20/08/23",
    label: "20/08/23 - Gato",
    url: require("../images/20.08.23.jpg"),
  },
  {
    date: "09/09/23",
    url: require("../images/09.09.23.jpg"),
    label: "09/09/23",
    description:
      "Banda cover de matanza no maroca. Era meio frio, tinha muita neblina (clima bem metal!), e você tava quase desanimada, mas você me fez prometer que eu não ia deixar você desistir de ir, então entramos no 99 e fomos. Nos esguelamos e bebemos alguns litrões. Foi incível.",
  },
  {
    date: "17/09/23",
    label: "17/09/23",
    url: require("../images/17.09.23.jpg"),
  },
  {
    date: "14/10/23",
    url: require("../images/14.10.23.jpg"),
    label: "14/10/23",
    description:
      "Resolvemos ir junto numa caminhada bem longa. Você, por motivos não muito claros me acompanhou, e conseguimos um feito bem impressionante de caminha 12km. Bem simbólico, eu acho.",
  },
  {
    date: "21/10/23",
    label: "21/10/23",
    url: require("../images/21.10.23.jpg"),
  },
  {
    date: "21/10/23",
    url: require("../images/21.10.23-1.jpg"),
    label: "21/10/23",
    description:
      "Pré mesversário e não tinha companhia melhor pra isso do que você e misfits ksks. Nos arrumamos MUITO bem e te levei comer no Vaccaro, cumprindo aquela promessa antiga. Depois fomos no castigo ver o cover de Misfits, e apesar de uns conhecidos desagradáveis (mais pra você do que pra mim, que tava animado demais pra me importar), ficamos bem pertinho do palco e chegou minha vez de me esguelar. Ainda demos umas voltas pela independência (muito lindinhos).",
  },
  {
    date: "21/10/23",
    label: "21/10/23",
    url: require("../images/21.10.23-2.jpg"),
  },
  {
    date: "27/10/23",
    label: "27/10/23 - Gato de novo :)",
    url: require("../images/27.10.23.jpg"),
  },
  {
    date: "05/11/23",
    url: require("../images/05.11.23.jpg"),
    label: "05/11/23",
    description:
      "Fomos ver o Los Marias no shopping, ficamos bem pertinho do palco, e ainda conversamos com nosso grande amigo, mais tarde na toca do ratão.",
  },
  {
    date: "09/11/23",
    url: require("../images/09.11.23.jpg"),
    label: "09/11/23",
    description:
      "Mais uma tão aguardada quinta feira insana no batatas, que sempre planejamos mas quase nunca vamos ksks. Dessa vez realmente fomos, fizemos valer nossos choppes, as trufinhas, um pouquinho de música ao vivo e um ótimo tempo juntinhos pra aliviar a semana.",
  },
  {
    date: "11/11/23",
    label: "11/11/23 - Roda gigante",
    url: require("../images/11.11.23.jpg"),
  },
  {
    date: "18/11/23",
    label: "18/11/23 - Beldinhos no quiero café",
    url: require("../images/18.11.23.jpg"),
  },
  {
    date: "22/11/23",
    url: require("../images/22.11.23.jpg"),
    date: "22/11/23",
    label: "22/11/23",
    description:
      "Nossa humilde comemoração de 1 ano de namoro, numa quarta feira meio chuvosa, fomos no Beer Burguer pro dia não passar em branco, mas decidimos que a comemoração de verdade seria no fim de semana.",
  },
  {
    date: "25/11/23",
    label: "25/11/23 - Maroca",
    url: require("../images/25.11.23.jpg"),
  },
  {
    date: "26/11/23",
    url: require("../images/26.11.23.jpg"),
    label: "26/11/23 - Toca do ratão",
    description:
      "Fomos em mais uma toca do ratão, ficamos no sofá agarradinhos tomando choppinho.",
  },
  {
    date: "08/12/23",
    label: "08/12/23 - PF Shopping",
    url: require("../images/8.12.23.jpg"),
  },
  {
    date: "09/12/23",
    url: require("../images/9.12.23.jpg"),
    label: "09/12/23 - Festa da alfasig",
    description:
      "Festa de fim de ano da alfasig. Você conheceu meus coleguinhas de trabalho, foi bem legal.",
  },
  {
    date: "16/12/23",
    url: require("../images/16.12.23.jpg"),
    label: "16/12/23 - Bibi",
    description: "Fomos cuidar da bibi.",
  },
  {
    date: "17/12/23",
    url: require("../images/17.12.23.jpg"),
    label: "17/12/23 - Maroca",
    description:
      "Mais uma vez no maroca. Fui cantar Misfits no karaoquê meio bêbado, depois ficamos agarradinhos de novo.",
  },
  {
    date: "21/12/23",
    url: require("../images/21.12.23.jpg"),
    label: "21/12/23",
    description:
      "Pra comemorar o seu aniversário fomos ver o Yamandu Costa tocando na praça, com a sua família.",
  },
  {
    date: "25/12/23",
    url: require("../images/25.12.23.jpg"),
    label: "25/12/23",
    description:
      "Depois do natal, você veio pra minha casa e fomos caminhar na rua.",
  },
  {
    date: "31/12/23",
    url: require("../images/31.12.23.jpg"),
    label: "31/12/23",
    description:
      "Passamos o ano novo na sua casa, e depois que todo mundo foi dormir, ficamos bebendo e f1 na sala, escutando Pink Floyd, agarradinhos.",
  },
  {
    date: "20/01/24",
    url: require("../images/20.01.24.jpg"),
    label: "20/01/24 - Osaka",
    description:
      "Fomos no festival do Osaka. Comemos bastante, e pela primeira vez, pessoalmente, depois de algumas decepções com o Wakam.",
  },
  {
    date: "20/01/24",
    label: "20/01/24",
    url: require("../images/20.01.24-2.jpg"),
  },
  {
    date: "27/01/24",
    url: require("../images/27.01.24.jpg"),
    label: "27/01/24 - Formatura da Iara",
    description:
      "Formatura da Iara. Estavamos bem arrumadinhos e depois fomos jantar na churrascaria. Nos divertimos bastante na festa também.",
  },
  {
    date: "10/02/24",
    label: "10/02/24",
    url: require("../images/10.02.24.jpg"),
  },
  {
    date: "12/02/24",
    url: require("../images/12.02.24.jpg"),
    label: "12/02/24",
    description: "Fomos no Batatas, e olha como a nós estavamos lindinhos!!!",
  },
  {
    date: "17/02/24",
    url: require("../images/17.02.24.jpg"),
    label: "17/02/24 - PF Shopping",
    description: "Fomos no Pula Park, combinandinhos. Pulamos bastante.",
  },
  {
    date: "17/02/24",
    label: "17/02/24 - PF Shopping",
    url: require("../images/17.02.24-2.jpg"),
  },
  {
    date: "22/02/24",
    url: require("../images/22.02.24.jpg"),
    label: "22/02/24 - Batatas",
    description: "Fomos no batatas refazer aquela foto depois de um ano.",
  },
  {
    date: "24/02/24",
    url: require("../images/24.02.24.jpg"),
    label: "24/02/24 - :(",
    description:
      "É. Eu tive que vir. Mas olha a gente sorrindo achando que eu tinha me escapado.",
  },
];

const events = images.filter((image) => image.description !== undefined);

export { images, events };
