/*
  * to write a middleware you simply
  need to write a function that accepts
  for parameters: err, req, res
     next, is a callback to the next 
*/

app.use(function (err, req, res, next) {
  // do whatever you want here
  return next();
});
