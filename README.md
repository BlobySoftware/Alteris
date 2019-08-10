
<div align="center">
  <img src="https://raw.githubusercontent.com/blobysoftware/img/master/alteris.png" width="200">
  <br/>
  <br/>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg">
  <img src="https://badge.fury.io/js/alteris.svg">
</div>

#### Alteris is a javascript data parsed, merge the simplicity of other lenguages in just 1kb 👌, this library its build on ES6 for better performance 💪, you can get all data compatibility for javascript objects. ⚡ 

### Install 🌍
Npm install
```
npm i alteris
```
Local install 
```
git clone https://github.com/BlobySoftware/Alteris.git
```
CDN
```
https://blobysoftware.github.io/Alteris/alteris.js
```

### Using 🛠️
Import functions
```javaScript 
import * from 'alteris' 
```
Or use script tag for local
```html
<script href='https://blobysoftware.github.io/Alteris/alteris.js'></script>
```

#### Object Convertions:
```javaScript
let obj = { name:'Alex', pass:123}

\\Obj to array
obj.toArray(); \\[name, alex, pass, 123]

\\Obj to string
obj.toString(); \\"name:alex, pass:123"

```

#### Array Convertions:
```javaScript
let arry = ["a", "l", "t", "v", "1", 3];

\\Arry to string
arry.toString(); \\"altv13"

\\Arry to obj
arry.toObject(); \\{a:"l", t:"v", 1:3}

\\Arry to int
arry.toInt(); \\NaN
arry.slice(3,6).toInt() \\13
```

#### String Convertions:
```javaScript
let str = "hello world, :3"

\\Str to array
str.toArray(); \\["h","e","l","l","o"," ","w","o","r","l","d",",",":",3]
str.toArray(true); \\["hello", "world, :3"]
str.toArray(","); \\["hello world", ":3"]

\\Str to int
str.toInt(); \\NaN
str.substr(13).toInt(); \\ 3

\\Str to object
str.toObject() \\ {hello: 'world', ",:" : 3}
str.toObject(true) \\ {0:"h", 1:"e", 2:"l", 3:"l", 4:"o" ...} 
```
* If you pass true to ObjectFunction in string data the object assign a default key for each character
* You can select the separator of words in array convertion

#### Number Convertions:
```javaScript
let num = 3577

\\Num to array
num.toArray(); \\[3, 5, 7, 7]

\\Num to string
num.toString(); \\"3577"

\\Num to object
num.toObject(); \\{3: 5, 7: 7}

```
-------------
### LICENSE
MIT 2019 all rights reserved. 

### Author
BlobySoftware®, Alex Santos

