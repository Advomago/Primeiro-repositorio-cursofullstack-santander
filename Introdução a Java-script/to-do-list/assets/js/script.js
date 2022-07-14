
var ul = document.getElementById("lista");
var itemId;
var item;
addtarefa = function(){
    if (document.getElementById('tarefas').value != ""){
        item = document.getElementById('tarefas').value;
        itemId = ul.childElementCount;
        li = criarli(item,itemId);
        li.appendChild(createRemoveTaskBtn(itemId));
        ul.appendChild(li);
    }
}


criarli = function(itemValue, itemId){
    let li = document.createElement('li');

    li.setAttribute('index', itemId);

    li.appendChild(document.createTextNode(itemValue))

    return li;
}

createRemoveTaskBtn = function(){
    let btn = document.createElement('button');
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "X";
    return btn;
}

removeTask = function(itemId){
    for(i=0;i<ul.children.length; i++){
        if (ul.children[i].getAttribute("index") == itemId){
            ul.children[i].remove();
        }
    }
}