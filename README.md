# Project Name
Feedback Loop

## Description

    #Duration: 3 day sprint

Created a simple, reusable survey form to satisfy the need to collect feedback without overburdening the user with complexity.  I also focused on learning Material UI through this project, starting with the idea of a responsive mobile and desktop friendly format. MUI technologies utilized include: Theme toggle, snackbar, cards, accordion, alerts, menu, basic table, as well as positional elements (Paper, Box, Container, Stack)



## Screen Shot



## Installation
To start in a development environment after cloning locally:

1. Create a database named `prime_feedback`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Page land shows a menu icon in the top left (drops down with a light/dark toggle, a home/restart link, an info link, and admin page)
2. Clicking on the displayed start survey card will begin move to the first question rating card
3. After question is answered and the next button can be clicked (no value will prompt an alert)
4. Back button will return to the previous question
5. The 4th question card contains an optional comment box, and has a button to review all data
6. A modal pops with the questions and answers provided
7. If submit is clicked, a success snackbar will appear
8. The user is returned to the start of the feedback


## Built With
HTML/CSS
Javascript
React
Redux
Material UI
NodeJS
PostgreSQL
Express
Axios



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality as well as all of L'Engle and my family and friends for their support and inspiration.

## Support
If you have suggestions or issues, please email me at kjensen19@gmail.com

