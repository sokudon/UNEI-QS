/**
 * Return a list of sheet names in the Spreadsheet with the given ID.
 * @param {String} a Spreadsheet ID.
 * @return {Array} A list of sheet names.
 */

var sid="1CpwNLrurUVVLX2dmMgZHU-uQC7WQfyfWqLlaiooRaN8";
var sname="周回のるま2";
var moment = Moment.load();

function doGet() {
  var ss = SpreadsheetApp.openById(sid);
  var sheets = ss.getSheetByName(sname);
  
　var last_row = sheets.getLastRow()-1;
　var last_col = sheets.getLastColumn()-1;
  
  
   var values= sheets.getRange(1,1,last_row ,last_col).getValues();
  var str=JSON.stringify(values);
  
  var ss=JSON.parse(str);
  
  var kyoku="2017/08/22 00:00";
  var kikan= (moment()-moment(kyoku))/3600/24/30/1000;
  
  
  for(var i=0;i<ss.length;i++)
  {
  for(var k=0;k<11;k++){
    if(k==5 && i>0){
      ss[i][k]=moment(ss[i][k]).format("YY/MM/DD HH:mm");
    }
    if(k==10 && i>0){
      ss[i][k]=moment(ss[i][k]).format("HH:mm");
    }
  }
  }
  
  
  var data=ss;

var init=["",
"ココロがかえる場所",
"Blue Symphony",
"Sentimental Venus",
"Marionetteは眠らない"];


data.sort(compare);

var BBD=[];
for(var i=1;i<5;i++){
BBD[i]=[];
for(var k=0;k<data[0].length;k++){
BBD[i][k]=data[i][k];
}}
  
var t=1;
for(var i=1;i<5;i++){
for(var k=1;k<5;k++){
if(init[i]==BBD[k][2]){
for(var j=0;j<data[0].length;j++){
data[t][j]=BBD[k][j];
}
t++;
}}}


return ;
}


//0 no,1=属,2=name,3=hiara,4=条件,5=time,6=lv,7=uta


function filetercombine(){
//ブルーミングとヘッダー分離
//allと他 分離
//all QS式　歌い分け＞実装
//他　QS式　初期＞イベ＞コミュ＞実装

}

function compare(a, b) { 

if(a[0]=="NO."){
return -1;
}
if(b[0]=="NO."){
return 1;
}


if(a[2]=="Blooming Star"){
return 1;
}
if(b[2]=="Blooming Star"){
return -1;
}

if(a[1]=="all" && b[1]=="all"){
if(a[7]==b[7]){
return (moment("20"+a[5]) - moment("20"+b[5]));
}
if(a[7]=="○"){
return -1;
}
if(b[7]=="○"){
return 1;
}
return (moment("20"+a[5]) - moment("20"+b[5]));
}
else if(a[1]=="all"){
return 1;
}
else if(b[1]=="all"){
return -1;
}

if(a[4]==b[4]){
if(a[5]!=b[5]){
return (moment("20"+a[5]) - moment("20"+b[5]));
}
else{//コミュ
return a[6]-b[6];
}
}

if(a[4]=="初期"){
return -1;
}
else if(b[4]=="初期"){
return 1;
}

if(a[4]=="イベ"){
return -1;
}
else if(b[4]=="イベ"){
return 1;
}

if(a[4]=="コミュ"){
return -1;
}
else if(b[4]=="コミュ"){
return 1;
}

return (moment("20"+a[5]) - moment("20"+b[5]));

}


  
function wmap_getSheetsName(sheets){
  //var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;
}