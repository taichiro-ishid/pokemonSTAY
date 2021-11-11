BEGIN TRANSACTION;

INSERT INTO pokeusers(username) VALUES('test');
INSERT INTO get_pokemons (user_id,pokemon_name,count) VALUES('1','ピカチュウ','1');

COMMIT;