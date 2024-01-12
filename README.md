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

The API provides the following endpoints:

- `GET /user/:id`: Get a user's profile and overall progress.
- `GET /topics/:subjectArea`: Get a list of topics under a specified subject area.
- `PUT /progress/:userId/:topicId`: Update a user's mastery score for a specific topic.
- `GET /progress/:userId`: Get a detailed progress report for a user.
- `GET /study/:userId`: Get a suggested topic for a user to study next.

## Testing

To run the tests, use the following command:
```
npm test
```

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.