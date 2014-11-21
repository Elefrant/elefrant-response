# Elefrant Response

[![wercker status](https://app.wercker.com/status/7417010487b754c63d30542f45e2047a/s/master "wercker status")](https://app.wercker.com/project/bykey/7417010487b754c63d30542f45e2047a)

[![Dependency Status](https://gemnasium.com/Elefrant/elefrant-response.svg)](https://gemnasium.com/Elefrant/elefrant-response)


Formatter for responses. Create a formatter for each type of `Content-Type`

## Install

```sh
$ elefrant install elefrant-response
```

## Config

Copy `codes.js` from `./components/elefrant-response` to main **config** folder.


## Usage

Activate the component.


Create your own formatter:

* Create new file in `elefrant-response/lib/format/json.js`
* Develop the code:

```js
return function customizedFormatJSON(req, res, body) {
	...
	return data;
}
```


## License

MIT © [Elefrant](http://elefrant.com/#/license)
