const cardButton = document.getElementsByClassName("btn");
const cost = 0;
for (button1 of cardButton){
    button1.addEventListener("click", (event)=>{
        const taitel = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
       const budget = getElementValueByID("budget-tk");
       const budgetResult = parseInt(budget) - parseInt(price);
       if(budgetResult >= 0){
        setElementValuById("budget-tk", budgetResult);
       }
       else{
        alert("you earn more mone")
       }
       const titleValue = taitel+ " " + price;
           createElementDom("li", titleValue ); 
           totalPrice("totalCost", price); 
           totalPrice("grand-total", price); 
         
           event.target.parentNode.parentNode.parentNode.classList.add('bg-slate-200')
           event.target.setAttribute("disabled", true)
       
    })
}

