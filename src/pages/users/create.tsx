import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ])
})


export default function CreateUser() {
  return (  
    <Box>
      <Header />
      <Flex 
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          
          <Divider my="6" borderColor="gray.700"></Divider>
        
          <VStack spacing="8">
            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["6", "8"]} 
              w="100%"
            >
              <Input name="name" type="name" label="Nome completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid 
              minChildWidth="240px" 
              spacing={["6", "8"]} 
              w="100%"
            >
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex
            mt="8" 
            justify="flex-end"
          >
            <HStack 
              spacing="4"
            >
              <Link href="/users" passHref>
                <Button
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              
              <Button
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}