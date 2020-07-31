/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CategoryClass.js":
/*!******************************!*\
  !*** ./src/CategoryClass.js ***!
  \******************************/
/*! exports provided: categoryMaker, taskMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryMaker", function() { return categoryMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskMaker", function() { return taskMaker; });
class categoryMaker {
    constructor(CategoryName) {
        this.CategoryName = CategoryName;

    }

    get Category() {
        return this.CategoryName;
    }





}

class taskMaker {
    constructor(CategoryName, taskName, description, priorityLevel, DueDate, taskId, completed) {
        this.CategoryName = CategoryName;
        this.taskName = taskName;
        this.priority = priorityLevel;
        this.dueDate = DueDate;
        this.description = description;
        this.taskId = taskId;
        this.completed = completed
    }




}














/***/ }),

/***/ "./src/DomManipulation.js":
/*!********************************!*\
  !*** ./src/DomManipulation.js ***!
  \********************************/
/*! exports provided: domManipulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domManipulation", function() { return domManipulation; });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./src/database.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");
/* harmony import */ var _FormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormController */ "./src/FormController.js");
/* harmony import */ var _CategoryClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryClass */ "./src/CategoryClass.js");




const domManipulation = (() => {


    const MainContainer = document.querySelector('#mainContainer');
    let menu = document.querySelector('#menuContainer');
    let menuButton = document.querySelector('#navButton');
    let content = document.querySelector('#contentContainer');
    let CategoriesContainer = document.querySelector("#catogories");
    let CategoryForm = document.querySelector("#NewCategoryForm");
    let CategoryFormButton = document.querySelector("#newCategory");
    let addCategorybutton = document.querySelector("#addNewCategoryButton");
    let CancelNewCategoryButton = document.querySelector("#cancelNewCategoryButton");
    let newTaskButton = document.querySelector("#newTaskButton");
    let categoryFormBox = document.querySelector("#newCategoryInput");
    let newTaskForm = document.querySelector('#newClassForm');
    let editTaskForm = document.querySelector('#EditClassForm');

    function EditunHideNewTaskForm() {
        editTaskForm.classList.remove('hidden');
        document.querySelector('#overlay').classList.remove('hidden');
    }

    function EdithideNewTaskForm() {
        editTaskForm.classList.add('hidden');
        document.querySelector('#overlay').classList.add('hidden');
    }



    function unHideNewTaskForm() {
        newTaskForm.classList.remove('hidden');
        document.querySelector('#overlay').classList.remove('hidden');
    }

    function hideNewTaskForm() {
        newTaskForm.classList.add('hidden');
        document.querySelector('#overlay').classList.add('hidden');
    }


    function OpenMenu() {

        // menu.animate([
        //     { transform: 'translateX(-305px)' },
        //     { transform: 'translateX(0px)' },
        // ], {   
        //     duration: 300,
        //     easing: 'ease-out',
        // });
        // underlayer.animate([
        //     { width: '0px' },
        //     { width: '305px' },
        // ], {
        //     duration: 300,
        //     easing: 'ease-out',
        //     fill: 'forwards',
        // });
        menu.style.width = "350px";
        menu.style.padding = "0.5rem 2rem 1.5rem";
        menu.classList.remove('closed');

        setTimeout(function() {
            CategoryFormButton.classList.remove('hidden');
            CategoriesContainer.classList.remove('hidden');
        }, 150);



    }

    function closeMenu() {

        menu.style.width = "0";
        menu.style.padding = "0";
        menu.classList.add('closed');

        setTimeout(function() {
            CategoryFormButton.classList.add('hidden');
            CategoriesContainer.classList.add('hidden');
        }, 150);


    }

    function toggleMenu() {
        if (menu.classList.contains("closed")) {
            OpenMenu();
        } else {
            closeMenu();
        }

    }

    function addMenuItems() {
        // let ArrayOfCategory = categoryController.getCategories;
        // const liDiv




        // console.log(ArrayOfCategory);
    }


    function toggleCategoryForm() {
        if (CategoryForm.classList.contains("hidden")) {
            showNewCategoryInput()

        } else {
            hideNewCategoryInput()
        }

    }



    function showNewCategoryInput() {
        CategoryForm.classList.remove("hidden");
        CategoryFormButton.classList.add("hidden");

    }

    function hideNewCategoryInput() {
        CategoryForm.classList.add("hidden");
        CategoryFormButton.classList.remove("hidden");


    }


    function ClickCategory(para, CategoryName) {
        let allP = document.querySelectorAll('p');
        let allLi = document.querySelectorAll('li');

        for (let i = 0; i < allP.length; i++) {
            if (allP[i].classList.contains('selectedCategory')) {
                allP[i].classList.remove('selectedCategory');
            }
        }

        for (let i = 0; i < allLi.length; i++) {
            if (allLi[i].classList.contains('selectedCategory')) {
                allLi[i].classList.remove('selectedCategory');
            }
        }
        para.classList.add('selectedCategory');
        return CategoryName;
    }





    function updateNewCategory(CategoryName) {
        let li = document.createElement('li');
        li.classList.add('categoriesSelection')
        let para = document.createElement('p');
        para.classList.add('categoryName');
        para.textContent = CategoryName;

        let form = document.createElement('form');

        form.classList.add('NewCategoryForm');

        let input = document.createElement('input');

        input.classList.add('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'Category-name');
        input.setAttribute('placeHolder', 'Category Name');
        input.setAttribute('required', 'required')

        form.appendChild(input);

        let div = document.createElement('div');
        div.classList.add('addCategoryButtonContainer');

        form.appendChild(div);

        let button1 = document.createElement('button');

        button1.classList.add('EditcategoryButton');
        button1.setAttribute('type', 'reset');

        button1.classList.add('save');

        div.appendChild(button1);

        let img1 = document.createElement('img');
        img1.src = 'Images/add-24px.svg';
        button1.appendChild(img1);



        button1.addEventListener('click', function() {
            if (input.value.length > 0) {
                _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].EditCategory(CategoryName, input.value);
                CategoryName = input.value;
                para.textContent = input.value;
                let ul = document.querySelector('#taskList');
                removeNode(ul);
                loadAllTask();
                form.classList.add('hidden');
                para.classList.remove('hidden');
                buttonContainer.classList.remove('hidden');

            } else {
                alert('please type in a proper name for the category');
            }
        })


        let button2 = document.createElement('button');

        button2.classList.add('cancelNewCategoryButton');
        button2.setAttribute('type', 'reset');
        button2.setAttribute('class', 'cancel');

        button2.addEventListener('click', function() {
            input.value = '';
            form.classList.add('hidden');
            para.classList.remove('hidden');
            buttonContainer.classList.remove('hidden');


        })


        div.appendChild(button2);

        let img2 = document.createElement('img');
        img2.src = 'Images/x.svg';
        button2.appendChild(img2);
        li.appendChild(form);
        form.classList.add('hidden');





        para.addEventListener('click', function() {
            ClickCategory(para, CategoryName);

            let ul = document.querySelector('#taskList');
            removeNode(ul);
            loadTask(CategoryName);

        })



        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('editDeleteContainer');

        let EditButton = document.createElement('button');
        EditButton.classList.add("editButton");
        EditButton.setAttribute('id', 'edit');
        EditButton.innerHTML = "<img src='Images/edit.svg'>"
        buttonContainer.appendChild(EditButton);

        EditButton.addEventListener('click', function() {

            form.classList.remove('hidden');
            para.classList.add('hidden');
            buttonContainer.classList.add('hidden');



        });



        let DButton = document.createElement('button');
        DButton.classList.add("deleteButton");
        DButton.setAttribute('id', 'delete');
        DButton.innerHTML = "<img src='Images/delete.svg'>"
        buttonContainer.appendChild(DButton);
        DButton.addEventListener('click', function() {
            _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].removeCategory(CategoryName, li);




            let ul = document.querySelector('#taskList');

            removeNode(ul);
            loadAllTask();







        });

        li.appendChild(para);
        li.appendChild(buttonContainer);
        CategoriesContainer.appendChild(li);

    }


    function DeleteCategory(name) {
        CategoriesContainer.removeChild(name);
    }

    function DeleteTask(node) {
        let ul = document.querySelector('#taskList')
        ul.removeChild(node);

    }




    function CreateNewTask() {
        let ul = document.querySelector('#taskList');
        let A = _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].getAllTaskValues();
        let taskId = _database__WEBPACK_IMPORTED_MODULE_0__["categoryController"].getTasks();
        let last = taskId.length - 1
        taskId = taskId[last].taskId;

        let li = document.createElement('li');
        if (A.TaskPriority == '3') {
            li.classList.add('taskListLi');

        } else if (A.TaskPriority == '2') {
            li.classList.add('taskListLiMed');

        } else {
            li.classList.add('taskListLiHigh');
        }


        let div1 = document.createElement('div');
        div1.classList.add('topTask');
        li.appendChild(div1);
        let div2 = document.createElement('div');
        div2.classList.add('topTaskLeftAlign');
        div1.appendChild(div2);
        let button1 = document.createElement('button');
        button1.classList.add('expendButton');
        button1.classList.add('vert');
        button1.innerHTML = "<img src ='Images/chevron-down.svg'>";
        //expend function
        button1.addEventListener('click', function() {
            console.log('hit');
            let test = document.getElementById(taskId);
            if (test.classList.contains('hidden')) {
                test.classList.remove('hidden');
                button1.classList.add('vert')
            } else {
                test.classList.add('hidden');
                button1.classList.remove('vert')
            }
        });


        div2.appendChild(button1);

        let div3 = document.createElement('div');
        div3.classList.add('topTaskLeftAlignName');
        div2.appendChild(div3);

        let div4 = document.createElement('div');
        div4.classList.add('topTaskName');

        div4.innerHTML = `<span> ${A.TaskName}</span>`;
        div3.appendChild(div4);

        let div5 = document.createElement('div');
        div5.classList.add('topTaskDueDate');

        div5.innerHTML = `<span> Due: ${A.TaskDueDate}</span>`;

        div3.appendChild(div5);


        let div6 = document.createElement('div');
        div6.classList.add('topTaskRightAlign');

        div1.appendChild(div6);

        let inputCheck = document.createElement('input');
        inputCheck.classList.add('taskCheckBox');
        inputCheck.setAttribute('type', 'checkBox');
        inputCheck.setAttribute('id', 'N' + taskId);

        let labelInput = document.createElement('label');
        labelInput.setAttribute('for', 'N' + taskId);
        div6.append(inputCheck);
        div6.append(labelInput);


        inputCheck.addEventListener('change', function() {
            if (inputCheck.checked) {
                const arrayTask = _database__WEBPACK_IMPORTED_MODULE_0__["categoryController"].getTasks();
                for (let i = 0; i < arrayTask.length; i++) {
                    if (arrayTask[i].taskId == taskId) {
                        arrayTask[i].completed = true;
                        localStorage.removeItem('Tasks');
                        localStorage.setItem('Tasks', JSON.stringify(arrayTask));
                        DeleteTask(li);
                    }
                }


            }

        })






        let div7 = document.createElement('div');
        div7.classList.add('bottomTask');
        div7.setAttribute('id', taskId);
        li.appendChild(div7);


        let div8 = document.createElement('div');
        div8.classList.add('taskDescription');

        div7.appendChild(div8);

        div8.innerHTML = `<span> ${A.Description}</span>`


        let div9 = document.createElement('div');

        div9.classList.add('taskCategory');

        div9.innerHTML = `${A.TaskCate}`;

        div7.appendChild(div9);


        let div10 = document.createElement('div');
        div10.classList.add('editDeleteButton');

        div7.appendChild(div10);



        let div11 = document.createElement('div');
        div11.classList.add('editTaskButton');
        div10.appendChild(div11);

        let button2 = document.createElement('button');
        button2.classList.add('editController');
        button2.innerHTML = `Edit Task`;
        div11.appendChild(button2);

        //edit
        button2.addEventListener('click', function() {


        })


        let div12 = document.createElement('div');
        div12.classList.add('deleteTaskButton');
        div10.appendChild(div12);
        let button3 = document.createElement('button');
        button3.classList.add('deleteController');

        button3.innerHTML = `Delete Task`;
        div12.appendChild(button3);
        button2.addEventListener('click', function() {


        })


        ul.appendChild(li);

    }



    function loadAllTask() {

        const arrayTask = _database__WEBPACK_IMPORTED_MODULE_0__["categoryController"].getTasks();
        if (arrayTask != null && arrayTask.length != 0) {
            for (let i = 0; i < arrayTask.length; i++) {
                if (arrayTask[i].completed == false) {
                    let taskId = arrayTask[i].taskId;
                    let ul = document.querySelector('#taskList');

                    let li = document.createElement('li');

                    if (arrayTask[i].priority == '3') {
                        li.classList.add('taskListLi');

                    } else if (arrayTask[i].priority == '2') {
                        li.classList.add('taskListLiMed');

                    } else {
                        li.classList.add('taskListLiHigh');
                    }


                    let div1 = document.createElement('div');
                    div1.classList.add('topTask');
                    li.appendChild(div1);
                    let div2 = document.createElement('div');
                    div2.classList.add('topTaskLeftAlign');
                    div1.appendChild(div2);
                    let button1 = document.createElement('button');
                    button1.classList.add('expendButton');
                    button1.classList.add('vert');
                    button1.innerHTML = "<img src ='Images/chevron-down.svg'>";
                    //expend function
                    button1.addEventListener('click', function() {
                        console.log('hit');
                        let test = document.getElementById(taskId);
                        if (test.classList.contains('hidden')) {
                            test.classList.remove('hidden');
                            button1.classList.add('vert')
                        } else {
                            test.classList.add('hidden');
                            button1.classList.remove('vert')
                        }
                    });


                    div2.appendChild(button1);

                    let div3 = document.createElement('div');
                    div3.classList.add('topTaskLeftAlignName');
                    div2.appendChild(div3);

                    let div4 = document.createElement('div');
                    div4.classList.add('topTaskName');

                    div4.innerHTML = `<span> ${arrayTask[i].taskName}</span>`;
                    div3.appendChild(div4);

                    let div5 = document.createElement('div');
                    div5.classList.add('topTaskDueDate');

                    div5.innerHTML = `<span> Due: ${arrayTask[i].dueDate}</span>`;

                    div3.appendChild(div5);


                    let div6 = document.createElement('div');
                    div6.classList.add('topTaskRightAlign');

                    div1.appendChild(div6);

                    let inputCheck = document.createElement('input');
                    inputCheck.classList.add('taskCheckBox');
                    inputCheck.setAttribute('type', 'checkBox');
                    inputCheck.setAttribute('id', 'N' + taskId);

                    let labelInput = document.createElement('label');
                    labelInput.setAttribute('for', 'N' + taskId);
                    div6.append(inputCheck);
                    div6.append(labelInput);

                    inputCheck.addEventListener('change', function() {
                        if (inputCheck.checked) {
                            console.log('checkWorking');
                            arrayTask[i].completed = true;
                            localStorage.removeItem('Tasks');
                            localStorage.setItem('Tasks', JSON.stringify(arrayTask));
                            DeleteTask(li);
                        }

                    })

                    let div7 = document.createElement('div');
                    div7.classList.add('bottomTask');
                    div7.setAttribute('id', taskId);
                    li.appendChild(div7);


                    let div8 = document.createElement('div');
                    div8.classList.add('taskDescription');

                    div7.appendChild(div8);

                    div8.innerHTML = `<span> ${arrayTask[i].description}</span>`


                    let div9 = document.createElement('div');

                    div9.classList.add('taskCategory');

                    div9.innerHTML = `${arrayTask[i].CategoryName}`;

                    div7.appendChild(div9);


                    let div10 = document.createElement('div');
                    div10.classList.add('editDeleteButton');

                    div7.appendChild(div10);



                    let div11 = document.createElement('div');
                    div11.classList.add('editTaskButton');
                    div10.appendChild(div11);

                    let button2 = document.createElement('button');
                    button2.classList.add('editController');
                    button2.innerHTML = `Edit Task`;
                    div11.appendChild(button2);

                    //edit
                    button2.addEventListener('click', function() {
                        console.log('works');
                        _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].EditloadCategoriesIntoSelect();
                        EditunHideNewTaskForm();
                        let cancelButton = document.querySelector('#EditCancelCreateTask');

                        let confirmEditTaskButton = document.querySelector('#EditCreateTaskButton');

                        confirmEditTaskButton.addEventListener('click', function() {
                            _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].onEditTask(taskId);

                        }, { once: true });




                        cancelButton.addEventListener('click', function() { _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].EditonCancelNewTask(confirmEditTaskButton) }, { once: true });



                    })


                    let div12 = document.createElement('div');
                    div12.classList.add('deleteTaskButton');
                    div10.appendChild(div12);
                    let button3 = document.createElement('button');
                    button3.classList.add('deleteController');

                    button3.innerHTML = `Delete Task`;
                    div12.appendChild(button3);
                    button3.addEventListener('click', function() {


                    })


                    ul.appendChild(li);
                }

            }

        }
    }








    function loadTask(Task) {

        const arrayTask = _database__WEBPACK_IMPORTED_MODULE_0__["categoryController"].getTasks();
        if (arrayTask.length != 0) {
            for (let i = 0; i < arrayTask.length; i++) {
                if (arrayTask[i].completed == false && arrayTask[i].CategoryName == Task) {
                    let taskId = arrayTask[i].taskId;
                    let ul = document.querySelector('#taskList');

                    let li = document.createElement('li');
                    li.classList.add('taskListLi');
                    let div1 = document.createElement('div');
                    div1.classList.add('topTask');
                    li.appendChild(div1);
                    let div2 = document.createElement('div');
                    div2.classList.add('topTaskLeftAlign');
                    div1.appendChild(div2);
                    let button1 = document.createElement('button');
                    button1.classList.add('expendButton');
                    button1.classList.add('vert');
                    button1.innerHTML = "<img src ='Images/chevron-down.svg'>";
                    //expend function
                    button1.addEventListener('click', function() {
                        console.log('hit');
                        let test = document.getElementById(taskId);
                        if (test.classList.contains('hidden')) {
                            test.classList.remove('hidden');
                            button1.classList.add('vert')
                        } else {
                            test.classList.add('hidden');
                            button1.classList.remove('vert')
                        }
                    });


                    div2.appendChild(button1);

                    let div3 = document.createElement('div');
                    div3.classList.add('topTaskLeftAlignName');
                    div2.appendChild(div3);

                    let div4 = document.createElement('div');
                    div4.classList.add('topTaskName');

                    div4.innerHTML = `<span> ${arrayTask[i].taskName}</span>`;
                    div3.appendChild(div4);

                    let div5 = document.createElement('div');
                    div5.classList.add('topTaskDueDate');

                    div5.innerHTML = `<span> Due: ${arrayTask[i].dueDate}</span>`;

                    div3.appendChild(div5);


                    let div6 = document.createElement('div');
                    div6.classList.add('topTaskRightAlign');

                    div1.appendChild(div6);

                    let inputCheck = document.createElement('input');
                    inputCheck.classList.add('taskCheckBox');
                    inputCheck.setAttribute('type', 'checkBox');
                    inputCheck.setAttribute('id', 'N' + taskId);

                    let labelInput = document.createElement('label');
                    labelInput.setAttribute('for', 'N' + taskId);
                    div6.append(inputCheck);
                    div6.append(labelInput);

                    inputCheck.addEventListener('change', function() {
                        if (inputCheck.checked) {
                            console.log('checkWorking');
                            arrayTask[i].completed = true;
                            localStorage.removeItem('Tasks');
                            localStorage.setItem('Tasks', JSON.stringify(arrayTask));
                            DeleteTask(li);
                        }

                    })

                    let div7 = document.createElement('div');
                    div7.classList.add('bottomTask');
                    div7.setAttribute('id', taskId);
                    li.appendChild(div7);


                    let div8 = document.createElement('div');
                    div8.classList.add('taskDescription');

                    div7.appendChild(div8);

                    div8.innerHTML = `<span> ${arrayTask[i].description}</span>`


                    let div9 = document.createElement('div');

                    div9.classList.add('taskCategory');

                    div9.innerHTML = `${arrayTask[i].CategoryName}`;

                    div7.appendChild(div9);


                    let div10 = document.createElement('div');
                    div10.classList.add('editDeleteButton');

                    div7.appendChild(div10);



                    let div11 = document.createElement('div');
                    div11.classList.add('editTaskButton');
                    div10.appendChild(div11);

                    let button2 = document.createElement('button');
                    button2.classList.add('editController');
                    button2.innerHTML = `Edit Task`;
                    div11.appendChild(button2);

                    //edit
                    button2.addEventListener('click', function() {


                    })


                    let div12 = document.createElement('div');
                    div12.classList.add('deleteTaskButton');
                    div10.appendChild(div12);
                    let button3 = document.createElement('button');
                    button3.classList.add('deleteController');

                    button3.innerHTML = `Delete Task`;
                    div12.appendChild(button3);
                    button2.addEventListener('click', function() {


                    })


                    ul.appendChild(li);
                }

            }

        }






    }

















    function removeNode(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }

    }










    return { EdithideNewTaskForm, removeNode, loadAllTask, CreateNewTask, unHideNewTaskForm, hideNewTaskForm, ClickCategory, toggleMenu, menu, menuButton, removeNode, addMenuItems, toggleCategoryForm, CategoryFormButton, cancelNewCategoryButton, DeleteCategory, updateNewCategory, addCategorybutton, categoryFormBox }

})();








/***/ }),

/***/ "./src/EventHandler.js":
/*!*****************************!*\
  !*** ./src/EventHandler.js ***!
  \*****************************/
/*! exports provided: EventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandler", function() { return EventHandler; });
/* harmony import */ var _DomManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation */ "./src/DomManipulation.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./src/database.js");
/* harmony import */ var _FormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormController */ "./src/FormController.js");
/* harmony import */ var _CategoryClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryClass */ "./src/CategoryClass.js");




const EventHandler = (() => {

    let onClickAdded = false;

    function menuButtonToggle() {
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].menuButton.addEventListener('click', () => {
            console.log('working');
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].toggleMenu();

        })
    }

    function newCategoryButtonToggle() {
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].CategoryFormButton.addEventListener('click', () => {
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].toggleCategoryForm();
        })

        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].cancelNewCategoryButton.addEventListener('click', () => {
            console.log('hi');
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].toggleCategoryForm();
        })


    }


    function handleSubmitForNewCategory() {
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].categoryFormBox.addEventListener('input', function() {
            CheckIfInputEmpty();
        });
    }

    function CheckIfInputEmpty() {
        if (_DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].categoryFormBox.value.length > 1) {
            console.log('hit');
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].addCategorybutton.removeAttribute('disabled');
        } else {
            console.log(_DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].categoryFormBox.value);
            console.log(_DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].categoryFormBox.value.length);
            console.log('value Empty');
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].addCategorybutton.setAttribute("disabled", "disabled");

        }
    }


    function CheckIfInputsEmpty(input, button) {
        if (input.value.length > 1) {

            button.removeAttribute('disabled');
        } else {

            button.setAttribute("disabled", "disabled");

        }
    }




    function EditCategory(oldCateName, NewcategoryName) {
        _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].EditCategory(oldCateName, NewcategoryName);

    }






    function removeCategory(name, node) {
        _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].DeleteCategory(name);
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].DeleteCategory(node);

    }



    function CreateCategory() {
        //FIX ERROR HERE cancelNewCatButotn works but the other one doesnt 
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].addCategorybutton.addEventListener('click', () => {
            console.log('hit');
            const value = _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].categoryFormBox.value;

            if (_database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].CreateCategory(value) == true) {
                _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].updateNewCategory(value)
            } else {
                console.log("createCategory Failed");
            }

        });

    }

    //all task category
    function AllTaskClick() {
        let allTask = document.querySelector('#allTasks');
        allTask.addEventListener('click', function() {
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].ClickCategory(allTask, 'AllTasks');
            let ul = document.querySelector('#taskList');
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].removeNode(ul);
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].loadAllTask();
        })
    }


    function load() {
        const arrayCateogry = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getCategories();

        for (let i = 0; i < arrayCateogry.length; i++) {
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].updateNewCategory(arrayCateogry[i].CategoryName);

        }




    }





    function onNewTaskClick() {
        let newTaskButton = document.querySelector('#newTaskButton');
        newTaskButton.addEventListener('click', function() {
            _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].loadCategoriesIntoSelect();
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].unHideNewTaskForm();
            if (onClickAdded == false) {
                onCreateTask()
            }
        })

    }


    function onCancelNewTask() {
        let CancelCreateTask = document.querySelector('#CancelCreateTask');
        let CategorySelect = document.querySelector('#CategorySelectForTask');
        CancelCreateTask.addEventListener('click', function() {
            _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].unLoadCategoriesSelect();
            _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].hideNewTaskForm();

        })
    }



    function EditonCancelNewTask(elem) {
        console.log('works');
        _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].EditunLoadCategoriesSelect();
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].EdithideNewTaskForm();
        elem.removeEventListener('click', )


    }

    function onEditTask(taskId) {

        let A = _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].EditgetAllTaskValues();
        const arrayTask = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getTasks();

        for (let i = 0; i < arrayTask.length; i++) {
            if (arrayTask[i].taskId == taskId) {
                let newTask = new _CategoryClass__WEBPACK_IMPORTED_MODULE_3__["taskMaker"](A.TaskCate, A.TaskName, A.Description, A.TaskPriority, A.TaskDueDate, taskId, false);
                arrayTask[i] = newTask;
            }

        }

        _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].EditTask(arrayTask);
        _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].EditresetTaskForm();
        _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].EditunLoadCategoriesSelect();
        document.querySelector('#overlay').classList.add('hidden');
        let ul = document.querySelector('#taskList');
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].removeNode(ul);
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].loadAllTask();
    }





    function handleSubmitForNewTask() {

        document.querySelector('#TaskNameCreate').addEventListener('input', function() {
            CheckIfTaskInputEmpty();
        });
    }


    function CheckIfTaskInputEmpty() {
        if (document.querySelector('#TaskNameCreate').value.length > 1) {
            console.log('hit');
            document.querySelector('#CreateTaskButton').removeAttribute('disabled');
        } else {

            document.querySelector('#CreateTaskButton').setAttribute("disabled", "disabled");

        }
    }





    function onCreateTask() {
        const createTaskButton = document.querySelector('#CreateTaskButton');
        console.log(createTaskButton);
        handleSubmitForNewTask();
        onClickAdded = true;

        createTaskButton.addEventListener('click', function() {
                console.log('test');
                let A = _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].getAllTaskValues();

                _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].CreateTask(A.TaskName, A.TaskCate, A.TaskDueDate, A.Description, A.TaskPriority, false);
                _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].CreateNewTask();
                document.querySelector('#overlay').classList.add('hidden');

                _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].resetTaskForm();
                _FormController__WEBPACK_IMPORTED_MODULE_2__["TaskFormController"].unLoadCategoriesSelect();

            }


        )


    }






    return { onEditTask, EditonCancelNewTask, EditCategory, CheckIfInputsEmpty, onCreateTask, onNewTaskClick, onCancelNewTask, menuButtonToggle, newCategoryButtonToggle, removeCategory, CreateCategory, handleSubmitForNewCategory, load, AllTaskClick }

})();




/***/ }),

/***/ "./src/FormController.js":
/*!*******************************!*\
  !*** ./src/FormController.js ***!
  \*******************************/
/*! exports provided: TaskFormController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormController", function() { return TaskFormController; });
/* harmony import */ var _DomManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation */ "./src/DomManipulation.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./src/database.js");


const TaskFormController = (() => {

    let CategorySelect = document.querySelector('#CategorySelectForTask');
    let dateInput = document.querySelector('#dateForTask');

    let EditCategorySelect = document.querySelector('#EditCategorySelectForTask');
    let EditdateInput = document.querySelector('#EditdateForTask');


    function EditloadCategoriesIntoSelect() {

        let ArrayOfCategories = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }
        EditCategorySelect.options.add(new Option('All Task', "AllTask"));
        var d = new Date();

        var date = d.getDate();
        var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();

        var dateStr = year + "-" + '0' + month + "-" + date;

        EditdateInput.min = dateStr;
        EditdateInput.value = dateStr;


        for (let i = 0; i < ArrayOfCategories.length; i++) {

            EditCategorySelect.options.add(new Option(ArrayOfCategories[i].CategoryName, ArrayOfCategories[i].CategoryName));




        }
    }



    function EditunLoadCategoriesSelect() {
        let ArrayOfCategories = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }

        EditCategorySelect.remove(0);
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            EditCategorySelect.remove(0);
        }
    }




    function EditgetAllTaskValues() {
        let TaskName = document.querySelector('#EditTaskNameCreate').value;
        let TaskDescription = document.querySelector('#EditTaskDescriptionCreate').value;
        let TaskPriorityLevel = document.querySelector('#EditTaskPriorityDropDown').value;
        let TaskCategory = document.querySelector('#EditCategorySelectForTask').value;
        let TaskDueDate = document.querySelector('#EditdateForTask').value;

        var a = {
            TaskName: TaskName,
            Description: TaskDescription,
            TaskPriority: TaskPriorityLevel,
            TaskCate: TaskCategory,
            TaskDueDate: TaskDueDate

        }

        return a;

    }



    function EditresetTaskForm() {
        document.querySelector('#EditTaskNameCreate').value = '';
        document.querySelector('#EditTaskDescriptionCreate').value = '';
        document.querySelector('#EditClassForm').classList.add('hidden');

    }







    function loadCategoriesIntoSelect() {

        let ArrayOfCategories = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }
        CategorySelect.options.add(new Option('All Task', "AllTask"));
        var d = new Date();

        var date = d.getDate();
        var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();

        var dateStr = year + "-" + '0' + month + "-" + date;

        dateInput.min = dateStr;
        dateInput.value = dateStr;


        for (let i = 0; i < ArrayOfCategories.length; i++) {

            CategorySelect.options.add(new Option(ArrayOfCategories[i].CategoryName, ArrayOfCategories[i].CategoryName));




        }
    }

    function unLoadCategoriesSelect() {
        let ArrayOfCategories = _database__WEBPACK_IMPORTED_MODULE_1__["categoryController"].getCategories();
        if (ArrayOfCategories == null) {
            ArrayOfCategories = [];
        }

        CategorySelect.remove(0);
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            CategorySelect.remove(0);
        }
    }


    function validateNewTaskForm() {
        let TaskNameDiv = doucment.querySelector('#TaskNameCreate');
        let TaskDescriptionDiv = document.querySelector('#TaskDescriptionCreate');

        if (TaskNameDiv.value == null || TaskDescriptionDiv.value == null) {
            alert("Please enter Task Name and Description properly");
            return false;
        } else {
            return true;
        }


    }

    function getAllTaskValues() {
        let TaskName = document.querySelector('#TaskNameCreate').value;
        let TaskDescription = document.querySelector('#TaskDescriptionCreate').value;
        let TaskPriorityLevel = document.querySelector('#TaskPriorityDropDown').value;
        let TaskCategory = document.querySelector('#CategorySelectForTask').value;
        let TaskDueDate = document.querySelector('#dateForTask').value;

        var a = {
            TaskName: TaskName,
            Description: TaskDescription,
            TaskPriority: TaskPriorityLevel,
            TaskCate: TaskCategory,
            TaskDueDate: TaskDueDate

        }

        return a;

    }



    function resetTaskForm() {
        document.querySelector('#TaskNameCreate').value = '';
        document.querySelector('#TaskDescriptionCreate').value = '';
        document.querySelector('#newClassForm').classList.add('hidden');

    }





    return { EditgetAllTaskValues, EditresetTaskForm, EditunLoadCategoriesSelect, EditloadCategoriesIntoSelect, resetTaskForm, loadCategoriesIntoSelect, unLoadCategoriesSelect, validateNewTaskForm, getAllTaskValues }

})();



/***/ }),

/***/ "./src/database.js":
/*!*************************!*\
  !*** ./src/database.js ***!
  \*************************/
/*! exports provided: categoryController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryController", function() { return categoryController; });
/* harmony import */ var _CategoryClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoryClass */ "./src/CategoryClass.js");


const categoryController = (() => {


    function getCategories() {
        console.log(JSON.parse(localStorage.getItem('Categories')));
        return JSON.parse(localStorage.getItem('Categories'));
    }



    function getTasks() {
        return JSON.parse(localStorage.getItem('Tasks'));

    }




    function CreateTask(name, categoryParent, dueDate, description, priority, completed) {
        let ArrayOfTasks = [];
        let checkTask = getTasks();
        let taskID = Math.floor(Math.random() * 1471 / 7.5 * 1.032);

        if (checkTask != null && checkTask.length != 0) {
            ArrayOfTasks = getTasks();

            let newTask = new _CategoryClass__WEBPACK_IMPORTED_MODULE_0__["taskMaker"](categoryParent, name, description, priority, dueDate, taskID, completed);
            ArrayOfTasks.push(newTask);
            localStorage.removeItem('Tasks');
            localStorage.setItem('Tasks', JSON.stringify(ArrayOfTasks));
            console.log('Task Added');

        } else {

            let newTask = new _CategoryClass__WEBPACK_IMPORTED_MODULE_0__["taskMaker"](categoryParent, name, description, priority, dueDate, taskID, completed);
            ArrayOfTasks.push(newTask);
            localStorage.setItem('Tasks', JSON.stringify(ArrayOfTasks));
            console.log('Task made');

        }





    }





    function CreateCategory(name) {
        let ArrayOfCategories = [];
        let checkCate = getCategories();
        let newCategory = new _CategoryClass__WEBPACK_IMPORTED_MODULE_0__["categoryMaker"](name);
        if (checkCate != null && checkCate.length != 0) {
            ArrayOfCategories = getCategories();
            for (let i = 0; i < ArrayOfCategories.length; i++) {
                if (ArrayOfCategories[i].CategoryName == newCategory.CategoryName) {
                    console.log('That Category is already created');
                    return false;
                } else {
                    if (i == ArrayOfCategories.length - 1) {
                        ArrayOfCategories.push(newCategory);
                        localStorage.removeItem('Categories');
                        localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
                        console.log('Category Added');
                        return true;
                    }

                }
            }
        } else {
            ArrayOfCategories.push(newCategory);
            localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));
            console.log('Category made');
            return true;
        }





    }

    function DeleteCategory(name) {
        let deleteCate = getCategories();


        for (let i = 0; i < deleteCate.length; i++) {
            if (deleteCate[i].CategoryName == name) {


                deleteCate.splice(i, 1);


                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(deleteCate));


                //delete all tasks with the cateogry set as the category getting deleted
                let AllTaskArray = categoryController.getTasks();
                let iOut = 0;
                let newArray = []
                for (let i = 0; i < AllTaskArray.length; i++) {
                    if (AllTaskArray[i].CategoryName != name) {
                        newArray[iOut] = AllTaskArray[i];
                        iOut = iOut + 1;


                    }

                }

                localStorage.removeItem('Tasks');
                localStorage.setItem('Tasks', JSON.stringify(newArray));






                return true;
            }


        }

    }


    //not done 
    function EditCategory(name, newName) {
        let ArrayOfCategories = getCategories();
        for (let i = 0; i < ArrayOfCategories.length; i++) {
            if (ArrayOfCategories[i].CategoryName == name) {
                console.log(ArrayOfCategories[i]);
                ArrayOfCategories[i].CategoryName = newName;
                localStorage.removeItem('Categories');
                localStorage.setItem('Categories', JSON.stringify(ArrayOfCategories));

            }

        }

        let arrayOfTasks = getTasks();
        if (arrayOfTasks != null && arrayOfTasks.length > 0) {
            for (let i = 0; i < arrayOfTasks.length; i++) {
                if (arrayOfTasks[i].CategoryName == name) {
                    arrayOfTasks[i].CategoryName = newName;
                    localStorage.removeItem('Tasks');
                    localStorage.setItem('Tasks', JSON.stringify(arrayOfTasks));
                }

            }
        }





    }

    function EditTask(newArray) {

        localStorage.removeItem('Tasks');
        localStorage.setItem('Tasks', JSON.stringify(newArray));
    }



    return { getCategories, getTasks, CreateCategory, DeleteCategory, EditCategory, CreateTask, EditTask }



})();




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation */ "./src/DomManipulation.js");
/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventHandler */ "./src/EventHandler.js");









(function() {
    try {
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].load();

        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].loadAllTask();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].menuButtonToggle();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].newCategoryButtonToggle();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].CreateCategory();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].handleSubmitForNewCategory();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].AllTaskClick();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].onNewTaskClick();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].onCancelNewTask();


    } catch (error) {
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].menuButtonToggle();
        _DomManipulation__WEBPACK_IMPORTED_MODULE_0__["domManipulation"].loadAllTask();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].newCategoryButtonToggle();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].CreateCategory();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].handleSubmitForNewCategory();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].AllTaskClick();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].onNewTaskClick();
        _EventHandler__WEBPACK_IMPORTED_MODULE_1__["EventHandler"].onCancelNewTask();


    }
}());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhdGVnb3J5Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9Gb3JtQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7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QVEsMERBQVk7QUFDcEIsUUFBUSwwREFBWTtBQUNwQixRQUFRLDBEQUFZO0FBQ3BCLFFBQVEsMERBQVk7QUFDcEIsUUFBUSwwREFBWTtBQUNwQixRQUFRLDBEQUFZOzs7QUFHcEI7QUFDQSxDQUFDLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgY2F0ZWdvcnlNYWtlciB7XG4gICAgY29uc3RydWN0b3IoQ2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgIHRoaXMuQ2F0ZWdvcnlOYW1lID0gQ2F0ZWdvcnlOYW1lO1xuXG4gICAgfVxuXG4gICAgZ2V0IENhdGVnb3J5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5DYXRlZ29yeU5hbWU7XG4gICAgfVxuXG5cblxuXG5cbn1cblxuY2xhc3MgdGFza01ha2VyIHtcbiAgICBjb25zdHJ1Y3RvcihDYXRlZ29yeU5hbWUsIHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHlMZXZlbCwgRHVlRGF0ZSwgdGFza0lkLCBjb21wbGV0ZWQpIHtcbiAgICAgICAgdGhpcy5DYXRlZ29yeU5hbWUgPSBDYXRlZ29yeU5hbWU7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5TGV2ZWw7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IER1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50YXNrSWQgPSB0YXNrSWQ7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXG4gICAgfVxuXG5cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgeyBjYXRlZ29yeU1ha2VyLCB0YXNrTWFrZXIgfSIsImltcG9ydCB7IGNhdGVnb3J5Q29udHJvbGxlciB9IGZyb20gJy4vZGF0YWJhc2UnXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuL0V2ZW50SGFuZGxlcidcbmltcG9ydCB7IFRhc2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vRm9ybUNvbnRyb2xsZXInXG5pbXBvcnQgeyB0YXNrTWFrZXIgfSBmcm9tICcuL0NhdGVnb3J5Q2xhc3MnO1xuY29uc3QgZG9tTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcblxuXG4gICAgY29uc3QgTWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluQ29udGFpbmVyJyk7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudUNvbnRhaW5lcicpO1xuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdkJ1dHRvbicpO1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnRDb250YWluZXInKTtcbiAgICBsZXQgQ2F0ZWdvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2F0b2dvcmllc1wiKTtcbiAgICBsZXQgQ2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNOZXdDYXRlZ29yeUZvcm1cIik7XG4gICAgbGV0IENhdGVnb3J5Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3Q2F0ZWdvcnlcIik7XG4gICAgbGV0IGFkZENhdGVnb3J5YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGROZXdDYXRlZ29yeUJ1dHRvblwiKTtcbiAgICBsZXQgQ2FuY2VsTmV3Q2F0ZWdvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5ld0NhdGVnb3J5QnV0dG9uXCIpO1xuICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrQnV0dG9uXCIpO1xuICAgIGxldCBjYXRlZ29yeUZvcm1Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld0NhdGVnb3J5SW5wdXRcIik7XG4gICAgbGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld0NsYXNzRm9ybScpO1xuICAgIGxldCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRWRpdENsYXNzRm9ybScpO1xuXG4gICAgZnVuY3Rpb24gRWRpdHVuSGlkZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBlZGl0VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRWRpdGhpZGVOZXdUYXNrRm9ybSgpIHtcbiAgICAgICAgZWRpdFRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiB1bkhpZGVOZXdUYXNrRm9ybSgpIHtcbiAgICAgICAgbmV3VGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBuZXdUYXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIE9wZW5NZW51KCkge1xuXG4gICAgICAgIC8vIG1lbnUuYW5pbWF0ZShbXG4gICAgICAgIC8vICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTMwNXB4KScgfSxcbiAgICAgICAgLy8gICAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwcHgpJyB9LFxuICAgICAgICAvLyBdLCB7ICAgXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAvLyAgICAgZWFzaW5nOiAnZWFzZS1vdXQnLFxuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdW5kZXJsYXllci5hbmltYXRlKFtcbiAgICAgICAgLy8gICAgIHsgd2lkdGg6ICcwcHgnIH0sXG4gICAgICAgIC8vICAgICB7IHdpZHRoOiAnMzA1cHgnIH0sXG4gICAgICAgIC8vIF0sIHtcbiAgICAgICAgLy8gICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIC8vICAgICBlYXNpbmc6ICdlYXNlLW91dCcsXG4gICAgICAgIC8vICAgICBmaWxsOiAnZm9yd2FyZHMnLFxuICAgICAgICAvLyB9KTtcbiAgICAgICAgbWVudS5zdHlsZS53aWR0aCA9IFwiMzUwcHhcIjtcbiAgICAgICAgbWVudS5zdHlsZS5wYWRkaW5nID0gXCIwLjVyZW0gMnJlbSAxLjVyZW1cIjtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zZWQnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ2F0ZWdvcnlGb3JtQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgQ2F0ZWdvcmllc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfSwgMTUwKTtcblxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG5cbiAgICAgICAgbWVudS5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgICAgICBtZW51LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ2F0ZWdvcnlGb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgQ2F0ZWdvcmllc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSwgMTUwKTtcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2VkXCIpKSB7XG4gICAgICAgICAgICBPcGVuTWVudSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1lbnVJdGVtcygpIHtcbiAgICAgICAgLy8gbGV0IEFycmF5T2ZDYXRlZ29yeSA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRDYXRlZ29yaWVzO1xuICAgICAgICAvLyBjb25zdCBsaURpdlxuXG5cblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEFycmF5T2ZDYXRlZ29yeSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB0b2dnbGVDYXRlZ29yeUZvcm0oKSB7XG4gICAgICAgIGlmIChDYXRlZ29yeUZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICBzaG93TmV3Q2F0ZWdvcnlJbnB1dCgpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpZGVOZXdDYXRlZ29yeUlucHV0KClcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIHNob3dOZXdDYXRlZ29yeUlucHV0KCkge1xuICAgICAgICBDYXRlZ29yeUZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgQ2F0ZWdvcnlGb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTmV3Q2F0ZWdvcnlJbnB1dCgpIHtcbiAgICAgICAgQ2F0ZWdvcnlGb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIENhdGVnb3J5Rm9ybUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIENsaWNrQ2F0ZWdvcnkocGFyYSwgQ2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgIGxldCBhbGxQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncCcpO1xuICAgICAgICBsZXQgYWxsTGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFsbFBbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZENhdGVnb3J5JykpIHtcbiAgICAgICAgICAgICAgICBhbGxQW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkQ2F0ZWdvcnknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsTGkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhbGxMaVtpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkQ2F0ZWdvcnknKSkge1xuICAgICAgICAgICAgICAgIGFsbExpW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkQ2F0ZWdvcnknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwYXJhLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkQ2F0ZWdvcnknKTtcbiAgICAgICAgcmV0dXJuIENhdGVnb3J5TmFtZTtcbiAgICB9XG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5ld0NhdGVnb3J5KENhdGVnb3J5TmFtZSkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yaWVzU2VsZWN0aW9uJylcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlOYW1lJyk7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBDYXRlZ29yeU5hbWU7XG5cbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdOZXdDYXRlZ29yeUZvcm0nKTtcblxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdDYXRlZ29yeS1uYW1lJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2VIb2xkZXInLCAnQ2F0ZWdvcnkgTmFtZScpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJylcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhZGRDYXRlZ29yeUJ1dHRvbkNvbnRhaW5lcicpO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICBsZXQgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnRWRpdGNhdGVnb3J5QnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjEuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0Jyk7XG5cbiAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKCdzYXZlJyk7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xuXG4gICAgICAgIGxldCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZzEuc3JjID0gJ0ltYWdlcy9hZGQtMjRweC5zdmcnO1xuICAgICAgICBidXR0b24xLmFwcGVuZENoaWxkKGltZzEpO1xuXG5cblxuICAgICAgICBidXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIEV2ZW50SGFuZGxlci5FZGl0Q2F0ZWdvcnkoQ2F0ZWdvcnlOYW1lLCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgQ2F0ZWdvcnlOYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUodWwpO1xuICAgICAgICAgICAgICAgIGxvYWRBbGxUYXNrKCk7XG4gICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwYXJhLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgncGxlYXNlIHR5cGUgaW4gYSBwcm9wZXIgbmFtZSBmb3IgdGhlIGNhdGVnb3J5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cblxuICAgICAgICBsZXQgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnY2FuY2VsTmV3Q2F0ZWdvcnlCdXR0b24nKTtcbiAgICAgICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKTtcbiAgICAgICAgYnV0dG9uMi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhbmNlbCcpO1xuXG4gICAgICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcGFyYS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG5cbiAgICAgICAgbGV0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nMi5zcmMgPSAnSW1hZ2VzL3guc3ZnJztcbiAgICAgICAgYnV0dG9uMi5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cblxuXG5cblxuICAgICAgICBwYXJhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBDbGlja0NhdGVnb3J5KHBhcmEsIENhdGVnb3J5TmFtZSk7XG5cbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZSh1bCk7XG4gICAgICAgICAgICBsb2FkVGFzayhDYXRlZ29yeU5hbWUpO1xuXG4gICAgICAgIH0pXG5cblxuXG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXREZWxldGVDb250YWluZXInKTtcblxuICAgICAgICBsZXQgRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBFZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xuICAgICAgICBFZGl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZWRpdCcpO1xuICAgICAgICBFZGl0QnV0dG9uLmlubmVySFRNTCA9IFwiPGltZyBzcmM9J0ltYWdlcy9lZGl0LnN2Zyc+XCJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKEVkaXRCdXR0b24pO1xuXG4gICAgICAgIEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHBhcmEuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cblxuXG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICBsZXQgREJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBEQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVCdXR0b25cIik7XG4gICAgICAgIERCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUnKTtcbiAgICAgICAgREJ1dHRvbi5pbm5lckhUTUwgPSBcIjxpbWcgc3JjPSdJbWFnZXMvZGVsZXRlLnN2Zyc+XCJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKERCdXR0b24pO1xuICAgICAgICBEQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBFdmVudEhhbmRsZXIucmVtb3ZlQ2F0ZWdvcnkoQ2F0ZWdvcnlOYW1lLCBsaSk7XG5cblxuXG5cbiAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuXG4gICAgICAgICAgICByZW1vdmVOb2RlKHVsKTtcbiAgICAgICAgICAgIGxvYWRBbGxUYXNrKCk7XG5cblxuXG5cblxuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIENhdGVnb3JpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBEZWxldGVDYXRlZ29yeShuYW1lKSB7XG4gICAgICAgIENhdGVnb3JpZXNDb250YWluZXIucmVtb3ZlQ2hpbGQobmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGVsZXRlVGFzayhub2RlKSB7XG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpXG4gICAgICAgIHVsLnJlbW92ZUNoaWxkKG5vZGUpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gQ3JlYXRlTmV3VGFzaygpIHtcbiAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG4gICAgICAgIGxldCBBID0gVGFza0Zvcm1Db250cm9sbGVyLmdldEFsbFRhc2tWYWx1ZXMoKTtcbiAgICAgICAgbGV0IHRhc2tJZCA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRUYXNrcygpO1xuICAgICAgICBsZXQgbGFzdCA9IHRhc2tJZC5sZW5ndGggLSAxXG4gICAgICAgIHRhc2tJZCA9IHRhc2tJZFtsYXN0XS50YXNrSWQ7XG5cbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKEEuVGFza1ByaW9yaXR5ID09ICczJykge1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndGFza0xpc3RMaScpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoQS5UYXNrUHJpb3JpdHkgPT0gJzInKSB7XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0YXNrTGlzdExpTWVkJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tMaXN0TGlIaWdoJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjEuY2xhc3NMaXN0LmFkZCgndG9wVGFzaycpO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYxKTtcbiAgICAgICAgbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrTGVmdEFsaWduJyk7XG4gICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgICAgIGxldCBidXR0b24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgnZXhwZW5kQnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgndmVydCcpO1xuICAgICAgICBidXR0b24xLmlubmVySFRNTCA9IFwiPGltZyBzcmMgPSdJbWFnZXMvY2hldnJvbi1kb3duLnN2Zyc+XCI7XG4gICAgICAgIC8vZXhwZW5kIGZ1bmN0aW9uXG4gICAgICAgIGJ1dHRvbjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQnKTtcbiAgICAgICAgICAgIGxldCB0ZXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFza0lkKTtcbiAgICAgICAgICAgIGlmICh0ZXN0LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0ZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LmFkZCgndmVydCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRlc3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGJ1dHRvbjEpO1xuXG4gICAgICAgIGxldCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndG9wVGFza0xlZnRBbGlnbk5hbWUnKTtcbiAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChkaXYzKTtcblxuICAgICAgICBsZXQgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXY0LmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tOYW1lJyk7XG5cbiAgICAgICAgZGl2NC5pbm5lckhUTUwgPSBgPHNwYW4+ICR7QS5UYXNrTmFtZX08L3NwYW4+YDtcbiAgICAgICAgZGl2My5hcHBlbmRDaGlsZChkaXY0KTtcblxuICAgICAgICBsZXQgZGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXY1LmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tEdWVEYXRlJyk7XG5cbiAgICAgICAgZGl2NS5pbm5lckhUTUwgPSBgPHNwYW4+IER1ZTogJHtBLlRhc2tEdWVEYXRlfTwvc3Bhbj5gO1xuXG4gICAgICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGl2NSk7XG5cblxuICAgICAgICBsZXQgZGl2NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXY2LmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tSaWdodEFsaWduJyk7XG5cbiAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChkaXY2KTtcblxuICAgICAgICBsZXQgaW5wdXRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0Q2hlY2suY2xhc3NMaXN0LmFkZCgndGFza0NoZWNrQm94Jyk7XG4gICAgICAgIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrQm94Jyk7XG4gICAgICAgIGlucHV0Q2hlY2suc2V0QXR0cmlidXRlKCdpZCcsICdOJyArIHRhc2tJZCk7XG5cbiAgICAgICAgbGV0IGxhYmVsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbElucHV0LnNldEF0dHJpYnV0ZSgnZm9yJywgJ04nICsgdGFza0lkKTtcbiAgICAgICAgZGl2Ni5hcHBlbmQoaW5wdXRDaGVjayk7XG4gICAgICAgIGRpdjYuYXBwZW5kKGxhYmVsSW5wdXQpO1xuXG5cbiAgICAgICAgaW5wdXRDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dENoZWNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnJheVRhc2sgPSBjYXRlZ29yeUNvbnRyb2xsZXIuZ2V0VGFza3MoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyYXlUYXNrW2ldLnRhc2tJZCA9PSB0YXNrSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5VGFza1tpXS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Rhc2tzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeShhcnJheVRhc2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVRhc2sobGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG5cblxuXG5cblxuICAgICAgICBsZXQgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXY3LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbVRhc2snKTtcbiAgICAgICAgZGl2Ny5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lkKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2Nyk7XG5cblxuICAgICAgICBsZXQgZGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXY4LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OCk7XG5cbiAgICAgICAgZGl2OC5pbm5lckhUTUwgPSBgPHNwYW4+ICR7QS5EZXNjcmlwdGlvbn08L3NwYW4+YFxuXG5cbiAgICAgICAgbGV0IGRpdjkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXY5LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXRlZ29yeScpO1xuXG4gICAgICAgIGRpdjkuaW5uZXJIVE1MID0gYCR7QS5UYXNrQ2F0ZX1gO1xuXG4gICAgICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OSk7XG5cblxuICAgICAgICBsZXQgZGl2MTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MTAuY2xhc3NMaXN0LmFkZCgnZWRpdERlbGV0ZUJ1dHRvbicpO1xuXG4gICAgICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2MTApO1xuXG5cblxuICAgICAgICBsZXQgZGl2MTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MTEuY2xhc3NMaXN0LmFkZCgnZWRpdFRhc2tCdXR0b24nKTtcbiAgICAgICAgZGl2MTAuYXBwZW5kQ2hpbGQoZGl2MTEpO1xuXG4gICAgICAgIGxldCBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LmFkZCgnZWRpdENvbnRyb2xsZXInKTtcbiAgICAgICAgYnV0dG9uMi5pbm5lckhUTUwgPSBgRWRpdCBUYXNrYDtcbiAgICAgICAgZGl2MTEuYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG5cbiAgICAgICAgLy9lZGl0XG4gICAgICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICBsZXQgZGl2MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2MTIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J1dHRvbicpO1xuICAgICAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMik7XG4gICAgICAgIGxldCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQ29udHJvbGxlcicpO1xuXG4gICAgICAgIGJ1dHRvbjMuaW5uZXJIVE1MID0gYERlbGV0ZSBUYXNrYDtcbiAgICAgICAgZGl2MTIuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gICAgICAgIGJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuXG4gICAgICAgIH0pXG5cblxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gbG9hZEFsbFRhc2soKSB7XG5cbiAgICAgICAgY29uc3QgYXJyYXlUYXNrID0gY2F0ZWdvcnlDb250cm9sbGVyLmdldFRhc2tzKCk7XG4gICAgICAgIGlmIChhcnJheVRhc2sgIT0gbnVsbCAmJiBhcnJheVRhc2subGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5VGFza1tpXS5jb21wbGV0ZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tJZCA9IGFycmF5VGFza1tpXS50YXNrSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycmF5VGFza1tpXS5wcmlvcml0eSA9PSAnMycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tMaXN0TGknKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFycmF5VGFza1tpXS5wcmlvcml0eSA9PSAnMicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Rhc2tMaXN0TGlNZWQnKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndGFza0xpc3RMaUhpZ2gnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2MS5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdjEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tMZWZ0QWxpZ24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKCdleHBlbmRCdXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKCd2ZXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEuaW5uZXJIVE1MID0gXCI8aW1nIHNyYyA9J0ltYWdlcy9jaGV2cm9uLWRvd24uc3ZnJz5cIjtcbiAgICAgICAgICAgICAgICAgICAgLy9leHBlbmQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QuYWRkKCd2ZXJ0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24xLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoYnV0dG9uMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2My5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrTGVmdEFsaWduTmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBkaXYyLmFwcGVuZENoaWxkKGRpdjMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjQuY2xhc3NMaXN0LmFkZCgndG9wVGFza05hbWUnKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXY0LmlubmVySFRNTCA9IGA8c3Bhbj4gJHthcnJheVRhc2tbaV0udGFza05hbWV9PC9zcGFuPmA7XG4gICAgICAgICAgICAgICAgICAgIGRpdjMuYXBwZW5kQ2hpbGQoZGl2NCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2NS5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrRHVlRGF0ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpdjUuaW5uZXJIVE1MID0gYDxzcGFuPiBEdWU6ICR7YXJyYXlUYXNrW2ldLmR1ZURhdGV9PC9zcGFuPmA7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2My5hcHBlbmRDaGlsZChkaXY1KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXY2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjYuY2xhc3NMaXN0LmFkZCgndG9wVGFza1JpZ2h0QWxpZ24nKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGVjay5jbGFzc0xpc3QuYWRkKCd0YXNrQ2hlY2tCb3gnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tCb3gnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ04nICsgdGFza0lkKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsSW5wdXQuc2V0QXR0cmlidXRlKCdmb3InLCAnTicgKyB0YXNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBkaXY2LmFwcGVuZChpbnB1dENoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2Ni5hcHBlbmQobGFiZWxJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dENoZWNrLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hlY2tXb3JraW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlUYXNrW2ldLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Rhc2tzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlUYXNrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlVGFzayhsaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXY3LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbVRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2Ny5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza0lkKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2Nyk7XG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2OCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXY4LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpdjcuYXBwZW5kQ2hpbGQoZGl2OCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2OC5pbm5lckhUTUwgPSBgPHNwYW4+ICR7YXJyYXlUYXNrW2ldLmRlc2NyaXB0aW9ufTwvc3Bhbj5gXG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2OSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpdjkuY2xhc3NMaXN0LmFkZCgndGFza0NhdGVnb3J5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2OS5pbm5lckhUTUwgPSBgJHthcnJheVRhc2tbaV0uQ2F0ZWdvcnlOYW1lfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY5KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYxMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxMC5jbGFzc0xpc3QuYWRkKCdlZGl0RGVsZXRlQnV0dG9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2Ny5hcHBlbmRDaGlsZChkaXYxMCk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxMS5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMi5jbGFzc0xpc3QuYWRkKCdlZGl0Q29udHJvbGxlcicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24yLmlubmVySFRNTCA9IGBFZGl0IFRhc2tgO1xuICAgICAgICAgICAgICAgICAgICBkaXYxMS5hcHBlbmRDaGlsZChidXR0b24yKTtcblxuICAgICAgICAgICAgICAgICAgICAvL2VkaXRcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrRm9ybUNvbnRyb2xsZXIuRWRpdGxvYWRDYXRlZ29yaWVzSW50b1NlbGVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdHVuSGlkZU5ld1Rhc2tGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRDYW5jZWxDcmVhdGVUYXNrJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb25maXJtRWRpdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRWRpdENyZWF0ZVRhc2tCdXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRIYW5kbGVyLm9uRWRpdFRhc2sodGFza0lkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xuXG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHsgRXZlbnRIYW5kbGVyLkVkaXRvbkNhbmNlbE5ld1Rhc2soY29uZmlybUVkaXRUYXNrQnV0dG9uKSB9LCB7IG9uY2U6IHRydWUgfSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2MTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2MTIuY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxMC5hcHBlbmRDaGlsZChkaXYxMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjMuY2xhc3NMaXN0LmFkZCgnZGVsZXRlQ29udHJvbGxlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjMuaW5uZXJIVE1MID0gYERlbGV0ZSBUYXNrYDtcbiAgICAgICAgICAgICAgICAgICAgZGl2MTIuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gbG9hZFRhc2soVGFzaykge1xuXG4gICAgICAgIGNvbnN0IGFycmF5VGFzayA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRUYXNrcygpO1xuICAgICAgICBpZiAoYXJyYXlUYXNrLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5VGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVRhc2tbaV0uY29tcGxldGVkID09IGZhbHNlICYmIGFycmF5VGFza1tpXS5DYXRlZ29yeU5hbWUgPT0gVGFzaykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0lkID0gYXJyYXlUYXNrW2ldLnRhc2tJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndGFza0xpc3RMaScpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxLmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgndG9wVGFza0xlZnRBbGlnbicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGRpdjIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24xLmNsYXNzTGlzdC5hZGQoJ2V4cGVuZEJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24xLmNsYXNzTGlzdC5hZGQoJ3ZlcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMS5pbm5lckhUTUwgPSBcIjxpbWcgc3JjID0nSW1hZ2VzL2NoZXZyb24tZG93bi5zdmcnPlwiO1xuICAgICAgICAgICAgICAgICAgICAvL2V4cGVuZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICBidXR0b24xLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVzdC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24xLmNsYXNzTGlzdC5hZGQoJ3ZlcnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LnJlbW92ZSgndmVydCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZChidXR0b24xKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXYzLmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tMZWZ0QWxpZ25OYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQoZGl2Myk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2NC5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrTmFtZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpdjQuaW5uZXJIVE1MID0gYDxzcGFuPiAke2FycmF5VGFza1tpXS50YXNrTmFtZX08L3NwYW4+YDtcbiAgICAgICAgICAgICAgICAgICAgZGl2My5hcHBlbmRDaGlsZChkaXY0KTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZGl2NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkaXY1LmNsYXNzTGlzdC5hZGQoJ3RvcFRhc2tEdWVEYXRlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2NS5pbm5lckhUTUwgPSBgPHNwYW4+IER1ZTogJHthcnJheVRhc2tbaV0uZHVlRGF0ZX08L3NwYW4+YDtcblxuICAgICAgICAgICAgICAgICAgICBkaXYzLmFwcGVuZENoaWxkKGRpdjUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2Ni5jbGFzc0xpc3QuYWRkKCd0b3BUYXNrUmlnaHRBbGlnbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQoZGl2Nik7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENoZWNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDaGVja0JveCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENoZWNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja0JveCcpO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENoZWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnTicgKyB0YXNrSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdOJyArIHRhc2tJZCk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjYuYXBwZW5kKGlucHV0Q2hlY2spO1xuICAgICAgICAgICAgICAgICAgICBkaXY2LmFwcGVuZChsYWJlbElucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICBpbnB1dENoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0Q2hlY2suY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja1dvcmtpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheVRhc2tbaV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVGFza3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeShhcnJheVRhc2spKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVUYXNrKGxpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXY3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjcuY2xhc3NMaXN0LmFkZCgnYm90dG9tVGFzaycpO1xuICAgICAgICAgICAgICAgICAgICBkaXY3LnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrSWQpO1xuICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXY3KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXY4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjguY2xhc3NMaXN0LmFkZCgndGFza0Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2Ny5hcHBlbmRDaGlsZChkaXY4KTtcblxuICAgICAgICAgICAgICAgICAgICBkaXY4LmlubmVySFRNTCA9IGA8c3Bhbj4gJHthcnJheVRhc2tbaV0uZGVzY3JpcHRpb259PC9zcGFuPmBcblxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXY5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2OS5jbGFzc0xpc3QuYWRkKCd0YXNrQ2F0ZWdvcnknKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXY5LmlubmVySFRNTCA9IGAke2FycmF5VGFza1tpXS5DYXRlZ29yeU5hbWV9YDtcblxuICAgICAgICAgICAgICAgICAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjkpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjEwLmNsYXNzTGlzdC5hZGQoJ2VkaXREZWxldGVCdXR0b24nKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXY3LmFwcGVuZENoaWxkKGRpdjEwKTtcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjExLmNsYXNzTGlzdC5hZGQoJ2VkaXRUYXNrQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjEwLmFwcGVuZENoaWxkKGRpdjExKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24yLmNsYXNzTGlzdC5hZGQoJ2VkaXRDb250cm9sbGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjIuaW5uZXJIVE1MID0gYEVkaXQgVGFza2A7XG4gICAgICAgICAgICAgICAgICAgIGRpdjExLmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vZWRpdFxuICAgICAgICAgICAgICAgICAgICBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRpdjEyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2tCdXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGl2MTAuYXBwZW5kQ2hpbGQoZGl2MTIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24zLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUNvbnRyb2xsZXInKTtcblxuICAgICAgICAgICAgICAgICAgICBidXR0b24zLmlubmVySFRNTCA9IGBEZWxldGUgVGFza2A7XG4gICAgICAgICAgICAgICAgICAgIGRpdjEyLmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuXG5cblxuXG5cbiAgICB9XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgICAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG5cblxuXG5cblxuXG5cblxuICAgIHJldHVybiB7IEVkaXRoaWRlTmV3VGFza0Zvcm0sIHJlbW92ZU5vZGUsIGxvYWRBbGxUYXNrLCBDcmVhdGVOZXdUYXNrLCB1bkhpZGVOZXdUYXNrRm9ybSwgaGlkZU5ld1Rhc2tGb3JtLCBDbGlja0NhdGVnb3J5LCB0b2dnbGVNZW51LCBtZW51LCBtZW51QnV0dG9uLCByZW1vdmVOb2RlLCBhZGRNZW51SXRlbXMsIHRvZ2dsZUNhdGVnb3J5Rm9ybSwgQ2F0ZWdvcnlGb3JtQnV0dG9uLCBjYW5jZWxOZXdDYXRlZ29yeUJ1dHRvbiwgRGVsZXRlQ2F0ZWdvcnksIHVwZGF0ZU5ld0NhdGVnb3J5LCBhZGRDYXRlZ29yeWJ1dHRvbiwgY2F0ZWdvcnlGb3JtQm94IH1cblxufSkoKTtcblxuXG5cblxuXG5cbmV4cG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9OyIsImltcG9ydCB7IGRvbU1hbmlwdWxhdGlvbiB9IGZyb20gJy4vRG9tTWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHsgY2F0ZWdvcnlDb250cm9sbGVyIH0gZnJvbSAnLi9kYXRhYmFzZSdcbmltcG9ydCB7IFRhc2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vRm9ybUNvbnRyb2xsZXInXG5pbXBvcnQgeyB0YXNrTWFrZXIgfSBmcm9tICcuL0NhdGVnb3J5Q2xhc3MnO1xuY29uc3QgRXZlbnRIYW5kbGVyID0gKCgpID0+IHtcblxuICAgIGxldCBvbkNsaWNrQWRkZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIG1lbnVCdXR0b25Ub2dnbGUoKSB7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi50b2dnbGVNZW51KCk7XG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdDYXRlZ29yeUJ1dHRvblRvZ2dsZSgpIHtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLkNhdGVnb3J5Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi50b2dnbGVDYXRlZ29yeUZvcm0oKTtcbiAgICAgICAgfSlcblxuICAgICAgICBkb21NYW5pcHVsYXRpb24uY2FuY2VsTmV3Q2F0ZWdvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi50b2dnbGVDYXRlZ29yeUZvcm0oKTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRGb3JOZXdDYXRlZ29yeSgpIHtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLmNhdGVnb3J5Rm9ybUJveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ2hlY2tJZklucHV0RW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ2hlY2tJZklucHV0RW1wdHkoKSB7XG4gICAgICAgIGlmIChkb21NYW5pcHVsYXRpb24uY2F0ZWdvcnlGb3JtQm94LnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQnKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi5hZGRDYXRlZ29yeWJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb21NYW5pcHVsYXRpb24uY2F0ZWdvcnlGb3JtQm94LnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvbU1hbmlwdWxhdGlvbi5jYXRlZ29yeUZvcm1Cb3gudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBFbXB0eScpO1xuICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLmFkZENhdGVnb3J5YnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gQ2hlY2tJZklucHV0c0VtcHR5KGlucHV0LCBidXR0b24pIHtcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIGZ1bmN0aW9uIEVkaXRDYXRlZ29yeShvbGRDYXRlTmFtZSwgTmV3Y2F0ZWdvcnlOYW1lKSB7XG4gICAgICAgIGNhdGVnb3J5Q29udHJvbGxlci5FZGl0Q2F0ZWdvcnkob2xkQ2F0ZU5hbWUsIE5ld2NhdGVnb3J5TmFtZSk7XG5cbiAgICB9XG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2F0ZWdvcnkobmFtZSwgbm9kZSkge1xuICAgICAgICBjYXRlZ29yeUNvbnRyb2xsZXIuRGVsZXRlQ2F0ZWdvcnkobmFtZSk7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi5EZWxldGVDYXRlZ29yeShub2RlKTtcblxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBDcmVhdGVDYXRlZ29yeSgpIHtcbiAgICAgICAgLy9GSVggRVJST1IgSEVSRSBjYW5jZWxOZXdDYXRCdXRvdG4gd29ya3MgYnV0IHRoZSBvdGhlciBvbmUgZG9lc250IFxuICAgICAgICBkb21NYW5pcHVsYXRpb24uYWRkQ2F0ZWdvcnlidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvbU1hbmlwdWxhdGlvbi5jYXRlZ29yeUZvcm1Cb3gudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChjYXRlZ29yeUNvbnRyb2xsZXIuQ3JlYXRlQ2F0ZWdvcnkodmFsdWUpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlTmV3Q2F0ZWdvcnkodmFsdWUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlQ2F0ZWdvcnkgRmFpbGVkXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy9hbGwgdGFzayBjYXRlZ29yeVxuICAgIGZ1bmN0aW9uIEFsbFRhc2tDbGljaygpIHtcbiAgICAgICAgbGV0IGFsbFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsVGFza3MnKTtcbiAgICAgICAgYWxsVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLkNsaWNrQ2F0ZWdvcnkoYWxsVGFzaywgJ0FsbFRhc2tzJyk7XG4gICAgICAgICAgICBsZXQgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVOb2RlKHVsKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi5sb2FkQWxsVGFzaygpO1xuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgICAgY29uc3QgYXJyYXlDYXRlb2dyeSA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNhdGVvZ3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlTmV3Q2F0ZWdvcnkoYXJyYXlDYXRlb2dyeVtpXS5DYXRlZ29yeU5hbWUpO1xuXG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gb25OZXdUYXNrQ2xpY2soKSB7XG4gICAgICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tCdXR0b24nKTtcbiAgICAgICAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVGFza0Zvcm1Db250cm9sbGVyLmxvYWRDYXRlZ29yaWVzSW50b1NlbGVjdCgpO1xuICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVuSGlkZU5ld1Rhc2tGb3JtKCk7XG4gICAgICAgICAgICBpZiAob25DbGlja0FkZGVkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgb25DcmVhdGVUYXNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gb25DYW5jZWxOZXdUYXNrKCkge1xuICAgICAgICBsZXQgQ2FuY2VsQ3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDYW5jZWxDcmVhdGVUYXNrJyk7XG4gICAgICAgIGxldCBDYXRlZ29yeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDYXRlZ29yeVNlbGVjdEZvclRhc2snKTtcbiAgICAgICAgQ2FuY2VsQ3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVGFza0Zvcm1Db250cm9sbGVyLnVuTG9hZENhdGVnb3JpZXNTZWxlY3QoKTtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi5oaWRlTmV3VGFza0Zvcm0oKTtcblxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBFZGl0b25DYW5jZWxOZXdUYXNrKGVsZW0pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dvcmtzJyk7XG4gICAgICAgIFRhc2tGb3JtQ29udHJvbGxlci5FZGl0dW5Mb2FkQ2F0ZWdvcmllc1NlbGVjdCgpO1xuICAgICAgICBkb21NYW5pcHVsYXRpb24uRWRpdGhpZGVOZXdUYXNrRm9ybSgpO1xuICAgICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVkaXRUYXNrKHRhc2tJZCkge1xuXG4gICAgICAgIGxldCBBID0gVGFza0Zvcm1Db250cm9sbGVyLkVkaXRnZXRBbGxUYXNrVmFsdWVzKCk7XG4gICAgICAgIGNvbnN0IGFycmF5VGFzayA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRUYXNrcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlUYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlUYXNrW2ldLnRhc2tJZCA9PSB0YXNrSWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyB0YXNrTWFrZXIoQS5UYXNrQ2F0ZSwgQS5UYXNrTmFtZSwgQS5EZXNjcmlwdGlvbiwgQS5UYXNrUHJpb3JpdHksIEEuVGFza0R1ZURhdGUsIHRhc2tJZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGFycmF5VGFza1tpXSA9IG5ld1Rhc2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGVnb3J5Q29udHJvbGxlci5FZGl0VGFzayhhcnJheVRhc2spO1xuICAgICAgICBUYXNrRm9ybUNvbnRyb2xsZXIuRWRpdHJlc2V0VGFza0Zvcm0oKTtcbiAgICAgICAgVGFza0Zvcm1Db250cm9sbGVyLkVkaXR1bkxvYWRDYXRlZ29yaWVzU2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuICAgICAgICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlTm9kZSh1bCk7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi5sb2FkQWxsVGFzaygpO1xuICAgIH1cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0Rm9yTmV3VGFzaygpIHtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGFza05hbWVDcmVhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ2hlY2tJZlRhc2tJbnB1dEVtcHR5KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gQ2hlY2tJZlRhc2tJbnB1dEVtcHR5KCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rhc2tOYW1lQ3JlYXRlJykudmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpdCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NyZWF0ZVRhc2tCdXR0b24nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDcmVhdGVUYXNrQnV0dG9uJykuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBvbkNyZWF0ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQ3JlYXRlVGFza0J1dHRvbicpO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVUYXNrQnV0dG9uKTtcbiAgICAgICAgaGFuZGxlU3VibWl0Rm9yTmV3VGFzaygpO1xuICAgICAgICBvbkNsaWNrQWRkZWQgPSB0cnVlO1xuXG4gICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICAgICAgICAgIGxldCBBID0gVGFza0Zvcm1Db250cm9sbGVyLmdldEFsbFRhc2tWYWx1ZXMoKTtcblxuICAgICAgICAgICAgICAgIGNhdGVnb3J5Q29udHJvbGxlci5DcmVhdGVUYXNrKEEuVGFza05hbWUsIEEuVGFza0NhdGUsIEEuVGFza0R1ZURhdGUsIEEuRGVzY3JpcHRpb24sIEEuVGFza1ByaW9yaXR5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLkNyZWF0ZU5ld1Rhc2soKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgVGFza0Zvcm1Db250cm9sbGVyLnJlc2V0VGFza0Zvcm0oKTtcbiAgICAgICAgICAgICAgICBUYXNrRm9ybUNvbnRyb2xsZXIudW5Mb2FkQ2F0ZWdvcmllc1NlbGVjdCgpO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICApXG5cblxuICAgIH1cblxuXG5cblxuXG5cbiAgICByZXR1cm4geyBvbkVkaXRUYXNrLCBFZGl0b25DYW5jZWxOZXdUYXNrLCBFZGl0Q2F0ZWdvcnksIENoZWNrSWZJbnB1dHNFbXB0eSwgb25DcmVhdGVUYXNrLCBvbk5ld1Rhc2tDbGljaywgb25DYW5jZWxOZXdUYXNrLCBtZW51QnV0dG9uVG9nZ2xlLCBuZXdDYXRlZ29yeUJ1dHRvblRvZ2dsZSwgcmVtb3ZlQ2F0ZWdvcnksIENyZWF0ZUNhdGVnb3J5LCBoYW5kbGVTdWJtaXRGb3JOZXdDYXRlZ29yeSwgbG9hZCwgQWxsVGFza0NsaWNrIH1cblxufSkoKTtcblxuXG5leHBvcnQgeyBFdmVudEhhbmRsZXIgfTsiLCJpbXBvcnQgeyBkb21NYW5pcHVsYXRpb24gfSBmcm9tICcuL0RvbU1hbmlwdWxhdGlvbidcbmltcG9ydCB7IGNhdGVnb3J5Q29udHJvbGxlciB9IGZyb20gJy4vZGF0YWJhc2UnXG5jb25zdCBUYXNrRm9ybUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xuXG4gICAgbGV0IENhdGVnb3J5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0NhdGVnb3J5U2VsZWN0Rm9yVGFzaycpO1xuICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZUZvclRhc2snKTtcblxuICAgIGxldCBFZGl0Q2F0ZWdvcnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRWRpdENhdGVnb3J5U2VsZWN0Rm9yVGFzaycpO1xuICAgIGxldCBFZGl0ZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRkYXRlRm9yVGFzaycpO1xuXG5cbiAgICBmdW5jdGlvbiBFZGl0bG9hZENhdGVnb3JpZXNJbnRvU2VsZWN0KCkge1xuXG4gICAgICAgIGxldCBBcnJheU9mQ2F0ZWdvcmllcyA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIGlmIChBcnJheU9mQ2F0ZWdvcmllcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBBcnJheU9mQ2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIEVkaXRDYXRlZ29yeVNlbGVjdC5vcHRpb25zLmFkZChuZXcgT3B0aW9uKCdBbGwgVGFzaycsIFwiQWxsVGFza1wiKSk7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcblxuICAgICAgICB2YXIgZGF0ZSA9IGQuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGggPSBkLmdldE1vbnRoKCkgKyAxOyAvLyBTaW5jZSBnZXRNb250aCgpIHJldHVybnMgbW9udGggZnJvbSAwLTExIG5vdCAxLTEyXG4gICAgICAgIHZhciB5ZWFyID0gZC5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgIHZhciBkYXRlU3RyID0geWVhciArIFwiLVwiICsgJzAnICsgbW9udGggKyBcIi1cIiArIGRhdGU7XG5cbiAgICAgICAgRWRpdGRhdGVJbnB1dC5taW4gPSBkYXRlU3RyO1xuICAgICAgICBFZGl0ZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cjtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXlPZkNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgRWRpdENhdGVnb3J5U2VsZWN0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oQXJyYXlPZkNhdGVnb3JpZXNbaV0uQ2F0ZWdvcnlOYW1lLCBBcnJheU9mQ2F0ZWdvcmllc1tpXS5DYXRlZ29yeU5hbWUpKTtcblxuXG5cblxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIEVkaXR1bkxvYWRDYXRlZ29yaWVzU2VsZWN0KCkge1xuICAgICAgICBsZXQgQXJyYXlPZkNhdGVnb3JpZXMgPSBjYXRlZ29yeUNvbnRyb2xsZXIuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICBpZiAoQXJyYXlPZkNhdGVnb3JpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXJyYXlPZkNhdGVnb3JpZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIEVkaXRDYXRlZ29yeVNlbGVjdC5yZW1vdmUoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXlPZkNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIEVkaXRDYXRlZ29yeVNlbGVjdC5yZW1vdmUoMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBmdW5jdGlvbiBFZGl0Z2V0QWxsVGFza1ZhbHVlcygpIHtcbiAgICAgICAgbGV0IFRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRUYXNrTmFtZUNyZWF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRUYXNrRGVzY3JpcHRpb25DcmVhdGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IFRhc2tQcmlvcml0eUxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRUYXNrUHJpb3JpdHlEcm9wRG93bicpLnZhbHVlO1xuICAgICAgICBsZXQgVGFza0NhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRDYXRlZ29yeVNlbGVjdEZvclRhc2snKS52YWx1ZTtcbiAgICAgICAgbGV0IFRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRkYXRlRm9yVGFzaycpLnZhbHVlO1xuXG4gICAgICAgIHZhciBhID0ge1xuICAgICAgICAgICAgVGFza05hbWU6IFRhc2tOYW1lLFxuICAgICAgICAgICAgRGVzY3JpcHRpb246IFRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIFRhc2tQcmlvcml0eTogVGFza1ByaW9yaXR5TGV2ZWwsXG4gICAgICAgICAgICBUYXNrQ2F0ZTogVGFza0NhdGVnb3J5LFxuICAgICAgICAgICAgVGFza0R1ZURhdGU6IFRhc2tEdWVEYXRlXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhO1xuXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIEVkaXRyZXNldFRhc2tGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRWRpdFRhc2tOYW1lQ3JlYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0VkaXRUYXNrRGVzY3JpcHRpb25DcmVhdGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjRWRpdENsYXNzRm9ybScpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgfVxuXG5cblxuXG5cblxuXG4gICAgZnVuY3Rpb24gbG9hZENhdGVnb3JpZXNJbnRvU2VsZWN0KCkge1xuXG4gICAgICAgIGxldCBBcnJheU9mQ2F0ZWdvcmllcyA9IGNhdGVnb3J5Q29udHJvbGxlci5nZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIGlmIChBcnJheU9mQ2F0ZWdvcmllcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBBcnJheU9mQ2F0ZWdvcmllcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIENhdGVnb3J5U2VsZWN0Lm9wdGlvbnMuYWRkKG5ldyBPcHRpb24oJ0FsbCBUYXNrJywgXCJBbGxUYXNrXCIpKTtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIHZhciBkYXRlID0gZC5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtb250aCA9IGQuZ2V0TW9udGgoKSArIDE7IC8vIFNpbmNlIGdldE1vbnRoKCkgcmV0dXJucyBtb250aCBmcm9tIDAtMTEgbm90IDEtMTJcbiAgICAgICAgdmFyIHllYXIgPSBkLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgdmFyIGRhdGVTdHIgPSB5ZWFyICsgXCItXCIgKyAnMCcgKyBtb250aCArIFwiLVwiICsgZGF0ZTtcblxuICAgICAgICBkYXRlSW5wdXQubWluID0gZGF0ZVN0cjtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZVN0cjtcblxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXlPZkNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgQ2F0ZWdvcnlTZWxlY3Qub3B0aW9ucy5hZGQobmV3IE9wdGlvbihBcnJheU9mQ2F0ZWdvcmllc1tpXS5DYXRlZ29yeU5hbWUsIEFycmF5T2ZDYXRlZ29yaWVzW2ldLkNhdGVnb3J5TmFtZSkpO1xuXG5cblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bkxvYWRDYXRlZ29yaWVzU2VsZWN0KCkge1xuICAgICAgICBsZXQgQXJyYXlPZkNhdGVnb3JpZXMgPSBjYXRlZ29yeUNvbnRyb2xsZXIuZ2V0Q2F0ZWdvcmllcygpO1xuICAgICAgICBpZiAoQXJyYXlPZkNhdGVnb3JpZXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXJyYXlPZkNhdGVnb3JpZXMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIENhdGVnb3J5U2VsZWN0LnJlbW92ZSgwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheU9mQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQ2F0ZWdvcnlTZWxlY3QucmVtb3ZlKDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZU5ld1Rhc2tGb3JtKCkge1xuICAgICAgICBsZXQgVGFza05hbWVEaXYgPSBkb3VjbWVudC5xdWVyeVNlbGVjdG9yKCcjVGFza05hbWVDcmVhdGUnKTtcbiAgICAgICAgbGV0IFRhc2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUYXNrRGVzY3JpcHRpb25DcmVhdGUnKTtcblxuICAgICAgICBpZiAoVGFza05hbWVEaXYudmFsdWUgPT0gbnVsbCB8fCBUYXNrRGVzY3JpcHRpb25EaXYudmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgVGFzayBOYW1lIGFuZCBEZXNjcmlwdGlvbiBwcm9wZXJseVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFsbFRhc2tWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUYXNrTmFtZUNyZWF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rhc2tEZXNjcmlwdGlvbkNyZWF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgVGFza1ByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVGFza1ByaW9yaXR5RHJvcERvd24nKS52YWx1ZTtcbiAgICAgICAgbGV0IFRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNDYXRlZ29yeVNlbGVjdEZvclRhc2snKS52YWx1ZTtcbiAgICAgICAgbGV0IFRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGVGb3JUYXNrJykudmFsdWU7XG5cbiAgICAgICAgdmFyIGEgPSB7XG4gICAgICAgICAgICBUYXNrTmFtZTogVGFza05hbWUsXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjogVGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgVGFza1ByaW9yaXR5OiBUYXNrUHJpb3JpdHlMZXZlbCxcbiAgICAgICAgICAgIFRhc2tDYXRlOiBUYXNrQ2F0ZWdvcnksXG4gICAgICAgICAgICBUYXNrRHVlRGF0ZTogVGFza0R1ZURhdGVcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG5cbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gcmVzZXRUYXNrRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rhc2tOYW1lQ3JlYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Rhc2tEZXNjcmlwdGlvbkNyZWF0ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdDbGFzc0Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICAgIH1cblxuXG5cblxuXG4gICAgcmV0dXJuIHsgRWRpdGdldEFsbFRhc2tWYWx1ZXMsIEVkaXRyZXNldFRhc2tGb3JtLCBFZGl0dW5Mb2FkQ2F0ZWdvcmllc1NlbGVjdCwgRWRpdGxvYWRDYXRlZ29yaWVzSW50b1NlbGVjdCwgcmVzZXRUYXNrRm9ybSwgbG9hZENhdGVnb3JpZXNJbnRvU2VsZWN0LCB1bkxvYWRDYXRlZ29yaWVzU2VsZWN0LCB2YWxpZGF0ZU5ld1Rhc2tGb3JtLCBnZXRBbGxUYXNrVmFsdWVzIH1cblxufSkoKTtcblxuZXhwb3J0IHsgVGFza0Zvcm1Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgY2F0ZWdvcnlNYWtlciwgdGFza01ha2VyIH0gZnJvbSAnLi9DYXRlZ29yeUNsYXNzJztcblxuY29uc3QgY2F0ZWdvcnlDb250cm9sbGVyID0gKCgpID0+IHtcblxuXG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ2F0ZWdvcmllcycpKSk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdDYXRlZ29yaWVzJykpO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tzJykpO1xuXG4gICAgfVxuXG5cblxuXG4gICAgZnVuY3Rpb24gQ3JlYXRlVGFzayhuYW1lLCBjYXRlZ29yeVBhcmVudCwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcbiAgICAgICAgbGV0IEFycmF5T2ZUYXNrcyA9IFtdO1xuICAgICAgICBsZXQgY2hlY2tUYXNrID0gZ2V0VGFza3MoKTtcbiAgICAgICAgbGV0IHRhc2tJRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE0NzEgLyA3LjUgKiAxLjAzMik7XG5cbiAgICAgICAgaWYgKGNoZWNrVGFzayAhPSBudWxsICYmIGNoZWNrVGFzay5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgQXJyYXlPZlRhc2tzID0gZ2V0VGFza3MoKTtcblxuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFza01ha2VyKGNhdGVnb3J5UGFyZW50LCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRhc2tJRCwgY29tcGxldGVkKTtcbiAgICAgICAgICAgIEFycmF5T2ZUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1Rhc2tzJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeShBcnJheU9mVGFza3MpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYXNrIEFkZGVkJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdGFza01ha2VyKGNhdGVnb3J5UGFyZW50LCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUsIHRhc2tJRCwgY29tcGxldGVkKTtcbiAgICAgICAgICAgIEFycmF5T2ZUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXlPZlRhc2tzKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGFzayBtYWRlJyk7XG5cbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICB9XG5cblxuXG5cblxuICAgIGZ1bmN0aW9uIENyZWF0ZUNhdGVnb3J5KG5hbWUpIHtcbiAgICAgICAgbGV0IEFycmF5T2ZDYXRlZ29yaWVzID0gW107XG4gICAgICAgIGxldCBjaGVja0NhdGUgPSBnZXRDYXRlZ29yaWVzKCk7XG4gICAgICAgIGxldCBuZXdDYXRlZ29yeSA9IG5ldyBjYXRlZ29yeU1ha2VyKG5hbWUpO1xuICAgICAgICBpZiAoY2hlY2tDYXRlICE9IG51bGwgJiYgY2hlY2tDYXRlLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBBcnJheU9mQ2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQXJyYXlPZkNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXlPZkNhdGVnb3JpZXNbaV0uQ2F0ZWdvcnlOYW1lID09IG5ld0NhdGVnb3J5LkNhdGVnb3J5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhhdCBDYXRlZ29yeSBpcyBhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IEFycmF5T2ZDYXRlZ29yaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5T2ZDYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0NhdGVnb3JpZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoQXJyYXlPZkNhdGVnb3JpZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXRlZ29yeSBBZGRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFycmF5T2ZDYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShBcnJheU9mQ2F0ZWdvcmllcykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhdGVnb3J5IG1hZGUnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cblxuXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIERlbGV0ZUNhdGVnb3J5KG5hbWUpIHtcbiAgICAgICAgbGV0IGRlbGV0ZUNhdGUgPSBnZXRDYXRlZ29yaWVzKCk7XG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUNhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkZWxldGVDYXRlW2ldLkNhdGVnb3J5TmFtZSA9PSBuYW1lKSB7XG5cblxuICAgICAgICAgICAgICAgIGRlbGV0ZUNhdGUuc3BsaWNlKGksIDEpO1xuXG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQ2F0ZWdvcmllcycpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoZGVsZXRlQ2F0ZSkpO1xuXG5cbiAgICAgICAgICAgICAgICAvL2RlbGV0ZSBhbGwgdGFza3Mgd2l0aCB0aGUgY2F0ZW9ncnkgc2V0IGFzIHRoZSBjYXRlZ29yeSBnZXR0aW5nIGRlbGV0ZWRcbiAgICAgICAgICAgICAgICBsZXQgQWxsVGFza0FycmF5ID0gY2F0ZWdvcnlDb250cm9sbGVyLmdldFRhc2tzKCk7XG4gICAgICAgICAgICAgICAgbGV0IGlPdXQgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBuZXdBcnJheSA9IFtdXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBbGxUYXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFsbFRhc2tBcnJheVtpXS5DYXRlZ29yeU5hbWUgIT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXlbaU91dF0gPSBBbGxUYXNrQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpT3V0ID0gaU91dCArIDE7XG5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVGFza3MnKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza3MnLCBKU09OLnN0cmluZ2lmeShuZXdBcnJheSkpO1xuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICAvL25vdCBkb25lIFxuICAgIGZ1bmN0aW9uIEVkaXRDYXRlZ29yeShuYW1lLCBuZXdOYW1lKSB7XG4gICAgICAgIGxldCBBcnJheU9mQ2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBcnJheU9mQ2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKEFycmF5T2ZDYXRlZ29yaWVzW2ldLkNhdGVnb3J5TmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coQXJyYXlPZkNhdGVnb3JpZXNbaV0pO1xuICAgICAgICAgICAgICAgIEFycmF5T2ZDYXRlZ29yaWVzW2ldLkNhdGVnb3J5TmFtZSA9IG5ld05hbWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0NhdGVnb3JpZXMnKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ2F0ZWdvcmllcycsIEpTT04uc3RyaW5naWZ5KEFycmF5T2ZDYXRlZ29yaWVzKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFycmF5T2ZUYXNrcyA9IGdldFRhc2tzKCk7XG4gICAgICAgIGlmIChhcnJheU9mVGFza3MgIT0gbnVsbCAmJiBhcnJheU9mVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU9mVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXlPZlRhc2tzW2ldLkNhdGVnb3J5TmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZUYXNrc1tpXS5DYXRlZ29yeU5hbWUgPSBuZXdOYW1lO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVGFza3MnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYXJyYXlPZlRhc2tzKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRWRpdFRhc2sobmV3QXJyYXkpIHtcblxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVGFza3MnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tzJywgSlNPTi5zdHJpbmdpZnkobmV3QXJyYXkpKTtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHsgZ2V0Q2F0ZWdvcmllcywgZ2V0VGFza3MsIENyZWF0ZUNhdGVnb3J5LCBEZWxldGVDYXRlZ29yeSwgRWRpdENhdGVnb3J5LCBDcmVhdGVUYXNrLCBFZGl0VGFzayB9XG5cblxuXG59KSgpO1xuXG5cbmV4cG9ydCB7IGNhdGVnb3J5Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgZG9tTWFuaXB1bGF0aW9uIH0gZnJvbSAnLi9Eb21NYW5pcHVsYXRpb24nXG5cblxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9FdmVudEhhbmRsZXInXG5cblxuXG5cblxuKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5sb2FkKCk7XG5cbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLmxvYWRBbGxUYXNrKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5tZW51QnV0dG9uVG9nZ2xlKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5uZXdDYXRlZ29yeUJ1dHRvblRvZ2dsZSgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuQ3JlYXRlQ2F0ZWdvcnkoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZVN1Ym1pdEZvck5ld0NhdGVnb3J5KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5BbGxUYXNrQ2xpY2soKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uTmV3VGFza0NsaWNrKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbkNhbmNlbE5ld1Rhc2soKTtcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm1lbnVCdXR0b25Ub2dnbGUoKTtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLmxvYWRBbGxUYXNrKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5uZXdDYXRlZ29yeUJ1dHRvblRvZ2dsZSgpO1xuICAgICAgICBFdmVudEhhbmRsZXIuQ3JlYXRlQ2F0ZWdvcnkoKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLmhhbmRsZVN1Ym1pdEZvck5ld0NhdGVnb3J5KCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5BbGxUYXNrQ2xpY2soKTtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uTmV3VGFza0NsaWNrKCk7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vbkNhbmNlbE5ld1Rhc2soKTtcblxuXG4gICAgfVxufSgpKTsiXSwic291cmNlUm9vdCI6IiJ9