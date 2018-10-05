var mysql = require("mysql");
var inquirer = require ("inquirer");
var connection = mysql.createConnection({
	host: "localhost",
	port:3306,
	user:"root",
	password:"root",
	database:"bamazon_db",
});

connection.connect(function(err){
	if(err) throw err;
	console.log("Connection is successful");
   start();
});

var start = function() {
	console.log("Products for Sale");
	connection.query("SELECT * FROM products", function(err,res){
		if(err) throw err;
		//console.lg
	for(var i = 0; i < res.length; i++){
		console.log(res[i].item_id + " ||  "+ res[i].product_name
		+ "  ||  "+ res[i].price + "  ||  "+ res[i].stock_quantity);
	}
	buy(res);	
  });
  
}

var buy = function(res){
	inquirer.prompt([
		{
			name:"item_id",
			type:"input",
			message:"What is the item id of the product you want to buy? ",
			validate:function(value){
				if(isNaN(value) === false){
					return true;
				}
				return false;
			}
		},
		{
			name:"stockquantity",
			type:"input",
			message:"Enter the quantity for the product of purchase?",
		 	//  validate:function(value) {
			//  	if(isNAN(value) === false){
		 	// 		return true;
		 	// }
		 	//  	return false;
		 	// }
		}
	])
	.then(function(answer){
		
		for(var i = 0; i < res.length; i++){
			if(res[i].item_id == answer.item_id){
				if((res[i].stock_quantity - answer.stockquantity) > 0){
					connection.query(
						"UPDATE products SET ? WHERE ?",
						[
						  {
							stock_quantity:(res[i].stock_quantity - answer.stockquantity)
						  },
						  {
							item_id:answer.item_id
						  }
						],
						function(err,res2) {
						  if (err) throw err;
						  console.log("Purchase successfully!");
						  start();
						}
					  );
				}
				else{
					console.log("Sorry quantity unsufficient");
					start();
					buy(res);
				}
			}
		     
		}
		   
	})
	
}