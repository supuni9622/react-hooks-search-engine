let express = require('express'),
	router = express.Router();

var TVShows = require("../data.json")

router.get('/search', (req, res, next) =>{

	search_query = req.query.query
  console.log(search_query)

  // convert user input value to lowercase
     const querylower = search_query.toLowerCase()
     //Get whole user input as the first string using js regular expression anchors
     const queryfirst = new RegExp("\^" + querylower );
     //Get whole user input as the last string using js regular expression anchors
     const querylast = new RegExp( querylower  + "\$");
     // Separate user input word by word
     const separatewords = /\b\w+\b/g;
     const newquery = querylower.match(separatewords);
     console.log(queryfirst);
     console.log(querylower);
     console.log(newquery);
     console.log(querylast);

     const TVSeries = [];

     //-------------------------Searching --------------------------------

        //Check whether user input is empty or not
        if(search_query.length >= 1){  
            
            //If user input is not empty then loop through TVshows array
            for(let i=0; i<TVShows.shows.length; i++){
                
                // Search to find 3 tv shows; by getting user input as it is, at the beggining of the array elements (Beggining)
                if(queryfirst.test(TVShows.shows[i].toLowerCase()) == true){
                     // Check if the tv series already in the result
                    if(!TVSeries.includes(TVShows.shows[i]) )
                        TVSeries.push(TVShows.shows[i]);

                        console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))
                        console.log(TVShows.shows[i])
                    } 
                }

                 // If not find matching 3 tv shows 
            for(let i=0; i<TVShows.shows.length; i++){
                
                // Search to find tv shows; by getting user input as it is, among any place in the array element (Middle)
                if(TVShows.shows[i].toLowerCase().indexOf(search_query.toLowerCase()) !== -1){
                     // Check if the tv series already in the result
                    if(!TVSeries.includes(TVShows.shows[i]) )
                        TVSeries.push(TVShows.shows[i]);

                    }
                }

                      // If not find matching 3 tv shows yet
            for(let i=0; i<TVShows.shows.length; i++){

                // Search to find tv shows; by getting user input as it is, at the end of the array element (End)
                if(querylast.test(TVShows.shows[i].toLowerCase()) == true){
                       // Check if the tv series already in the result
                    if(!TVSeries.includes(TVShows.shows[i]) )
                        TVSeries.push(TVShows.shows[i]);

                        console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))
                        console.log(TVShows.shows[i])
                    } 
                }

                 // If not find matching 3 tv shows yet -- From here user input splited to separate strings 
            for(let i=0; i<TVShows.shows.length; i++){

                // Check whether user input consists of only one word or more than one word
                if(newquery.length == 1){
                    if(TVShows.shows[i].toLowerCase().indexOf(querylower) !== -1){
                       // Check if the tv series already in the result
                    if(!TVSeries.includes(TVShows.shows[i]) )
                        TVSeries.push(TVShows.shows[i]);
                           }
                }else if(newquery.length > 1 ){

                    // If user input consists of more than one word get each separated word and search in the TV show array elements
                    for(let a=0; a<=newquery.length; a++){ 
                        if(TVShows.shows[i].toLowerCase().indexOf(newquery[a]) !== -1){
                           // Check if the tv series already in the result
                    if(!TVSeries.includes(TVShows.shows[i]) )
                        TVSeries.push(TVShows.shows[i]);
                        }
                    }
                         console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))  
                }  
            }



            }
            res.json(TVSeries)

});

module.exports = router;


/*

 // convert user input value to lowercase
     const querylower = query.toLowerCase()
     //Get whole user input as the first string using js regular expression anchors
     const queryfirst = new RegExp("\^" + querylower );
     //Get whole user input as the last string using js regular expression anchors
     const querylast = new RegExp( querylower  + "\$");
     // Separate user input word by word
     const separatewords = /\b\w+\b/g;
     const newquery = querylower.match(separatewords);
     console.log(queryfirst);

      //-------------------------Searching --------------------------------

        //Check whether user input is empty or not
        if(query.length >= 1){  
            
            //If user input is not empty then loop through TVshows array
            for(let i=0; i<TVShows.shows.length; i++){
                
                // Search to find 3 tv shows; by getting user input as it is, at the beggining of the array elements (Beggining)
                if(queryfirst.test(TVShows.shows[i].toLowerCase()) == true){
                     exec((err, tvSeries) => {
                    if (err) return res.status(400).json({ success: false, err })
                    res.status(200).json({ success: true, tvSeries})
                  })

                        console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))
                        console.log(TVShows.shows[i])
                    } 
                }

            // If not find matching 3 tv shows 
            for(let i=0; i<TVShows.shows.length; i++){
                
                // Search to find tv shows; by getting user input as it is, among any place in the array element (Middle)
                if(TVShows.shows[i].toLowerCase().indexOf(query.toLowerCase()) !== -1){
                    exec((err, tvSeries) => {
                    if (err) return res.status(400).json({ success: false, err })
                    res.status(200).json({ success: true, tvSeries})
                  })
                    
                    }
                }

                 // If not find matching 3 tv shows yet
            for(let i=0; i<TVShows.shows.length; i++){

                // Search to find tv shows; by getting user input as it is, at the end of the array element (End)
                if(querylast.test(TVShows.shows[i].toLowerCase()) == true){
                    exec((err, tvSeries) => {
                    if (err) return res.status(400).json({ success: false, err })
                    res.status(200).json({ success: true, tvSeries})
                  })

                        console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))
                        console.log(TVShows.shows[i])
                    } 
                }

                 // If not find matching 3 tv shows yet -- From here user input splited to separate strings 
            for(let i=0; i<TVShows.shows.length; i++){

                // Check whether user input consists of only one word or more than one word
                if(newquery.length == 1){
                    if(TVShows.shows[i].toLowerCase().indexOf(querylower) !== -1){
                        exec((err, tvSeries) => {
                    if (err) return res.status(400).json({ success: false, err })
                    res.status(200).json({ success: true, tvSeries})
                  })
                           }
                }else if(newquery.length > 1 ){

                    // If user input consists of more than one word get each separated word and search in the TV show array elements
                    for(let a=0; a<=newquery.length; a++){ 
                        if(TVShows.shows[i].toLowerCase().indexOf(newquery[a]) !== -1){
                            exec((err, tvSeries) => {
                        if (err) return res.status(400).json({ success: false, err })
                        res.status(200).json({ success: true, tvSeries})
                    })
                        }
                    }
                         console.log(queryfirst.test(TVShows.shows[i].toLowerCase()))  
                }  
            }
 */