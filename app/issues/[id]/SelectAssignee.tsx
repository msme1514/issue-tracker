"use client";

import { Select } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React from "react";

const SelectAssignee = () => {
  const { status, data: session } = useSession();
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Assignee</Select.Label>
          <Select.Item value="Mustafa">Mustafa</Select.Item>
          <Select.Item value="Fatema">Fatema</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default SelectAssignee;
