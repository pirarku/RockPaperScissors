const mainFunction = ()=>{
    const pickHandScreen = document.getElementById('pickHandScreen');
    const playingScreen = document.getElementById('playingScreen');
    const gameEndScreen = document.getElementById('gameEndScreen');

    let playerPick = '';
    let hand = ['rock','paper','scissors']
    let score = 0;

    const screenToggle = ()=>{
        pickHandScreen.classList.add('hidden');
        playingScreen.classList.add('active');
    }

    const gameEndScreentoggle = ()=>{ 
        gameEndScreen.classList.add('active');
    }

    const game = ()=>{
        setTimeout(()=>{
            const player = document.getElementById('player');
            const computer = document.getElementById('computer');
            const scoreScreen = document.getElementById('score');
            const playAgain = document.getElementById('playAgain');
            const evaluation = document.getElementById('evaluation');
            
            let computerPick = Math.floor(Math.random()*hand.length);

            player.classList.add(playerPick);
            computer.classList.add(hand[computerPick]);
            


            switch(playerPick+hand[computerPick]){
                case 'rockpaper':
                case 'paperscissors':
                case 'scissorsrock':
                    console.log('lose');
                    evaluation.textContent = 'you lose';
                    computer.classList.add('win');
                    if(score > 0){
                        score--;
                    }
                    break;
                case 'rockrock':
                case 'scissorsscissors':
                case 'paperpaper':
                    console.log('draw');
                    evaluation.textContent = 'draw';
                    computer.classList.add('win');
                    player.classList.add('win');
                    break;
                default:
                    console.log('win');
                    evaluation.textContent = 'you win';
                    player.classList.add('win');
                    if(score >= 0){
                        score++;
                    }
                    break;

            }

            scoreScreen.textContent = score;
            
            gameEndScreentoggle();

            playAgain.addEventListener('click',()=>{
                screenToggle();
                gameEndScreentoggle();
                pickHandScreen.className = '';
                playingScreen.className = '';
                gameEndScreen.className = '';
                player.className = '';
                computer.className = '';
                playerPick = '';
            })

        },2500);
    }

    for(let i = 0; i<pickHandScreen.children.length-1;i++){
        pickHandScreen.children[i].addEventListener('click',()=>{
                playerPick = pickHandScreen.children[i].dataset.hand;
                screenToggle();
                game();
        })
    }
}
const rulesFunction = ()=>{
    const rulesButton = document.getElementById('rulesButton');
    const closeRulesButton = document.getElementById('closeRules');
    const toggleRules = ()=>{
        const rulesScreen = document.getElementById('rules');
        rulesScreen.classList.toggle('active');
    }
    rulesButton.addEventListener('click',toggleRules);
    closeRulesButton.addEventListener('click',toggleRules)

}

mainFunction();
rulesFunction();