//tetra channel api wirh cors proxy cause otherwise this wouldn't work
const tetrioname = document.getElementById("name");
const URL = 'https://api.codetabs.com/v1/proxy?quest=https://ch.tetr.io/api/users/';

async function plzfetch() {
  const response = await fetch(URL + tetrioname.value);
  const tetriostats = await response.json();
  //log the username of the Profile :oyes:
  console.log(JSON.stringify(tetriostats.data.user.league))
  document.getElementById("rank").innerHTML = JSON.stringify(tetriostats.data.user.league.rank)
//SOMEHOW THIS FUCKING WORKED💀💀💀💀
  if (JSON.stringify(tetriostats.data.user.league.rank).includes("z")){
    document.getElementById("rankimg").src = "https://tetr.io/res/league-ranks/z.png"
    console.log("its unknown")
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
  
}