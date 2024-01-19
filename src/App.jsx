// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;
  const total = dados.compras
    .map((a) => +a.preco.replace("R$ ", ""))
    .reduce((a, b) => a + b);
  console.log(total);
  return (
    <div>
      <div>Nome: {dados.cliente}</div>
      <div>Idade: {dados.idade}</div>
      <div>
        Situação:{" "}
        <p style={{ color: dados.ativa ? "green" : "red" }}>
          {" "}
          {dados.ativa ? "Ativo" : "Inativo"}
        </p>
      </div>
      <div>Total gasto: {total}</div>
      <div>{total > 10000 ? "Você está gastando muito" : ""}</div>
    </div>
  );
};

export default App;
