const Fila = () =>{
    let dados = [];
    const enfileirar = valor =>{
        dados.push(valor);
    }
    const tamanho = () => dados.lenght;
    const estaVaia = () => dados.lenght;
    const desenfileirar = () => {
    if(estaVaia){
        dados.push(0,1);
        imprimir();
    }
}
    const imprimir = () => {
    console.log(dados);
}
    return {
    enfileirar,
    desenfileirar,
    tamanho
}

};
const filaUnica = Fila();
const numItens = () => Math.floor(Math.random() * (15 * 1) + 1); 
(function(){
for(let i=0; i<15;i++){
    filaUnica.enfileirar({id:"P"+f1.tamanho()+1,itens:numItens()});
}

})();