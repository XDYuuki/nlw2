import { Router } from 'express';
const routes = Router();

// Definição de rotas

routes.get('/', (req, res)=>{
  res.send({
    "Hello": "World"
  })
});


export default routes;