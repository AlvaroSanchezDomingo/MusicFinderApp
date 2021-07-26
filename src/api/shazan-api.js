export const autoComplete = async (searchText) => {
  let codedText = searchText.replace(/ /g, "%20");
  const response = await fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
  
};

export const search = async (searchText) => {
  let codedText = searchText.replace(/ /g, "%20");
  let page = 0;
  let limit = 10;
  const response = await fetch("https://shazam.p.rapidapi.com/search?term="+codedText+"&locale=en-US&offset="+page+"&limit="+limit, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
  
};
