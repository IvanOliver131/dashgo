import { createServer, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
}

// criar o servidor
export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    
    // TESTE DE COMMIT
    routes() {
      // * todas as rotas precisam de api/
      this.namespace = 'api';
      this.timing = 750; // faz com que as rotas demorem 750 milesegundos

      this.get('/users');
      this.post('/users');

      // reseta as rotas depois de utilizar
      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}