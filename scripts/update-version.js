const fs = require("fs");

const newVersion = process.argv[2];
console.log("Updating package.json's version to ", newVersion);

const fileContent = fs.readFileSync("package.json", "utf-8");
const json = JSON.parse(fileContent);

json["version"] = newVersion;

fs.writeFileSync("package.json", JSON.stringify(json));
