"use client";
import { Button, TextField } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

const NewIssuePage = () => (
  <div className="max-w-xl space-y-3">
    <TextField.Root placeholder="Title" />
    <SimpleMDE placeholder="Description of the issue" />
    <Button>Submit New Issue</Button>
  </div>
);

export default NewIssuePage;
