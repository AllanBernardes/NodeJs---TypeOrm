import { inject } from "inversify";
import * as express from "express";
import { TYPES } from "../../types";
import { controller, httpPost, response, requestBody, request,httpGet, httpPatch, queryParam } from "inversify-express-utils";
import { StudentService } from "../../Crud.Service/StudentService";


@controller("/api/student")
export class StudentController {
 
  constructor( @inject(TYPES.StudentService) private ser: StudentService) { }

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

    @httpGet("/login")
    private login(@request() req: express.Request, @response() res: express.Response) {
        return this.ser.validatelogin(req.body);
    }  

   
}


  
