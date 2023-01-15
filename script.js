const player1_img = document.querySelector('.player1_img');
const player2_img = document.querySelector('.player2_img');
const player1_hand = document.querySelector('.player1_hand');
const player2_hand = document.querySelector('.player2_hand');
let player1_score = document.querySelector('.player1_score');
let player2_score = document.querySelector('.player2_score');
const start = document.querySelector('.start');
const play = document.querySelector('.play');
let count = document.querySelector('.count');
const winner = document.querySelector('.winner');

const arry = ['✂️', '🪨', '📜'];


const player1face = (face) => {
        player1_img.innerHTML = face;
}

const player2face = (face) => {
        player2_img.innerHTML = face;
}

start.addEventListener('click', () => {
        play.setAttribute('style', 'display:block');
})


play.addEventListener('click', () => {
        player1_hand.innerHTML = arry[Math.floor(Math.random() * 3)];
        player2_hand.innerHTML = arry[Math.floor(Math.random() * 3)];

        if (player1_hand.innerHTML === '✂️') {
                if (player1_hand.innerHTML === '✂️' && player2_hand.innerHTML === '🪨') {
                        player2_score.innerHTML++;
                } else if (player1_hand.innerHTML === '✂️' && player2_hand.innerHTML === '📜') {
                        player1_score.innerHTML++;
                }
        }

        if (player1_hand.innerHTML === '🪨') {
                if (player1_hand.innerHTML === '🪨' && player2_hand.innerHTML === '✂️') {
                        player1_score.innerHTML++;
                } else if (player1_hand.innerHTML === '🪨' && player2_hand.innerHTML === '📜') {
                        player2_score.innerHTML++;
                }
        }

        if (player1_hand.innerHTML === '📜') {
                if (player1_hand.innerHTML === '📜' && player2_hand.innerHTML === '✂️') {
                        player2_score.innerHTML++;
                } else if (player1_hand.innerHTML === '📜' && player2_hand.innerHTML === '🪨') {
                        player1_score.innerHTML++;
                }
        }

        count.innerHTML++;

        if (player1_score.innerHTML == 10 || player2_score.innerHTML == 10) {
                play.setAttribute('style', "display: none");
                start.innerHTML = "Play again";
                start.addEventListener('click', () => {
                        location.reload();
                })
                if (player1_score.innerHTML == 10) {
                        winner.innerHTML = `${player1_img.innerHTML} won`;
                } else {
                        winner.innerHTML = `${player2_img.innerHTML} won`;
                }
        }
})

