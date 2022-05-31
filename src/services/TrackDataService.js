import http from "../http-common";
class TrackDataService {
  getAllTracks(id) {
    return http.get(`/albums/${id}/tracks`);
  }
  getTrack(aid,tid) {
    return http.get(`/albums/${aid}/tracks/${tid}`);
  }
  createTrack(aid,data) {
    return http.post(`/albums/${aid}/tracks`, data);
  }
  updateTrack(aid,tid, data) {
    return http.put(`/albums/${aid}/tracks/${tid}`, data);
  }
  deleteTrack(aid,tid) {
    return http.delete(`/albums/${aid}/tracks/${tid}`);
  }

}
export default new TrackDataService();