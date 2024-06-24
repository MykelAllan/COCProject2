import express from 'express';

const router = express.Router();

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Smith' }
];



router.get('/api', (req, res) => {
    const routes = router.stack
        .filter(layer => layer.route)
        .map(layer => layer.route.path);
    res.json({ routes });
});

router.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

router.get('/api/users', (req, res) => {
    res.json(users);
});

export default router;
