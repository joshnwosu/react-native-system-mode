import http from "../../http-common";

const getAll = () => {
  return http.get("/tutorials");
};

const TutorialService = {
  getAll,
};

export default TutorialService;
