// 1) DADOS: array de objetos. Cada objeto é uma pessoa e o "id" é único.
const usuarios = [
  { id: 1, nome: "Ana",     email: "ana@email.com",     telefone: "41999999999" },
  { id: 2, nome: "Carlos",  email: "carlos@email.com",  telefone: "41988888888" },
  { id: 3, nome: "Mariana", email: "mariana@email.com", telefone: "41977777777" },
  { id: 4, nome: "João",    email: "joao@email.com",    telefone: "41966666666" },
  { id: 5, nome: "Beatriz", email: "beatriz@email.com", telefone: "41955555555" },
  { id: 6, nome: "Pedro",   email: "pedro@email.com",   telefone: "41944444444" }
];

// 2) LISTA DE NOMES: cria um botão clicável para cada pessoa.
const lista = document.getElementById("listaUsuarios");

usuarios.forEach(usuario => {
  const botao = document.createElement("button");
  botao.textContent = usuario.nome;
  botao.dataset.id = usuario.id;

  // Ao clicar, enviamos o ID da pessoa para a função de busca
  botao.onclick = function () {
    buscarUsuario(usuario.id);
  };

  lista.appendChild(botao);
});

// 3) BUSCA: recebe o ID, encontra a pessoa e preenche o formulário.
function buscarUsuario(id) {
  // find() percorre o array até achar a pessoa com o ID recebido
  const usuario = usuarios.find(pessoa => pessoa.id === id);

  // Se não encontrar, encerra a função
  if (!usuario) return;

  // .value coloca os dados dentro dos campos do formulário
  document.getElementById("nome").value = usuario.nome;
  document.getElementById("email").value = usuario.email;
  document.getElementById("telefone").value = usuario.telefone;

  // Destaque visual no botão selecionado
  document.querySelectorAll("#listaUsuarios button").forEach(b => {
    b.classList.toggle("ativo", Number(b.dataset.id) === id);
  });
}
