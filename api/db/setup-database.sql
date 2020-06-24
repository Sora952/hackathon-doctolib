CREATE DATABASE hackathon-doctolib CHARACTER SET utf8mb4 collate utf8mb4_unicode_ci;
USE hackathon-doctolib;

CREATE TABLE IF NOT EXISTS user(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(64) UNIQUE NOT NULL,
  password VARCHAR(64) NOT NULL,
  name VARCHAR(128) NOT NULL
);