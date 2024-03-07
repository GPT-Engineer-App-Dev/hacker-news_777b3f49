import { Box, Container, Heading, Stack, Link, Text, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { FaAngleUp, FaCommentAlt } from "react-icons/fa";

const Index = () => {
  // Mock data for demonstration purposes
  const newsItems = [
    {
      id: 1,
      title: "Introducing the new Tesla Model S",
      url: "https://tesla.com",
      points: 156,
      author: "elonmusk",
      comments: 42,
      time: "3 hours ago",
    },
    {
      id: 2,
      title: "GitHub Copilot is now generally available",
      url: "https://github.com",
      points: 249,
      author: "octocat",
      comments: 99,
      time: "5 hours ago",
    },
    // ... more news items
  ];

  return (
    <Container maxW="container.md" pt="5">
      <Heading as="h1" size="lg" mb="4">
        Hacker News Clone
      </Heading>

      <Stack spacing={3}>
        {newsItems.map((item) => (
          <Box key={item.id} p={4} boxShadow="md" borderRadius="md">
            <Flex>
              <Box>
                <Link href={item.url} color="teal.500" isExternal>
                  {item.title}
                </Link>
                <Text fontSize="sm">
                  by {item.author} - {item.time}
                </Text>
              </Box>
              <Spacer />
              <Flex alignItems="center">
                <IconButton size="sm" icon={<FaAngleUp />} aria-label="Upvote" variant="ghost" />
                <Text fontSize="sm" pr={2}>
                  {item.points}
                </Text>
                <IconButton size="sm" icon={<FaCommentAlt />} aria-label="Comments" variant="ghost" />
                <Text fontSize="sm">{item.comments}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Index;
