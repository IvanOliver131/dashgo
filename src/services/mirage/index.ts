import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

// criar o servidor
export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        created_at() {
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

      // GET USERS
      this.get('/users', function (schema, request) { 
        const { page = 1, per_page = 10 } = request.queryParams;
        
        const total = schema.all('user').length;
 
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        // corto a listagem do inicio ate o fim 
        const users = this.serialize(schema.all('user'))     
          .users
          .slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });

      // GET USER
      this.get('/users/:id');

      // POST USERS     
      this.post('/users');

      // reseta as rotas depois de utilizar
      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}