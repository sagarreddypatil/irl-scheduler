import { useState } from "react";
import { Task } from "./types/task";
import ListTask from "./components/task";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";

function Divider({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative flex items-center">
      <div className="flex-grow border-t border-black"></div>
      <span className="flex-shrink mx-2 text-black">{children}</span>
      <div className="flex-grow border-t border-black"></div>
    </div>
  );
}

function App() {
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  const dummyTasks: Task[] = [
    {
      id: "1",
      title: "Unreasonably long task name",
      description: lorem,
      completed: false,
      priority: 3,
    },
    {
      id: "2",
      title: "I gotta do this it's so complicated omg i can't this is too much",
      description: lorem,
      completed: false,
      priority: 2,
    },
  ];

  return (
    <main className="w-full sm:w-8/12 mx-auto">
      <div className="flex flex-col py-4 gap-4">
        {dummyTasks.map((task) => (
          <ListTask
            task={task}
            selected={task.id === selectedTask}
            onClick={() => {
              if (selectedTask === task.id) {
                setSelectedTask(null);
              } else {
                setSelectedTask(task.id);
              }
            }}
          />
        ))}
      </div>
      <Divider>Completed</Divider>
    </main>
  );
}

export default App;
