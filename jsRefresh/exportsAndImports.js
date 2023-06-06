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
// if something is marked as default it will always import that from the file so you can name it what you want. eg. prsn.
// use the curly braces if you're importing from a file without a default and with many export consts.
// could shorten it to import { clean, baseData } from "./utility.js";

import { clean as squeakyClean } from "./utility.js";
// you can assign an alias to non default exports.

import * as bundled from "./utility.js";
// imports everything from utility.js
