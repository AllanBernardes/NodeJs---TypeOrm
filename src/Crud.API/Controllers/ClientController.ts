import { inject } from "inversify";
import * as express from "express";
import { TYPES } from "../../types";
import { controller, httpPost, response, requestBody, request,httpGet, httpPatch, queryParam } from "inversify-express-utils";
import { ClientService } from "../../Crud.Service/ClientService";

@controller("/api/client")
export class ClientController {
 
  constructor( @inject(TYPES.ClientService) private ser: ClientService) { }

  @httpGet("/")
    private getbiyd(@request() req: express.Request, @response() res: express.Response) {
        return this.ser.getbyid(req.body);
    }   

  @httpPost("/")
    private async create(@request() req: express.Request, @response() res: express.Response) {
        try {
            await this.ser.save(req.body);
            res.json(req.body);            
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    @httpGet("/all")
    private list() {
        return this.ser.getall();
    }

    
        
}


  
