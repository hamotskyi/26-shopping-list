let shoppingList = [];
let ul = document.getElementById('ul');
let ulDone =  document.getElementById('ulDone');

class Product {
    constructor (title) {
        this.title = title;
        this.quantity = 1;
    }
}

function addNewProduct() {

    let inputArticle = document.getElementById('inputArticle').value;
    let newProduct = new Product(inputArticle);
    

    if (!shoppingList.length) {

        shoppingList.push(newProduct);
        let li = document.createElement("li");
        let label = document.createElement("label");
        let pName = document.createElement('p');
        let pQuantity = document.createElement('p');
        let inputCheck = document.createElement("input");
        let attFor = document.createAttribute("for");
        let attOnchange = document.createAttribute("onchange");//
        let attIdForP = document.createAttribute("id");
        let attIdForInp = document.createAttribute("id");
        let attType = document.createAttribute("type");
        let name = shoppingList[0].title
        let quant = shoppingList[0].quantity
        let textQuantity = document.createTextNode(`x ${quant}`)
        let textName = document.createTextNode(`${name}`)
        attType.value = "checkbox";
        attIdForInp.value = `check${shoppingList.length - 1}`;
        attFor.value = attIdForInp.value;
        attIdForP.value = `qt${shoppingList.length - 1}`;
        attOnchange.value = "productFilter(this)";//
        ul.appendChild(li);
        li.appendChild(label);
        label.appendChild(pName);
        label.appendChild(pQuantity);
        label.appendChild(inputCheck);
        pName.appendChild(textName);
        pQuantity.appendChild(textQuantity);
        inputCheck.setAttributeNode(attType);
        inputCheck.setAttributeNode(attIdForInp);
        inputCheck.setAttributeNode(attOnchange);//
        label.setAttributeNode(attFor);
        pQuantity.setAttributeNode(attIdForP);


    } else {

        let index = shoppingList.findIndex((product) => {
          return (product.title == inputArticle);
        });

        if (index == -1) {

            shoppingList.push(newProduct);
            let li = document.createElement("li");
            let label = document.createElement("label");
            let pName = document.createElement('p');
            let pQuantity = document.createElement('p');
            let inputCheck = document.createElement("input");
            let attFor = document.createAttribute("for");
            let attOnchange = document.createAttribute("onchange");
            let attIdForP = document.createAttribute("id");
            let attIdForInp = document.createAttribute("id");
            let attType = document.createAttribute("type");
            let name = shoppingList[shoppingList.length - 1].title
            let quant = shoppingList[shoppingList.length - 1].quantity
            let textQuantity = document.createTextNode(`x ${quant}`)
            let textName = document.createTextNode(`${name}`)
            attType.value = "checkbox";
            attIdForInp.value = `check${shoppingList.length - 1}`;
            attFor.value = attIdForInp.value;
            attIdForP.value = `qt${shoppingList.length - 1}`;
            attOnchange.value = "productFilter(this)";
            ul.appendChild(li);
            li.appendChild(label);
            label.appendChild(pName);
            label.appendChild(pQuantity);
            label.appendChild(inputCheck);
            pName.appendChild(textName);
            pQuantity.appendChild(textQuantity);
            inputCheck.setAttributeNode(attType);
            inputCheck.setAttributeNode(attIdForInp);
            inputCheck.setAttributeNode(attOnchange);
            label.setAttributeNode(attFor);
            pQuantity.setAttributeNode(attIdForP);

        } else {

            shoppingList[index].quantity++;
            let pQ = document.getElementById(`qt${index}`);
            let quant = shoppingList[index].quantity;
            let textQuantity = document.createTextNode(`x ${quant}`);
            pQ.removeChild(pQ.firstChild);
            pQ.appendChild(textQuantity);

        }

    }
    
}

function productFilter(x) {
 
    let labelParent = x.parentNode
    let liParent = labelParent.parentNode
    
    if (x.checked == true) {
        ul.removeChild(liParent)
        ulDone.appendChild(liParent)
    } else {
        ulDone.removeChild(liParent)
        ul.appendChild(liParent)
    }

}
