// In react when the project is building the <script></script> tags get added to the HTML for you in the build process

// you can export consts from one file to import and use in different files.

//person.js file
const person = {
  name: "max",
};
export default person;

//utility.js file
export const clean = () => {};

export const baseData = 10;

//app.js file
import person from "./person.js";
import prsn from "./person.js";
import { clean } from "./utility.js";
import { baseData } from "./utility.js";
import { clean, baseData } from "./utility.js";
// if something is marked as default it will always import that from the file so you can name it what you want. eg. prsn.
// use the curly braces if you're importing from a file without a default and with many export consts.
// you don't need curly braces if it's the default export
// could shorten it to import { clean, baseData } from "./utility.js";
// You can drop the .js at the end of the filepath if working in react as the build process will add it on for us

import { clean as squeakyClean } from "./utility.js";
// you can assign an alias to non default exports.

import * as bundled from "./utility.js";
// imports everything from utility.js
// * converts all the exports into an object so you can access the function or variable you want from within that file using the
//    object dot syntax eg. bundled.clean or bundled.baseData or even bundled.default if there's a default export.

// For the import and export key words to work you must have type='module' in the script tags when not using a react build process!!
