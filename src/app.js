import express from 'express';
import 'dotenv/config';
import userRouter from './routes/users.routes';
import loginRouter from './routes/session.routes';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000   

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});

export default app;