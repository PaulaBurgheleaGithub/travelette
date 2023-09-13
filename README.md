<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/PaulaBurgheleaGithub/travelette">
    <img src="https://github.com/PaulaBurgheleaGithub/travelette/blob/main/client/public/Travalette.png" alt="Logo" width="50" height="50">
  </a>

<h3 align="center">Travelette App</h3>

  <p align="center">
    Travel wallet, the app that makes tracking the budget for traveling easy to understand
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

<!-- ABOUT THE PROJECT -->
## About The Project

Travelette is a my first full stack app built using React, Node/Express, Vite and MySQL.

The app will help people track their transactions/payments when they travel, be able to check how much they spent in their own currency, be able to share diffrent trip transactions with their friends.
It should provide various stats about past trips and help people optimise how much they spend when they travel.
It will hopefully one day communicate with the user's bank and also (with the help of external APIs) put togheter a budget for a future trip (calculate flight cost, acomodation, food, gifts, etc).

[![Travelette][product-screenshot]][product-screenshot]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][NodeJS]][Node-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![MySQL][MySQL]][MySQL-url]
* [![ViteJS][ViteJS]][Vite-url]
* [![ReactRouter][ReactRouter]][ReactRouter-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

List things you need to use the software and how to install them.
* npm
  ```sh
    npm install npm@latest -g
  ```
* express & vite
  ```sh
    npm i express vite
  ```
* MySQL (you have to have brew installed already, this is the command for MAC users)
  ```sh
    brew services start mysql 
    mysqladmin -u root password 'PASSOWORD OF YOUR CHOICE'
  ```
*Navigate to mysql and create the database locally so that you can run the migrate script later (this will generate the tables)
  ```sh
  mysql -u root -p
  create database travelette;
  ```

### Installation

1. Clone the repo
  ```sh
    git clone https://github.com/github_username/repo_name.git
  ```
2. Install NPM packages
  ```sh
    npm install
  ```
3. Install client dependencies - This will install client dependencies (React).
  ```sh
    cd client
    npm install
  ```
4. Add a `.env` file to the project folder (root/main) of this repository containing the MySQL authentication information for MySQL user. For example:
  ```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=travelette
  DB_PASS=YOUR_MySQL_PASSWORD
  ```
5. Database migration (run this in the main/root folder in a new terminal window) This will create all DB tables in your database. DO NO RUN THIS COMMAND UNLESS YOU HAVE CREATE A DB locally (see Prerequisites).
  ```sh
    npm run migrate
  ```
6. Navigate to the main and access the MySQL interface in your terminal by running 
  ```sh
    mysql -u root -p
  ```
7. In your MySQL console, you can run 
  ```sh 
    use travelette;
  ```
8. Check table Transactions (or any other table) to see the structure of the transactions table.
  ```sh 
    describe transactions;
  ```
9. Start server by going to the root folder and running
  ```sh 
    npm start
  ```
10. Open a separate terminal window and navigate to the client folder, then run
  ```sh 
    npm run dev
  ```

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).

### Database

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called travelette: `create database travelette`
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=travelette
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create all DB tables in your database.
- Navigate to the main and access the MySQL interface in your terminal by running `mysql -u root -p`
- In your MySQL console, you can run `use travelette;` and then `describe transactions;` (or any other table) to see the structure of the transactions table.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE -->
## Usage

Travelette is a my first full stack app built using React, Node/Express, Vite and MySQL.

_Documentation will be available in the future [Documentation](https://mycupoflatte.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add editing option to the transaction
- [ ] Add trips table and basic component functionality
- [ ] Create login page
    - [ ] Nested Feature

See the [open issues][issues-url] for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the GNU GENERAL PUBLIC LICENSE. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Paula Burghelea - paula.burghelea@gmail.com

Personal Website - [mycupoflatte.com](https://mycupoflatte.com/)

* [![LinkedIn][linkedin-shield]][linkedin-url]

[Project Link](https://github.com/users/PaulaBurgheleaGithub/projects/1/views/1)


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Resources

  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- [forks-shield]:
[forks-url]: https://github.com/PaulaBurgheleaGithub/travelette/fork

[issues-shield]:
[issues-url]: https://github.com/PaulaBurgheleaGithub/travelette/issues

[license-shield]:
[license-url]: https://github.com/PaulaBurgheleaGithub/travelette/blob/main/LICENSE -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/paula-burghelea/

[product-screenshot]: https://github.com/PaulaBurgheleaGithub/travelette/blob/main/client/public/app-transactions-page.png

[Express.js]: https://img.shields.io/badge/Express-js?logo=express&logoColor=%23F9F9F9&color=%23F9F9F9
[Express-url]: https://expressjs.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[MySQL]: https://img.shields.io/badge/MySQL-white?logo=mysql&color=%23F9F9F9
[MySQL-url]: https://www.mysql.com/

[NodeJS]: https://img.shields.io/badge/node.js-white?logo=nodedotjs&color=%23333333
[Node-url]: https://nodejs.org/en

[ViteJS]: https://img.shields.io/badge/vitejs-purple?logo=vite&color=%23FFFFFF
[Vite-url]: https://vitejs.dev/

[ReactRouter]: https://img.shields.io/badge/ReactRouter-black?logo=reactrouter&color=%23121212&link=https%3A%2F%2Freactrouter.com%2Fen%2Fmain
[ReactRouter-url]: https://reactrouter.com/en/main
