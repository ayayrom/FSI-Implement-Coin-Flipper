// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')
    let pennyImage = document.getElementById('penny-image')

    let headsCount = 0
    let headsPercentage = 0
    let headsPercText = document.getElementById('heads-percent')
    let headsText = document.getElementById('heads')

    let tailsCount = 0
    let tailsPercentage = 0
    let tailsPercText = document.getElementById('tails-percent')
    let tailsText = document.getElementById('tails')

    let totalCount = 0;
    let statusMessage = document.getElementById('status-message')


    // TODO: Add event listener and handler for flip and clear buttons
    let flipButton = document.getElementById("flipCoin")
    flipButton.addEventListener('click', function(){
        if (Math.random() * 1 < .5){
            pennyImage.setAttribute('src', './assets/images/penny-tails.jpg')
            tailsCount++
            totalCount++
            tailsText.textContent = tailsCount
            tailsPercentage = Math.floor((tailsCount / totalCount) * 100)
            tailsPercText.textContent = tailsPercentage + "%"
            headsPercentage = Math.floor((headsCount / totalCount) * 100)
            headsPercText.textContent = headsPercentage + "%"
            statusMessage.textContent = "You flipped tails!"
        }
        else {
            pennyImage.setAttribute('src', './assets/images/penny-heads.jpg')
            headsCount++
            totalCount++
            headsText.textContent = headsCount
            tailsPercentage = Math.floor((tailsCount / totalCount) * 100)
            tailsPercText.textContent = tailsPercentage + "%"
            headsPercentage = Math.floor((headsCount / totalCount) * 100)
            headsPercText.textContent = headsPercentage + "%"
            statusMessage.textContent = "You flipped heads!"
        }
    })

    let clearButton = document.getElementById("clearScoreboard")
    clearButton.addEventListener('click', function(){
        headsCount = 0;
        tailsCount = 0;
        totalCount = 0;
        headsText.textContent = headsCount
        tailsText.textContent = tailsCount
        tailsPercentage = 0
        tailsPercText.textContent = tailsPercentage + "%"
        headsPercentage = 0
        headsPercText.textContent = headsPercentage + "%"
    })

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})