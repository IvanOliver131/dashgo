import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return(
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ivan Oliveira</Text>
          <Text 
            color="gray.300" 
            fontSize="small"
          >
            ivanoliver131@gmail.com
          </Text>
        </Box>
      )}
      <Avatar 
        size="md"
        name="Ivan Oliveira"
        src="https://github.com/ivanOliver131.png"
      />
    </Flex>
  );
}