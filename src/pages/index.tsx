import { Flex, Button, Stack, Box } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';
import { Logo } from '../components/Header/Logo';

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" 
        borderRadius={8}
        flexDir="column"
      > 
        <Box align="center">
          <Logo />
        </Box>
        
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail"></Input>
          
          <Input name="password" type="password" label="Senha"></Input>      
        </Stack>
        
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
