// const name="kavita"
// const repoCount=50
// // console.log(name + repoCount+" value") old way
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


// const userName = new String('kavita maurya')
// console.log(userName);
// console.log(userName[0]);
// console.log(userName[1]);
// console.log(userName[2]);
// console.log(userName[3]);
// console.log(userName.__proto__);
// console.log(userName.length);

// console.log(userName.toUpperCase());

// console.log(userName.toLowerCase());

// console.log(userName.charAt(0));

// console.log(userName.indexOf('a'));

// console.log(userName.lastIndexOf('v'));

// console.log(userName.startsWith('kav'));

// console.log(userName.endsWith('maurya'));

// console.log(userName.split(' ')); // seperate from space
// console.log(userName.split(' ')[0]);//kavita
// console.log(userName.split(' ')[1]);//maurya

// console.log(userName.replace('kavita','kavi'));
const userName = new String('nlci institute')
// let userName1=userName.substring(-13,4)//kav could not use negative value
// console.log(userName1); 
let sliceString=userName.slice(-14)
console.log(sliceString); // kav that is work same but we can not add negative value in that we we use negative number it is start reverse

console.log(userName.concat(' nlci'));
let str='kavita'
console.log(str.repeat(2));
const url="kavita@gmail.com"
console.log(url.replace("@","-"))

console.log(url.includes("kavita"));
let trimExample="       Kishori Kuch Aisa Intzaam Ho Jaye       "
console.log(trimExample);
console.log(trimExample.trim());
console.log(trimExample.split(" "));
console.log(trimExample.bold);








