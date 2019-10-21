let panel1=document.getElementsByClassName('panel1')[0]
let panel2=document.getElementsByClassName('panel2')[0]
let panel3=document.getElementsByClassName('panel3')[0]
let panel4=document.getElementsByClassName('panel4')[0]
let cols=document.getElementsByClassName('col')


for(let i=0;i<cols.length;i++){
    cols[i].addEventListener('click',(e)=>{
        console.log('heya',
        e.target.classList)
        for(let i=0;i<cols.length;i++){
            cols[i].classList.remove('selected')
        }

        e.target.classList.toggle('selected')
    })
}