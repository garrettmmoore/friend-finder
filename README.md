# Friend Finder
### By Garrett Moore

## Deployed Here: https://friendfindertech.herokuapp.com/

## Application
Hello! Welcome to Friend Finder! This full-stack site will take in users survey results, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Friend Finder is built using node.js, JavaScript, HTML, CSS, jQuery, and Express to handle routing. The application is currently deployed to Heroku.

Node Packages Used: express, body-parser and path

## Step 1 - Complete Survey
1. The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

## Step 2 - Routes Breakdown
1. The htmlRoutes.js file includes two routes:
    1. A GET Route to /survey which displays the survey page.
    2. A default route that leads to home.html which displays the home page.
2. Your apiRoutes.js file contains two routes:
    1. A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
    2. A POST routes /api/friends. This is used to handle incoming survey results. This route is also used to handle the compatibility logic.
    3. A POST routes /api/clear. This is used to clear the friends data in the array.

## Step 3 - Save Data
1. The data in friends.js is saved as an array of objects. This is starter data that will be compared against the user submitted data to find a match.

## Step 4 - Compatibility
1. The user's most compatible friend is determined by:
    1. Converting each user's results into a simple array of numbers (ex: [2, 3, 1, 2, 2, 2, 3, 4, 2, 3]).
    2. Comparing the differences between current user's scores against those from other users, for each question. The differences will be added up to calculate the totalDifference.
        1. Example:
            1. User 1: [5, 3, 3, 4, 5, 1, 3, 4, 4, 2]
            2. User 2: [2, 2, 1, 4, 5, 1, 3, 4, 4, 2]
            3. Total Difference: 3 + 1 + 2 = 6
    3. The absolute value is used when calculating the differences.

    4. The closest match is the user with the least amount of difference.

## Step 5 - Display Result
1. Once the current user's most compatible friend has been found, the result will be displayed in a modal pop-up.
    1. The modal displays both the name and picture of the closest match.

## End
Thank you for using Friend Finder! Please contact me directly if you have any questions or suggestions.

https://github.com/garrettmmoore