# aws-lambda-event-identifier
Used to return a type of input event from aws lambda

## Installation

    npm install aws-lambda-event-identifier


## Usage


```js
var identifier = require('aws-lambda-event-identifier');

exports.handler = function( event, context ) {
  // Catch event
  var data = event;
  console.log(identifier.eventIdentifier(data));
  context.done();
}

```
