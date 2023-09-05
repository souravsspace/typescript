import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { FC, useState } from "react";
import { MdHighlightOff } from "react-icons/md";
import { v4 as uuidV4 } from "uuid";

const Todolist: FC = () => {
  const [value, setValue] = useState<string>("");

  interface todoType {
    id: string;
    title: string;
    isCompleted: boolean;
    createdAt: Date;
  }

  const handleEvent = () => {
    const newTodo: todoType = {
      id: uuidV4(),
      title: value,
      isCompleted: false,
      createdAt: new Date(),
    };
    setValue("");
    Todolist.push(newTodo);
  };

  const Todolist: todoType[] = [];

  return (
    <div className="px-24 h-screen bg-blue-gray-900 text-white container gap-4 flex flex-col items-center justify-center">
      <section className="flex gap-1">
        <div className="w-60">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Type here"
            color="white"
            crossOrigin={undefined}
          />
        </div>
        <div>
          <Button
            onClickCapture={handleEvent}
            variant="gradient"
            color="white"
            onClick={(e) => e.preventDefault()}
          >
            Add
          </Button>
        </div>
      </section>
      <ul className="flex w-full justify-between items-center">
        {Todolist.map((todo) => (
          <li key={todo.id} className="flex items-center justify-center gap-1">
            <Checkbox crossOrigin={undefined} color="red" />
            {todo.title}
            <Typography className="cursor-pointer text-xl" color="red">
              <MdHighlightOff />
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
