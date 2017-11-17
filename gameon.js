'use strict'

const _Promise = require('bluebird');
const _Request = _Promise.promisifyAll(require('request'));
const _uuid = require('uuid');
const apiurl = "http://sam.gameontechnology.com/v1";

var GameOn = function(apikey) { 
    this.apiKey = apikey;
}

GameOn.prototype.getTeams = function(params) {
    // https://sam.gameontechnology.com/v1/competitions/:competitionId/teams
    return _Request.getAsync({
        url: `${apiurl}/competitions/${params.competitionId}/teams`,
    })
}

GameOn.prototype.getGames = function(options) {
    // https://sam.gameontechnology.com/v1/competitions/:competitionId/games?teams[]=&games[]=&status[]=
    var params = options;

    if (options.teams === undefined) 
        params.teams = ""; 
    else 
        params.teams = `teams[]=${options.teams}`;

    if (options.games === undefined) 
        params.games = ""; 
    else 
        params.games = `games[]=${options.games}`;
    
    if (options.status === undefined) 
        params.status = ""; 
    else 
        params.status = `status[]=${options.status}`;

    var url = `${apiurl}/competitions/${params.competitionId}/games?${params.teams}${params.games}${params.status}`;
    console.log(url);

    return _Request.getAsync({
        url: url,
    })
}

GameOn.prototype.getGameStats = function(params) {
    // https://sam.gameontechnology.com/v1/games/:gameId/stats
    return _Request.getAsync({
        url: `${apiurl}/games/${params.gameId}/stats`,
    })
}

GameOn.prototype.getPlayers = function(params) {
    // https://sam.gameontechnology.com/v1/teams/:teamId/players
    return _Request.getAsync({
        url: `${apiurl}/teams/${params.teamId}/players`,
    })
}

GameOn.prototype.getPlayerStats = function(params) {
    // https://sam.gameontechnology.com/v1/players/:playerId/stats?competitionId=&year=
    console.log(`${apiurl}/players/${params.playerId}/stats?competitionId=${params.competitionId}&year=${params.year}`);
    return _Request.getAsync({
        url: `${apiurl}/players/${params.playerId}/stats?competitionId=${params.competitionId}&year=${params.year}`,
    })
}

GameOn.prototype.getPlayerGameStats = function(params) {
    // https://sam.gameontechnology.com/v1/players/:playerId/gamestats?limit=&year=&offset=
    return _Request.getAsync({
        url: `${apiurl}/players/${params.playerId}/gamestats?limit=${params.limit}&year=${params.year}&offset=${params.offset}`,
    })
}

GameOn.prototype.getGameEvents = function(params) {
    // https://sam.gameontechnology.com/v1/games/:gameId/pbp?limit=
    return _Request.getAsync({
        url: `${apiurl}/games/${params.gameId}/pbp?limit=${params.limit}`,
    })
}

GameOn.prototype.getTeamNews = function(params) {
    // https://sam.gameontechnology.com/v1/posts?teams[]=&limit=
    return _Request.getAsync({
        url: `${apiurl}/posts/?teams[]=${params.teamIds}&limit=${params.teamIds}`,
    })
}

GameOn.prototype.getTeamStats = function(params) {
    // https://sam.gameontechnology.com/v1/teams/:teamId/stats?year=&limit=
    return _Request.getAsync({
        url: `${apiurl}/teams/${params.teamId}/stats?year=${params.year}&limit=${params.teamId}`,
    })
}

GameOn.prototype.getTeamGameStats = function(params) {
    // https://sam.gameontechnology.com/v1/teams/:teamId/gamestats?limit=&offset=
    return _Request.getAsync({
        url: `${apiurl}/teams/${params.teamId}/gamestats?limit=${params.limit}`,
    })
}

GameOn.prototype.getFantasyRanks = function(params) {
    // http://sam.gameontechnology.com/v1/fantasy/:sport/ranks?year=&week=&playerIds[]=
    return _Request.getAsync({
        url: `${apiurl}/fantasy/${params.sport}/ranks?year=${params.year}&week=${params.week}&playerIds[]=${params.playerIds}`,
    })
}

module.exports = GameOn;