const tes = require('tesseract.js');
const fs = require('fs');
const {writeText} = require('add-text-to-image');
const {createCanvas, loadImage} = require('canvas');
tes.recognize(
    'https://i5.nhentai.net/galleries/2403574/1.jpg',
    'chi_sim',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    // Create an image and write the text to it
    console.log(text);
    const canvas = createCanvas(1000, 1000);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000000';
    ctx.font = '30px SimSun';
    ctx.fillText(text, 50, 100);
    const out = fs.createWriteStream(__dirname + '/text.png');
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on('finish', () =>  console.log('The PNG file was created.'));
})