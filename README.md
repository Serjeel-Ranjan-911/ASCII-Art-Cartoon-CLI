<h1 align="center">ASCII Cartoon Character for terminal 👨‍💻</h3>

<div align="center">

![GitHub contributors](https://img.shields.io/github/contributors/Serjeel-Ranjan-911/ASCII-Art-Cartoon-CLI?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/Serjeel-Ranjan-911/ASCII-Art-Cartoon-CLI?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/phraze?color=%23CB3837&label=Downloads%20on%20NPM&logo=npm&logoColor=%23CB3837&style=for-the-badge)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-yellow.svg?style=for-the-badge)](http://makeapullrequest.com)

</div>

<br />
<div align="center">
  
  <p align="center">
    You must have heard of cowsay 🐮. But why remain restricted only to cow?
  </p>
    
  <p align="center">
    Here we have collections of famous cartoon and characters that repeats the phrase ready to be used in terminal and your javascript projects.
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This is an ASCII characters collection that you can use on your terminal.

<p align="center"> 
    <img width="51%" src="./Extra/casper.png" alt="screenshot">
    <img width="48%" src="./Extra/fred.png" alt="screenshot">
    <img width="42%" src="./Extra/spongebob.png" alt="screenshot">
    <img width="57%" src="./Extra/homer.png" alt="screenshot">
</p>

# Usage

## Install globally in your terminal

Make sure you have npm installed in your system

```sh
npm --version
```

Install the package

```sh
npm install -g phraze
```

Check the installation

```sh
phraze --version
```

Finally use it anywhere

- Default cartoon is pup

```sh
phraze "Hello Guys"
phraze "Hello Guys" homer
echo "Hello Guys" | phraze
```

For full command usage see and to view all available characters -

```sh
phraze --help
```

## Import in your javascript project

First install in your local project

```sh
npm install phraze --save
```

Import the package

```js
import { phraze } from "phraze";
```

Use the function

```js
phraze("Your message here!", "pup");
```

Alternatively, you may return a string instead of logging, passing a truthy 3rd argument:

```js
phraze("Your message here!", "pup", true);
```

Function :-

```js
phraze(<type your message here>,<character name here>,<returnMode optional boolean>)
```

## Use in require-based (CommonJS) project

With nodejs >=13 you can consume this module using [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) along returnMode

```javascript
const phraze = async (string, character) => {
	return await import("phraze")
		.then((module) => module.phraze(string, (character = "pup"), true))
		.catch((error) => error);
};
```

## Contributors

Want to publish your own ASCII art here for public usage?

Look in `Contributors.md` for full detail. Plus you can add your name signature on your art and take credit for it.

<h3 align="center">Built With</h3>

<p align="center"> 
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node">
</p>

<h3 align="center">ASCII ART Credits</h3>

<div align="center">

[asciiart](https://www.asciiart.eu/) |
[texteditor](https://texteditor.com/gallery/)

</div>

<h3 align="center">Supported By</h3>
<div align="center">

[boxen](https://github.com/boxen) |
[gradient-string](https://github.com/bokub/gradient-string) |
[taketalk](https://github.com/stephenplusplus/taketalk)

</div>

<div align="center">

  <h3>Our Precious Contributors ❤️</h3>
  <a href="https://github.com/Serjeel-Ranjan-911/ASCII-Art-Cartoon-CLI/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Serjeel-Ranjan-911/ASCII-Art-Cartoon-CLI" />
  </a>
</div>
