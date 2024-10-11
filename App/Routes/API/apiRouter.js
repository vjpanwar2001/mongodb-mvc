let express = require('express');
const { insert, view, deleteCourse, updateCourse } = require('../../Controller/courseController');

let apiRouter = express.Router();

apiRouter.post('/course/insert',insert)
apiRouter.post('/course/update',updateCourse)

apiRouter.get('/course/view',view)
apiRouter.get('/course/delete/:id',deleteCourse)


module.exports = apiRouter;