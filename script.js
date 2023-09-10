const body = document.querySelector('body');
body.style.cssText ='height: 100vh;'
const container = document.createElement('div');
container.setAttribute('id','container');
container.style.cssText = 'height: 100%; display: flex; flex-direction: column;'
body.appendChild(container);

const btn = document.createElement('button');
const divForButton = document.createElement('div');
divForButton.setAttribute('id','div-btn');

var noOfSquare = 4;

btn.style.cssText = 'width: 100%; height: 100%; background-color: red; border: 5px dashed blue; border-radius: 60px';
btn.textContent='Choose number of squares per side'
divForButton.appendChild(btn);
divForButton.style.cssText = 'height: 5%;width:30%;margin:auto;'



const grid = document.createElement('div')
grid.setAttribute('id','grid');
grid.style.cssText ='height: 90%; margin-top:3%'


container.appendChild(divForButton);
container.appendChild(grid);

btn.addEventListener('click',(event)=>{
    noOfSquare = prompt('Number of Squares per side: ');
    console.log(noOfSquare);
    squareArrange(noOfSquare);
})

const squareArrange = (n) => {
    grid.innerHTML='';
    for(let i = 1; i <= n;i++) {
        let row = document.createElement('div');
        row.setAttribute('id','row-'+i);
        row.style.cssText = 'display: flex;  height:calc(100%/'+noOfSquare+');'
        

        for(let j = 1; j<= n;j++) {
            let square = document.createElement('div');
            square.style.cssText = 'background-color: yellow; border: 1px solid blue; flex: 1 1 0;';
            row.appendChild(square);
            grid.appendChild(row);
        }
    }
}
