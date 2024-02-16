function getElementValueByID(ID){
    const element = document.getElementById(ID).innerText;
    return element;
}
function setElementValuById (ID, value){
    document.getElementById(ID).innerText = value;
}
function createElementDom(tag, value){
   const element =  document.createElement(tag);
   document.getElementById("create-ol").appendChild(element)
   element.innerText = value;
}
function totalPrice (id, value){
    const totalCost = getElementValueByID(id);
    const totalPrice = parseInt(totalCost) + parseInt(value);
    setElementValuById(id, totalPrice)
}
function grandTotal(category){
    console.log(category)
     const convertTotal = getElementValueByID("totalCost")
    if(category == "bus"){
        setElementValuById("grand-total", parseInt(convertTotal)+100)
    }
    else if(category == "train"){
        setElementValuById("grand-total", parseInt(convertTotal)-200)
    }
    else if(category == "flight"){
        setElementValuById("grand-total", parseInt(convertTotal)+500)
    }
    else{
        console.log("you wrong click")
    }
}
