# SAT Preparation System

This project is an API for a SAT Preparation System. It provides endpoints for managing users, topics, study sessions, and tracking progress. The system also includes adaptive learning features, interactive tools, and rewards for achievement.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MySQL

### Installing

1. Clone the repository:
```
git clone https://github.com/yourusername/sat-preparation-system.git
```

2. Install the dependencies:
```
cd sat-preparation-system
npm install
```

3. Set up the database:

Create a MySQL database and update the database connection settings in `src/database/connection.ts`.

Execute the tables.sql file into your Database. It will push the tables to your database.

4. Start the server:
```
npm start
```

The server will start running at `http://localhost:3000`.

## API Endpoints

### User

- `POST /user/register`

  Registers a new user.

  **Request Body:**

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

- `GET /user/:id`

  Retrieves the profile and progress of a user.

  **Path Parameters:**

  - `id`: The ID of the user.

  **Response:**

  ```json
  {
    "userProfile": {
      // user profile data
    },
    "userProgress": {
      // user progress data
    }
  }
  ```

### Topics

- `GET /topics/:subject`

  Retrieves a list of topics for a specific subject.

  **Path Parameters:**

  - `subject`: The subject to retrieve topics for.

- `GET /topics/selectForStudy/:userId`

  Selects a topic for a user to study.

  **Path Parameters:**

  - `userId`: The ID of the user.

### Progress

- `PUT /progress/:userId/:topicId`

  Updates the mastery score for a user's topic.

  **Path Parameters:**

  - `userId`: The ID of the user.
  - `topicId`: The ID of the topic.

  **Request Body:**

  ```json
  {
    "masteryScore": "number"
  }
  ```

- `GET /progress/:userId`

  Retrieves the progress of a user.

  **Path Parameters:**

  - `userId`: The ID of the user.

## Examples

To register a new user:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser", "password":"testpassword"}' http://localhost:3000/user/register
```

To get a user's profile and progress:

```bash
curl http://localhost:3000/user/1
```

To get topics for a subject:

```bash
curl http://localhost:3000/topics/math
```

To select a topic for a user to study:

```bash
curl http://localhost:3000/topics/selectForStudy/1
```

To update a user's mastery score for a topic:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"masteryScore":80}' http://localhost:3000/progress/1/1
```

To get a user's progress:

```bash
curl http://localhost:3000/progress/1
```


## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
