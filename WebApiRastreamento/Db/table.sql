CREATE DATABASE IF NOT EXISTS api_rastreamento;

USE api_rastreamento;

CREATE TABLE IF NOT EXISTS colaboradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS workshops (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    dataDeRealizacao DATETIME NOT NULL,
    descricao VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS atadepresenca (
    id INT PRIMARY KEY AUTO_INCREMENT,
    colaboradorId INT,
    workshopId INT,
    FOREIGN KEY (colaboradorId) REFERENCES colaboradores(id),
    FOREIGN KEY (workshopId) REFERENCES workshops(id),
    UNIQUE(colaboradorId, workshopId)
);