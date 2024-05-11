//tetra channel api wirh cors proxy cause otherwise this wouldn't work
const tetrioname = document.getElementById("name");
const URL = 'https://api.codetabs.com/v1/proxy?quest=https://ch.tetr.io/api/users/';

async function plzfetch() {
  console.log(tetrioname)
  const response = await fetch(URL + tetrioname.value);
  const tetriostats = await response.json();
  //log the username of the Profile :oyes:
  console.log(JSON.stringify(tetriostats))
  document.getElementById("rank").innerHTML = JSON.stringify(tetriostats.data.user.league.rank)
  //yeah this doesn't work lol
  if (JSON.stringify(tetriostats.data.user.league.rank) === "z") {
    document.getElementById("rankimg").innerHTML = "https://tetr.io/res/league-ranks/z.png"
  }
};