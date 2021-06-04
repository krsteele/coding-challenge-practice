console.log("second live coding challenge!")

function multiTable(number) {
    let table = ""
    for (let m=1; m<=10; m++) {
    
        table += `${m} * ${number} = ${m*number}`

        m === 10 ? "" : table += "\n"
    }
    return table
  }

  console.log(multiTable(5))
  console.log(multiTable(1))