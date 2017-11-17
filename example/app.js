//@ts-check

var builder = require('botbuilder');
const gameonsdk = require('../gameon');
const GameOn = new gameonsdk();

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);
var intents = new builder.IntentDialog();

intents
    .matches(/^get teams/i, () => {
        GameOn.getTeams({competitionId:"bdde04a5-14b6-414e-866f-69a39db52ebe"})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get games/i, () => {
        GameOn.getGames({competitionId:"bdde04a5-14b6-414e-866f-69a39db52ebe"})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get game stats/i, () => {
        GameOn.getGameStats()
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get players/i, () => {
        GameOn.getPlayers({teamId:"d5a2eb42-8065-4174-ab79-0a6fa820e35e"})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get player stats/i, () => {
        GameOn.getPlayerStats({playerId: "245baa8e-c6b2-4287-bd39-988837c09fb8"})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get player game stats/i, () => {
        GameOn.getPlayerGameStats({})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get game events/i, () => {
        GameOn.getGameEvents({})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get team news/i, () => {
        GameOn.getTeamNews({})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get team stats/i, () => {
        GameOn.getTeamStats({})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get team game stats/i, () => {
        GameOn.getTeamGameStats({})
        .then( function(result){ console.log (result.body) } );
    })
    .matches(/^get fantasy ranks/i, () => {
        GameOn.getFantasyRanks({})
        .then( function(result){ console.log (result.body) } );
    })
    .onDefault((session) => {
        session.send("Wrong command")
    });

bot.dialog('/', intents);

