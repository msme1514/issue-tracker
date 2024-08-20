import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Heading, Flex, Card, Text, Grid, Box, Button } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose max-w-full" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
