const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../src/server");
chai.should();

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
// const server = setupServer();
// describe("Pokemon API Server", () => {
//     let request;
//     beforeEach(() => {
//         request = chai.request(server).keepOpen();
//     });

//     describe("GET /pokemon/user", () => {
//         it("should get valid user", async() => {
//             fres = await request.get("/pokemon/user?name=a");
//             res.should.be.html;
//             const expected = "aa";
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("POST /pokemon/user", () => {
//         it("should post valid user", async() => {
//             const res = await request.post("/pokemon/user").send({ name: "test" });
//             res.should.be.html;
//             res.should.have.status(201);
//             request.close();
//         });
//     });
// });



//     describe("GET /api/pokemon", () => {
//         it("should get all pokemon", async() => {
//             const res = await request.get("/api/pokemon?limit=3");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                     id: "001",
//                     name: "Bulbasaur",
//                     classification: "Seed Pokémon",
//                     types: ["Grass", "Poison"],
//                     resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                     weight: {
//                         minimum: "6.04kg",
//                         maximum: "7.76kg",
//                     },
//                     height: {
//                         minimum: "0.61m",
//                         maximum: "0.79m",
//                     },
//                     fleeRate: 0.1,
//                     evolutionRequirements: {
//                         amount: 25,
//                         name: "Bulbasaur candies",
//                     },
//                     evolutions: [{
//                             id: 2,
//                             name: "Ivysaur",
//                         },
//                         {
//                             id: 3,
//                             name: "Venusaur",
//                         },
//                     ],
//                     maxCP: 951,
//                     maxHP: 1071,
//                     attacks: {
//                         fast: [{
//                                 name: "Tackle",
//                                 type: "Normal",
//                                 damage: 12,
//                             },
//                             {
//                                 name: "Vine Whip",
//                                 type: "Grass",
//                                 damage: 7,
//                             },
//                         ],
//                         special: [{
//                                 name: "Power Whip",
//                                 type: "Grass",
//                                 damage: 70,
//                             },
//                             {
//                                 name: "Seed Bomb",
//                                 type: "Grass",
//                                 damage: 40,
//                             },
//                             {
//                                 name: "Sludge Bomb",
//                                 type: "Poison",
//                                 damage: 55,
//                             },
//                         ],
//                     },
//                 },
//                 {
//                     id: "002",
//                     name: "Ivysaur",
//                     classification: "Seed Pokémon",
//                     types: ["Grass", "Poison"],
//                     resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                     weight: {
//                         minimum: "11.38kg",
//                         maximum: "14.63kg",
//                     },
//                     height: {
//                         minimum: "0.88m",
//                         maximum: "1.13m",
//                     },
//                     fleeRate: 0.07,
//                     "Previous evolution(s)": [{
//                         id: 1,
//                         name: "Bulbasaur",
//                     }, ],
//                     evolutionRequirements: {
//                         amount: 100,
//                         name: "Bulbasaur candies",
//                     },
//                     evolutions: [{
//                         id: 3,
//                         name: "Venusaur",
//                     }, ],
//                     maxCP: 1483,
//                     maxHP: 1632,
//                     attacks: {
//                         fast: [{
//                                 name: "Razor Leaf",
//                                 type: "Grass",
//                                 damage: 15,
//                             },
//                             {
//                                 name: "Vine Whip",
//                                 type: "Grass",
//                                 damage: 7,
//                             },
//                         ],
//                         special: [{
//                                 name: "Power Whip",
//                                 type: "Grass",
//                                 damage: 70,
//                             },
//                             {
//                                 name: "Sludge Bomb",
//                                 type: "Poison",
//                                 damage: 55,
//                             },
//                             {
//                                 name: "Solar Beam",
//                                 type: "Grass",
//                                 damage: 120,
//                             },
//                         ],
//                     },
//                 },
//                 {
//                     id: "003",
//                     name: "Venusaur",
//                     classification: "Seed Pokémon",
//                     types: ["Grass", "Poison"],
//                     resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                     weight: {
//                         minimum: "87.5kg",
//                         maximum: "112.5kg",
//                     },
//                     height: {
//                         minimum: "1.75m",
//                         maximum: "2.25m",
//                     },
//                     fleeRate: 0.05,
//                     "Previous evolution(s)": [{
//                             id: 1,
//                             name: "Bulbasaur",
//                         },
//                         {
//                             id: 2,
//                             name: "Ivysaur",
//                         },
//                     ],
//                     maxCP: 2392,
//                     maxHP: 2580,
//                     attacks: {
//                         fast: [{
//                                 name: "Razor Leaf",
//                                 type: "Grass",
//                                 damage: 15,
//                             },
//                             {
//                                 name: "Vine Whip",
//                                 type: "Grass",
//                                 damage: 7,
//                             },
//                         ],
//                         special: [{
//                                 name: "Petal Blizzard",
//                                 type: "Grass",
//                                 damage: 65,
//                             },
//                             {
//                                 name: "Sludge Bomb",
//                                 type: "Poison",
//                                 damage: 55,
//                             },
//                             {
//                                 name: "Solar Beam",
//                                 type: "Grass",
//                                 damage: 120,
//                             },
//                         ],
//                     },
//                 },
//             ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("POST /api/pokemon", () => {
//         it("should post valid pokemon", async() => {
//             const res = await request
//                 .post("/api/pokemon")
//                 .send({ id: "152", name: "test" });
//             res.should.be.json;
//             const expected = JSON.stringify([{ id: "152", name: "test" }]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:id", () => {
//         it("should get valid pokemon by id", async() => {
//             const res = await request.get("/api/pokemon/1");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                 id: "001",
//                 name: "Bulbasaur",
//                 classification: "Seed Pokémon",
//                 types: ["Grass", "Poison"],
//                 resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                 weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                 weight: {
//                     minimum: "6.04kg",
//                     maximum: "7.76kg",
//                 },
//                 height: {
//                     minimum: "0.61m",
//                     maximum: "0.79m",
//                 },
//                 fleeRate: 0.1,
//                 evolutionRequirements: {
//                     amount: 25,
//                     name: "Bulbasaur candies",
//                 },
//                 evolutions: [{
//                         id: 2,
//                         name: "Ivysaur",
//                     },
//                     {
//                         id: 3,
//                         name: "Venusaur",
//                     },
//                 ],
//                 maxCP: 951,
//                 maxHP: 1071,
//                 attacks: {
//                     fast: [{
//                             name: "Tackle",
//                             type: "Normal",
//                             damage: 12,
//                         },
//                         {
//                             name: "Vine Whip",
//                             type: "Grass",
//                             damage: 7,
//                         },
//                     ],
//                     special: [{
//                             name: "Power Whip",
//                             type: "Grass",
//                             damage: 70,
//                         },
//                         {
//                             name: "Seed Bomb",
//                             type: "Grass",
//                             damage: 40,
//                         },
//                         {
//                             name: "Sludge Bomb",
//                             type: "Poison",
//                             damage: 55,
//                         },
//                     ],
//                 },
//             }, ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:name", () => {
//         it("should get valid pokemon by name", async() => {
//             const res = await request.get("/api/pokemon/Bulbasaur");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                 id: "001",
//                 name: "Bulbasaur",
//                 classification: "Seed Pokémon",
//                 types: ["Grass", "Poison"],
//                 resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                 weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                 weight: {
//                     minimum: "6.04kg",
//                     maximum: "7.76kg",
//                 },
//                 height: {
//                     minimum: "0.61m",
//                     maximum: "0.79m",
//                 },
//                 fleeRate: 0.1,
//                 evolutionRequirements: {
//                     amount: 25,
//                     name: "Bulbasaur candies",
//                 },
//                 evolutions: [{
//                         id: 2,
//                         name: "Ivysaur",
//                     },
//                     {
//                         id: 3,
//                         name: "Venusaur",
//                     },
//                 ],
//                 maxCP: 951,
//                 maxHP: 1071,
//                 attacks: {
//                     fast: [{
//                             name: "Tackle",
//                             type: "Normal",
//                             damage: 12,
//                         },
//                         {
//                             name: "Vine Whip",
//                             type: "Grass",
//                             damage: 7,
//                         },
//                     ],
//                     special: [{
//                             name: "Power Whip",
//                             type: "Grass",
//                             damage: 70,
//                         },
//                         {
//                             name: "Seed Bomb",
//                             type: "Grass",
//                             damage: 40,
//                         },
//                         {
//                             name: "Sludge Bomb",
//                             type: "Poison",
//                             damage: 55,
//                         },
//                     ],
//                 },
//             }, ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("PATCH /api/pokemon/:id", () => {
//         it("should patch valid pokemon by id", async() => {
//             const res = await request.patch("/api/pokemon/1").send({ name: "test" });
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                 id: "001",
//                 name: "test",
//                 classification: "Seed Pokémon",
//                 types: ["Grass", "Poison"],
//                 resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                 weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                 weight: {
//                     minimum: "6.04kg",
//                     maximum: "7.76kg",
//                 },
//                 height: {
//                     minimum: "0.61m",
//                     maximum: "0.79m",
//                 },
//                 fleeRate: 0.1,
//                 evolutionRequirements: {
//                     amount: 25,
//                     name: "Bulbasaur candies",
//                 },
//                 evolutions: [{
//                         id: 2,
//                         name: "Ivysaur",
//                     },
//                     {
//                         id: 3,
//                         name: "Venusaur",
//                     },
//                 ],
//                 maxCP: 951,
//                 maxHP: 1071,
//                 attacks: {
//                     fast: [{
//                             name: "Tackle",
//                             type: "Normal",
//                             damage: 12,
//                         },
//                         {
//                             name: "Vine Whip",
//                             type: "Grass",
//                             damage: 7,
//                         },
//                     ],
//                     special: [{
//                             name: "Power Whip",
//                             type: "Grass",
//                             damage: 70,
//                         },
//                         {
//                             name: "Seed Bomb",
//                             type: "Grass",
//                             damage: 40,
//                         },
//                         {
//                             name: "Sludge Bomb",
//                             type: "Poison",
//                             damage: 55,
//                         },
//                     ],
//                 },
//             }, ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("PATCH /api/pokemon/:name", () => {
//         it("should patch valid pokemon by name", async() => {
//             const res = await request
//                 .patch("/api/pokemon/Ivysaur")
//                 .send({ name: "test2" });
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                 id: "002",
//                 name: "test2",
//                 classification: "Seed Pokémon",
//                 types: ["Grass", "Poison"],
//                 resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
//                 weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//                 weight: {
//                     minimum: "11.38kg",
//                     maximum: "14.63kg",
//                 },
//                 height: {
//                     minimum: "0.88m",
//                     maximum: "1.13m",
//                 },
//                 fleeRate: 0.07,
//                 "Previous evolution(s)": [{
//                     id: 1,
//                     name: "Bulbasaur",
//                 }, ],
//                 evolutionRequirements: {
//                     amount: 100,
//                     name: "Bulbasaur candies",
//                 },
//                 evolutions: [{
//                     id: 3,
//                     name: "Venusaur",
//                 }, ],
//                 maxCP: 1483,
//                 maxHP: 1632,
//                 attacks: {
//                     fast: [{
//                             name: "Razor Leaf",
//                             type: "Grass",
//                             damage: 15,
//                         },
//                         {
//                             name: "Vine Whip",
//                             type: "Grass",
//                             damage: 7,
//                         },
//                     ],
//                     special: [{
//                             name: "Power Whip",
//                             type: "Grass",
//                             damage: 70,
//                         },
//                         {
//                             name: "Sludge Bomb",
//                             type: "Poison",
//                             damage: 55,
//                         },
//                         {
//                             name: "Solar Beam",
//                             type: "Grass",
//                             damage: 120,
//                         },
//                     ],
//                 },
//             }, ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("DELETE /api/pokemon/:id", () => {
//         it("should DELETE valid pokemon by id", async() => {
//             const res = await request.delete("/api/pokemon/151");
//             res.should.be.json;
//             const actual = JSON.parse(res.text);
//             const actualPokemon = actual.pokemon.filter((val) => {
//                 val.id === "151";
//             });
//             const expected = 0;
//             actual.pokemon.length.should.equal(151);
//             actualPokemon.length.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("DELETE /api/pokemon/:name", () => {
//         it("should DELETE valid pokemon by name", async() => {
//             const res = await request.delete("/api/pokemon/Mewtwo");
//             res.should.be.json;
//             const actual = JSON.parse(res.text);
//             const actualPokemon = actual.pokemon.filter((val) => {
//                 val.name === "Mewtwo";
//             });
//             const expected = 0;
//             actual.pokemon.length.should.equal(150);
//             actualPokemon.length.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:id/evolutions", () => {
//         it("should get valid evolutions by id", async() => {
//             const res = await request.get("/api/pokemon/1/evolutions");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                     id: 2,
//                     name: "Ivysaur",
//                 },
//                 {
//                     id: 3,
//                     name: "Venusaur",
//                 },
//             ]);
//             res.text.should.equal(expected);
//             request.close();
//         });

//         it("should get valid evolutions by id", async() => {
//             const res = await request.get("/api/pokemon/3/evolutions");
//             res.should.be.json;
//             const expected = JSON.stringify([]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:name/evolutions", () => {
//         it("should get valid evolutions by name", async() => {
//             const res = await request.get("/api/pokemon/Charmander/evolutions");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                     id: 5,
//                     name: "Charmeleon",
//                 },
//                 {
//                     id: 6,
//                     name: "Charizard",
//                 },
//             ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:id/evolutions/previous", () => {
//         it("should get valid previous evolutions by id", async() => {
//             const res = await request.get("/api/pokemon/6/evolutions/previous");
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                     id: 4,
//                     name: "Charmander",
//                 },
//                 {
//                     id: 5,
//                     name: "Charmeleon",
//                 },
//             ]);
//             res.text.should.equal(expected);
//             request.close();
//         });

//         it("should get valid evolutions by id", async() => {
//             const res = await request.get("/api/pokemon/4/evolutions/previous");
//             res.should.be.json;
//             const expected = JSON.stringify([]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/pokemon/:name/evolutions/previous", () => {
//         it("should get valid evolutions by name", async() => {
//             const res = await request.get(
//                 "/api/pokemon/Charizard/evolutions/previous"
//             );
//             res.should.be.json;
//             const expected = JSON.stringify([{
//                     id: 4,
//                     name: "Charmander",
//                 },
//                 {
//                     id: 5,
//                     name: "Charmeleon",
//                 },
//             ]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });

//     describe("GET /api/types", () => {
//         it("should get all types", async() => {
//             const res = await request.get("/api/types?limit=3");
//             res.should.be.json;
//             const expected = JSON.stringify(["Grass", "Poison", "Fire"]);
//             res.text.should.equal(expected);
//             request.close();
//         });
//     });
// });