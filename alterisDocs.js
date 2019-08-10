//Converts object to array
Object.prototype.toArray=function(){
    const keys = Object.keys(this);
    const vals = Object.values(this);
    let arry = [];
    if(keys.length){
        keys.map((e, i) =>{
            arry.push(e);
            arry.push(vals[i]);
        })
    }else{
        arry.push(keys[0]);
        arry.push(vals[0]);
    }
    return arry;
}
//Converts object to string
Object.prototype.toString=function(){
    let str = "";
    let keys = Object.keys(this);
    let vals = Object.values(this);
    if(keys.length){
	keys.map((e, i) => str += `${e}:${vals[i]}, `);
        str = str.substr(0, str.length-2);
    } 
    else str = `${keys[0]}:${vals[0]}`;
    return str;
}
//Converts string to int
String.prototype.toInt=function(){
    return Math.max(this);
}
//Converts string to Array
String.prototype.toArray=function(str=false){
    let arry = [];
    if(str) return this.split(" ");
    else if(typeof(str) === "string") return this.split(str);
    else{
        for(let i = 0 ; i < this.length ;i++) arry.push(this.charAt(i));
        return arry;
    }
}
//String to object
String.prototype.toObject=function(str=false){
    const l = this.split(" ");
    if(!str){
        let obj = {};
      for(let i =0 ;i<l.length;i++){
        obj[l[i]] = l[i+1];
        i++;
      }
      return obj
    }
    else if(str) return Object.assign({}, l);
}
//Converts number into Array
Number.prototype.toArray=function(){
    let str = this.toString();
    let arry = [];
    for(let i = 0 ; i < str.length ;i++) arry.push(str.charAt(i));
   return arry.map(Number);
}
//Converts number into Object
Number.prototype.toObject=function(){
    const str = this.toString();
    let arry = [];
    for(let i = 0 ; i < str.length ;i++) arry.push(str.charAt(i));
    return Object.assign({},arry.map(Number));
}
//Converts array in Int variable
Array.prototype.toInt=function(){
    return Math.max(this);
}
//Array to Object
Array.prototype.toObject = function(str){
    if(str === undefined){
        let obj = {};
      for(let i =0 ;i<this.length;i++){
        obj[this[i]] = this[i+1];
        i++;
      }
      return obj
    }else if(str) return Object.assign({}, this);
}
//Converts array in String variable
Array.prototype.toString= function(){
    return this.map(String).join("");
}
