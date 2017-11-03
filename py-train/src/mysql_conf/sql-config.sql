DROP DATABASE IF EXISTS train;
CREATE DATABASE train;
USE train;

CREATE TABLE station_name(
    id INT(12) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    en VARCHAR(255) NOT NULL,
    s VARCHAR(21000) NOT NULL,
    PRIMARY KEY (id)
) engine=innodb default charset=utf8