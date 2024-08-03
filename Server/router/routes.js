import createrouter from "./add-resource.js";
import viewrouter from "./view-resource.js";

function routes(app){
    app.use("/create",createrouter);
    app.use("/view",viewrouter);
    
}

export default routes