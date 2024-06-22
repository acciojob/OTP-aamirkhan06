
// Focus on the next input when a digit is entered
function focused(input) 
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
					currentInput.value = ''; 
				    currentInput=prevInput;
					currentInput.focus();
                }
				
            }
}
