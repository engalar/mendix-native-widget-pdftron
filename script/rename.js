var packageConfig = require('../package.json');
var { readXml } = require('./xml');
var fs = require('fs');

readXml("./src/package.xml", json => {
  var oldWidgetName = json.package.clientModule[0].$.name;

  fs.rename(`./src/${oldWidgetName}.xml`, `./src/${packageConfig.widgetName}.xml`, function (err) {
    if (err) console.log('ERROR: ' + err);


  });

  fs.rename(`./src/${oldWidgetName}.tsx`, `./src/${packageConfig.widgetName}.tsx`, function (err) {
    if (err) console.log('ERROR: ' + err);
    fs.readFile(`./src/${packageConfig.widgetName}.tsx`, 'utf8', function (err2, data) {
      if (err2) {
        return console.log(err2);
      }
      var result = data
        .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
        .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

      fs.writeFile(`./src/${packageConfig.widgetName}.tsx`, result, 'utf8', function (err2) {
        if (err2) return console.log(err2);
      });
    });

  });

  fs.rename(`./src/${oldWidgetName}.editorPreview.tsx`, `./src/${packageConfig.widgetName}.editorPreview.tsx`, function (err) {
    if (err) console.log('ERROR: ' + err);
    fs.readFile(`./src/${packageConfig.widgetName}.editorPreview.tsx`, 'utf8', function (err2, data) {
      if (err2) {
        return console.log(err2);
      }
      var result = data
        .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
        .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

      fs.writeFile(`./src/${packageConfig.widgetName}.editorPreview.tsx`, result, 'utf8', function (err2) {
        if (err2) return console.log(err2);
      });
    });
  });

  fs.rename(`./src/${oldWidgetName}.editorConfig.ts`, `./src/${packageConfig.widgetName}.editorConfig.ts`, function (err) {
    if (err) console.log('ERROR: ' + err);
    fs.readFile(`./src/${packageConfig.widgetName}.editorConfig.ts`, 'utf8', function (err2, data) {
      if (err2) {
        return console.log(err2);
      }
      var result = data
        .replace(new RegExp(`${oldWidgetName}Props`, 'g'), `${packageConfig.widgetName}Props`)
        .replace(new RegExp(`${oldWidgetName}PreviewProps`, 'g'), `${packageConfig.widgetName}PreviewProps`);

      fs.writeFile(`./src/${packageConfig.widgetName}.editorConfig.ts`, result, 'utf8', function (err2) {
        if (err2) return console.log(err2);
      });
    });

  });

  fs.rename(`./src/${oldWidgetName}.icon.dark.png`, `./src/${packageConfig.widgetName}.icon.dark.png`, function (err) { console.error(err.message); });
  fs.rename(`./src/${oldWidgetName}.icon.png`, `./src/${packageConfig.widgetName}.icon.png`, function (err) { console.error(err.message); });
  fs.rename(`./src/${oldWidgetName}.tile.dark.png`, `./src/${packageConfig.widgetName}.tile.dark.png`, function (err) { console.error(err.message); });
  fs.rename(`./src/${oldWidgetName}.tile.png`, `./src/${packageConfig.widgetName}.tile.png`, function (err) { console.error(err.message); });
});
