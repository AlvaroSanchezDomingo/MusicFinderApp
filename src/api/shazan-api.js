export const autoComplete = async (searchText) => {
  let codedText = searchText.replace(/ /g, "%20");
  const response = await fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "de84684b887mshaf22902fbc2ac3ap12e331jsn5ff27e5a5c06",
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
  let startFrom = page*5
  const response = await fetch("https://shazam.p.rapidapi.com/search?term="+codedText+"&locale=en-US&offset="+startFrom+"&limit="+limit, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "e84684b887mshaf22902fbc2ac3ap12e331jsn5ff27e5a5c06",
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
      "x-rapidapi-key": "e84684b887mshaf22902fbc2ac3ap12e331jsn5ff27e5a5c06",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();;
  
};


