import { Task } from "../types/task";

const priorityColors = ["#2b83ba", "#abdda4", "#ffdd00", "#fdae61", "#d7191c"];

type Props = {
  task: Task;
  selected?: boolean;
  onClick?: () => void;
};

export default function ListTask({ task, selected, onClick }: Props) {
  const priority =
    task.priority > 5 ? 5 : task.priority < 1 ? 1 : task.priority;
  const priorityColor = priorityColors[priority - 1];

  return (
    <div
      className="flex flex-row rounded-none w-full px-2 py-2 outline outline-2 outline-pink-500"
      style={{ outlineColor: priorityColor }}
    >
      <div className="text-center flex flex-col justify-center mx-2">
        <input
          type="checkbox"
          className="w-6 h-6 rounded-full focus:ring-0 focus:ring-offset-0"
        />
      </div>
      <div className="min-w-0 mx-2" onClick={onClick}>
        <h1 className={`text-3xl ${selected ? "" : "truncate h-10"}`}>
          {task.title}
        </h1>
        <p className={`text-md ${selected ? "mt-2" : "truncate"}`}>
          {task.description}
        </p>
      </div>
    </div>
  );
}
