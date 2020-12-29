cardArray = [
    {
        id: 0,
        img: 'images/ingilizce.jpg',
        baslik: 'İngilizce Öğren',
        p1: 'Kesinlikle ingilizce bilmen gerekiyor.',
        p2: 'İngilizce bilmeden bu işi yapman çok zor. Yurt dışına gitmek için ingilizce şart. Zaten ingilizce sana hayatının her yerinde lazım olacak.',
    },
    {
        id: 1,
        img: 'images/matematik.jpg',
        baslik: 'Matematik Öğren',
        p1: 'Kesinlikle matematik bilmen gerekiyor.',
        p2: 'Ama en önemlisi DGS sınavı ile Bilgisyar Mühendisliği bölümüne geçmek. Matematik bilmeden kazanman imkansız.',
    },
    {
        id: 2,
        img: 'images/kitap.jpg',
        baslik: 'Kitap Oku',
        p1: 'Kitap okumak zekanı, kelime dağarcığını ve vizyonunu geliştirir',
        p2: 'Genel kültürü artır. Hayata bakış açını ve empati kurma yeteneğini geliştirir.',
    },
    {
        id: 3,
        img: 'images/yazilim.jpg',
        baslik: 'Yazılım Geliştir',
        p1: 'Sevdiğin işi meslek haline getirip para kazanman için çok çalışman gerekir.',
        p2: 'Yazılım dilleri öğren, bildiklerinde uzmanlaş ve siber güvenlik alanında kendini geliştir. Yurt dışında çalışmak için yazılım öğren.',
    },
    {
        id: 4,
        img: 'images/spor.jpg',
        baslik: 'Spor Yap',
        p1: 'Düzenli spor yapmak vücudun için oldukça yararlıdır.',
        p2: 'Düzenli spor yapmak formunu korumana yardımcı olur. Haftada en az 3 gün yapmalısın.',
    },
    {
        id: 5,
        img: 'images/namaz.jpg',
        baslik: 'Namaz Kıl',
        p1: 'Meditasyon ve ibadet, iç huzuru bulmana ve benliğine odaklanmana yardımcı olabilir.',
        p2: 'İç huzuru kazandıkça daha olumlu hissedersin ve bu da daha iyi bir insan olmana yardımcı olur.',
    }
]

function onClick(deger) {
    var cardId = document.getElementById(deger);
    var class_tamam = document.getElementsByClassName("tamam-img")[deger];
    if (cardId.className === "card") {
        cardId.className = "card opacity-yarim card-click";
        class_tamam.style.cssText = "transition:0.2s;opacity:1;";
    }
    else if (cardId.className === "card opacity-yarim card-click") {
        cardId.className = "card";
        class_tamam.style.cssText = "opacity:0;";
    }
    else if (cardId.className === "card card_dark") {
        cardId.className = "card card_dark opacity-yarim card-click";
        class_tamam.style.cssText = "transition:0.2s;opacity:1;";
    }
    else if (cardId.className === "card card_dark opacity-yarim card-click") {
        cardId.className = "card card_dark";
        class_tamam.style.cssText = "opacity:0;";
    }
}

function darkMode() {
    var class_navbar = document.getElementById("navbar");
    if (class_navbar.className === "navbar navbar-expand-lg navbar-light bg-light") {
        class_navbar.className = "navbar navbar-expand-lg navbar-dark bg-dark";
        document.getElementById("dark-mode-btn").style.opacity = "0";
        document.getElementById("light-mode-btn").style.opacity = "1";
    }
    else if (class_navbar.className === "navbar navbar-expand-lg navbar-dark bg-dark") {
        class_navbar.className = "navbar navbar-expand-lg navbar-light bg-light";
        document.getElementById("dark-mode-btn").style.opacity = "1";
        document.getElementById("light-mode-btn").style.opacity = "0";
    }

    var class_bhu = document.getElementById("bhu");
    if (class_bhu.className === "p-3 mb-2 bg-warning text-white text-center") {
        class_bhu.className = "p-3 mb-2 bg-dark text-white text-center";
    }
    else if (class_bhu.className === "p-3 mb-2 bg-dark text-white text-center") {
        class_bhu.className = "p-3 mb-2 bg-warning text-white text-center";
    }

    var class_footer = document.getElementById("footer");
    if (class_footer.className === "text-center p-3 navbar-light bg-light") {
        class_footer.className = "text-center p-3 navbar-dark bg-dark";
        class_footer.style.color = "#D7D7D7";
    }
    else if (class_footer.className === "text-center p-3 navbar-dark bg-dark") {
        class_footer.className = "text-center p-3 navbar-light bg-light";
        class_footer.style.color = "black";
    }

    if (document.body.className === "body_dark") {
        document.body.className = "body_light";
    }
    else if (document.body.className === "body_light __plain_text_READY__") {
        document.body.className = "body_dark";
    }

    for (i = 0; i < cardArray.length; i++) {
        var class_card = document.getElementById(`${i}`);
        if (class_card.className === "card") {
            class_card.className = "card card_dark";
        }
        else if (class_card.className === "card card_dark") {
            class_card.className = "card";
        }

        var class_baslik = document.getElementById(`b${i}`);
        if (class_baslik.className === "h3_light") {
            class_baslik.className = "h3_dark";
        }
        else if (class_baslik.className === "h3_dark") {
            class_baslik.className = "h3_light";
        }

        var class_p1 = document.getElementById(`p1_${i}`);
        var class_p2 = document.getElementById(`p2_${i}`);
        if (class_p1.className === "card-text p_light") {
            class_p1.className = "card-text p_dark";
            class_p2.className = "card-text p_dark";
        }
        else if (class_p1.className === "card-text p_dark") {
            class_p1.className = "card-text p_light";
            class_p2.className = "card-text p_light";
        }
    }
}

function cardRepeater() {
    for (i = 0; i < cardArray.length; i++) {
        var card = document.createElement('div');
        card.className = "col-12 col-md-6 col-lg-4 alt-bosluk"
        card.innerHTML = `
        <div id="${i}" onclick="onClick(${i})" class="card">
            <div class="tamam"><img class="tamam-img" src="images/tamam.png"></div>
            <img src="${cardArray[i].img}" class="card-img-top">
            <div class="card-body">
                <p class="card-text">
                <h3 class="h3_light" id="b${i}">${cardArray[i].baslik}</h3>
                </p>
                <p id="p1_${i}" class="card-text p_light">
                    ${cardArray[i].p1}
                </p>
                <p id="p2_${i}" class="card-text p_light">
                    ${cardArray[i].p2}
                </p>
            </div>
        </div>`;
        document.getElementById("row").appendChild(card);
    }
}