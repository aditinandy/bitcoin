// const fetch = require("node-fetch");
// const http = require('http');

// var api1 = fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// var post;

// // Call the API
// fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (data) {

// 	// Store the post data to a variable
// 	post = data;

// 	// Fetch another API
// 	return fetch('https://jsonplaceholder.typicode.com/posts/59');

// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (userData) {
// 	console.log(post, userData);
// }).catch(function (error) {
// 	console.warn(error);
// });


// var port    = process.env.PORT || 3000,
//     express = require("express"),
//     request = require("request"),
//     app = express();

// app.set("view engine", "ejs");

// var hikes = {
//     url: "https://api.com/hikes",
//     headers: {
//       'Identifier': identifier
//     }
//   };

//   var availability = {
//     url: "https://api.com/hikes",
//     headers: {
//       'Identifier': identifier
//     }
//   };


// app.get("/", function(req, res){


//       function callback(error, response, body){
//           if(!error && response.statusCode == 200){
//               var data = JSON.parse(body);
//               res.render("index", {data: data});
//           }
//       }
//     request(hikes, callback);
// });


// app.listen(port, function(){
//     console.log("Running");
// });

 var request = require('request');

  request('https://jsonplaceholder.typicode.com/posts', function (error, response, body) {
    if (!error || !isEmptyObject(body)) {
                

      request('https://jsonplaceholder.typicode.com/posts/59', function (error, response, body) {
        if (!error || !isEmptyObject(body)) {
                
          request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
            if (!error || !isEmptyObject(body)) {
                

            request('https://jsonplaceholder.typicode.com/posts/178', function (error, response, body) {
            	if (!error || !!isEmptyObject(body)) {
                

            	request('https://jsonplaceholder.typicode.com/comments', function (error, response, body) {
            		if (!error || !isEmptyObject(body)) {
                

            		request('https://jsonplaceholder.typicode.com/users/987', function (error, response, body) {
            			if (!error || !isEmptyObject(body)) {
                

            			request('https://jsonplaceholder.typicode.com/albums', function (error, response, body) {
            				if (!error || isEmpty(body)) {
           
				            	var ress = {
												success: true,
												message: 'Nice Message',
												data: {
											   "success":[
											      {
											         "endpoint":"API Endpoint",
											         "status":200
											      }
											   ],
											   "failed":[
											      {
											         "endpoint":"API Endpoint",
											         "status":500
											      }
											   ]
											   		}
											};
							    console.log(ress);
			            }
			        	})
		            }
		        	})
	            }
	        	})
             }
        	})

              
            }
          })

        }
      })

    }
  })

// const request = require('request');
// const apiOptions = {
//   server: 'http://localhost:3000'
// };
// if (process.env.NODE_ENV === 'production') {
//   apiOptions.server = 'https://pure-temple-67771.herokuapp.com';
// }

// const requestOptions = {
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   method: 'GET',
//   json: {},
//   qs: {
//     offset: 20
//   }
// };

// request(requestOptions, (err, response, body) => {
//   if (err) {
//     console.log(err);
//   } else if (response.statusCode === 200) {
//     console.log(body);
//   } else {
//     console.log(response.statusCode);
//   }
// });

// const requestOptions1 = {
//   url: 'https://jsonplaceholder.typicode.com/posts/59',
//   method: 'GET',
//   json: {},
//   qs: {
//     offset: 20
//   }
// };
// request(requestOptions1, (err, response, body) => {
//   if (err) {
//     console.log(err);
//   } else if (response.statusCode === 200) {
//     console.log(body);
//   } else {
//     console.log(response.statusCode);
//   }
// });

// const renderHomepage = (req, res) => {
//   res.render('locations-list', {
//     title: 'Loc8r - find a place to work with wifi'
//   });
// };

// const homelist = (req, res) => {
//   const path = '/api/locations';
//   const requestOptions = {
//     url: `${apiOptions.server}${path}`,
//     method: 'GET',
//     json: {},
//     qs: {
//       lng: -0.7992599,
//       lat: 51.378091,
//       maxDistance: 20
//     }
//   };
//   request(
//     requestOptions,
//     (err, response, body) => {
//       renderHomepage(req, res);
//     }
//   );
// };