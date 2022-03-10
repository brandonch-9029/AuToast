// Requests more check-ins from Untappd. Untappd sends 15 check-ins per request, and 15 on the initial loading of the homepage.
// j is a variable for the number of times you want to request. E.g. To check the last 60 checkins, you would want to request 45 more check-ins, so j would be 3.
async function generateCheckIns(j) {
    for (let i = 0; i < j; i++) {
        await waitForMe(2000);
        const findBottom = document.querySelector('.more_checkins');
        findBottom.click();
    }
}

// Searches the document to find every instance of a toast button.
async function findButtons (j) {
    await generateCheckIns(j);
    await waitForMe(2000);
    const buttons = document.querySelectorAll('.toast_btn');
    const buttonArraySize = buttons.length;
    checkButtons(buttons, buttonArraySize);
}

// Every second of real time, uses querySelector to extract the clickable section of the toast button, then calls the toast() function on it.
async function checkButtons (buttonArray, arraySize) {
    for (let i = 0; i < arraySize; i++) {
        if (i % 5 == 0) {
            await waitForMe(5000);
        } else {
            await waitForMe(1000);
        }
        toastButton = buttonArray[i].querySelector('.track-click');
        toast(toastButton);
    }
}

// If check-in has been toasted, do nothing, otherwise toast.
function toast(xbutton) {
    if (!xbutton.classList.contains('active')) {
        xbutton.click();
        console.log('Untoasted Check-In Found, Toasted!');
    } else {
        console.log('Already Toasted, Do Nothing');
    }
}

// Delay function because Untappd can't take requests too quickly.
function waitForMe (ms) {
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, ms);
    })
}

// By default, check the first 60 check-ins on your homepage. Feel free to change this if you like to toast more old check-ins.
findButtons(3)