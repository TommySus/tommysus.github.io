let score = document.getElementById("score")
let target = 1000
var bel = new Audio('https://www.meramukoding.com/wp-content/uploads/2020/05/doorbell.mp3');
function klik() {
    score.innerHTML++
    if (score.innerHTML > 0) {
        document.getElementById("selamat").innerHTML = target-score.innerHTML + " click lagi menuju seribuuu"
    }
    if (score.innerHTML > 1000) {
        document.getElementById("selamat").innerHTML = "SELAMAT KAMU SUDAH " + (score.innerHTML-target)  + " CLICK LEBIH BANYAK DARI TARGET!!!"
    }
    if (score.innerHTML == 100 || score.innerHTML == 300 || score.innerHTML == 500 || score.innerHTML == 700 || score.innerHTML == 1000) {
        bel = new Audio('tuturu_1.mp3')  
    } else {
        bel = new Audio('https://www.meramukoding.com/wp-content/uploads/2020/05/doorbell.mp3');
    }
    bel.currentTime = 0;
    bel.play();
}

function reset() {
    score.innerHTML = 0
    document.getElementById("selamat").innerHTML = ""
    bel = new Audio('tf_nemesis.mp3') 
    bel.currentTime = 0;
    bel.play();
}

