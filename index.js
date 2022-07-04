const fs = require('fs');
const xml2js = require('xml2js');

var parser = new xml2js.Parser();

const xmlString = fs.readFileSync(__dirname + '/sap.xml');

const createHtml = (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const items =
    result.Application.forms[0].action[0].form[0].items[0].action[0].item;

  items.forEach((item) => {
    console.log(JSON.stringify(item));
    console.log('--------------------------------------------');
  });
};

parser.parseString(xmlString, createHtml);
