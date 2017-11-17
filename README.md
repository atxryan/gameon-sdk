# gameon
This is a Node.js wrapper for [GameOn](https://www.gameonapp.com/).

This Node.js module is still under development; it has been tested but is not guaranteed for production use. Issues and PRs welcome! :)

## Installation

`npm install `


## Usage

```javascript
const gameonsdk = require('../gameon');
const GameOn = new gameonsdk();

GameOn.getTeams( {competitionId : "bdde04a5-14b6-414e-866f-69a39db52ebe"} )
        .then( function(result){ console.log (result.body) } );
```


