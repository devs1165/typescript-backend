import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

// import routers 


//server class 
class Server {
    public app:express.Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
        
    }
    public config() {

        //mongoose 
        const mongo_uri = 'mongodb://127.0.0.1:27017/tes-test-db'
        mongoose.connect(mongo_uri);

        // config
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    public routes(){
        let router:express.Router;
        router = express.Router();
        
        this.app.use('/',router);
        // this.app.use('api/v1/post', PostRouter);
    }
}

export default new Server().app;