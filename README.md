<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/PaulaBurgheleaGithub/travelette">
    <img src="https://github.com/PaulaBurgheleaGithub/travelette/blob/main/client/public/Travalette.png" alt="Logo" width="50" height="50">
  </a>

<h3 align="center">Travelette App</h3>

  <p align="center">
    Travel wallet, app built to help people track their trip expences
    <br />
    <a href="https://github.com/PaulaBurgheleaGithub/travelette"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PaulaBurgheleaGithub/travelette">View Demo (comming soon)</a>
    ·
    <a href="https://github.com/PaulaBurgheleaGithub/travelette/issues">Report Bug</a>
    ·
    <a href="https://github.com/PaulaBurgheleaGithub/travelette/issues">Request Feature</a>
  </p>
</div>


# Full Stack APP - TRAVELETTE

A full stack app using React, Node/Express, and MySQL.
The app will help people track their transactions/payments when they travel, be able to check how much they spent in their own currency, be able to share diffrent trip transactions with their friends.
It should provide various stats about past trips and help people optimise how much they spend when they travel.
It will hopefully one day communicate with their back but also with the help of external APIs put togheter a budget for a future trip (calculate flight cost, acomodation, food, gifts, etc).

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create all DB tables in your database.
- Navigate to the main and access the MySQL interface in your terminal by running `mysql -u root -p`
- In your MySQL console, you can run `use travelette;` and then `describe transactions;` (or any other table) to see the structure of the transactions table.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.


## Resources

  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
- Make sure you give yourself a grade before turning it in!
