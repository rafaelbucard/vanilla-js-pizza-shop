const doc = function(el){
    return document.querySelector(el);
    // função de atalho para document.querySelector
} 
const docAll = function(el){
    return document.querySelectorAll(el);
    // função de atalho para document.querySelectorAll
} 
pizzaJson.map((item, index)=>{

    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    // Seleção do html display none para uma areá de pizzas 
    pizzaItem.setAtribute('data-key',index);
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();
        doc('.pizzaWindowArea').style.opacity = 0;
        doc('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            doc('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        
    });



    doc('.pizza-area').append(pizzaItem);
});