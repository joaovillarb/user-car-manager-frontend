# User Car Manager - Estrutura do Projeto

## Visão Geral

O projeto **User Car Manager** é uma API RESTful desenvolvido para empresa Pitang com o objetivo de gerenciar informações
de usuários e seus carros. O projeto segue a arquitetura Clean Architecture, proporcionando uma organização modular e escalável.
A estrutura do projeto é dividida em três principais pacotes:

1. Core: O diretório Core contem os componentes basicos da aplicação, interceptors, services e guard routes.
2. Features: No diretório Features, estão as principais features da aplicação, como as telas home, dashboard, login e suas devidas regras.
3. Shared: O diretório Shared contém componentes, serviços e outros recursos compartilhados entre os módulos da aplicação.

## Instalação e Execução

Para executar o projeto, siga os seguintes passos:

1. Clone o repositório:
   `git clone https://github.com/joaovillarb/user-car-manager-frontend.git`
2. Navegue até a pasta do projeto baixado.
3. Execute o comando para instalar as dependências:
   `npm install`
4. Execute o projeto com o Angular CLI (certifique-se de tê-lo instalado) ou com npm:

- Usando Angular CLI:
  `ng serve`
- Usando npm:
  `npm start`

5. O projeto estará disponível em: http://localhost:4200

## Board do Projeto

[Link para o board do projeto no github](https://github.com/users/joaovillarb/projects/4).

## Estórias de Usuário

Aqui estão as URLs do GitHub contendo as estórias de usuário do projeto:

1. [Tela about me](https://github.com/joaovillarb/user-car-manager-frontend/issues/13)
2. [Tela Home](https://github.com/joaovillarb/user-car-manager-frontend/issues/9)
2. [Manipulação do localstorage](https://github.com/joaovillarb/user-car-manager-frontend/issues/7)
3. [Configuração da guarda de rotas](https://github.com/joaovillarb/user-car-manager-frontend/issues/5)
4. [Dashboard](https://github.com/joaovillarb/user-car-manager-frontend/issues/3)
5. [Tela de usuário](https://github.com/joaovillarb/user-car-manager-frontend/issues/2)
6. [Tela de login](https://github.com/joaovillarb/user-car-manager-frontend/issues/1)

## Solução

O projeto foi desenvolvido em Angular na versão 16 devido à sua capacidade de criar interfaces de usuário interativas e escaláveis.
A arquitetura Clean Architecture foi escolhida para manter o código bem organizado, facilitando a manutenção e a escalabilidade.

## Sugestões para futuras melhorias:

- Implementação de testes unitários para garantir a qualidade do código.
- Integração contínua e entrega contínua (CI/CD) usando Jenkins ou outras ferramentas para automatizar o processo de construção e implantação.
- Melhorias na infraestrutura, como hospedagem em contêineres para maior escalabilidade.
- Criação de mais validações dos campos

## Pipeline e Sonar

- Jenkins: http://54.157.30.248:8080 (Usuário: user, Senha: user)
- Sonar: http://54.173.146.101:9000 (Usuário: user, Senha: user)

**Observação**: Este projeto atualmente não possui integração com CI/CD.

## Infraestrutura

- Jenkins hospedado na AWS Lightsail.
- Sonar hospedado na AWS Lightsail.
- Frontend hospedado na **Amazon S3**.

## Url do projeto em produção:

[Frontend User Car Manager](http://user-car-manager-frontend.s3-website.us-east-2.amazonaws.com)

