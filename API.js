const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

app.get('/students', function (req, res) {
    let data = [{ id :1 , name: 'omar'}] 
    res.send(data )
  })
  
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});