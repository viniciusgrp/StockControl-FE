Olá.

Esse é um sistema de controle de estoque feito com React.

Tecnologias utilizadas:

React, Redux, TypeScript, Styled-Components, Axios, React-router-dom, react-hook-form, react-icons, Vite.

Link para acessar o projeto sem necessidade de rodar localmente:

Deploy:
https://stock-control-fe.vercel.app/

ATENÇÃO:
Por conta do deploy do back end ser o modelo grátis, ao abrir o site provavelmente a API estará suspensa por falta de atividade, mas basta aguardar alguns segundos e ir atualizando a página que logo aparecerá os itens do estoque.

Para rodar o front end localmente siga os seguintes passos:

1 - Caso queira rodar o Back End também localmente, baixe, instale e configure-o, seguindo os passos presentes no README do seguinte repositório:

https://github.com/viniciusgrp/StockControl

Caso contrário este repositório estará pronto para funcionar utilizando o deploy.

1.1 - Vá até src/services/index.tsx, descomente a linha 4 e comente a linha 5, atualizando a 4 conforme suas configurações do Back End.


2 - Clone este repositório para a sua máquina:

Abra o Git na pasta onde deseja baixar e cole o seguinte comando:
git clone git@github.com:viniciusgrp/StockControl-FE.git

3 - Abra a pasta do repositório e abra utilizando o VS Code.

4 - No VS Code abra o terminal e instale as dependências, digite o seguinte comando:
yarn

5 - Também no terminal, execute o ambiente de desenvolvimento digitando:
yarn dev

6 - No console aparecerá algo assim:
➜  Local:   http://127.0.0.1:5173/
➜  Network: use --host to expose
➜  press h to show help

Clique no http://127.0.0.1:5173/ enquanto segura CTRL que uma aba com o projeto abrirá.

============================================================================================================

Sobre o projeto:

Trata-se de um sistema de controle de estoque, onde é possível criar, editar, ler e excluir os itens presentes no estoque.

O sistema é de apenas uma página pois optei por utilizar modais, mas estaria prontag para receber outras páginas adicionais pois já está com todo o react-router-dom configurado.

Os filtros são funcionais e funcionam de forma acumulativa, ou seja, você pode procurar todos os produtos com determinado nome e ordená-los da forma que preferir.

Existem duas possibilidades de visualização do estoque, sendo em formato de caixas ou de tabela, bastando clicar nos botões presentes ao lado do filtro de itens por página.

O projeto também conta com sistema de paginação, feito de forma dinâmica de acordo com a quantidade de resultados obtidos da API.

Foi feita a responsividade do site.

Sempre que um produto é adicionado, atualizado ou excluído uma nova requisição é feita, atualizando a lista automáticamente.

Todos os números estão no padrão brasileiro.

A pesquisa por nome pode ser parcial e não é case sensitive.

A página ficou com um design simples, mas completamente funcional, meu ponto fraco é justamente design, tenho mais facilidade em seguir um design feito por um profissional, mas pretendo iniciar um curso de UI / UX assim que terminar meu atual curso de programação.
