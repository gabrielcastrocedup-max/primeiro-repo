const helloworld = (nome="visitante") =>{
    let frase = `olá,${nome}!`;
    return frase;

}
console.log(helloworld("dione"))
console.log(helloworld("Geovana"))
console.log(helloworld(""))
console.log(helloworld())


const frutas = [
    { nome: "Maçã", preco: 4.50, peso: "200g" },
    { nome: "Banana", preco: 6.20, peso: "1kg" },
    { nome: "Melancia", preco: 15.00, peso: "4kg" },
    { nome: "Morango", preco: 8.90, peso: "250g" },
    { nome: "Manga fiapo", preco: 5.80, peso: "500g" }
];


function exibirFrutas(lista) {
    console.log("=== Lista de Frutas ===");
    
    lista.forEach((fruta, indice) => {
        console.log(`${indice + 1}. Fruta: ${fruta.nome} | Preço: R$ ${fruta.preco.toFixed(2)} | Peso: ${fruta.peso}`);
    });
}


exibirFrutas(frutas);