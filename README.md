# Social-Network-API

## Description
This project create an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## User story and Acceptance Criteria
``AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data``

`GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list`


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Skills Improved](#skills-improved)
- [Author](#author)
- [Credits](#credits)
- [License](#license)
## Installation

1. Install dependecies: `npm install`
2. Set up enviroment variables: 
   Create a `.env` file in the root directory, use the guide on the `.env.example` file.
3. Start the server using the command: `npm start`
## Usage
### API Endpoints
#### Users
- GET /api/user: Get a list of all users.
- GET /api/user/:userId: Get details of a specific user.
- POST /api/user: Create a new user.
- PUT /api/user/:userId: Update an existing user.
- DELETE /api/user/:userId: Delete a user.

#### Thoughts
- GET /api/thought: Get a list of all thoughts.
- GET /api/thought/:thoughtId: Get details of a specific thought.
- POST /api/thought: Create a new thought.
- PUT /api/thought/:thoughtId: Update an existing thought.
- DELETE /api/thought/:thoughtId: Delete a thought.

#### Reactions
- POST /api/thought/:thoughtId/reactions: Add a reaction to a thought.
- DELETE /api/thought/thoughtId/reactions/reactionId: Remove a reaction from a thought.
#### Friends
- POST/api/user/:userId/friends/:friendId: add a new friend to a user's friend list
- DELETE/api/user/:userId/friends/:friendId: remove a friend from a user's friend list

## Video demonstration: https://drive.google.com/file/d/1lY7xLCZPGGtwauwx-m2BOCA5ZSNMqfuY/view

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- dotenv
- Nodemon

## Skills Improved
- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful API design
- Asynchronous JavaScript
- Error handling and debugging

## Author
  Carmen Jimenez
  Github: https://github.com/clcoder2425/Social-Network-API.git
## Credits
- Connecting a MongoDB to Mongoose: https://dev.to/aritik/connecting-to-mongodb-using-mongoose-3akh
- How to use Insomnia to test API Endpoints: https://dev.to/kmcknight91/how-to-use-insomnia-to-test-api-endpoints-1lad
## License
This project is licensed under the **MIT License**.