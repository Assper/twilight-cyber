## Description

Basic API for checking leaked credentials existence

## Installation

Install Node v20 using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) and setup packages

```bash
$ nvm install 20
$ npm install
```

Create **.env** file in root folder and complete the file base on **.env.example**
Env variables required for application startup and database connection

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage

Send **GET** request to **/api/credentials/leaked** endpoint
#### Query Params
  - username - string
  - password - string
  - hash - string

#### Retrun
 - True - string
 - False - string

If passed **hash** param it will search by hash and ignoring other params
If **hash** not passed then it will try to search by **username** and **password**

## Examples

![Search by Hash](https://i.imgur.com/dkbUNA6.png "Search by Hash")

![Search by Username and Password](https://i.imgur.com/MRxl09c.png "Search by Username and Password")

![Search without params](https://i.imgur.com/qjNTwz8.png "Search without params")
