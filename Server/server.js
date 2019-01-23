const app = require("./app.js");
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
