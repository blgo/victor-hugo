// JS Goes here - ES6 supported
import "./css/main.css";

// Say hello
/* eslint no-console: ["error", { allow: ["log"] }] */
console.log("🦊 Hello! Edit me in src/index.js");

var cloudinary = require('cloudinary-core');
var tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo", width: 300});
document.body.appendChild(tag.toDOM());
document.body.appendChild(
    tag.transformation()
        .angle(15)
        .width(200)
        .crop("scale")
        .effect("grayscale")
        .getParent().toDOM()
);
