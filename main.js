//tetra channel api wirh cors proxy cause otherwise this wouldn't work
const URL = "https://api.codetabs.com/v1/proxy/?quest=http://ch.tetr.io/api/users/ericbruhwhywhyhy"

async function tetriodata() {
  const response = await fetch(URL);
  const tetriostats = await response.json();
//log the username of the Profile :oyes:
  console.log(tetriostats.data.user.username)
}

tetriodata();