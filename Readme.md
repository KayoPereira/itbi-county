## Itbi county

> A script to detect if the user is leaving the page after some time and calls a function.

The "ITBI Percentual by Municipalities" library is a powerful tool developed in JavaScript to simplify obtaining percentage values ​​of the ITBI (Imposto sobre a Transmissão de Bens Imóveis) in different municipalities in Brazil. This library aims to facilitate access and analysis of ITBI rates, providing an efficient solution for developers, researchers and analysts seeking to understand tax variations in real estate transactions.

## Installing

Install the library via `npm install itbi-county` or `yarn add itbi-county`.

## How to use

If you used npm/yarn, just import the file:

```js
import Itbi from 'itbi-county'
```

And now you can use it like:

```js
const itbi = new Itbi('SP', 'guarulhos') // ('brazilian_state', 'county')
console.log(itbi.init()) // => print itbi value
```

## Testing

You can see the tests on [index.test.js](https://github.com/KayoPereira/itbi-county/blob/master/src/index.test.js), use `yarn test` to run the tests. If you want to see an example working on the Browser, just run `yarn start`.
