import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { FC } from "react";
import { MdHighlightOff } from "react-icons/md";
import {v4 as uuidV4} from 'uuid';

const Todolist: FC = () => {
  return (
    <div className="px-24 h-screen bg-blue-gray-900 text-white container gap-4 flex flex-col items-center justify-center">
      <section className="flex gap-1">
        <div className="w-60">
          <Input label="Type here" color="white" crossOrigin={undefined} />
        </div>
        <div>
          <Button variant="gradient" color="white" onClick={(e)=> e.preventDefault()}>
            Add
          </Button>
        </div>
      </section>
      <ul className="flex w-full justify-between items-center">
        <li className="flex items-center justify-center gap-1">
          <Checkbox crossOrigin={undefined} color="red" />
          Hi
        </li>
        <li>
          <Typography className="cursor-pointer text-xl" color="red">
            <MdHighlightOff />
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Todolist;
