function showCards() {
    window.scrollTo(0, document.body.scrollHeight);
}
function showHero() {
    window.scrollTo(0, 0);
}
function showTimeline() {
    window.open("html/timeline.html","_self");
}
function showIndex() {
    window.open("../index.html","_self");
}
function showAlbum() {
    window.open("html/album.html","_self");
}
function showPlaylist(){
    window.open("https://deezer.page.link/akTDYhA5J1qnCUb78");
}
function showArquivo(){
    window.open("html/arquivo.html", "_self");
}
function objFoto(label, url){
    fotos.push({
        label: label,
        url: url
    });
}
//vue
fotos=[];
var dados = {
    "fotos": fotos
}
new Vue({
    el: "#vueAlbum",
    data: dados
});
//objects
objFoto("10/09 - Gare", "../images/01.jpg");
objFoto("27/09 - Porto Alegre", "../images/02.jpg");
objFoto("08/10 - Maroca", "../images/04.jfif");
objFoto("18/10 - Sua casa", "../images/05.jfif");
objFoto("22/10 - Batatas", "../images/17.jfif");
objFoto("22/10 - Batatas", "../images/18.jfif");
objFoto("22/10 - Batatas", "../images/06.jfif");
objFoto("28/10 - Casa da Gaby", "../images/08.jfif");
objFoto("04/11 - IF", "../images/19.jfif");
objFoto("07/11 - Sua casa", "../images/09.jfif");
objFoto("14/11 - Minha casa", "../images/20.jfif");
objFoto("15/11 - Sua casa", "../images/21.jfif");
objFoto("27/11 - Sua casa", "../images/22.jfif");
objFoto("27/11 - Sua casa", "../images/23.jfif");
objFoto("03/12 - Sua casa", "../images/24.jfif");
objFoto("04/12 - Sua casa", "../images/25.jfif");
objFoto("07/12 - Gare", "../images/26.jfif");
objFoto("11/12 - Toca do ratão", "../images/28.jfif");
objFoto("30/12 - Sua casa", "../images/29.jfif");
objFoto("09/01 - Sua casa", "../images/30.jfif");
objFoto("09/01 - Sua casa", "../images/31.jfif");
objFoto("20/01 - Praia", "../images/32.jfif");
objFoto("20/02 - Praia", "../images/33.jfif");
objFoto("10/03 - Não-me-toque", "../images/34.jfif");
objFoto("10/03 - Não-me-toque", "../images/10.3.jpg");
objFoto("17/03 - Sua casa", "../images/35.jfif");
objFoto("18/03 - Batatas", "../images/36.jfif");
objFoto("17/04", "../images/17.4.jpg");
objFoto("19/04", "../images/19.4.jpg");
objFoto("30/04", "../images/30.4.jpg");
objFoto("05/05", "../images/5.5.jpg");
objFoto("13/05", "../images/13.5.jpg");
objFoto("20/05", "../images/20.5.jpg");
objFoto("02/06", "../images/2.6.jpg");
objFoto("03/06", "../images/3.6.jpg");
objFoto("07/06", "../images/7.6.jpg");
objFoto("09/06", "../images/9.6.jpg");
objFoto("11/06", "../images/11.6.jpg");
objFoto("11/06", "../images/11.6-2.jpg");
objFoto("11/06", "../images/11.6-3.jpg");
objFoto("25/06", "../images/25.6.jpg");
objFoto("04/07", "../images/4.7.jpg");
objFoto("08/07", "../images/8.7.jpg");
objFoto("06/08", "../images/6.8.jpg");
objFoto("20/08 - Gato", "../images/20.8.jpg");
objFoto("09/09 - Matanza no maroca", "../images/9.9.jpg");
objFoto("17/09", "../images/17.9.jpg");
objFoto("14/10 - ?", "../images/14.10.jpg");
objFoto("21/10", "../images/21.10.jpg");
objFoto("21/10", "../images/21.10_2.jpg");
objFoto("21/10", "../images/21.10_3.jpg");
objFoto("27/10 - Gato de novo :)", "../images/27.10.jpg");
objFoto("05/11 - Toca do ratão", "../images/5.11.jpg");
objFoto("09/11", "../images/9.11.jpg");
objFoto("11/11 - Roda gigante", "../images/11.11.jpg");
objFoto("18/11 - Beldinhos no quiero café", "../images/18.11.jpg");
