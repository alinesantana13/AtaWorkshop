## Rastreamento de Participação em Workshops
Projeto feito durante processo seletivo para estágio, em que era necessário construir uma API REST sendo fullstack.

## :computer: Comandos para rodar o projeto

```bash
git clone link
```

```bash
cd fullstack-dotnet-angular
```

```bash
cd ApiRastreamento
```
```bash
npm install
```
Comando para rodar a parte do frontend
```bash
ng serve
```

Abrir outro terminal 

```bash
cd WebApiRastreamento
```
Comando para rodar a parte do backend
```bash
cd dotnet run
```

## Banco de dados

#### Workshops

| campo              | tipo de dado |
| ------------------ | ------------ |
| Id                 | int          |
| Nome               | string       |
| Data_de_realizacao | DateTime         |
| Descricao          | string       |

#### Colaboradores

| campo | tipo de dado |
| ----- | ------------ |
| Id    | int          |
| Nome  | string       |

#### Ata de Presença

| campo          | tipo de dado |
| -------------- | ------------ |
| Id             | int          |
| Workshop_id    | int          |
| Colaborador_id | int          |

## Rotas usadas no frontend

/api/workshops

/api/colaboradores

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
