//This script is used for this website "https://www.sec.gov/edgar/search/#/q=food%2520and%2520drug&dateRange=custom&startdt=2011-01-01&enddt=2012-01-01"
//It gets the results of each page automatically opens and closes the iFrame and copies iFrame data automatically
//It keeps copying data as JSON objects into an array until there are no more pages left. 
//It will automatically change pages to copy data for next page.

//To use this script go to the website link and just paste this link in the console and press enter thats it! 

//Runs best at 2 to 3 sec
//1 or 2 minor errors on 1.5 sec
//A lot of errors on 1 sec
var time = 2000;

//------------------------------------------
var results = document.getElementById("results");
var child = results.children;
var children = child[1].children;
var children2 = children[1].children;
var children3 = children2[2].children;
var tr = children3[1].children;
var nav = children2[3];
var ul = nav.children;
var ulChilds = ul[0].children;

var array = [];
var i = 0;
var r = 2;
var run = true;
var interval = setInterval(function() { 
if(i < tr.length) {
run = true;
var td = tr[i].children;
var a = td[0].children
var h = a[0]
h.click();
i++;
add_values(td);
}else if(r<(ulChilds.length )) { 
if(run == true){
var li = ulChilds[r].children;
var a2 = li[0];
a2.click();
r++;
run = false;
console.log(array);
}
setTimeout(function() {results = document.getElementById("results");
child = results.children;
children = child[1].children;
children2 = children[1].children;
children3 = children2[2].children;
tr = children3[1].children;
i = 0;
},1500);

}
else { 
console.log(array);
clearInterval(interval);}
},time);




function add_values(td){
setTimeout(function(){

var previewer = document.getElementById("previewer").children;
var modal = previewer[0].children;
var modalChild = modal[0].children;
var modalBody = modalChild[1].children;
var document2 = modalBody[1].children;
var iFrame = document2[0];
var iDoc = iFrame.contentWindow.document;
var inputs = iDoc.body.children;
// console.log(inputs);
var inputs2 = inputs[0].innerText;
let data2 = [];
data2.push(inputs2);

var footer = modalChild[2].children;
footer[2].click();

var JSON = {FormAndFile:td[0].textContent,filed:td[1].textContent,reportingFor:td[2].textContent,filedEntityPerson:td[3].textContent,data:data2};
array.push(JSON);
} ,time/2);

}
