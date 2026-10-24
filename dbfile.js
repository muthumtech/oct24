/**
 * JavaScript Sample File
 * Demonstrating core concepts, modern syntax, and common operations.
 */

// 1. VARIABLES & DATA TYPES
const PROJECT_NAME = "JS Demo"; // Block-scoped constant
let userCount = 42;             // Block-scoped variable that can change
const isActive = true;
const tags = ["javascript", "sample", "code"];
const userProfile = {
    name: "Alex",
    role: "Developer",
    experienceYears: 5
};

// 2. ARROW FUNCTION (Calculates a value)
const calculateBonus = (years) => {
    return years * 1000;
};

// 3. CLASS DEFINITION
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // Method inside a class
    getDetails() {
        return `Product: ${this.name} | Price: $${this.price.toFixed(2)}`;
    }
}

// 4. ARRAY METHODS (Filtering and Mapping)
const inventory = [
    new Product(1, "Laptop", 999.99),
    new Product(2, "Mouse", 25.50),
    new Product(3, "Keyboard", 75.00)
];

// Get premium items (Price > 50)
const premiumItems = inventory.filter(item => item.price > 50);

// 5. ASYNCHRONOUS CODE (Simulating a database fetch)
async function fetchServerStatus() {
    console.log("\nConnecting to server...");
    
    // Simulate a 1.5-second network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ status: "Online", latency: "24ms" });
        }, 1500);
    });
}

// 6. MAIN EXECUTION FLOW
async function main() {
    console.log(`=== Welcome to ${PROJECT_NAME} ===`);
    console.log(`User: ${userProfile.name} (${userProfile.role})`);
    
    const bonus = calculateBonus(userProfile.experienceYears);
    console.log(`Calculated Bonus: $${bonus}`);

    console.log("\n--- Premium Inventory Items ---");
    premiumItems.forEach(item => {
        console.log(item.getDetails());
    });

    // Handle asynchronous result
    try {
        const serverData = await fetchServerStatus();
        console.log(`Server Status: ${serverData.status} (${serverData.latency})`);
    } catch (error) {
        console.error("Failed to fetch server status:", error);
    }
    
    console.log("\nExecution finished successfully.");
}

// Run the script
main();
