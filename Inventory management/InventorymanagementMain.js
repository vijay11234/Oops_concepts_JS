/*********************************************************
 * @purpose:- Json Inventory data management implementation of rice, pulses and wheats
 * @File:- InventorymanagementMain.js and Json file

 *********************************************************/

let InventoryImplement = require('./Inventory Implement Bussineslogic');
//fs alows to work with the file system
let fs = require('fs');
let dataJsonFile = require('./Inventorymanagement.json');
let readline = require('readline-sync');
let flag = true;
let rawData = fs.readFileSync('./inventorymanagement.json');
let grains = JSON.parse(rawData);

//function to choose options
function choice() {

    while (flag == true) {
        console.log("Enter 1 : Rice  2 : Pulses  3 : Wheat");
        let input = readline.question("Enter your ration : ");

        switch (input) {
            case "1":
                for (let i = 0; i < 3; i++) {
                    let riceName = grains.rice[i].name;
                    let riceWeight = grains.rice[i].weight;
                    let ricePrice = grains.rice[i].price;
                    let riceObj = new InventoryImplement(riceName, riceWeight, ricePrice);
                    riceObj.totalPrice();
                }
                break;
                pulsesName, pulsesWeight, pulsesPrice
            case "2":
                for (let j = 0; j < 3; j++) {
                    let pulsesName = grains.pulses[j].name;
                    let pulsesWeight = grains.pulses[j].weight;
                    let pulsesPrice = grains.pulses[j].price;
                    let pulsesObj = new InventoryImplement(pulsesName, pulsesWeight, pulsesPrice);
                    pulsesObj.totalPrice();
                }
                break;

            case "3":
                for (let k = 0; k < 3; k++) {
                    let wheatName = grains.wheat[k].name;
                    let wheatWeight = grains.wheat[k].weight;
                    let wheatPrice = grains.wheat[k].price;
                    let pulsesObj = new InventoryImplement(wheatName, wheatWeight, wheatPrice);
                    pulsesObj.totalPrice();
                } break;

            default:
                flag = false;
                console.log("Exit");
        }
    }
}
choice();