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
objFoto("17/03 - Sua casa", "../images/35.jfif");
objFoto("18/03 - Batatas", "../images/36.jfif");