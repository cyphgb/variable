const itemCounts = {
    html : 0,
    css : 0,
    js : 0,
    python :0,
    flutter: 0
};
function updateDisplay(){
    for (let item in itemCounts){
        document.getElementById(`count-${item}`).innerText= 
        itemCounts[item]; }

        const summaryList = document.getElementById("summary-list");
        summaryList.innerHTML = "";
        for ( let itrm in itemCounts){
            if (itemCounts[item] > 0 ){
                const li =
                document.createElement("li");
                li.textContent = `$
                {capitalize(item)}:$
                {itemCounts[item]}`;

                summaryList.appendChild(li);
            }
        }
}
function addItem(item){
    itemCounts[item]++;
    updateDisplay();
}
function subtractItem(item){
    if (itemCounts[item] > 0){
        itemCounts[item]--;
        updateDisplay();
    }
}
function capitalize(word){
    return
    word.charArt(0).toUpperCase() +
    word.slice(1);
}
document.addEventListener("DOMContentLoaded" , updateDisplay);
function clearItems(){
  for (let item in itemCounts){
    itemCounts[item]= 0;
  }
  updateDisplay();
}