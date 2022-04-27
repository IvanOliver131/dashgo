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
      user: Model.extend({

      })
    },
    
    routes() {

    }
  });
}