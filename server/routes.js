
const Router = require('koa-router');
const dinerController = require("./controllers/Diner.controller");
const questionController = require("./controllers/Question.controller")
const authenticationController = require("./controllers/Authentication.controller");
const matcheFinderController = require("./controllers/MatcheFinder.controller");
const config = require('./config');


module.exports = function () {
    let router = new Router();

    /* Diner controller*/
    router.post("/api/addDiner", dinerController.addDiner);
    router.get("/api/getAllDiners", dinerController.getAllDiners);
    router.get("/api/getDinerByUserName", dinerController.getDinerByUserName);
    router.post("/api/updateDinerByUsername", dinerController.updateDinerByUsername);
    router.get("/api/getUserAndMeetingsByMail", dinerController.getUserAndMeetingsByMail);

    /* Question controller */
    router.get("/api/getRandomQuestion", questionController.getRandomQuestion);
    router.get("/api/getAllQuestions", questionController.getAllQuestions);
    router.post("/api/addQuesion", questionController.addQuesion);
    router.post("/api/deleteQuestionById", questionController.deleteQuestionById);

    /* Authentication controller */
    router.post("/api/login", authenticationController.login);
    router.get("/api/matcheFinder", matcheFinderController.find);
    router.get("/api/register", matcheFinderController.register);

    /* TESTS */
    router.get("/api/addUsers", matcheFinderController.test_addUsers);
    router.get("/api/addRooms", matcheFinderController.test_addRooms);
    router.get("/api/sendemail", matcheFinderController.test_sendemail);



    return router;
};