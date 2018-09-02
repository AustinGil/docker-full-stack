const Vue = require("vue");
const server = require("express")();
const { createRenderer } = require("vue-server-renderer");

const renderer = createRenderer({
  template: require("fs").readFileSync("./index.template.html", "utf-8")
});

server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  });

  const context = {
    title: "hello",
    meta: `
			<meta ...>
			<meta ...>
		`
  };

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end("Internal Server Error");
      return;
    }
    res.end(html);
  });
});

server.listen(8080);
