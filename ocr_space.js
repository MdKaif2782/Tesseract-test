const ocr = require('ocr-space-api');
const fs = require('fs');
const {writeText} = require('add-text-to-image');
const {createCanvas, loadImage} = require('canvas');


var options =  {
    apikey: 'K89081534488957',
    language: 'chs',
    imageFormat: 'image/jpg', // Image Type (Only png ou gif is acceptable at the moment i wrote this)
    isOverlayRequired: true
};
let imageFilePath = 'C:\\Users\\Md Kaif Ibn Zaman\\Downloads\\chin.jpg';

ocr.parseImageFromLocalFile(imageFilePath, options).then(function (parsedResult) {
    console.log(parsedResult);
    let text = parsedResult.parsedText;
    console.log(text);
}).catch(function (err) {
    console.log(err);
});