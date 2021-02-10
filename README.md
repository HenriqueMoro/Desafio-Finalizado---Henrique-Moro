# Desafio-Finalizado---Henrique-Moro

## Descrição do Projeto

Esta é uma aplicação de consulta de clima, foi construída com ReactJS no frontend e NodeJs no backend para a persistência dos dados.
Ao entrar na home do site o programa irá detectar automaticamente a localização do usuário através do ip que é obtido a partir de uma api.

Portanto o site mostrará no instante que entrar o clima na região que o usuário está. 
Existe um campo de busca onde poderá pesquisar o clima de qualquer região desejada.
Todas as pesquisas feitas ficaram armazenadas no backend, sendo possível olhar o histórico de busca a qualquer momento

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/HenriqueMoro/Desafio-Finalizado---Henrique-Moro.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
```
### 🎲 Rodando o Front End

```bash
# Clone este repositório
$ git clone <https://github.com/HenriqueMoro/Desafio-Finalizado---Henrique-Moro.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Desafio

# Vá para a pasta server
$ cd frontend

# Instale as dependências
$ yarn ou npm install

# Execute a aplicação em modo de desenvolvimento
$ yarn start ou npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Knex](http://knexjs.org)
- [Sqlite3](https://www.sqlite.org/index.html)
- [Axios](https://www.npmjs.com/package/axios)
