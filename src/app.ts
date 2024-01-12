import express from 'express';
import { UserController } from './controllers/user.controller';
import { TopicController } from './controllers/topic.controller';
// import { SessionController } from './controllers/session.controller';
import { ProgressController } from './controllers/progress.controller';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userController = new UserController();
const topicController = new TopicController();
// const sessionController = new SessionController();
const progressController = new ProgressController();

// app.get('/user/:id', userController.getUserProfile);
app.get('/user/:id', async (req, res) => {
    try {
      const userProfile = await userController.userService.getUserProfile(req.params.id);
      const userProgress = await progressController.progressService.getUserProgress(req.params.id);
  
      res.json({
        userProfile,
        userProgress
      });
    } catch (error) {
      res.status(500).send(error);
    }
  });
app.post('/user/register', userController.registerUser);
app.get('/topics/:subject', topicController.getTopicList);
app.get('/topics/selectForStudy/:userId', topicController.selectTopicForStudy);
// app.post('/session', sessionController.createSession);
app.put('/progress/:userId/:topicId', progressController.updateMasteryScore);
app.get('/progress/:userId', progressController.getUserProgress);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;