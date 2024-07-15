# Tech Challenge | Pós-Tech FullStack Development - FIAP
Este é o projeto desenvolvido durante a fase II do curso de pós-graduação em FullStack Development da FIAP - turma I/2024.

Membros do grupo 37: Felipe Dias Amorim Pessoa - RM355212 - felipediasamorimpessoa@gmail.com / Leonardo Felipe Boatti - leonardoboatti@hotmail.com / Sérgio Percevallis Neto - sergioneto261001@gmail.com / Thiago Scheffer Fialho - thiago.sch.fialho@gmail.com

## O Problema
Atualmente, a maior parte de professores e professoras da rede pública de educação não têm plataformas onde postar suas aulas e transmitir conhecimento para alunos e alunas de forma prática, centralizada e tecnológica.<br>
Para solucionar esse problema, nós utilizamos os conhecimentos adquiridos na última fase para auxiliar a nossa comunidade com a criação de uma aplicação de blogging dinâmico, utilizando a plataforma OutSystems. A plataforma foi um sucesso e, agora, nossa aplicação vai escalar para um panorama nacional. Portanto, precisaremos refatorar nosso Back-end, utilizando a plataforma de desenvolvimento node.js, e precisaremos persistir esses dados em um banco de dados, seja ele SQL ou NoSQL, de acordo com a decisão do grupo.

## Requisitos Funcionais
### Os seguintes endpoints REST serão implementados para a aplicação de blogging:

- GET /posts - Lista de Posts:

  - Este endpoint permitirá aos alunos visualizarem uma lista de todos os posts disponíveis na página principal.

- GET /posts/:id - Leitura de Posts:

  - Ao acessar este endpoint com um ID específico de post, os alunos poderão ler o conteúdo completo desse post.

- POST /posts - Criação de Postagens:

  - Permite que professores criem novas postagens. Este endpoint aceitará dados como título, conteúdo e autor no corpo da requisição.

- PUT /posts/:id - Edição de Postagens:

  - Usado para editar uma postagem existente. Professores deverão fornecer o ID do post que desejam editar e os novos dados no corpo da requisição.

- GET /posts/admin - Listagem de Todas as Postagens (Visão Administrativa):

  - Este endpoint permitirá que professores vejam todas as postagens criadas, facilitando a gestão do conteúdo.

- DELETE /posts/:id - Exclusão de Postagens:

  - Permite que professores excluam uma postagem específica, usando o ID do post como parâmetro.

- GET /posts/search - Busca de Posts:

  - Este endpoint permitirá a busca de posts por palavras-chave. Os usuários poderão passar uma query string com o termo de busca e o sistema retornará uma lista de posts que contêm esse termo no título ou conteúdo.

## Requisitos Técnicos
- Back-end em Node.js:

  - Implementação do servidor usando Node.js.

  - Utilização de frameworks como Express para roteamento e middleware.

- Persistência de Dados:

  - Utilização de um sistema de banco de dados (por exemplo, MongoDB, PostgreSQL).

  - Implementação de modelos de dados adequados para as postagens.

- Containerização com Docker:

  - Desenvolvimento e implantação usando contêineres Docker para garantir consistência entre ambientes de desenvolvimento e produção.

- Automação com GitHub Actions:

  - Configuração de workflows de CI/CD para automação de testes e deploy.

- Documentação:

  - Documentação técnica detalhada do projeto, incluindo setup inicial, arquitetura da aplicação e guia de uso das APIs.

- Cobertura de Testes:

  - O projeto deve garantir que pelo menos 30% do código seja coberto por testes unitários. Essa medida é essencial para assegurar a qualidade e a estabilidade do código, especialmente em funções críticas como criação, edição e exclusão de postagens.

## Stack Utilizada
- Node.js v20
- TypeScript
- Express
- Docker
- Github Action
- Swagger
- PostgreSQL