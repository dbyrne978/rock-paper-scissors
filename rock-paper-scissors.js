let RpsArray = ["Rock","Paper","Scissors"];

let computerPlay = function() {
    return RpsArray[Math.floor(Math.random() * 3)];
};

