const server = require("express")();
const { createRenderer } = require("vue-server-renderer");

const createApp = require("/path/to/built-server-bundle.js");

const renderer = createRenderer({
  template: require("fs").readFileSync("./index.html", "utf-8")
});

server.get("*", (req, res) => {
  const context = {
    url: req.url
    // title: "hello",
    // meta: `
    // 	<meta ...>
    // 	<meta ...>
    // `
  };

  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        if (err.code === 404) {
          res.status(404).end("Page not found");
        } else {
          res.status(500).end("Internal Server Error");
        }
      } else {
        res.end(html);
      }
    });
  });
});

server.listen(8080);
