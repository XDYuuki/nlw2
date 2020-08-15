import app from './app';

//const app = expres();

app.listen((process.env.PORT || 3000), ()=>{
  console.log('Start Listen port 3000');
}); 