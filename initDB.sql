/*If the database exists, we delete it*/
DROP DATABASE IF EXISTS addmusic;

/*We create the database*/
CREATE DATABASE addmusic;

/*We create the necessary tables*/
CREATE TABLE addmusic.songs(
	id INT(6) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL
);

/*We add test content to the tables*/
INSERT INTO addmusic.songs (id, name)
VALUES (1, 'nse k ase'); 
INSERT INTO addmusic.songs (id,name)
VALUES (2, 'bebo champagne y lo tiro');
INSERT INTO addmusic.songs (id, name)
VALUES (3, 'alienizer');
INSERT INTO addmusic.songs (id, name)
VALUES (4, 'keysex');
