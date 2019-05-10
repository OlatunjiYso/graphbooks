import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema/schema';
import dbConfig from './DB';

// mongoose.Promise = global.Promise;
// mongoose.connect(dbConfig.DB, {useNewUrlParser: true}).then(
//   () => { console.log('Database is connected') },
//   err => { console.log('Can not connect to the database' + err) }
// );

mongoose.connect(dbConfig.DB, {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000, ()=> {
  console.log('Listening on port 4000')
});