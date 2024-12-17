import { Inventory } from "./Inventory.js";
import { Product } from "./Product.js";

const productA: Product = { id: 1, name: "Laptop" };
const productB: Product = { id: 2, name: "Smartphone" };

const inventory = new Inventory();

inventory.addOrUpdateProduct(productA, 10); // Add 10 laptops to the inventory
inventory.addOrUpdateProduct(productB, 5);  // Add 5 smartphones to the inventory
inventory.addOrUpdateProduct(productA, 5);  // Add 5 laptops to the inventory
console.log(inventory.checkProductQuantity(productA)); // It should display 15 
console.log(inventory.checkProductQuantity(productB)); // It should display 5

inventory.removeProduct(productB); // Remove the smartphone from the inventory
console.log(inventory.checkProductQuantity(productB)); // It should display, because the product has been removed


