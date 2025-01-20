const readline = require('readline');

// Fixed conversion rates
const INR_TO_USD_RATE = 0.012;
const USD_TO_INR_RATE = 83.0;

// Create a readline interface for CLI input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display the menu
function showMenu() {
  console.log('\nCurrency Converter');
  console.log('1. Convert INR to USD');
  console.log('2. Convert USD to INR');
  console.log('3. Exit');
}

// Function to handle currency conversion
function handleConversion(choice) {
  if (choice === '1') {
    rl.question('Enter amount in INR: ', (amount) => {
      const converted = (parseFloat(amount) * INR_TO_USD_RATE).toFixed(2);
      console.log(`${amount} INR = ${converted} USD`);
      promptUser(); // Show the menu again
    });
  } else if (choice === '2') {
    rl.question('Enter amount in USD: ', (amount) => {
      const converted = (parseFloat(amount) * USD_TO_INR_RATE).toFixed(2);
      console.log(`${amount} USD = ${converted} INR`);
      promptUser(); // Show the menu again
    });
  } else if (choice === '3') {
    console.log('Exiting... Goodbye!');
    rl.close();
  } else {
    console.log('Invalid option. Please try again.');
    promptUser(); // Show the menu again
  }
}

// Function to prompt the user for input
function promptUser() {
  showMenu();
  rl.question('Choose an option (1-3): ', (choice) => {
    handleConversion(choice);
  });
}

// Start the CLI application
promptUser();
