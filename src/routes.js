// Import node module
import express from 'express';
const router = express.Router();

// Arrow functions
router.get('/', (req, res) => {
  res.render('index',
  { title : 'Home' }
);
});
// Exporting an object as the default import for this module
export default router;
