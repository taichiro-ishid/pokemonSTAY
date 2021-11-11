# pokemonSTAY
■概要
ポケモンを捕まえて、ポケモンマスターを目指そう！

■各APIの説明  
●トレーナー作成API  
→まずはトレーナーを作成しよう！トレーナーの名前をbodyに入れてputすれば作成できるよ！  
　・HTTPリクエストメソッド  
　　・POST  
　・エンドポイント  
　　・/pokemon/users  
　・body  
　　・{"name" : "トレーナー名"}  
　・例  
　　・リクエスト：  
　　　　・エンドポイント：POST http://localhost:3000/pokemon/users  
　　　　・リクエストボディ：{ "name": "satoshi" }  
　　・レスポンス：  
        ・HTTPステータス：201  
        ・body：  
    {  
        "id": 1,  
        "username": "satoshi",  
        "createdAt": "05:38:07"  
    }  
  
●ポケモンゲットAPI  
→トレーナーが作成出来たら、いよいよポケモンを捕まえられるぞ！トレーナー名をPOSTしてポケモンを捕まえよう！  
　・HTTPリクエストメソッド  
　　・POST  
　・エンドポイント  
　　・/pokemon/getpokemons  
　・body  
　　・{"name" : "トレーナー名"}  
　・例  
　　・リクエスト：  
　　　　・エンドポイント：POST http://localhost:3000/pokemon/getpokemons   
　　　　・body：{ "name": "satoshi" }  
　　・レスポンス：  
        ・HTTPステータス：201  
        ・body：野生のラプラスを捕まえた！  
  
●図鑑確認API  
→君がどれくらいポケモンを捕まえたか確認できるぞ！博士の図鑑評価も必見だ！  
　・HTTPリクエストメソッド  
　　・GET  
　・エンドポイント  
　　・/pokemon/getpokemons/:id  
　　※idはユーザーIDを指しています。  
　・例  
　　・リクエスト：  
　　　　・エンドポイント：GET http://localhost:3000/pokemon/getpokemons/1  
　　・レスポンス：  
    [  
         {  
            "id": 67,  
            "user_id": 1,  
            "pokemon_name": "ラプラス",  
            "count": 1,  
            "createdAt": "2021-11-11T09:37:42.694Z"  
        },  
        {  
            "図鑑評価": "まだまだ沢山のポケモンがいるぞ！目指せポケモンマスター！"  
        }  
    ]  
  
●図鑑リセットAPI  
→すべてのポケモンを逃がすことができるぞ！図鑑の状況もリセットされるので要注意だ！  
　・HTTPリクエストメソッド  
　　・DELETE  
　・エンドポイント  
　　・/pokemon/getpokemons  
　・body   
　　・{ "id": "ユーザID" }  
　・例  
　　・リクエスト：  
　　　　・エンドポイント：DELETE http://localhost:3000/pokemon/getpokemons/1  
        ・body：{ "id": "1" }  
　　・レスポンス：  
        ・HTTPステータス:200  
        ・body：ポケモンを逃がしたよ！  
  
●トレーナー名変更API  
→トレーナー名を変更することができるぞ！  
　・HTTPリクエストメソッド  
　　・path  
　・エンドポイント  
　　・/pokemon/users  
　・body  
　　・{ "oldName": "変更前のトレーナー名","newName": "変更後のトレーナー名" }  
　・例  
　　・リクエスト：  
　　　　・エンドポイント：patch http://localhost:3000/pokemon/users  
        ・body：{ "oldName": "satoshi","newName": "shigeru" }  
　　・レスポンス：  
        ・HTTPステータス:200  
        ・body：名前をshigeruに変更したよ！  