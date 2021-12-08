window.onload = function() {
    let poo = localStorage.getItem("product001");
    let hey = localStorage.getItem("product002");
    for(let i = 0; i < hey.length; i++){
        let productArtist = document.createElement("p");
        productArtist.className = "artist";
        productArtist.innerHTML = hey;
    }
};

//# sourceMappingURL=index.a7a236c3.js.map
