import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from './inversify.config';

(async () => {

  const port = 3000;
  const container = new Container();
  await container.loadAsync(bindings);
  // const app = new InversifyExpressServer(container);

  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    // add body parser
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });  

  let app = server.build();  
  app.listen(port, () => {
      console.log(`Server running at http://127.0.0.1:${port}/`)
  });

})();

