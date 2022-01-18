const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const fs = require('fs');

function objToString(obj) {
        let str = '';
        for (const [p, val] of Object.entries(obj)) {
                str += `${p}::${val}\n`;
        }
        return str;
}

var defaultThreads = [
		{
			id: 1,
			title: "Test Thread 1",
			author: "Anonymous",
			date: Date.now(),
			content: "Thread content",
			comments: [
			{
			},
			]
			},
			{
			id: 2,
			title: "Test Thread 2",
			author: "Anonymous",
			date: Date.now(),
			content: "Thread content",
			comments: [
			{
			},
			]
			}
			]
let comments = {"comments":""};
let thread = {"threads":""};
let getThread = {"getThread":""};
let app = express();
app.use(cors());
app.use(express.json()); //.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("test"));
app.post("/", (req, res) => {
	for (var key in req.body) {
	console.log(key + " heyyyyyyyyyyyyyyyyy");
	}
	console.log(key)
	console.log("threadfo")
	console.log(typeof key)
	if (key === "threadfo") {
		console.log("RANNNNNNNNNNN")
		console.log(req.body.threadfo)
		defaultThreads.push(req.body.threadfo)
		console.log(defaultThreads);
		
	}
        else if(JSON.stringify(req.body) === JSON.stringify(comments)) {
                console.log("ran")
                try {
                        
                        fs.readFile('file.txt', 'utf8' , (err, data) => {
                                if (err) {
                                console.error(err)
                                return
                                }
                                
                                data =  { "comments": data}
                                res.json(data)
                        });
                } catch (err) {
                        console.log("yep")
                }
	}

        else if(JSON.stringify(req.body) === JSON.stringify(getThread)) {
                console.log("ran42")
                try {
			console.log(defaultThreads)
                        res.json(defaultThreads)
			/*
                        fs.readFile('file2.txt', 'utf8' , (err, data) => {
                                if (err) {
                                console.error(err)
                                return
                                }
                                
                        });
			*/
                } catch (err) {
                        console.log("yep")
                }
	}
	/*
	else if (JSON.stringify(req.body) === JSON.stringify(thread)){
                console.log("ran")
                try {
                        fs.readFile('file2.txt', 'utf8' , (err, data) => {
                                if (err) {
                                console.error(err)
                                return
                                }
                                data =  { "threads": data}
				console.log(data)
                                res.json(data)
                        });
                } catch (err) {
                        console.log("yep")
                }
		
		
	}
	*/
        else {
		
			console.log("ran1");
                let info = JSON.stringify(req.body)
                fs.appendFile('file.txt', info + "\n", err => {
                        if (err) {
                                console.error(err)
                                return
                        }
                })
                res.send(req.body);
        }
        x = JSON.stringify(req.body)
        console.log(x)
});
app.get('/post', (req, res) => {
        console.log(req, res)
})

app.listen(3001, () => console.log("Server Running"));
