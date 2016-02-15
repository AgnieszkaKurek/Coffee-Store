function addDnDHandlers() {
    var coffeeimages = document.getElementsByClassName("productarticlewide");
    
    var shoppingCartDropzone = document.getElementById("shoppingcart");
    
    var shopingcart = document.querySelectorAll("#shoppingcart ul")[0];
    
    
    for (var i = 0; i < coffeeimages.length; i++){
        coffeeimages[i].addEventListener("dragstart", function (ev){
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        },false);
    }
    
    shoppingCartDropzone.addEventListener("dragover", function(ev) {
        if (ev.preventDefault) 
            ev.preventDefault();
        ev.preventDefault.dropEffect = "copy";
        return false;
        
    },false);
    
    shoppingCartDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation) 
            ev.stopPropagation();
            
        var coffeeId = ev.dataTransfer.getData("Text");
        var element = document.getElementById(coffeeId);
        
        addCoffeeToShopingCart(element, coffeeId);
        ev.stopPropagation();
       
        
        return false;  
            
        },false);
     
     function addCoffeeToShopingCart(item, id) {
         var html = id + "" + item.getAttribute("data-price");
         
         var liElement = document.createElement('li');
         liElement.innerHTML = html;
         shopingcart.appendChild(liElement);
         
     }
   
}