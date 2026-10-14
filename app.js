const api = axios.create({
    baseURL: "https://axios-lzi0.onrender.com/"
});

const section = "users";
let record = [];

const $ = selector => document.querySelector(selector);

async function listar(endpoint = `${section}`) {
    try {
        const { data } = await api.get(section);
        return data;
    } catch (tomate) {
        console.log("Erro na consulta: " + tomate.message)
    }
}

function renderizar(){
    const lisUsers = section === "users";
    $('#page-title').textContente = isUsers ? "Usuários" : "produtos";
    $('#table-head').innerHTML = isUsers 
        ? '<tr><th>ID</th><th>Nome</th><th>E-mail<th>'
        : '<tr><th>ID</th><th>Produtos</th><th>Preço</th>';
    $('#table-body').innerHTML = record.map(
        item => `
            <tr>
                <td>${item.id ?? "-"}</td>
                <td>${item.nome ?? "-"}</td>
                <td>${item.email ?? "-"}</td>
            </tr>
    `);
}

async function carreagar() {
    record = await listar();
}

carreagar();



