//const express = require('express');
//const routes  = require('./routes');
import express from 'express';
import routes from './routes';

class AppController {
    
    public express: express.Application;

    constructor(){
        this.express = express();

        this.midlewares();
        this.routes();
    }

    midlewares(){
        this.express.use(express.json());
    }

    routes(){
        this.express.use(routes);
    }

    printLog(text: String){
      console.log(text);
    }
}

export default new AppController().express;