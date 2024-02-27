//Objeto contendo as informações relevantes do produto.
const produto = {};

//Testando se as informações desejadas existem na página.
var nomeTeste = document.querySelector('#field_generic_name');
var marcaTeste = document.querySelector('#field_brands');
var ingredientesTeste = document.querySelector('#panel_ingredients .button');
var quantidadeTeste = document.querySelector('#field_quantity');


if(nomeTeste)
    produto.nome = document.querySelector('#field_generic_name').innerText;
else
    produto.nome = 'Nome indisponível';

if(marcaTeste)
    produto.marca = document.querySelector('#field_brands').innerText;
else
    produto.marca = 'Marca indisponível';

if(quantidadeTeste)
    produto.quantidade = document.querySelector('#field_quantity').innerText;
else
    produto.quantidade = 'Quantidade indisponível';


if(!ingredientesTeste)//Verificando se há o botão de inserir ingredientes. Caso exista, faltam os ingredientes.
    produto.ingredientes = 'Ingredientes: ' + document.querySelector('#panel_ingredients_content').innerText;
else
    produto.ingredientes = 'Ingredientes indisponível';

//Incluindo as 3 informações no objeto produto: Nutri-score, NOVA e Eco-score.
const info = document.querySelectorAll('#attributes_grid .attr_text');
produto.nutriScore = info[0].innerText;
produto.nova = info[1].innerText;
produto.ecoScore = info[2].innerText;



//Impressão do objeto.
console.log(produto);

//Impressão de todas as informações coletadas.
var elementos = Object.values(produto);
for(i = 0; i < elementos.length; i++)
    console.log(elementos[i]);