function getDadosEnderecoPorCEP() {
  let cep = document.querySelector("#cep").value;
  let newcep = cep.replace('.','').replace('-','')
  console.log(newcep)

  let url = "https://viacep.com.br/ws/" + newcep + "/json/";


  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url);

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      let dadosJSONText = xmlHttp.responseText;
      let dadosJSONObj = JSON.parse(dadosJSONText);
      document.querySelector("#endereco").value = dadosJSONObj.logradouro;
      document.querySelector("#bairro").value = dadosJSONObj.bairro;
      document.querySelector("#cidade").value = dadosJSONObj.localidade;
      document.querySelector("#uf").value = dadosJSONObj.uf;
    }
  };

  xmlHttp.send();
}

function limpar(){
 document.querySelector('.form-control').value = ''
 cep.focus()

}
