import { Product } from "./Product";

export class Inventory {

    private inventory: Map<Product, number>;

    constructor() {
        // We create the map to store the inventory
        // We use the product id as the key and the quantity as the value
        this.inventory = new Map<Product, number>();
    }
        

    // Function to add or update a product on the inventory 
    addOrUpdateProduct(product: Product, quantity: number): void {
        if (this.inventory.has(product)) {
            // If the prouduct already exists, we update the quantity
            const currentQuantity = this.inventory.get(product) || 0;
            this.inventory.set(product, currentQuantity + quantity);
        } else {
            // If the product doesn't exists, we add it to the inventory
            this.inventory.set(product, quantity);
        }
    }

    // Function to verify the product quantity
    checkProductQuantity(product: Product): number {
        return this.inventory.get(product) || 0;
    }

    // Function to delete a product from the inventory
    removeProduct(product: Product): void {
        this.inventory.delete(product);
    }
}