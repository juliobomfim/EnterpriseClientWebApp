# EnterpriseClientWebApp

Esta é uma aplicação web desenvolvida em Angular 18.2, projetada como uma Single Page Application (SPA) para gerenciar clientes empresariais. 
A aplicação inclui telas de cadastro e listagem, consumindo o serviço `EnterpriseClientService` para interações com a API.

## Funcionalidades

- Listagem de Clientes: Visualizar os clientes cadastrados.
- Cadastro e Edição de Clientes: Inserir e editar dados dos clientes.
- Remoção de Clientes: Excluir clientes.

## Tecnologias

- [Angular 18.2](https://angular.io/)
- TypeScript
- HTML
- CSS
- RxJS

## Requisitos

- Aplicação serviço em execução.
- Alterar caminho do serviço na linha 5 (apiUrl) EnterpriseClientWebApp\src\app\Service\http-provider.service.ts caso necessário.

## Como executar

- Instale as dependencias `npm install`.
- Inicie o servidor de desenvolvimento com `ng serve`.
- Abra no navegador http://localhost:4200.

