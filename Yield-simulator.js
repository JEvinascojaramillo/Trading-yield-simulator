/**
 * Project: Trading Yield & Compound Interest Simulator
 * Author: Juan Esteban Vinasco Jaramillo
 * Goal: Simulate monthly account growth and validate target realism.
 */

// Function to simulate compound growth month by month
function simulateCompoundGrowth(initialCapital, monthlyReturnPercent, months) {
    let currentBalance = initialCapital;

    console.log(`--- Starting Simulation for $${initialCapital} ---`);
    
    // Loop to calculate growth for each month
    for (let month = 1; month <= months; month++) {
        let profit = currentBalance * (monthlyReturnPercent / 100);
        currentBalance += profit;
        
        console.log(`Month ${month}: Balance = $${currentBalance.toFixed(2)} | Profit = +$${profit.toFixed(2)}`);
    }

    return currentBalance;
}

// Function to validate if the target return is realistic/safe
function validateTargetReturn(returnPercent) {
    console.log("\n--- Risk & Target Assessment ---");
    // In professional trading, consistently making more than 10% a month implies extreme risk
    if (returnPercent > 10) {
        console.log("⚠️ ALERT: This monthly target requires high leverage. Manage your risk carefully!");
    } else {
        console.log("✅ TARGET REALISTIC: This aligns with sustainable risk management parameters.");
    }
}

// --- EXECUTION ---
const startCapital = 2000;       // Example starting account
const targetMonthlyYield = 5;    // 5% monthly return target
const durationMonths = 6;        // 6 months simulation

// Run the validator
validateTargetReturn(targetMonthlyYield);

// Run the simulation
const finalBalance = simulateCompoundGrowth(startCapital, targetMonthlyYield, durationMonths);

console.log(`\nSimulation Complete. Final Balance after ${durationMonths} months: $${finalBalance.toFixed(2)}`);
