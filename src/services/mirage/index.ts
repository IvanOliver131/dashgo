import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

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

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    // gerar dados apartir da inicialização do servidor
    seeds(server) {
      server.createList('user', 200);
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