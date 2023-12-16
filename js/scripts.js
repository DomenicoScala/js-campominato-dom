const myButton = document.getElementById('special-button')

const diffSelect = document.getElementById('difficoltà')

let points = 0;


myButton.addEventListener('click', function(){
    
    
    
    
    
    console.log('myButton', myButton, typeof myButton)
    const gridContainer = document.querySelector('.result-grid')

    const cellNumber = parseInt(diffSelect.value)

    const bombs = [];


    while(bombs.length < 16){
        const numRandom = getRndInteger(1, cellNumber);


        if(bombs.includes(numRandom) == false){
            bombs.push(numRandom);
        }   

        console.log('bombs', bombs, typeof bombs)
    }



    gridContainer.innerHTML = '';
    points = 0;


    for(let i = 1; i <= cellNumber; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell', 'cell-' + cellNumber)
        cell.innerHTML += i
        gridContainer.append(cell)
        
        cell.addEventListener('click', function(){
            const numInCell = parseInt(this.innerText);
            const clickedBomb = document.querySelectorAll('.cell.bomb')

            if(clickedBomb.length == 0){
                if(bombs.includes(numInCell) == false){
                    if(this.classList.contains('clicked') == false){
                        this.classList.add('clicked')
                        points++
                    }
                    
                }
                else{
                    this.classList.add('bomb')
                    alert('Hai perso! Hai totalizzato ' + points + ' punti')
                }

            }



            console.log('PUNTEGGIO', points)
        })
    }   
})





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }








