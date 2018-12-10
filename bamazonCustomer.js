var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "mysq1234!",
  database: "mabazon"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    itemsForSale();
  });
  
  function itemsForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.log("=========================================================================================");
      console.log("");
      console.log("                                   PRODUCT DISPLAY                                      ");

      // for (var i = 0; i < res.length; i++) {
        console.log("-----------------------------------------------------------------------------------------");
      // console.log("ID: " + res[i].item_id + " | "+ "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: "+ res[i].price + " | "  + "Quantity: " + res[i].stock_quantity );
      console.table(res);
      connection.end();
      choosItem(res);
    // }
    });
    // console.log(query.sql);
  }

  // function handel customer sgopping:
  function choosItem(){
    inquirer
    .prompt([
      {
        type: "input",
        name:"product",
        message: "Please enter the ID number of the item you would like to purchase.",
         filter: Number
      },
      {
        name:"stock_quantity",
        type:"input",
        message:"How many units of this item would you like to purchase?",
         filter: Number
      }

    ])
    
      
    
    
  } 

