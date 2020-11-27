files = require("./allowedLangs.json");
let messages = {website: {}, bot: {}};
for (i = 0; i < files.length; i++) {
    file = require(`./langs/${files[i]}`);
    if (file.website) messages.website[files[i].split('.')[0]] = file.website;
    if (file.bot) messages.bot[files[i].split('.')[0]] = file.bot;
}

exports.website = messages.website;

exports.bot = messages.bot;