
import { debug } from "../../../dev_config.mjs";

// POST /api/logout
export async function handle_logout_request( req , res ){
  
    if(debug){
        console.log("[SERVER] logout request");
    }
    
    res.sendStatus(200);
}
