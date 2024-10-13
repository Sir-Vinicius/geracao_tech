async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

    async function listarCep(){
        if (document.getElementById('cep').value.length > 7){

            const lista = await fetchCep();

            if(!lista.erro){
                document.getElementById('rua').value = lista.logradouro
                document.getElementById('bairro').value = lista.bairro
            }
            else {
                document.getElementById('rua').value = "Digite um Cep Válido!"
            }
        }
        else{
            console.log('não tem 8 digitos')
            document.getElementById('rua').value = "Favor digite 8 números"
        }
    };
    
function busca(){
    listarCep()
}