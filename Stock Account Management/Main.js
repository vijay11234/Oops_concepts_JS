/***************************************************
 * @Purpose: Stack Account Management Implementatio
 * @FileName: Main.js
 * @FSFile: StockAccountManagement.json
 * @Version:14.15.1
 ***************************************************/
//Class from logic
let Share = require('./Busineslogic');
//fs alows to work with the file system
const fs = require('fs');
//Json storing and transporting data
let jsonFile = require('./StockAccountManagement.json');
let readline = require('readline-sync');
let flag = true;
let stockdata = fs.readFileSync('./StockAccountManagement.json');
let Sharestock = JSON.parse(stockdata);

function ShareAccount() {

    while (flag == true) {
        console.log("Enter 1: Each Share 2: Total shares 3: Exit")

        let choice = readline.question("Enter your choice : ");

        switch (choice) {
            case "1":
                for(let i = 0; i < 3; i++ ) {
                    let ShareCompanyName = Sharestock.Stock[i].name;
                    let NumberOfShares = Sharestock.Stock[i].numberOfShares;
                    let Price = Sharestock.Stock[i].price;
                    let shareObj = new Share(ShareCompanyName, NumberOfShares, Price);
                    shareObj.eachsharePrice();
                }
                break;
            case "2":
                let temp = 0, total = 0;
                for(let j = 0; j < 3; j++) {
                    let ShareCompanyName = Sharestock.Stock[j].name;
                    let NumberOfShares = Sharestock.Stock[j].numberOfShares;
                    let Price = Sharestock.Stock[j].price;
                    let stockObj = new Share(ShareCompanyName, NumberOfShares, Price);
                    temp = stockObj.eachsharePrice();
                    total = total + temp;
                    temp = 0;
                }
                console.log("Total value of all Stock is : " + total);
                break;
            case "3":
                flag = false;
                break;


            default:
                console.log("Invalid Option");
                break;
        }
    }
}
ShareAccount();