describe("GameService Tests", function(){

	beforeEach(function(){
		module("batailleNaval");
	});

	it("La version doit être de 1.0", inject(function (GameService){
		expect(GameService.version).toEqual('1.0');
	}));

	it("Le service GameService.getGame(1) renvoie un objet Game", inject(function (GameService, $httpBackend){
		var idGame = 1;
		var gameSimule = {id: 109, name: 'Game 1'};

		$httpBackend.when('GET', 'http://localhost:3000/games/' + idGame).respond(gameSimule);

		var gamePromesse = GameService.getGame(idGame);

		gamePromesse.then(function (game){
			expect(game.id).toEqual(109);
			expect(game.name).toEqual('Game 1');
		});

		$httpBackend.flush(); // envoie toutes les réponses
	}));

	it("Le service GameService.getAllGames() renvoie une liste d'objets Game", inject(function (GameService, $httpBackend){

		var gamesSimule = [{id: 1, name: "Game 1"}, {id: 2, name: "Game 2"}, {id: 3, name: "Game 3"}];

		$httpBackend.when('GET', 'http://localhost:3000/games/').respond(gamesSimule);

		var gamesPromesse = GameService.getAllGames();

		gamesPromesse.then(function (games){
			expect(games[0].id).toEqual(1);
			expect(games[0].name).toEqual('Game 1');

			expect(games[1].id).toEqual(2);
			expect(games[1].name).toEqual('Game 2');

			expect(games[2].id).toEqual(3);
			expect(games[2].name).toEqual('Game 3');
		});

	}));
});