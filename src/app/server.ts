
import { Server } from 'http';
import app from '../app/app';


const PORT = 5000;
let server : Server;

async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`Express lisen port is${PORT}`)
    })
}

bootstrap();