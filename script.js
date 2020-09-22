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

    pizzaItem.setAttribute('data-key', index); // Criando atributo para identificar pizza
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();
        //Pegando key da pizza
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        doc('.pizzaBig img').src = pizzaJson[key].img;
        doc('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        doc('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        doc('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        doc('.pizzaInfo--size.selected').classList.remove('selected');
        docAll('.pizzaInfo--size').forEach((size,sizeIndex)=>{
            if(sizeIndex == 2){
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        doc('.pizzaWindowArea').style.opacity = 0;
        doc('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            doc('.pizzaWindowArea').style.opacity = 1;
        }, 200);
        
    });



    doc('.pizza-area').append(pizzaItem);
});