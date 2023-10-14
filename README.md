# [OIBSIP] Dynamic To-Do List Web Application
## LEVEL 2 TASK 3

🚀 Welcome to the Dynamic To-Do List Web Application project! Manage your tasks with ease using this sleek and responsive web app.

## Features

☑ **Add To-Dos**: Easily add new tasks with titles and descriptions.

☑ **Pending and Completed Lists**: Organize your tasks into two sections, "Pending" and "Completed," for a clear overview.

☑ **Dynamic Updates**: Tasks transition to the "Completed" section when marked as done.

☑ **Stylish Design**: A modern design with a calming color scheme.

☑ **Responsive**: Works seamlessly on any device.

## Preview

![](./images/Output.png)

## Demo
[Check out live demo ](https://github.com/PavanBhat007/OIBSIP)

## 👨‍🏫 **Explanation**:

☑ **HTML Structure:**
The HTML structure defines the layout, input forms, and the two main sections: "Pending" and "Completed."

☑ **CSS Styling:**
CSS is used for styling the application, making it visually appealing and responsive. It includes various CSS properties for layout, color, and element positioning.

☑ **JavaScript Logic:**
JavaScript is the heart of the app's functionality. It manages user interactions, updates the task lists, and handles the dynamic transitions between the "Pending" and "Completed" sections.

💠 The createTodo function is responsible for generating the task items, including the title, description, and checkboxes for marking tasks as complete.

💠 The handleInput function is triggered when users submit a new task. It validates the input, creates a task item, adds it to the pending list, and updates the display.

💠 The displayTodos function refreshes the displayed task lists in real-time.
The updateVisibility function manages the visibility of messages like "No pending To-Dos" and "No completed To-Dos" based on the number of tasks in each section.

💠 Event listeners are utilized to respond to user actions, such as clicking the "ADD TO-DO" button or marking tasks as complete.
