# Treasy avaliação técnica

Sistema desenvolvido para avaliação técnica para a vaga de Software Engineer - Front-End na empresa [Treasy](https://www.treasy.com.br/)

## Setup

### Importante

> O ambinte de desenvolvimento foi configurado e validado para Sistemas Operacionais com base Unix, ```Linux ou Mac```. Windows não está homologado para trabalhar com esse projeto. Como não foi testado nesse ambiente, não o utilizo essa plataforma para meus trabalhos, pode ser que ocorram falhas ao inicializar o desenvolvimento.
>
> A configuração e execução do projeto depende do ```node.js```, então, caso não o tenha, instale e/ou atualize o [Node.js](https://nodejs.org/en/) em sua máquina.

Após o clone do projeto no [GitHub](https://github.com/nogsantos/treasy)

### Instalação das dependências

```shell
npm install
```

Todas as dependências do projeto devem ser instaladas.

### Ambiente de desenvolvimento

```shell
npm start
```

Ao inicializar o ambiente para desenvolvimento, as alterações realizadas no código, após serem salvas, serão refletidas no endereço ```http://localhost:8080``` após o refresh da página. O diretório ```dist``` é criado com o código.

### E2E testes

```shell
npm run e2e
```

### Arquivos para distribuição

```shell
npm run build
```

No diretório ```dist``` serão gerados os arquivos para deploy no servidor de produção.
