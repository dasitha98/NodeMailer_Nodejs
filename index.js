import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import emailRoutes from './routes/email.js';

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))

app.use('/api/uploads', express.static('uploads'))
app.use(cors())
app.use("/static", express.static('./uploads/images'))

app.use("/api", emailRoutes)


// const CONNECTION_URL = 'mongodb+srv://dev_code94labs:dev@code94labs@cluster0.pcmyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

// mongoose.set('useFindAndModify', false)


// mongoose.connection.once('open', () => {
//     console.log('mongodb successfull');
// })


