"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => (
  <div className="max-w-xl space-y-3">
    <TextField.Root placeholder="Title" />
    <TextArea placeholder="Description of the issue" />
    <Button>Submit New Issue</Button>
  </div>
);

export default NewIssuePage;
