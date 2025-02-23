body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    color: #333;
}

header {
    background-color: #ff8c42;
    color: white;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
}

header p {
    margin: 5px 0 0;
}

#menu {
    padding: 20px;
}

#menu h2 {
    color: #ff8c42;
}

#menu ul {
    list-style-type: none;
    padding: 0;
}

#menu ul li {
    background-color: white;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
    position: fixed;
    width: 100%;
    bottom: 0;
}

/* Estilos para a galeria de fotos */
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Cria colunas responsivas */
    gap: 10px; /* Espaço entre as fotos */
    padding: 20px;
}

.galeria img {
    width: 100%; /* Largura total do contêiner */
    height: 150px; /* Altura fixa */
    object-fit: cover; /* Enquadra a foto sem distorcer */
    border-radius: 10px; /* Borda arredondada */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
    transition: transform 0.3s ease; /* Animação ao passar o mouse */
}

.galeria img:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
}

#ifood {
    text-align: center;
    padding: 20px;
    background-color: #ff8c42; /* Laranja */
    color: white;
    margin: 20px 0;
}

#ifood a {
    color: white;
    background-color: #333; /* Preto */
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

#ifood a:hover {
    background-color: #555; /* Cinza escuro ao passar o mouse */
}
