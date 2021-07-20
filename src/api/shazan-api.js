export const autoComplete = async (text) => {
  let codedText = text.replace(/ /g, "%20");
  const response = await fetch("https://shazam.p.rapidapi.com/auto-complete?term="+codedText+"&locale=en-US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "752e5c2b77mshd527e35bbfb1033p1b415bjsna2d20660dbea",
      "x-rapidapi-host": "shazam.p.rapidapi.com"
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  if (!response.ok) {
    throw new Error(response.json().message);
  }
  return response.json();
};

