# Desafio 1 #N1 - Bootcamp Agilizei
Este projeto foi realizado como proposta ao primeiro desafio do Agilizei Bootcamp.
Você também pode estar localizando este bootcamp através da página oficial https://agilizei.com/agilizei-bootcamp/

## GitHub Page

https://luisantoniosasilva.github.io/bootcamp-agilizei-desafio1/

## Tecnologias utilizadas
 - [Visual Studio Code 1.52.1](https://code.visualstudio.com)
 - [Node.js 14.15.4](https://nodejs.org/en/)
 - [Cypress 4.10.0](https://www.cypress.io)

## Dependências
### Para geração do relatório
 - [cypress-multi-reporters 1.4.0](https://www.npmjs.com/package/cypress-multi-reporters)
 - [mocha 8.2.1](https://www.npmjs.com/package/mocha)
 - [mochawesome 6.2.1](https://www.npmjs.com/package/mochawesome?activeTab=versions)
 - [mochawesome-merge 4.2.0](https://www.npmjs.com/package/mochawesome-merge)
 - [mochawesome-report-generator 5.1.0](https://www.npmjs.com/package/mochawesome-report-generator)
### Para geração de dados aleatórios
 - [chance 1.1.7](https://www.npmjs.com/package/chance)

## Cenário de teste
- Cadastrar um novo usuário

## Fluxo do cenário

- Acessar o site [automation practice](http://automationpractice.com)
- Clicar no botão de Sign in
- Preencher as informações de e-mail (não pode ser repetido)
- Clicar no botão Create an Account
- Preencher as informações do formulário de cadastro
- Clicar no botão Register
- Validar que foi redirecionado para a url correta
- Validar exibição do texto 'Welcome to your account'