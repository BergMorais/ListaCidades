 // Array de estados
 const statesArray = [
  {"sigla": "AC", "nome": "Acre"},
  {"sigla": "AL", "nome": "Alagoas"},
  {"sigla": "AP", "nome": "Amapá"},
  {"sigla": "AM", "nome": "Amazonas"},
  {"sigla": "BA", "nome": "Bahia"},
  {"sigla": "CE", "nome": "Ceará"},
  {"sigla": "DF", "nome": "Distrito Federal"},
  {"sigla": "ES", "nome": "Espírito Santo"},
  {"sigla": "GO", "nome": "Goiás"},
  {"sigla": "MA", "nome": "Maranhão"},
  {"sigla": "MT", "nome": "Mato Grosso"},
  {"sigla": "MS", "nome": "Mato Grosso do Sul"},
  {"sigla": "MG", "nome": "Minas Gerais"},
  {"sigla": "PA", "nome": "Pará"},
  {"sigla": "PB", "nome": "Paraíba"},
  {"sigla": "PR", "nome": "Paraná"},
  {"sigla": "PE", "nome": "Pernambuco"},
  {"sigla": "PI", "nome": "Piauí"},
  {"sigla": "RJ", "nome": "Rio de Janeiro"},
  {"sigla": "RN", "nome": "Rio Grande do Norte"},
  {"sigla": "RS", "nome": "Rio Grande do Sul"},
  {"sigla": "RO", "nome": "Rondônia"},
  {"sigla": "RR", "nome": "Roraima"},
  {"sigla": "SC", "nome": "Santa Catarina"},
  {"sigla": "SP", "nome": "São Paulo"},
  {"sigla": "SE", "nome": "Sergipe"},
  {"sigla": "TO", "nome": "Tocantins"}
];
  
  // Função para criar e adicionar elementos de cidade
  function criarEAddElemento(cidade) {
      const cidadeOption = document.createElement("option");
      cidadeOption.textContent = cidade.nome;
      municipios.appendChild(cidadeOption);
  }

  // Função para buscar cidades com base no estado
  async function buscarCidadesCE(estado) {
      municipios.innerHTML = ''; // Limpa a lista de municípios
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.toLowerCase()}/municipios`;
      try {
          const resposta = await fetch(url);
          const json = await resposta.json();
          json.forEach(criarEAddElemento);
      } catch (error) {
          alert("Não foi possível carregar as cidades");
          console.log(error);
      }
  }

  // Adiciona opções de estados ao dropdown e configura o evento de mudança
  statesArray.forEach(e => {
      const estadoOption = document.createElement("option");
      estadoOption.textContent = `${e.sigla} - ${e.nome}`;
      estadoOption.value = e.sigla;
      if (e.sigla === "CE") {
          estadoOption.selected = true;
          buscarCidadesCE(e.sigla); // Carrega cidades para o estado CE por padrão
      }
      estados.appendChild(estadoOption);
  });

  // Adiciona o evento de mudança ao dropdown de estados
  estados.addEventListener("change", (e) => {
      buscarCidadesCE(e.target.value);
  });
