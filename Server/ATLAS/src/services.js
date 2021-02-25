const fs = require('fs');


const getData = async(path) => {
    
    const dir = await fs.promises.opendir(path);

    const content = {directories: [], files: []};


    for await (const dirent of dir) {
        if (dirent.isDirectory()) {
          content.directories.push(dirent.name);
        } else {
          content.files.push(dirent.name);
        }
    }

    content.directories.sort();
    content.files.sort();

    return content;
}

const fileExist = (path) => {

  
}

module.exports = {
    getData,
    fileExist,
}