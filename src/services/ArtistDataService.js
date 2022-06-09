import http from "../http-common";
class ArtistDataService {
  getAll() {
    return http.get("/artists");
  }
  get(id) {
    return http.get(`/artists/${id}`);
  }
  create(data, inputfile) {
    let formdata = new FormData();
    formdata.append("file", inputfile);
    return http.post(`/artists?name=${data.name}&description=${data.description}`, formdata, {
      headers: { "Content-Type": "multipart/form-data"}
    });
  }
  
  update(data) {
    return http.put(`/artists/${data.id}`, data);
  }

  delete(id) {
    return http.delete(`/artists/${id}`);
  }
  deleteAll() {
    return http.delete(`/artists`);
  }
  findByName(name) {
    return http.get(`/artists?name=${name}`);
  }
  getAllAlbumsFromArtist(id){
    return http.get(`/albums/${id}/byartist`);
  }
}

export default new ArtistDataService();