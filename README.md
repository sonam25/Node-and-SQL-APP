# Node-and-SQL-APP

### Description
This application implements a simple command line based storefront using the npm (inquirer) package and the MySQL database backend together with the npm (mysql) package. The application presents two interfaces: customer.

### MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in bamazon.sql. Run this code inside your MySQL client like MySQL workbench to populate the database, then you will be ready to proceed with running the Bamazon customer interfaces.

### Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

git clone (https://github.com/sonam25/Node-and-SQL-Store-Management-App.git)
cd Node-and-SQL-Store-Management-App
npm install
node bamazonCustomer.js
The table with all the items present for sell is displayed.

* Followed my a question asking the customer the item id of the product they want to purchase.

* After entering the item id the customer is asked for the no of quantity of item the customer want to purchase.

* Validation is done to check if enough stock is available of the item the customer is requested and a Successfull Purchase or Insufficient Quantity message is displayed.

* If the purchase is successfull the final price of the purchase is diplayed


