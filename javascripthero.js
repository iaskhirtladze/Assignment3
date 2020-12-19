// 1
let firstname ='Lata';

// 2
'Geeta'

//3
let flower ='rose';
let tree = 'maple';

//4
'Toe'

//5
'Hardy'

//6
function hello() {
  return 'Hello world!';
}


// 7
function a() {
  return 'Hello a!';
}

function b() {
  return 'Hello b!';
}


// 8
function greet() {
  return 'Haydo!';
}

let salutation = greet();


// 9
'Hi!'

// 10
function echo(Greta) {
  return Greta;
}

// 11
'How do you do?'

// 12
function greet(name) {
  return 'Hello ' + name + '!';
}
//13
'Where is Jacky?'

//14
'Hi Selva! Hi Pola!'

//15
function log(){
  console.log('Hello Console!');
  }


//16
let someone = 'Ia Skhirtladze';

function log(someone){
  console.log(someone);
  }

// 17
function shout(Fire){
  let final = Fire + Fire;
  console.log(final);
  return final;
  }

// 18
'Roy and Roy'

// 19
function length(sun){
  let charNumber = sun.length;
  return charNumber;
  }

//20
  function toCase(Mthatha){

    return Mthatha.toLowerCase() + '-' + Mthatha.toUpperCase();
    }

//21
function shortcut(Amnesty,International){
  return Amnesty.charAt(0) + International.charAt(0);
  }

//22
  function firstChar(Amnesty){
    let name = Amnesty.trim();
    return name.charAt(0);
    }

 //23

    function indexOfIgnoreCase(bit,it){
      let num = it.toUpperCase();
      let num2 = bit.toUpperCase();
      
      return num2.indexOf(num);
      }

//24
function secondIndexOf(first, second){
  let index = first.indexOf(second);
  return first.indexOf(second, index +1);
  }


//25
function firstWord(something){
  let space = something.indexOf(' ');
  return  something.substr(0,space);
  }

//26



//27
function add(a, b) {
  return a +b;
}

//28
7

//29
function toFahrenheit(x){
  return 1.8 * x + 32;
  }

//30
function onesDigit(x){
  return x%10;
  }

//31 
function mean(x,y){
  return (x+y)/2;
  }

//32
function hypotenuse(a, b) {
  let side = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(side);
}

//33
function midrange(x, y, c) {
  let min = Math.min(x, y, c);
  let max = Math.max(x, y, c);
  return (min + max) / 2;
}

//34
function area(radius) {
  return Math.pow(radius,2)*Math.PI;
  }

//35
function round100(number) {
  return Math.round(number/100)*100;
  }

//36


//37
function add(number) {
  let num1 = parseInt(number, 10);
  let indexPlus = number.indexOf('+');
  let num2 = parseInt(number.substr(indexPlus+1), 10);
  return num1+num2;
}

//38
function nand(a, b) {
  let and = a && b;
  return !and;
}

//39
function nor(a, b) {
  let and = a || b;
  return !and;
}

//40
function xor(a, b) {
return (!a && b) || (a && !b);
}

//41
function equals(a, b) {
  return a===b;
  }

//42
function equals(a, b, c) {
  let first = a===b;
  let second = b===c;
  return first && second;
  }

//43
function isEven(a) {
  if (a % 2){
          return false; 
      } else {
          return true;
      }
  }
//44
function unequal(a,b,c) {
  if (a!==b && c!==b && c!==a){
          return true; 
      } else {
          return false;
      }
  }

//45
function isThreeDigit(a) {
  return a >= 100 && a < 1000;
  }

//46
function equals(a,b){
  if (a === b){
  return 'EQUAL';
  } else return 'UNEQUAL';
  }

//47
function repdigit(number) {
  let first = number%10;
  let second = Math.floor(number/10);
    if (first === second) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
  }

//48 
function addWithSurcharge(a,b){
  let cahrge1;
  let cahrge2;
  if (a <=10) {
   charge1 =1;
  } else {
    charge1 =2;
  }
  if (b <=10) {
   charge2 =1;
  } else {
    charge2 =2;
  }
  
  return a+b+charge1+charge2;
  }

  //49
  function addWithSurcharge(a,b){
    let cahrge1;
    let cahrge2;
    
    if(a<=10){
    charge1=1;
    } else{
    if (a<=20) {
     charge1 =2;
    } else {
      charge1 =3;
    }
    }
    if(b<=10){
    charge2=1;
    }else{
    if (b<=20) {
     charge2 =2;
    } else {
      charge2 =3;
    }
    }
    
    return a+b+charge1+charge2;
    }

    //50
    function toArray(a,b){
      return[a,b];
      }

    //51
    function getFirstElement(something){
      return something[0];
}
//52
function setFirstElement(something,a){
  something[0]=a;
return something;
}

//53
function getLastElement(something){
  let length = something.length;
  return something[length-1];
  }

//54
function sort(something){
  return something.sort();
  }

  //55
  function rotate(array){
    let first = array.shift();
    array.push(first);
    return array;
    }

  //56


  //57
  function concatUp(first, second) {
    if (second.length >= first.length) {
      return first.concat(second);
    }
    return second.concat(first);
  }

  //58


  //59
  function list(array){
    if (array.length===0){
    return '';}
    
    if (array.length===1){
    return array[0];}
    
    if (array.length>1){
    let newA1 = array.slice(0, array.length-1);
    let newA2 = array.slice(array.length-1);
    let newA = newA1.join(', ');
    
    return newA + ' and ' + newA2;
    }
    }
    


  //60
  function flat(loshu){
    return (loshu[0].concat(loshu[1]).concat(loshu[2]));
    }

  //61
  function median(newarray) {
    let array = newarray.sort(function(a, b){return a-b});

    if ((array.length === 1)) {
        return (array[0]);
    }

    if ((array.length === 2)) {
        return ((array[0] + array[1]) / 2);
    }

    if ((array.length === 3)) {
        return array[1];
    }

    if (array.length % 2) {
        return (array[(array.length - 1) / 2])
    } else {
        return (array[(array.length / 2) - 1] + array[array.length / 2]) / 2;
    }
}

  //62
  function hello(something){
    if (something === undefined) {
      return 'Hello world!';
    }else
    return 'Hello ' + something +'!';
    }


  //63
  function cutComment(something){

    let index = something.indexOf('/');
    if (index === -1) {
      return null;
    }else{
    return something.substr(index+3, something.length-1);
    }
    }

  
  //64

function addTo(a)
{
let sum = 0;
for (let i = 1; i <= a; i++) {
  sum = sum + i;
}
return sum;
}


//65

function factorial(a)
{
let factional = 0;
let sum =1;
for (let i = 1; i <= a; i++) {
sum = sum * i;
}
return sum;
}

//66
function mean(a){ 
  let sum =0;
  if (a[0]===0){
  return 0;
  }else {
  
  for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
  } }
  let mean = sum/a.length;
  return mean;
  }

//67
function spaces(a){
  let i=1;
  let string='';
  if(a===0){
  return '';}else
  while (i <= a) {
  string = string + ' ';
  i++;
  }
  
  return string;
  }

  //68
  function lcm(a, b) {
    let LCM = 0;
    let A;
    let B;
    
      do {
       LCM++;
       A = LCM % a;
       B = LCM % b;
      } while (A !== 0 || B !== 0)
    
      return LCM;
    }
    
//69
















