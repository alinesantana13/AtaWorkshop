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
