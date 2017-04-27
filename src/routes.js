import express from 'express';
import ContactController from './contact.controller';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Welcome'
    });
});

router.get('/contact', ContactController.getContact);
router.post('/contact', ContactController.postContact);

export default router;