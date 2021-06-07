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

