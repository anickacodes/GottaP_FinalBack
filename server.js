const app = require("./app");
require("dotenv").config();

const PORT1 = process.env.PORT1;

app.listen(PORT1, () => {
  console.log(`The server is running on port: ${PORT1}`);
});
