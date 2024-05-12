//tetra channel api wirh cors proxy cause otherwise this wouldn't work
const tetrioname = document.getElementById("name");
const URL = 'https://api.codetabs.com/v1/proxy?quest=https://ch.tetr.io/api/users/';
const TETRACHANNELURL= 'https://ch.tetr.io/u/'

async function plzfetch() {
  document.getElementById('description').scrollIntoView();
  document.getElementById("avatar").src ="https://tetr.io/res/league-ranks/z.png"
  document.getElementById("rank").innerHTML = "Fetching..."
  const response = await fetch(URL + tetrioname.value);
  const tetriostats = await response.json();
  const tetrioavatar = JSON.stringify(tetriostats.data.user.avatar_revision)
  const tetriobanner = JSON.stringify(tetriostats.data.user.banner_revision)
  const tetrioid = tetriostats.data.user._id
  //log the username of the Profile :oyes:
  console.log(JSON.stringify(tetriostats.data.user.league))
  document.getElementById("rank").innerHTML = JSON.stringify(tetriostats.data.user.league.rank)
  console.log("https://tetr.io/user-content/avatars/"+tetrioid.jpg+"?rv="+tetrioavatar)
  document.getElementById("avatar").src="https://tetr.io/user-content/avatars/"+tetrioid+".jpg?rv="+tetrioavatar
  document.getElementById("banner").src="https://tetr.io/user-content/banners/"+tetrioid+".jpg?rv="+tetrioavatar
  document.getElementById("rating").innerHTML = tetriostats.data.user.league.rating
  document.getElementById("description").innerHTML = tetriostats.data.user.bio
  document.getElementById("supporter").innerHTML = tetriostats.data.user.supporter
//SOMEHOW THIS FUCKING WORKED💀💀💀💀
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("z") && JSON.stringify(tetriostats.data.user.league.rating) > "-1"){
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/z.png"
    console.log("its unknown")
  }
   else if (tetriostats.data.user.league.rank.includes("z") && JSON.stringify(tetriostats.data.user.league.rating) == "-1") {
     document.getElementById("rank").innerHTML = "bruh"
    document.getElementById("rankimg").src = "./bruh.jpg"
    console.log("seriously bro what the fuck")
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("x")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/x.png"
    console.log("Ureyezthebez")
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("u")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/u.png"
    console.log("its u :O")
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("ss")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/ss.png"
    console.log("wow top 10% :oyes:")
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("s+")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/s+.png"
    };
  if ((tetriostats.data.user.league.rank) == "s"){
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/s.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("s-")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/s-.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("a+")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/a+.png"
  }
  if ((tetriostats.data.user.league.rank) == "a") {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/a.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("a-")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/a-.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("b+")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/s+.png"
  };if ((tetriostats.data.user.league.rank) == "b") {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/b.png"
  
  }
if ((tetriostats.data.user.league.rank) == "b") {
  document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/b.png"
};
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("b-")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/b-.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("c+")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/c+.png"
  };
  if ((tetriostats.data.user.league.rank) == "c") {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/c.png"
  };
  
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("c-")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/c-.png"
  };
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("d+")) {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/d+.png"
  }
  if ((tetriostats.data.user.league.rank) == "d") {
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/d.png"
  };
  if (JSON.stringify(tetriostats.data.user.role).includes("banned")) {
    document.getElementById("rankimg").src = "./bruh.jpg"
    document.getElementById("rank").innerHTML= "this mf is banned bro 💀💀💀💀💀💀💀💀💀💀💀💀💀💀"
    console.log("this mf is banned bro💀💀💀💀")
  };
};

function plzredirect(){
  window.location.href=TETRACHANNELURL+tetrioname.value
}

async function best40lrecord() {
  const recordURL = URL+tetrioname.value+'/records'
  const recordjson = await fetch(recordURL);
  const record = await recordjson.json()
  console.log(record.data.records.blitz.record._id)
  window.location.href = "https://tetr.io/#r:"+record.data.records['40l'].record.replayid
}

async function bestblitzrecord(){
  const recordURL = URL+tetrioname.value+'/records'     
  const recordjson = await fetch(recordURL);
  const record = await recordjson.json()
  window.location.href = "https://tetr.io/#r:"+record.data.records.blitz.record.replayid
}

