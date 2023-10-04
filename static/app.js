// TODO: Clean Code
function startProcess() {
    // Switch to processing screen
    document.getElementById('uploadScreen').classList.remove('active');
    document.getElementById('processingScreen').classList.add('active');
    setTimeout(completeProcess, 5000);
    // TODO: Start the back-end process and switch to completion screen when done
}

function completeProcess() {
    // Switch to completion screen
    document.getElementById('processingScreen').classList.remove('active');
    document.getElementById('completionScreen').classList.add('active');
}


function downloadFile() {
    // TODO: Implement file download
    // Replace with your file's name
    window.location.href = "../static/test.xlsx";  // This will trigger the download
}

document.getElementById('homeButton').addEventListener('click', function () {
    // Hide all screens
    let screens = document.querySelectorAll('.screen');
    for (let i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }

    // Show the upload screen
    document.getElementById('uploadScreen').classList.add('active');
});

// Function for the Button Jump Feature
const b = document.querySelector("button.button-jump")
b.addEventListener("mouseover", moveHover)

function moveHover() {
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    const i = Math.floor(Math.random() * 500 * plusOrMinus) + 1;
    const j = Math.floor(Math.random() * 150) + 1;

    b.style.left = i + "px";
    b.style.top = j + "px";
}