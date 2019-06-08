const mongoose = require("mongoose");
//'mongodb://localhost:27017/EmployeeDB'
mongoose.connect(
  "mongodb+srv://kane5648:kane5648@register-cluster0-sflhi.mongodb.net/EmployeeDB",
  { useNewUrlParser: true },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);

require("./employee.model");
