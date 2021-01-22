const DEFAULT_COLOUR = "#156100";

const GENRE_COLOUR_DICTIONARY = {
  Action: "#8f1300",
  Adventure: "#999400",
  Animation: "#002d96",
  Comedy: "#73007d",
  Fantasy: "#014573",
};

function generateGenreColour(genre) {
  return GENRE_COLOUR_DICTIONARY[genre] || DEFAULT_COLOUR;
}

export default generateGenreColour;
