//tetra channel api wirh cors proxy cause otherwise this wouldn't work
const tetrioname = document.getElementById("name");
const URL = 'https://cors-hijacker.vercel.app/api?url=https://ch.tetr.io/api/users/';
const TETRACHANNELURL= 'https://ch.tetr.io/u/'
const param = new URLSearchParams(window.location.search);
//function that checks if the url has ?username parameter
async function checkurl(){
  console.log("TETR.IO U.P.D Loaded!")
  console.log("⚠⚠⚠⚠⚠⚠⚠PLEASE DO NOT INSERT YOUR TETR.IO ACCOUNT INFORMATION OR SUCH THING IN THE CONSOLE. I DO NOT REQUIRE VISITORS TO DO SUCH THINGS. IF SOMEONE TELLS YOU TO DO IT, THEY MIGHT BE AN ATTACKER GOING TO STEAL YOUR ACCOUNT.⚠⚠⚠⚠⚠⚠⚠ tl;dr: it's not my fault if you lost your account without using this site properly");
  if (param.has('username') === true) {
  document.getElementById("name").value = param.get("username");
  await plzfetch()
  console.log("?username parameter contain: "+param.get('username'))
  };
  if (param.has("debug") === true){
    await eruda.init();
    document.getElementById("param").innerHTML = "debug"
    console.log("debug!")
  }
};
//activate function after website loaded
checkurl();


"use strict";
//self explanatory
async function plzfetch() {
  const user = new URLSearchParams(window.location.search)
  //this used to fix too much zoom/dpi problem but now it's not an issue anymore.Therefore, this code is unused
  //document.getElementById('description').scrollIntoView();
//not these though
  document.getElementById("avatar").src ="https://tetr.io/res/league-ranks/z.png"
  document.getElementById("rank").innerHTML = "Fetching..."
 //prepare a bunch of stuff before api fetching begin
  const response = await fetch(URL + tetrioname.value.toLowerCase());
  const tetriostats = await response.json();
  const tetrioavatar = JSON.stringify(tetriostats.data.user.avatar_revision)
  const tetriobanner = JSON.stringify(tetriostats.data.user.banner_revision)
  const tetrioid = tetriostats.data.user._id
  const tetraleaguerank = tetriostats.data.user.league.rank+".png"
  const rankres = "https://tetr.io/res/league-ranks/"
  //log the username of the Profile :oyes:
  console.log(JSON.stringify(tetriostats.data.user.league))
  document.getElementById("rank").innerHTML = JSON.stringify(tetriostats.data.user.league.rank)
  //basically check user's rank and display them accordingly
  document.getElementById("rankimg").src = rankres+tetraleaguerank
  console.log("https://tetr.io/user-content/avatars/"+tetrioid.jpg+"?rv="+tetrioavatar)
   //fetch user's avatar using the combination of provided url+user's id.jpg + avatar last revision
  document.getElementById("avatar").src="https://tetr.io/user-content/avatars/"+tetrioid+".jpg?rv="+tetrioavatar
  //same thing as avatar
  document.getElementById("banner").src="https://tetr.io/user-content/banners/"+tetrioid+".jpg?rv="+tetrioavatar
  document.getElementById("rating").innerHTML = Math.round(tetriostats.data.user.league.rating)
 //same thing as avatar agaim
  document.getElementById("description").innerHTML = tetriostats.data.user.bio
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("z") && JSON.stringify(tetriostats.data.user.league.rating) > "-1"){
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/z.png"
    console.log("its unknown")
  }
   else if (tetriostats.data.user.league.rank.includes("z") && JSON.stringify(tetriostats.data.user.league.rating) == "-1") {
     document.getElementById("rank").innerHTML = "bruh"
    document.getElementById("rankimg").src = "./bruh.jpg"
    console.log("no rank D:<")
  };
  
  if (JSON.stringify(tetriostats.data.user.role).includes("banned")) {
    document.getElementById("rankimg").src = "./bruh.jpg"
    document.getElementById("rank").innerHTML= "this mf is banned bro 💀💀💀💀💀💀💀💀💀💀💀💀💀💀"
    console.log("this mf is banned bro💀💀💀💀")
  };
  if (JSON.stringify(tetriostats.data.user.league.rating) == "-1") {
          document.getElementById("rating").innerHTML = "bruh"
          document.getElementById("rankimg").src = "./assets/bruh.jpg"
          console.log("no rating D:<")
  };
//check and display user's tetra league stats
document.getElementById("pps").innerHTML = JSON.stringify(tetriostats.data.user.league.pps)
document.getElementById("apm").innerHTML = JSON.stringify(tetriostats.data.user.league.apm)
document.getElementById("vs").innerHTML = JSON.stringify(tetriostats.data.user.league.vs)
};

//redirect to user's tetra channel profile using the combination of tetra channel url+username on button press
function plzredirect(){
  window.location.href=TETRACHANNELURL+tetrioname.value
};

//redirect to user's best 40l run on button press
async function best40lrecord() {
  const recordURL = URL+tetrioname.value+'/records'
  const recordjson = await fetch(recordURL);
  const record = await recordjson.json()
  console.log(record.data.records.blitz.record._id)
  window.location.href = "https://tetr.io/#r:"+record.data.records['40l'].record.replayid
};

//redirect to user's best blitz run on button press
async function bestblitzrecord(){
  const recordURL = URL+tetrioname.value+'/records'     
  const recordjson = await fetch(recordURL);
  const record = await recordjson.json()
  window.location.href = "https://tetr.io/#r:"+record.data.records.blitz.record.replayid
};
