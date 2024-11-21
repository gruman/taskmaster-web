export interface Task {
  id: string;
  code: string;
  title: string;
  description: string;
  unlocked: boolean;
  completed: boolean;
  type: string;
  specialTask: SpecialTask;
}

export interface SpecialTask {
  name: string;
  title: string;
  description: string;
}

export interface Game {
  id: string;
  hostID: string;
  title: string;
  tasks: Task[];
  players: Player[];
  public: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Player {
  id: string;
  name: string;
  startTime: number;
  endTime: number;
  created: number;
  updated: number;
}