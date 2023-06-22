# Task Manager

This is a simple task manager web application that allows you to add and delete tasks. It displays the current date and limits the number of tasks that can be added.

## Usage

1. Open the web application in a browser.
2. The current date will be displayed at the top of the page.
3. To add a task, click the "Add Task" button.
4. Enter the name of the task in the prompt dialog and click "OK".
5. The task will be added to the task list.
6. If the task list reaches the maximum limit of tasks (13), an alert will be shown, and no more tasks can be added.
7. To delete a task, click the "done" button next to the task.
8. The task will be faded out and removed from the task list.
9. The name of the deleted task will be added to the "Eliminated Tasks" section below.
10. You can continue adding tasks and deleting them as needed.

## Code Explanation

The code uses JavaScript and HTML to create the task manager web application. Here are the key parts of the code:

- The `Date` object is used to get the current date.
- The current day, month, and year are extracted from the `Date` object and displayed on the page.
- An array `diasSemana` stores the names of the days of the week.
- The `addTask` function is called when the "Add Task" button is clicked. It prompts the user to enter the name of the task and creates a new task element in the task list.
- The `handleButton` function is called when the "done" button is clicked. It animates the task name to fade out and removes the task from the task list. The name of the deleted task is stored in an array and added to the "Eliminated Tasks" section.
- The `addtaskEliminate` function creates a new element for the deleted task and adds it to the "Eliminated Tasks" section with a fade-in animation.




Please note that there is a limit of 13 tasks that can be added. 
If this limit is reached, no more tasks can be added.

<img aling="center" src="/assets/preview.png">

Feel free to customize and modify the code to suit your needs. Enjoy managing your tasks!
