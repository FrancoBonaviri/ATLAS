import axios from 'axios';
const api = axios;


const Api =  {};


Api.GetContent = async(path) => {
    return await api.get(`http://localhost:8000/?route=${path}`);
}


Api.UploadFiles =  async(path, files) => {

    let newPath = path.replaceAll('/', '-');
    await api.post(`http://localhost:8000/upload?path=${newPath}`, files, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    });
}
// async UploadFiles(path, files) {
//     return await this.apiCall(() => this.api.post('/upload', files));
// }

Api.MakeDir = async(path, folderName) => {
    await api.post('http://localhost:8000/mkdir', {path, nombre: folderName});
}
// async MakeDir(path, name) {
//     return await this.apiCall(() => this.api.post('/mkdir', {path, nombre: name}));
// }




export default Api;