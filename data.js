
        
var defaultThreads = [
    {
        id: 1,
        title: "Test Thread 1",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
	comments: [
            {
		author: "Stuff",
                date: Date.now(),
                content: "Test"
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
		author: "Stuff",
                date: Date.now(),
                content: "Test"
            },
        ]

    }
]
function getThread(){
        const data = {"getThread":""};
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("clicked the button");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	threadMaker(data);
	return(data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
function makeThread(){
        const data = info;
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("clicked the button");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
	
        })
        .catch((error) => {
        console.error('Error:', error);
        });
	
}
function getComment(){
        const data = {"comments":""};
        postInfo(data);
}
var threads = defaultThreads
function postInfo(info) {
        const data = info;
        const options = {
                method: 'POST',
                mode: 'cors',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        };
        console.log("clicked the button");
        fetch('https://StrikingHappyPixel.1el680103.repl.co', options)
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}
