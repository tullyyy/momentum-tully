// const numItemsToGenerate = 1; //how many gallery items you want on the screen
const imageWidth = 1920; //your desired image width in pixels
const imageHeight = 1080; //desired image height in pixels
const collectionID = 273709; //the collection ID from the original url
const numImagesAvailable = 52;

export default function getBackgroundImageURL() {
  return `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${getRandomInt(1, numImagesAvailable)}`
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}