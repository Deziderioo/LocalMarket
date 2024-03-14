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


        totalElement.text(`Total: R$ ${totalPreco.toFixed(2)}`);

        
    }
    
    function removerItemDoCarrinho(index){
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho();

    }

  
    exibirCarrinho();
})