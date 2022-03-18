# forEach Callback
A simple package to add the forEachC property to all arrays that lets you perform an action on all elements of an array and then callback to a function when all are done.
## Usage
	let arr = [0, 1];
	arr.forEachC((item, resolve) => {
		//DO STUFF
		resolve(result of stuff);
	}, (results) => {
		//results = array of all results of stuff
	});

## Examples
    require("foreachcallback");
    let arr = [0, 1];
    arr.forEachC((i, resolve) => {
	    resolve(i + 1);
	}, (results) => {
	    console.log(results);
	});
Expected Results:

    [1, 2]
This might seem fairly useless compared to the default forEach, however where this is very useful is applications where you might not get a response immediately. For example, if you have an array of URLs:

`let arr = ["https://google.com", "https://bing.com"];`

It requires many lines of code to create all the promises to only continue execution when you've made a request to all of those. With this package, you can just:

    arr.forEachC((i, resolve) => {
	    request(i, function(error, request, body) {
			resolve(body);
		});
	}, (results) => {
	    console.log(results);
	});
which will yield:

`["<GOOGLE HTML>", "<BING HTML>"]`