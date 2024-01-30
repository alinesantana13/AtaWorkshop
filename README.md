## Rastreamento de Participação em Workshops

## :computer: Comandos para rodar o projeto

```bash
git clone link
```

```bash
cd desafio-backend-m02-b2bt05
```

```bash
npm install
```

```bash
npm run dev
```

O servidor inciará na porta:3000 - para isso acesse:

```bash
http://localhost:3000
```

## Banco de dados

#### Workshops

| campo              | tipo de dado |
| ------------------ | ------------ |
| id                 | int          |
| nome               | string       |
| data_de_realizacao | date         |
| descricao          | string       |

#### Colaboradores

| campo | tipo de dado |
| ----- | ------------ |
| id    | int          |
| nome  | string       |

#### Ata de Presença

| campo          | tipo de dado |
| -------------- | ------------ |
| id             | int          |
| workshop_id    | int          |
| colaborador_id | int          |

## Rotas

/api/workshops

/api/colaboradores

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
