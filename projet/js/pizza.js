const baseurl1="https://res.cloudinary.com/cliqtick/raw/upload/v1685016077/data_phcytt.js"

let dataArr = [];
let arr;

let vegBtn = document.querySelectorAll('.vegBtn');



    fetch(baseurl1)
    .then(res => res.json())
    .then(data =>{
    data.map(e =>{
        dataArr.push(e);
        //  console.log(e)          
        // var option = document.createElement('option');
        // option.setAttribute("value",e.name)
        // option.innerHTML = e.name;
        // document.getElementById("dropdown").append(option)
         

    });

    // let dropDown = document.getElementById("dropdown");
   
    let filteredData;
    // dropDown.addEventListener('click' , (e) => {
    //     filteredData = dataArr.filter(each => each.name.includes(e.target.value));

    //     filteredData.map((e) => {
    //         const sel = document.getElementById("dropdown")
    //         const selected = sel.value;
    //         if(sel.options[sel.selectedIndex].text == e.name){
    //         const item = `
    //         <img src="${e.img}" alt="">
    //         <h3 class="desc">${e.description}</h3>
    //         <p>price: $${e.price}</p>

    //         <p>description: ${e.description}</p>

    //         <p>quantity: ${e.quantity}</p>

    //         <p>veg: ${e.veg}</p>

          
    //         <div class="price"></div>
    //          `;
    //         //  var div1 = document.createElement("div")
    //         //  div1.innerHTML=item;
    //          document.getElementById("pizza-item").innerHTML = item
    //         }
    //     })
    // })
    let pizzalist = document.querySelector('.pizzalist')
    let vegHtml = '';
    vegBtn.forEach(each => {
        each.onclick = () => {
            console.log(each.id)
            if(each.id == 'veg') {
                filteredData = data.filter(each => each.veg == true)
            } else {
                filteredData = data.filter(each => each.veg !== true)
            }
            filteredData.forEach(each => {
                vegHtml += `
                <div class="filtered-bg">
                <img src="${each.img}" alt="">
                <h3 class="desc">${each.description}</h3>
                <p>price: $${each.price}</p>
                <p>Name: ${each.name}</p>
                <p>description: ${each.description}</p>
    
                <p>quantity: ${each.quantity}</p>
    
                <p>veg: ${each.veg}</p>
                <div class="add-cart-btn">
                <button  class="plus" id="plus" type="button">+</button>
                    <input class = "add-btn" id="add"  type="button" data-count = "0" data-price=${each.price} value="Add To Cart">
                <button  class="plus" type="button" id="minus">-</button>
                  
                </div>
    
                
                </div>
                `
            })
            pizzalist.innerHTML = vegHtml;

            let btns = document.querySelectorAll('.plus');
            let count;

            btns.forEach(each => {
                each.onclick = () => {
                    if(each.id == 'plus') {
                        count = each.parentElement.children[1].getAttribute("data-count");
                        if(count >=0) {
                            count++;
                            each.parentElement.children[1].setAttribute("data-count" , count)
                        }

                    }
                    if(each.id == 'minus') {
                        count = each.parentElement.children[1].getAttribute("data-count");
                        if(count > 0) {
                            count--;
                            each.parentElement.children[1].setAttribute("data-count" , count);
                        }
                    }

                }
            })
            
        }
    })

    console.log(filteredData)

})
    .catch(err => console.log(err))

