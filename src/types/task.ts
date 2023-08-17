export type Timer = {
  epoch: Date;
  interval: number;

  repetitions?: number;
};

export type Task = {
  id: string;

  title: string;
  description: string;

  completed: boolean;

  priority: number;
  timer?: Timer; // one and done vs repeating
};
