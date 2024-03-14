$(document).ready(function(){
    //recupera o carrinho do local storage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    //elemnto da lista
    const listaElement = $("#lista");

    //elemento de total
    const totalElement = $("#total");

    function exibirCarrinho(){
        listaElement.empty();

        //variavel para acumular o preco
        let totalPreco = 0;

        //Iteracao sobre os elementos do carrinho
        $.each(carrinho, function(index, item){
            //cria um elemento de lista para cada item
            const listItem = $("<li>").text(
                `${item.Descricao} - Preço: R$ ${item.preco.toFixed(2)}`
            );
                
                

            const removeButton = $("<button>")
            .text("❌")
            .css("margin-left", "10px")
            .click(function(){
                removerItemDoCarrinho(index);
            })
            listItem.append(removeButton)
            listaElement.append(listItem);
            totalPreco += item.preco;
        });

z   
        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);

        
    }
    
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho();

    }

  
    exibirCarrinho();
})

function gerarDocumentoWord(){
    const listaElement = document.getElementById("lista");
    const totalElement = document.getElementById("total");

    //clona lista para evitar modificacoes diretas na original
    const lsitaClone = listaElement.cloneNode(true);
    
    $(lsitaClone).find("button").remove();

    const listahtml = lista.innerHTML
    const totalHtml = totalElement.innerHTML

    const counteudoHtml = `
        <html>
            <head>
            <meta charset="UTF-8"/>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua preferencia</h3>
                <br/>
                ${listahtml}
                <br/> <br/>
                ${totalHtml}
            </body>
            </head>
        </html>
    `;


    const blob = new Blob([counteudoHtml], {type: "apllication/msword"});
}

function sucessClose(){
    document.getElementById("pedido").style.display = "none"
}