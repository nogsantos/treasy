# Roadmap

## Requisitos técnicos

1. [x] O frontend deve ser construído utilizando AngularJS 1.6.x;
2. [x] Pode ser utilizada qualquer biblioteca ou componente do AngularJS;
3. [x] O model da aplicação não precisa ser persistido, ela precisa manter as informações somente enquanto estivermos na página, se a página for recarregada a aplicação pode voltar ao estado inicial;
4. [x] Deve ser utilizado Bower para gerenciar as dependências;
5. [x] Deve ser utilizado Grunt ou Gulp para fazer o build e expedição da aplicação;

## Requisitos funcionais

1. [x] Estrutura de arvore.
	* [x] Deve ser possível expandir e fechar cada um dos nós e também ter a opção de expandir e fechar todos ao mesmo tempo;
2. [ ] Adicionar, editar, excluir os nós da arvore (CRUD).
	* [x] Ao excluir um nó todos os seus filhos devem ser removidos também;
	* [x] Ao cadastrar ou editar um nó devem ser solicitados os campos código, descrição e observação sendo que somente código e descrição são obrigatórios;
	* [x] Não deve ter limite de níveis e nós cadastrados;
	* [x] Na exibição da arvore deve mostrar somente a descrição dos nós e ao colocar o mouse sobre um nó deve exibir um tooltip com o código, a descrição e a observação do nó;
3. [x] Busca pela descrição do nó
	* [x] Ao filtrar a arvore devem ser exibidos somente os nós que contém o termo pesquisado e todos os seus pais para que ela mantenha a hierarquia;
