import express from 'express';
import { createAdmin, createStudent, createTeacher, getAllAdmin, getAllStudents, getAllTeachers, getAllUsers} from '../controllers/userController.js';
import { createSubject, getAllSubjects } from '../controllers/subjectController.js';
import { createPractical, getPracticals, enrollInPractical } from '../controllers/practicalController.js';
import { isAdmin, isTeacher, isAdminOrTeacher } from '../middleware/Middleware.js';


const router = express.Router();

router.post('/admin/create', [createAdmin]);
router.post('/teacher/create', [createTeacher]);
router.post('/student/create', [createStudent]);
router.post('/subject/create', isAdmin, createSubject);
router.post('/practical/create', isTeacher, createPractical); 
router.post('/practical/enroll', enrollInPractical);

router.get('/users/get', isAdmin,getAllUsers)
router.get('/subject/get', getAllSubjects);  
router.get('/practical/get', getPracticals);  

router.get('/admin/get', isAdmin, getAllAdmin)
router.get('/teacher/get', isAdmin,getAllTeachers)
router.get('/student/get', isAdminOrTeacher, getAllStudents)
 
export default router;
