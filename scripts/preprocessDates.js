

// Preprocess Dates

function preprocessData(dates) {
    // array used to collect processed dates
    let processedArray = [];

    // for each date in dates array
    for (let date of dates) {
        // declare empty string to hold date components as they are being processed
        let processedDate = "";

        // split the date into an array via the spaces
        const dateComponents = date.split(" ")
        
        // for index 2, concat the processed date string
        processedDate += `${dateComponents[2]}-`
        
        // for index 1 process the month and concat to processed date string
            // object of month keys with numeric values
            const months = {
                "Jan" : "01",
                "Feb" : "02", 
                "Mar" : "03", 
                "Apr" : "04", 
                "May" : "05", 
                "Jun" : "06", 
                "Jul" : "07", 
                "Aug" : "08", 
                "Sep" : "09", 
                "Oct" : "10", 
                "Nov" : "11", 
                "Dec" : "12"
            }

            // find matching month and concat month- to processedDate 
            const month = months[dateComponents[1]] 
            processedDate += `${month}-`
        
        // for index 0 of the new array process the day
        const i = (dateComponents[0].length - 2);
        let day = dateComponents[0].slice(0, i);
        if (day.length<2){
            day = "0" + day
        }
        
        processedDate += day
        
        // push processed date into processedArr
        processedArray.push(processedDate)
        }

        return processedArray
    }



    




console.log("ex1", preprocessData(["20th Oct 2052", "6th Jun 1933", "26th May 1960", 
                                    "20th Sep 1958", "16th Mar 2068", "25th May 1912", 
                                    "16th Dec 2018", "6th Jun 1933", "26th Dec 2061", 
                                    "4th Nov 2030", "28th Jul 1963"]))