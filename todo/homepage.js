var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var indexRouter = require("./routes/indexrouter");
var deleteRouter = require("./routes/deleterouter");
var editRouter = require("./routes/editrouter");
var toggleRouter = require("./routes/togglerouter");

app.use(express.static("public"));

// 设置模板引擎
app.set("views", "./views");
app.set("view engine", "ejs");

// bodyParser 解析POST请求
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use("/", indexRouter);
app.use("/delete", deleteRouter);
app.use("/edit", editRouter);
app.use("/toggle", toggleRouter);

app.listen(8080, () => {
    console.log("App listening on port 8080!");
});