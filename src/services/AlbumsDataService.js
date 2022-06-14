import http from "../http-common";
class AlbumsDataService {
  getAll() {
    return http.get("/albums");
  }
  get(id) {
    return http.get(`/albums/${id}`);
  }
  create(data, inputfile) {
    let formdata = new FormData();
    formdata.append("file", inputfile);
    return http.post(`/albums?name=${data.name}&artist=${data.artist}&description=${data.description}&publishedYear=${data.year}&artistId=${data.artistId}`, formdata, {
      headers: { "Content-Type": "multipart/form-data"}
    });
  }
  
  update(data) {
    return http.put(`/albums/${data.id}`, data);
  }

  delete(id) {
    return http.delete(`/albums/${id}`);
  }
  deleteAll() {
    return http.delete(`/albums`);
  }
  findByTitle(title) {
    return http.get(`/albums?name=${title}`);
  }
}

export default new AlbumsDataService();