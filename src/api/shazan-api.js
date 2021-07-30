export const autoComplete = async (searchText) => {
  let codedText = searchText.replace(/ /g, "%20");
  const response = await fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d6a391f055mshf08c37611fa366ap1b7267jsn4fb93f445f6a",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
  
};

export const search = async (searchText, page) => {
  let codedText = searchText.replace(/ /g, "%20");
  let limit = 5;
  const response = await fetch("https://shazam.p.rapidapi.com/search?term="+codedText+"&locale=en-US&offset="+page+"&limit="+limit, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d6a391f055mshf08c37611fa366ap1b7267jsn4fb93f445f6a",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
  
};

export const explore = async (page) => {

  let startFrom = page*10;
  const response = await fetch("https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=10&startFrom="+ startFrom, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "d6a391f055mshf08c37611fa366ap1b7267jsn4fb93f445f6a",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();;
  
};



//alvaro.sanchez.domingo@gmail.com "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea"
//alvarosd8489@gmail.com "d6a391f055mshf08c37611fa366ap1b7267jsn4fb93f445f6a"
//20091387@mail.wit.ie alvaroSanchezDomingo e84684b887mshaf22902fbc2ac3ap12e331jsn5ff27e5a5c06