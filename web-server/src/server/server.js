import express from 'express'
import path from 'node:path'

export const startServer = (options) => {
    const {port, public_path='public'} = options;
    const app = express();

    // middelware
    // los midddlewares se usan con la palabra use en express
    
    app.use(express.static(public_path)); // Contenido estatico que ponemos disponible
    app.get('', (req,res) => {
        const indexPath = path.join(__dirname, '..', '..', '..', public_path ,'index.html');    
        res.sendFile(indexPath);
        
    });
    
    app.listen(port, () => console.log(`server runs on http://localhost:${port}/`))
}
