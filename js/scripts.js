//Header Greeting
var greeting = 'Please Sign-up for Our NewsLetter'; 
var greetingEl = document.getElementById('welcomeMssg');

greetingEl.textContent = greeting;
//Iphone pricing data -using variables  
var iphone64 = 699,
    iphone256 = 749,
    iphone512 = 849,
    iphone64Pro = 999,
    iphone256Pro = 1149,
    iphone512Pro = 1349,
    iphone64Max = 1099,
    iphone256Max = 1249,
    iphone512Max = 1449;

//Pricing for the iphone 11 w/ 64GB
var priceEl = document.getElementById('ip64');
priceEl.textContent = '$'+iphone64.toFixed(2);

var priceEl = document.getElementById('ip64p');
priceEl.textContent = '$'+iphone64Pro.toFixed(2);

var priceEl = document.getElementById('ip64m');
priceEl.textContent = '$'+iphone64Max.toFixed(2);

//Pricing for the iphone 11 w/ 256GB
var priceEl = document.getElementById('ip256');
priceEl.textContent = '$'+iphone256.toFixed(2);

var priceEl = document.getElementById('ip256p');
priceEl.textContent = '$'+iphone256Pro.toFixed(2);

var priceEl = document.getElementById('ip256m');
priceEl.textContent = '$'+iphone256Max.toFixed(2);

//Pricing for the iphone 11 w/ 512GB
var priceEl = document.getElementById('ip512');
priceEl.textContent = '$'+iphone512.toFixed(2);

var priceEl = document.getElementById('ip512p');
priceEl.textContent = '$'+iphone512Pro.toFixed(2);

var priceEl = document.getElementById('ip512m');
priceEl.textContent = '$'+iphone512Max.toFixed(2);

//Creating iphone data only this time I'm using arrays to contain the data 
var iphoneDisplay = ["6.1-inch Liquid Retina HD", "5.8-inch Super Retina XDR", "6.5-inch Super Retina XDR"];
var iphoneCPU = ["A13 Bionic"];
var iphoneBatteryLife = ["11:16", "10:24", "11:54"];
var iphoneCamera = ["12-MP wide (f/1.8)(Rear)"];

var iphoneDisEl = document.getElementById('ipStandardDisplay');
iphoneDisEl.textContent = iphoneDisplay[0];
var iphoneCpuEl = document.getElementById('ipStandardCPU');
iphoneCpuEl.textContent = iphoneCPU[0];
var iphoneBatteryEl = document.getElementById('ipStandardBL');
iphoneBatteryEl.textContent = iphoneBatteryLife[0];
var iphoneCamEl = document.getElementById('ipStandardCam');
iphoneCamEl.textContent = iphoneCamera[0];

var iphoneProDisEl = document.getElementById('ipProDisplay');
iphoneProDisEl.textContent = iphoneDisplay[1];
var iphoneProCpuEl = document.getElementById('ipProCPU');
iphoneProCpuEl.textContent = iphoneCPU[0];
var iphoneProBatteryEl = document.getElementById('ipProBL');
iphoneProBatteryEl.textContent = iphoneBatteryLife[1];
var iphoneProCamEl = document.getElementById('ipProCam');
iphoneProCamEl.textContent = iphoneCamera[0];

var iphoneMaxDisEl = document.getElementById('ipMaxDisplay');
iphoneMaxDisEl.textContent = iphoneDisplay[2];
var iphoneMaxCpuEl = document.getElementById('ipMaxCPU');
iphoneMaxCpuEl.textContent = iphoneCPU[0];
var iphoneMaxBatteryEl = document.getElementById('ipMaxBL');
iphoneMaxBatteryEl.textContent = iphoneBatteryLife[2];
var iphoneMaxCamEl = document.getElementById('ipMaxCam');
iphoneMaxCamEl.textContent = iphoneCamera[0];

function subscribedMsg() {

    var emailEL = document.getElementById('email');
    if(emailEL.value === ''){
        alert("Please enter valid email address!");
    }
    else{
        alert("You're now signed-up for our weekly newsletter!");
    }
  }

 var submitBTN = document.getElementById('btnShowMsg');

 submitBTN.onclick = subscribedMsg;