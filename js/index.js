const listaProdutos = document.querySelector(".listaProdutos")
function ecommerce(produtos){
    
    listaProdutos.innerHTML = ""
    produtos.forEach((item) => {
        const tagLi = document.createElement("li")
        const tagFigure = document.createElement("figure")
        const tagImg = document.createElement("img")
        const divCard = document.createElement("div")
        const pCardCategoria = document.createElement("p")
        const h3Card = document.createElement("h3")
        const pCardDescricao = document.createElement("p")
        const pCardPreco = document.createElement("p")
        const buttonCardCarrinho = document.createElement("button")    

        tagImg.src = `${item.img}`
        tagImg.alt = item.nameItem
        pCardCategoria.innerText = item.tag
        h3Card.innerText = item.nameItem
        pCardDescricao.innerText = item.description
        pCardPreco.innerText = `R$ ${item.value}`
        buttonCardCarrinho.innerText = item.addCart
        buttonCardCarrinho.id = item.id

        tagFigure.append(tagImg)
        divCard.append(pCardCategoria,h3Card,pCardDescricao,pCardPreco,buttonCardCarrinho)
        tagLi.append(tagFigure,divCard)
        
        tagFigure.classList.add("cardImg")
        tagLi.classList.add("cardProduto")
        
        divCard.classList.add("cardInformacoes")
        pCardCategoria.classList.add("cardCategoria")
        h3Card.classList.add("cardNomeProduto")
        pCardDescricao.classList.add("cardDescricao")
        pCardPreco.classList.add("cardPreco")
        buttonCardCarrinho.classList.add("cardCarrinho") 
        listaProdutos.append(tagLi)
    });
    
    
}





const valorTotal = document.querySelector(".valorTotal")
function soma(arrayProdutos){

    let somaProduto = 0
    for(let i = 0; i < arrayProdutos.length; i++){
        somaProduto += arrayProdutos[i].value
    }

    valorTotal.innerText = `R$ ${somaProduto.toFixed(2)}`

}

const quantidade = document.querySelector(".numeroQuantidade")
function quantidadeTotal(arrayProdutos){

    let somaQuantidade = 0
    for(let i = 0; i < arrayProdutos.length; i++){
        somaQuantidade++
    }

    quantidade.innerText = `${somaQuantidade}`

}


const botaoPesquisar = document.querySelector(".botao")
const inputText = document.querySelector(".input")

function filtroPesquisa(){

    const textValue = inputText.value
    const listaPesquisa = data.filter((produto) =>{
        if(produto.nameItem.toLowerCase().includes(textValue.toLowerCase())){
            return true
        }

    })
    ecommerce(listaPesquisa)

}
botaoPesquisar.addEventListener("click",filtroPesquisa)


function filtrarTodos(){

    const listaTodos = data.filter((produto) =>{
        return produto.tag[0]

    })
    ecommerce(listaTodos)
    
}
const botaoTodos = document.querySelector(".navAcessoTodos")
botaoTodos.addEventListener("click",filtrarTodos)



function filtrarAcessorios(){

    const listaAcessorios = data.filter((produto) =>{
        return produto.tag[0] === "Acessórios"

    })
    ecommerce(listaAcessorios)

}
const botaoAcessorios = document.querySelector(".navAcessoAcessorios")
botaoAcessorios.addEventListener("click",filtrarAcessorios)



function filtrarCalcados(){

    const listaCalcados = data.filter((produto) =>{
        return produto.tag[0] === "Calçados"
    })

    ecommerce(listaCalcados)

}
const botaoCalcados = document.querySelector(".navAcessoCalcados")
botaoCalcados.addEventListener("click",filtrarCalcados)



function filtrarCamisetas(){

    const listaCamisetas = data.filter((produto) =>{
        return produto.tag[0] === "Camisetas"
    })

    ecommerce(listaCamisetas)
}
const botaoCamisetas = document.querySelector(".navAcessoCamisetas")
botaoCamisetas.addEventListener("click",filtrarCamisetas)







// const arrayCarrinho = []


// // // FUNÇÃO PARA PEGAR O CLICK

// function buttonAdd(){
    
//     // const meuProdutoId = evento.target.id
//     // const meuProduto = data.find((item)=>{
//         console.log("oi")
//         // return item.id == meuProdutoId
//     // })
//     // arrayCarrinho.push(meuProduto)
//     // listaItem(arrayCarrinho)
// }
// const botaosAdd = document.querySelector(".cardCarrinho")
// botaosAdd.addEventListener("click",buttonAdd) 


// FUNÇÃO PARA RENDERIZAR NO CARRINHO

const listaCarrinho = document.querySelector(".containerItem")
function carrinho(produtos){ 
    

    produtos.forEach((item) => {
    
    const liCarrinho = document.createElement("li")
    const figureCarrinho = document.createElement("figure")
    const imgCarrinho = document.createElement("img")
    const divCarrinho = document.createElement("div")
    const pNomeProduto = document.createElement("p")
    const pPrecoProduto = document.createElement("p")
    const buttonRemoveCarrinho = document.createElement("button")
    
    imgCarrinho.src = `${item.img}`
    imgCarrinho.alt = item.nameItem
    pNomeProduto.innerText = item.nameItem
    pPrecoProduto.innerText = `R$ ${item.value}`
    buttonRemoveCarrinho.innerText = "Remover produto"
    buttonRemoveCarrinho.id = item.id
    
    figureCarrinho.classList.add("imagemCarrinho")
    liCarrinho.classList.add("produtoCarrinho")
    
    
    divCarrinho.classList.add("infoCarrinho")
    pNomeProduto.classList.add("nomeCarrinho")
    pPrecoProduto.classList.add("precoCarrinho")
    buttonRemoveCarrinho.classList.add("removerProduto") 
    
    figureCarrinho.append(imgCarrinho)
    divCarrinho.append(pNomeProduto,pPrecoProduto,buttonRemoveCarrinho)
    liCarrinho.append(figureCarrinho,divCarrinho)
    listaCarrinho.append(liCarrinho)

});
    quantidadeTotal(produtos)
    soma(produtos)

}carrinho(data)




// function listaItem(arrayProdutos){
    
//     listaCarrinho.innerHTML = ""
    
//     for(let i = 0; i < arrayProdutos.length; i++){
//         const itens = arrayProdutos[i]
        
//         const itensCar = carrinho(itens)
//         listaCarrinho.appendChild(itensCar)
//     }
// }




// function removerTarefa(event){
//     const buttonRemove = event.target
    
//     if(buttonRemove.tagName == "BUTTON"){
        
//         const index = buttonRemove.id
//         arrayCarrinho.splice(index,1)
//         listaItem(arrayCarrinho)
        
//         console.log(index)
        
//         console.log(buttonRemove)
//     }
// }
// listaCarrinho.addEventListener("click", removerTarefa)
