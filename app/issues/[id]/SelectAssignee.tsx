"use client";

import { Select } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { Issue, User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

const SelectAssignee = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 60 * 1000, //60 mins
    retry: 3,
  });
  //   const [users, setUsers] = useState<User[]>([]);
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const { data } = await axios.get<User[]>("/api/users");
  //       setUsers(data);
  //     };
  //     fetchUsers();
  //   }, []);

  if (isLoading) return null;

  if (error) return null;
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "unassigned"}
        onValueChange={(userId) => {
          axios
            .patch("/api/issues/" + issue.id, {
              assignedToUserId: userId === "unassigned" ? null : userId,
            })
            .catch(() => {
              toast.error("Changes could not be saved");
            });
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Assignee</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default SelectAssignee;
