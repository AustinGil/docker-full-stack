const server = require("express")();
const { createRenderer } = require("vue-server-renderer");

const createApp = require("./app");

const renderer = createRenderer({
  template: require("fs").readFileSync("./index.template.html", "utf-8")
});

server.get("*", (req, res) => {
  const context = {
    url: req.url,
    title: "hello",
    meta: `
			<meta ...>
			<meta ...>
		`
  };
  const app = createApp(context);

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
});

server.listen(8080);
