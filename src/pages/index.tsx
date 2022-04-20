import { Flex, Button, Stack, Box } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';
import { Logo } from '../components/Header/Logo';
import { SubmitHandler, useForm } from 'react-hook-form';

type SignInFormData = {
  email: string;
  password: string;
}

// A propriedade align sinaliza erro porem não esta com erro
export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('oi')
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      > 
        <Box align="center" >
          <Logo />
        </Box>
        
        <Stack spacing="4">
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
            {...register('email')}
          >
          </Input>
          
          <Input 
            name="password" 
            type="password" 
            label="Senha"
            {...register('password')}
          >
          </Input>      
        </Stack>
        
        <Button 
          type="submit" 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
