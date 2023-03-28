window.onload = function (){
  const H1 = document.createElement("h1");
  const body = document.querySelector("body");
  body.append(H1);
  H1.append("Favorite Ice Creams")
  const ul = document.createElement("ul");
  H1.after(ul);
  
  const iceCream = ["chocolate ", "vanilla ", "strawberry"];
  iceCream.forEach(function(element){
    let li = document.createElement("li");
    li.append(element);
    ul.append(li);
    })
  
    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




}
//const list = document.createElement("li");
// list.append(List.value);
//document.body.append(list)