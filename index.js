#!/usr/bin/env node

'use strict';

const fs = require('fs');
let messages = {website: {}, bot: {}};
fs.readdir('./langs/', (err, files) => {
    if (err) throw err;
    files = files.filter(f => /(^|\/)[A-Za-z0-9_,\s-]+\.json$/i.test(f));
    for (i = 0; i < files.length; i++) {
        file = require(`./langs/${files[i]}`);
        if (file.website) messages.website[files[i].split('.')[0]] = file.website;
        if (file.bot) messages.bot[files[i].split('.')[0]] = file.bot;
    }
});

exports.website = messages.website;

exports.bot = messages.bot;