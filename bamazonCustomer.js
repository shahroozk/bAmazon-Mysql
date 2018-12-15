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
      // console.log("ID: " + res[0].item_id + " | "+ "Product: " + res[0].product_name + " | " + "Department: " + res[0].department_name + " | " + "Price: "+ res[0].price + " | "  + "Quantity: " + res[0].stock_quantity );
      console.table(res);
      
      buyProduct();
    // }
    });
    // console.log(query.sql);
  }

  // function handel customer shopping:
  function buyProduct(){
    inquirer
    .prompt([
      {
        type: "input",
        name:"item_id",
        message: "Please enter the ID number of the item you would like to purchase.",
        
      },
      {
        name:"quantity",
        type:"input",
        message:"How many units of this item would you like to purchase?",
        
      }

    ]).then(function(answer) {
      
      connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item_id}, function(err, res){
          var productData = res[0].stock_quantity
          var updateStock = productData - parseInt(answer.quantity);
          if (updateStock >=0) {
          //  console.log(updateStock);
          console.log("----------------------------------------------------");
          console.log("you are ordered: " + answer.quantity + " " + "'" + res[0].product_name+"'");
          console.log("---------------------------------------------");
          
          console.log("Your oder has been placed and Your total is $" + answer.quantity * res[0].price );
          console.log("-------------------------------------------------------------");
          
      
          
      
  
      
      var queryUpdate = connection.query(
          "UPDATE products SET ? WHERE ?",
          [
              {
                  stock_quantity: updateStock
              },
              {
                item_id: answer.item_id
              }
          ],
          function(err, res) {
              if (err) throw err;
               console.log(res.affectedRows + " Inventory updated!\n");
              
              
          }
      )
      } else {
        console.log(" ")
        console.log("***************************************************");  
        console.log("Sorry this product is out of stock!");
          
      }
      
      
     connection.end()
  })
   
  
  })
  }
    
      
    
    
  

