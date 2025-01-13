//default task + todolist
let defaultTask = {
	title: "Be Happy",
	desc: "try",
	isDone: false,
}

let todoList = [defaultTask];

function showList() {
	let len = todoList.length;
    console.log("To-Do List: " + `[${len}]`);

	todoList.forEach((task, index) => {
		console.log(`${index + 1}. ${task.title} - ${task.desc} - [${task.isDone ? "Done" : "Not Done Yet"}]`);
	});
}

// Adding a task
function addTask(title, desc) {
	if (desc == undefined){
		todoList.push({
			title,
			desc: "...",
			isDone: false,
		});
		console.log(`> Added: ${title}`);
	} else {
		todoList.push({ 
			title, 
			desc, 
			isDone: false 
		});
		console.log(`> Added: ${title}`);
	};
}

//editing and removing a task

function editTask(index, newTitle) {
    if (todoList[index]) {
        todoList[index].title = newTitle;
        console.log(`Updated Task ${index + 1}`);
    } else {
        console.log("Invalid task index.");
    }
}

function completeTask(index) {
	if (todoList[index]) {
		todoList[index].isDone = true;
        console.log(`Task ${index + 1} marked as completed.`);
    } else {
		console.log("Invalid task index. It doesn't exist");
    }
}


function removeTask(index) {
	if (todoList[index]) {
		console.log(`Removed: ${todoList[index].title}`);
		todoList.splice(index, 1);
	} else {
		console.log("Invalid task index. It doesn't exist");
	}
}



// ignore tests


// showList();
// console.log(' '); //white space for my own clariy

// //adding tasks
// addTask("Buy groceries", "check fridge");
// addTask("log water for the day");
// addTask("refill coffee");
// addTask("charge headphones");
// console.log(' ');

// showList();
// console.log(' ');

// //editing tasks

// //changing tasks title
// editTask(1, "Buy food");
// console.log(' ');
// showList();

// console.log(' ');

// //changing completion status 
// completeTask(1);
// completeTask(3);
// console.log(' ');
// showList();
// console.log(' ');


// //deleting tasks
// removeTask(4);
// showList();

