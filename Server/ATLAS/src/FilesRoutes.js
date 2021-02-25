const express = require('express');
const app = express();
const fs = require('fs')
const { getData, fileExist } = require('./services');

const config = require('../web.config.json').AppConfig;

app.post('/upload', ( req, res ) => {

    let files = req.files.files || [];
    let prePath = req.query.path.split('-');
    let path  = prePath.join('/');
    path = path + '/';


    if( !files || files.length === 0 ){
        return res.status(400).json({
            ok: false,
            message: 'File not found'
        });
    };

    if( !path ) {
        return res.status(400).json({
            ok: false,
            message: 'Undefined path'
        })
    }
    
    let cantidad = files.length || 1;
    res.json({
        ok: true,
        message: 'Uploading files: ' + cantidad,
        path,
    });
    
    const route =  __dirname + config.FileRoot + path;
    if( cantidad  === 1 ){  
        files.mv(route + files.name, ( err ) => {
            if ( err ) console.log( err );
        });
    } else if( files.length != 0) {
        let x = 0;
        while(x < files.length){
            files[x].mv(route + files[x].name, ( err ) => {
                if( err ) console.log( err ); 
            });
            x++;
        }
    }

});


app.post('/mkDir', ( req, res ) => {
    //Falta Validacion
    let path = req.body.path;
    let nombre = req.body.nombre;

    const route = __dirname + config.FileRoot + path
    
    fs.mkdir(route + nombre, ( err ) => {
        if( err ){
            res.status(400).json({
              ok: false,
              message: err,
            });
        }
        
        res.json({
            ok: true,
            message: 'Directory created successfully',
        });
    });
    

});


app.get('/', async ( req, res ) => {

    let path = req.query.route || "";

    const route = __dirname + config.FileRoot + path;

    const content = await getData(route);
    
    res.json({
        ok: true,
        Ruta: path,
        content
    });
});

module.exports = app;