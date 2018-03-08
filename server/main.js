import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';


Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next)=>{

    const _id = req.url.slice(1);
    const link = Links.findOne({ _id});

    if(link){
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.tracKVisit', _id);

    }else{
      next()
    }
  });

    // res.statusCode= 302
    // console.log(req)
    // //Altenative codes
    // //res.setHeader('Location', 'https://www.google.com')
    // res.writeHead(302,{
    //   Location: 'https://www.google.com'
    // })
    // res.end()
    // next();


  //});
  //WebApp.connectHandlers.use((req, res, next) => {
  //  console.log('this is Coming from the MiddleWare');
  //  console.log(req.url, req.method, req.headers, req.query);
    //set http status codes
    //res.statusCode = 302
    //console.log(req)
    //.writeHead(302, {
    //  Location: 'https://www.google.com'
    //})
    //res.end()
    //Set http headers
    //.setHeader('my-custom-header', 'Dak was here');
    //sert http body
  //  res.write('<h1>This is my Middleware at work</>');
    //end Http request
    //res.end();
    //next();
  //});

});
//
