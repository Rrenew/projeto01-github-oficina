const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");
const listaCadastros = document.getElementById("listaCadastros");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  mensagem.textContent = "";
  mensagem.style.color = "red";

  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();

  if (!nome || !telefone || !email || !cpf) {
    mensagem.textContent = "Preencha todos os campos";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mensagem.textContent = "Email inválido";
    return;
  }
  const apenasNumeros = telefone.replace(/\D/g, "");
  if (!/^\d{10,11}$/.test(apenasNumeros)) {
    mensagem.textContent = "Telefone inválido (somente números)";
    return;
  }
  let telefoneFormatado;
  if (apenasNumeros.length === 11) {
    telefoneFormatado = `(${apenasNumeros.slice(0,2)}) ${apenasNumeros.slice(2,7)}-${apenasNumeros.slice(7)}`;
  } else {
    telefoneFormatado = `(${apenasNumeros.slice(0,2)}) ${apenasNumeros.slice(2,6)}-${apenasNumeros.slice(6)}`;
  }

  const li = document.createElement("li");
  li.textContent = `Nome: ${nome}, Telefone: ${telefoneFormatado}, Email: ${email}, 'Cpf: ${cpf}`;
  listaCadastros.appendChild(li);

  mensagem.style.color = "green";
  mensagem.textContent = `Cadastro de ${nome} realizado com sucesso!`;

  form.reset();
});