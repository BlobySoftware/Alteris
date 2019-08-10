# Alteris
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

### Using 🛠️
Import functions
``` JavaScript 
import * from 'alteris' 
```

#### Object Convertions:
```JavaScript
let obj = { name:'Alex', pass:123}

\\Obj to array
obj.toArray(); \\[name, alex, pass, 123]

\\Obj to string
obj.toString(); \\"name:alex, pass:123"

```

#### Array Convertions:
```JavaScript
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
```JavaScript
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
```JavaScript
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
<<<<<<< HEAD

=======
>>>>>>> 08f1f801c8f3d38092cfe54d3d5a4db02c5689de
