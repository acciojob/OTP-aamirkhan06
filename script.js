//your JS code here. If required.
function generateOTP() 
{
    return Math.floor(100000 + Math.random() * 900000);
}

// Focus on the next input when a digit is entered
function focusNextInput(input) 
{
    const nextInput = input.nextElementSibling;
    if (nextInput) 
	{
        nextInput.focus();
    }
}
 function handleBackspace(event) 
 {
            if (event.key === 'Backspace') {
                const currentInput = event.target;
                const prevInput = currentInput.previousElementSibling;
                if (prevInput) {
                    prevInput.focus();
                }
				currentInput.value = ''; 
            }
}

// Example usage: Generate OTP and display it
const otp = generateOTP();
console.log(`Generated OTP: ${otp}`);
