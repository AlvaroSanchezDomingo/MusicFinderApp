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
export const autoComplete2 = async (searchText) => {
  let codedText = searchText.replace(/ /g, "%20");
  fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    return result;
  })
  .catch(err => {
    console.error(err);
  });
  
};
//Make the api async await to return values syncronized