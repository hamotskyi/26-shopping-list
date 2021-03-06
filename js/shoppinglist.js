let shoppingList = [];
let ul = document.getElementById('ul');
let ulDone =  document.getElementById('ulDone');
let inp = document.getElementById('inputArticle');

class Product {
    constructor (title) {
        this.title = title;
        this.quantity = 1;
    }
}

inp.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {addNewProduct()}
});

function addNewProduct() {

    let rowInputData = inp.value;
    let inputArticle = rowInputData.trim();
    let newProduct = new Product(inputArticle);
    
    if (inputArticle == "") {

        let placeholder = document.createAttribute("placeholder");
        placeholder.value = "Вкажи назву продукту";
        inp.setAttributeNode(placeholder);
        inp.value = "";
        inp.focus();

    } else {

        if (!shoppingList.length) {

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
            let name = shoppingList[0].title;
            let quant = shoppingList[0].quantity;
            let textQuantity = document.createTextNode(`x ${quant}`);
            let textName = document.createTextNode(`${name}`);
            let divX = document.createElement("div");
            let attOnclickForX = document.createAttribute("onclick");
            let attClassForX = document.createAttribute("class");
            let attIdForLi = document.createAttribute("id");
            let placeholder = document.createAttribute("placeholder");
            attType.value = "checkbox";
            attIdForInp.value = `check${shoppingList.length - 1}`;
            attFor.value = attIdForInp.value;
            attIdForP.value = `qt${shoppingList.length - 1}`;
            attOnchange.value = "productFilter(this)";
            ul.appendChild(li);
            li.appendChild(label);
            li.appendChild(divX);
            label.appendChild(pName);
            label.appendChild(pQuantity);
            label.appendChild(inputCheck);
            attOnclickForX.value = "deleteListItem(this)";
            attIdForLi.value = shoppingList.length - 1;
            attClassForX.value = 'divX';
            divX.setAttributeNode(attOnclickForX);
            divX.setAttributeNode(attClassForX);
            li.setAttributeNode(attIdForLi);
            pName.appendChild(textName);
            pQuantity.appendChild(textQuantity);
            inputCheck.setAttributeNode(attType);
            inputCheck.setAttributeNode(attIdForInp);
            inputCheck.setAttributeNode(attOnchange);
            label.setAttributeNode(attFor);
            pQuantity.setAttributeNode(attIdForP);
            placeholder.value = "Додай ще щось до списку";
            inp.setAttributeNode(placeholder);
            inp.value = "";
            inp.focus();

            let divMinus = document.createElement("div");
            let attClassForMinus = document.createAttribute("class");
            let attOnclickForMinus = document.createAttribute("onclick");
            divMinus.setAttributeNode(attClassForMinus);
            divMinus.setAttributeNode(attOnclickForMinus);
            attClassForMinus.value = 'divMinus';
            attOnclickForMinus.value = 'minusItemQuantity(this)';

            let divPlus = document.createElement("div");
            let attClassForPlus = document.createAttribute("class");
            let attOnclickForPlus = document.createAttribute("onclick");
            divPlus.setAttributeNode(attOnclickForPlus);
            divPlus.setAttributeNode(attClassForPlus);
            attClassForPlus.value = 'divPlus';
            attOnclickForPlus.value = 'plusItemQuantity(this)';

            li.appendChild(divMinus);
            li.appendChild(divPlus);

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
                let name = shoppingList[shoppingList.length - 1].title;
                let quant = shoppingList[shoppingList.length - 1].quantity;
                let textQuantity = document.createTextNode(`x ${quant}`);
                let textName = document.createTextNode(`${name}`);
                let divX = document.createElement("div");
                let attOnclickForX = document.createAttribute("onclick");
                let attClassForX = document.createAttribute("class");
                let attIdForLi = document.createAttribute("id");
                let placeholder = document.createAttribute("placeholder");
                attType.value = "checkbox";
                attIdForInp.value = `check${shoppingList.length - 1}`;
                attFor.value = attIdForInp.value;
                attIdForP.value = `qt${shoppingList.length - 1}`;
                attOnchange.value = "productFilter(this)";
                attOnclickForX.value = "deleteListItem(this)";
                attIdForLi.value = shoppingList.length - 1;
                attClassForX.value = 'divX';
                divX.setAttributeNode(attOnclickForX);
                divX.setAttributeNode(attClassForX);
                li.setAttributeNode(attIdForLi);
                ul.appendChild(li);
                li.appendChild(label);
                li.appendChild(divX);
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
                placeholder.value = "Додай ще щось до списку";
                inp.setAttributeNode(placeholder);
                inp.value = "";
                inp.focus();

                let divMinus = document.createElement("div");
                let attClassForMinus = document.createAttribute("class");
                let attOnclickForMinus = document.createAttribute("onclick");
                divMinus.setAttributeNode(attClassForMinus);
                divMinus.setAttributeNode(attOnclickForMinus);
                attClassForMinus.value = 'divMinus';
                attOnclickForMinus.value = 'minusItemQuantity(this)';

    
                let divPlus = document.createElement("div");
                let attClassForPlus = document.createAttribute("class");
                let attOnclickForPlus = document.createAttribute("onclick");
                divPlus.setAttributeNode(attOnclickForPlus);
                divPlus.setAttributeNode(attClassForPlus);
                attClassForPlus.value = 'divPlus';
                attOnclickForPlus.value = 'plusItemQuantity(this)';

                li.appendChild(divMinus);
                li.appendChild(divPlus);

            } else if (shoppingList[index].quantity == 0) {

                shoppingList[index].quantity++;
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
                let name = shoppingList[index].title;
                let quant = shoppingList[index].quantity;
                let textQuantity = document.createTextNode(`x ${quant}`);
                let textName = document.createTextNode(`${name}`);
                let divX = document.createElement("div");
                let attOnclickForX = document.createAttribute("onclick");
                let attClassForX = document.createAttribute("class");
                let attIdForLi = document.createAttribute("id");
                let placeholder = document.createAttribute("placeholder");
                attType.value = "checkbox";
                attIdForInp.value = `check${index}`;
                attFor.value = attIdForInp.value;
                attIdForP.value = `qt${index}`;
                attOnchange.value = "productFilter(this)";
                attOnclickForX.value = "deleteListItem(this)";
                attIdForLi.value = index;
                attClassForX.value = 'divX';
                divX.setAttributeNode(attOnclickForX);
                divX.setAttributeNode(attClassForX);
                li.setAttributeNode(attIdForLi);
                ul.appendChild(li);
                li.appendChild(label);
                li.appendChild(divX);
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
                placeholder.value = "Додай ще щось до списку";
                inp.setAttributeNode(placeholder);
                inp.value = "";
                inp.focus();

                let divMinus = document.createElement("div");
                let attClassForMinus = document.createAttribute("class");
                let attOnclickForMinus = document.createAttribute("onclick");
                divMinus.setAttributeNode(attClassForMinus);
                divMinus.setAttributeNode(attOnclickForMinus);
                attClassForMinus.value = 'divMinus';
                attOnclickForMinus.value = 'minusItemQuantity(this)';
    
                let divPlus = document.createElement("div");
                let attClassForPlus = document.createAttribute("class");
                let attOnclickForPlus = document.createAttribute("onclick");
                divPlus.setAttributeNode(attOnclickForPlus);
                divPlus.setAttributeNode(attClassForPlus);
                attClassForPlus.value = 'divPlus';
                attOnclickForPlus.value = 'plusItemQuantity(this)';
    
                li.appendChild(divMinus);
                li.appendChild(divPlus);

            } else {

                shoppingList[index].quantity++;
                let pQ = document.getElementById(`qt${index}`);
                let quant = shoppingList[index].quantity;
                let textQuantity = document.createTextNode(`x ${quant}`);
                let placeholder = document.createAttribute("placeholder");
                pQ.removeChild(pQ.firstChild);
                pQ.appendChild(textQuantity);
                placeholder.value = "Додай ще щось до списку";
                inp.setAttributeNode(placeholder);
                inp.value = "";
                inp.focus();

                let styleOpacity = document.createAttribute("style");
                pQ.setAttributeNode(styleOpacity);
                styleOpacity.value = 'opacity:1;';
                
            }

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

};

function deleteListItem(y) {
 
    let liParent = y.parentNode;
    let index = liParent.id;
    liParent.remove();
    shoppingList[index].quantity = 0;
    
};

function plusItemQuantity(z) {

    let liParent = z.parentNode;
    let index = liParent.id;
    shoppingList[index].quantity++;
    let pQ = document.getElementById(`qt${index}`);
    let quant = shoppingList[index].quantity;
    let textQuantity = document.createTextNode(`x ${quant}`);
    pQ.removeChild(pQ.firstChild);
    pQ.appendChild(textQuantity);
    let styleOpacity = document.createAttribute("style");
    pQ.setAttributeNode(styleOpacity);
    styleOpacity.value = 'opacity:1;';

};

function minusItemQuantity(m) {
    
    let liParent = m.parentNode;
    let index = liParent.id;

    if (shoppingList[index].quantity == 1) {
        
        liParent.remove();
        shoppingList[index].quantity = 0;
    
    } else if (shoppingList[index].quantity == 2) {
    
        shoppingList[index].quantity = 1;
        let pQ = document.getElementById(`qt${index}`);
        let quant = shoppingList[index].quantity;
        let textQuantity = document.createTextNode(`x ${quant}`);
        pQ.removeChild(pQ.firstChild);
        pQ.appendChild(textQuantity);
        let styleOpacity = document.createAttribute("style");
        pQ.setAttributeNode(styleOpacity);
        styleOpacity.value = 'opacity:auto;';

    } else if (shoppingList[index].quantity > 2) {

        shoppingList[index].quantity -= 1;
        let pQ = document.getElementById(`qt${index}`);
        let quant = shoppingList[index].quantity;
        let textQuantity = document.createTextNode(`x ${quant}`);
        pQ.removeChild(pQ.firstChild);
        pQ.appendChild(textQuantity);
        let styleOpacity = document.createAttribute("style");
        pQ.setAttributeNode(styleOpacity);
        styleOpacity.value = 'opacity:1;';

    }

}