import { Request, Response } from 'express';
import { SessionService } from '../services/session.service';

export class SessionController {
  private sessionService: SessionService;

  constructor() {
    this.sessionService = new SessionService();
  }

  public async createSession(req: Request, res: Response): Promise<Response> {
    const { userId, studyTime } = req.body;
    try {
      const session = await this.sessionService.createSession(userId, studyTime);
      return res.status(201).json(session);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async getSession(req: Request, res: Response): Promise<Response> {
    const { sessionId } = req.params;
    try {
      const session = await this.sessionService.getSession(sessionId);
      return res.status(200).json(session);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async updateSession(req: Request, res: Response): Promise<Response> {
    const { sessionId } = req.params;
    const data = req.body;
    try {
      const session = await this.sessionService.updateSession(sessionId, data);
      return res.status(200).json(session);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async deleteSession(req: Request, res: Response): Promise<Response> {
    const { sessionId } = req.params;
    try {
      await this.sessionService.deleteSession(sessionId);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}