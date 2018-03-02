// using utility function,
// utilities returns an object with methods
var utility = utilities();
var idGenerator = utility.idGen(1);
var idGenerator2 = utility.idGen(1);

// user model declaration
var User = Backbone.Model.extend({
    defaults: {
        id: 0,
        fullName: '',
        role: "Member",
        authenticate: false,
        taskNumber: -1,
        taskTitle: "",
        taskDescription: "",
        taskAssignDate: new Date(),
        taskDueDate: ""
    }
});

// users collection declaration
var Users = Backbone.Collection.extend({});

// task model declaration
var Task = Backbone.Model.extend({
    defaults: {
        id: 0,
        taskTitle: "",
        taskDesc: "",
        dateCreated: utility.formatDate(new Date()),
        dueDate: '',
        img: ''
    }
});

// tasks model declaration
var Tasks = Backbone.Collection.extend({});

// create a list of users. This will be removed when the database is implemented
var user1 = new User({
    id: idGenerator() ,
    fullName: 'CHRISTOPHER T.',
    role: "Front-End Developer",
    authenticate: true,
    taskTitle: "JAVASCRIPT",
    taskNumber: 4,
    taskDescription: "Document traversal and manipulation, event handling, animation, and Ajax",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "February 10 2018"
});
var user2 = new User({
    id: idGenerator() ,
    fullName: "JOHN SMITH",
    role: "FULL STACK DEVELOPER",
    taskTitle: "MYSQL",
    authenticate: true,
    taskNumber: 4,
    taskDescription: "Create complex queries and improve your database application performance. Explore data design and more.",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "April 4 2018"
});
var user3 = new User({
    id: idGenerator() ,
    fullName: "CHRISTY SU",
    role: "BACK-END DEVELOPER",
    authenticate: true,
    taskTitle: "MongoDB",
    taskNumber: 4,
    taskDescription: "MongoDB developers who use the program regularly should have an idea of how to do specific commands. There are some of more common ones that they should be able to talk about, including collection commands.",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "April 17 2018"
});
var user4 = new User({
    id: idGenerator() ,
    fullName: "SAMUEL MA",
    role: "Back-End Developer",
    taskTitle: "NODEJS",
    authenticate: true,
    taskNumber: 5,
    taskDescription: "responsible for writing server-side web application logic in JavaScript and/or variants of it, such as CoffeeScript, IcedCoffeeScript,",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "April 18 2018"
});
var user5 = new User({
    id: idGenerator() ,
    fullName: "LOUIS J.",
    role: "FULL-STACK DEVELOPER",
    authenticate: true,
    taskTitle: "JAVA",
    taskNumber: 3,
    taskDescription: "Connect the website to the database, which will be used to persist data of models and users",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "April 17 2018"
});
var user6 = new User({
    id: idGenerator() ,
    fullName: "LIA SMITH",
    role: "FRONT-END DEVELOPER",
    authenticate: true,
    taskTitle: "MYSQL",
    taskNumber: 7,
    taskDescription: "Create complex queries and improve your database application performance. Explore data design and more.",
    taskAssignDate: utility.formatDate(new Date()),
    taskDueDate: "April 17 2018"
});
var users = new Users([user1, user2, user3, user4,user5,user6]);

// create a list of tasks. This will be removed when the database is implemented
var task1 = new Task({
    id: idGenerator2(),
    taskTitle: "HTML/CSS",
    taskDesc: "Create Front page of Website, deciding on User interfaces such as color theme and layout",
    dueDate: "February 21 2018",
    img: 'icon-software-font-underline'
});
var task2 = new Task({
    id: idGenerator2(),
    taskTitle: "BACKBONEJS",
    taskDesc: "Using the models, create a view using the template and then inject the views with attributes of the models.",
    dueDate: "February 30 2018",
    img: 'icon-software-horizontal-align-center'
});
var task3 = new Task({
    id: idGenerator2(),
    taskTitle: "java",
    taskDesc: "Connect the website to the database, which will be used to persist data of models and users",
    dueDate: "April 17 2018",
    img: 'icon-software-layers2'
});
var task4 = new Task({
    id: idGenerator2(),
    taskTitle: "javascript",
    taskDesc: "Create,Read,Update,Delete users and tasks",
    dueDate: "April 28 2018",
    img: 'icon-software-horizontal-align-left'
});
var task5 = new Task({
    id: idGenerator2(),
    taskTitle: "NODEJS",
    taskDesc: "Responsible for writing server-side web application logic in JavaScript and/or variants of it, such as CoffeeScript, IcedCoffeeScript.",
    dueDate: "April 30 2018",
    img: 'icon-software-indent-left'
});
var task6 = new Task({
    id: idGenerator2(),
    taskTitle: "MONGODB",
    taskDesc: "MongoDB developers who use the program regularly should have an idea of how to do specific commands. There are some of more common ones that they should be able to talk about, including collection commands.",
    dueDate: "February 10 2018",
    img: 'icon-software-vertical-align-bottom'
});
var task7 = new Task({
    id: idGenerator2(),
    taskTitle: "MYSQL",
    taskDesc: "Create complex queries and improve your database application performance. Explore data design and more.",
    dueDate: "February 30 2018",
    img: 'icon-software-layout-header-4boxes'
});
var task8 = new Task({
    id: idGenerator2(),
    taskTitle: "JQUERY",
    taskDesc: "Document traversal and manipulation, event handling, animation, and Ajax",
    dueDate: "February 30 2018",
    img: 'icon-software-vertical-distribute-bottom'
});
var tasks = new Tasks([task1, task2, task3, task4, task5, task6, task7, task8]);
// =================================================================

// create the view for the user
var UserView = Backbone.View.extend({
    model: new User(),
    className: "col-lg-4 col-md-6 col-sm-12 form-group",

    events: {
        'click .delete-user' : 'delete',
        'click .edit-user' : 'edit'
    },

    edit: function () {
        $(".userId").html('<label for="userId" class="form__label">userId</label>' +
            '<input type="text" class="form__input" value="' + this.model.get('id') + '" id="userId" required>')

        $(".fullName").html('<label for="name" class="form__label">Full Name</label>' +
                        ' <input type="text" class="form__input" value="' + this.model.get('fullName') + '" id="name" required>');

        $(".role").html('<label for="role" class="form__label">Role</label>' +
                    '<input type="text" class="form__input" value="' + this.model.get('role') + '" id="role">');

        $('.dateAssigned').html('<label for="dateAssigned" class="form__label">Date Assigned</label>' +
            '<input type="text" class="form__input" value="' + this.model.get('taskAssignDate') + '" id="dateAssigned">');

        $('.dueDate').html('<label for="dueDate" class="form__label">Due Date</label>\n' +
            '                        <input type="text" class="form__input" value="' + this.model.get('taskDueDate') +'" id="dueDate">');

        $('.task').html('<label for="task" class="form__label">Task Title</label>\n' +
            '                        <input type="text" class="form__input" value="' + this.model.get('taskTitle') +'"id="task">');

        $('.task-description').html(' <textarea name="task-descrip" id="task-description" cols="50" rows="8" maxlength="500">' + this.model.get('taskDescription')+ '</textarea>' +
                                '<label for="task-description"></label>');
        },

    delete: function () {
        users.remove(this.model);
    },

    initialize: function () {
        this.template = _.template($('.user-list-template').html());
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var UserViews = Backbone.View.extend({
    model: users,
    el: $('.user-list'),

    initialize: function () {
        var self = this;

        this.model.on('add', this.render, this);

        this.model.on('remove', this.render, this);

        this.model.on('change', function () {
            setTimeout(function () {
                self.render();
            }, 30);
        }, this);
    },

    render: function () {
        var self = this;

        this.$el.html('');
        _.each(this.model.toArray(), function (user) {
            self.$el.append((new UserView({model : user})).render().$el);
        });
    }

});


var TaskView = Backbone.View.extend({
    model: new Task(),
    className: "col-lg-3 col-md-6 col-sm-12 form-group",

    events: {
        'click .delete-task' : 'delete',
        'click .edit-task' : 'edit'

    },

    edit: function () {
        $('.taskId').html('<label for="taskId" class="form__label">Task Id</label>' +
            '<input type="text" class="form__input" value="' + this.model.get('id') +'" id="taskId">');

        $('.task-title').html('<label for="task-title" class="form__label">Task Title</label>' +
            '<input type="text" class="form__input" placeholder="MongoDb" value="' + this.model.get('taskTitle') +'" id="task-title">');

        $('.description').html('<textarea name="task-descrip" id="description" cols="50" rows="8" maxlength="500">' + this.model.get('taskDesc')+ '</textarea>' +
            '<label for="description"></label>');

        $('.date-created').html('<label for="date-created" class="form__label">Date Created</label>' +
            '<input type="text" class="form__input" value="' + this.model.get('dateCreated') +'" id="date-created" required>');

        $('.due-date').html('<label for="due-date" class="form__label">Due Date</label>' +
            '<input type="text" class="form__input" value="' + this.model.get('dueDate') +'" id="due-date" required>')
    },

    delete: function () {
      tasks.remove(this.model);
    },

    initialize: function () {
        this.template = _.template($('.task-list-template').html());

    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        this.$('.task-list__item-icon').addClass(this.model.get('img'));
        return this;
    }
});

var TaskViews = Backbone.View.extend({
    model: tasks,
    el: $('.task-list'),

    initialize: function () {
        var self = this;

        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
        this.model.on('change', function () {
            setTimeout(function () {
                self.render();
            }, 30);
        }, this);
    },

    render: function () {
        var self = this;

        this.$el.html('');
        _.each(this.model.toArray(), function (task) {
            self.$el.append((new TaskView({model: task})).render().$el)
        })
    }
});

var UserFormView = Backbone.View.extend({
    el: $('.allForms'),

    events: {
        //events for all forms
        'click .form-popup__close': 'clearForm',

        // events for user form
        'click .update-user': 'updateUser',

        // events for create user form
        'click .cancel-create-user': 'clearForm',
        'click .create-user': 'createUser',

        // events for task form
        'click .update-task': 'updateTask',

        // events for create task form
        'click .cancel-new-task': 'clearForm',
        'click .create-task' : 'createTask'
    },

    // method for user form
    updateUser: function () {
        var userId = $('#userId').val();
        var user = users.get(userId);

        user.set('fullName', $('#name').val());
        user.set('role', $('#role').val());
        user.set('taskAssignDate', $('#dateAssigned').val());
        user.set('taskDueDate', $('#dueDate').val());
        user.set('taskTitle', $('#task').val());
        user.set('taskDescription', $('#task-description').val());
    },


    // method for create user form
    createUser: function () {
        var newUser = new User({
            id: idGenerator(),
            fullName: $('#new-name').val(),
            role: $('#new-role').val(),
            taskTitle: $('#new-task').val(),
            taskDescription: $('#new-task-description').val(),
            taskAssignDate:$('#new-dateAssigned').val(),
            taskDueDate: $('#new-dueDate').val(),
            authenticate: true
        });

        users.add(newUser);
        utility.clearForm();
    },

    // method for task form
    updateTask: function () {
        var taskId = $('#taskId').val();
        var task = tasks.get(taskId);

        task.set('taskTitle', $('#task-title').val());
        task.set('taskDesc', $('#description').val());
        task.set('dateCreated', $('#date-created').val());
        task.set('dueDate', $('#due-date').val());
    },

    // method to create task form
    createTask: function () {
      var task = new Task({
          id: idGenerator2(),
          taskTitle: $('#new-task-title').val(),
          taskDesc: $('#new-description').val(),
          dateCreated: $('#new-date-created').val(),
          dueDate: $('#new-due-date').val(),
          img: utility.randomIcon()
      });

      tasks.add(task);
      utility.clearForm();
    },

    // method for all forms
    clearForm: function () {
      utility.clearForm();
    },

    initialize: function () {
        this.template = _.template($('.user-form-template').html());
        this.template2 = _.template($('.task-form-template').html());
        this.template3 = _.template($('.create-task-form-template').html());
        this.template4 = _.template($('.create-user-form-template').html());
    },

    render: function () {
        this.$el.append(this.template());
        this.$el.append(this.template2());
        this.$el.append(this.template3());
        this.$el.append(this.template4());

        return this;
    }
});




var userViews = new UserViews();
var taskViews = new TaskViews();
var userFormView = new UserFormView();


userViews.render();
taskViews.render();
userFormView.render();





function utilities() {

    var icons = [
        "icon-software-add-vectorpoint",
        "icon-software-box-oval",
        "icon-software-box-polygon",
        "icon-software-box-rectangle",
        "icon-software-box-roundedrectangle",
        "icon-software-character",
        "icon-software-crop",
        "icon-software-eyedropper",
        "icon-software-font-allcaps",
        "icon-software-font-baseline-shift",
        "icon-software-font-horizontal-scale",
        "icon-software-font-kerning",
        "icon-software-font-leading",
        "icon-software-font-size",
        "icon-software-font-smallcapital",
        "icon-software-font-smallcaps",
        "icon-software-font-strikethrough",
        "icon-software-font-tracking",
        "icon-software-font-underline",
        "icon-software-font-vertical-scale",
        "icon-software-horizontal-align-center",
        "icon-software-horizontal-align-left",
        "icon-software-horizontal-align-right",
        "icon-software-horizontal-distribute-center",
        "icon-software-horizontal-distribute-left",
        "icon-software-horizontal-distribute-right",
        "icon-software-indent-firstline",
        "icon-software-indent-left",
        "icon-software-indent-right",
        "icon-software-lasso",
        "icon-software-layers1",
        "icon-software-layers2",
        "icon-software-layout-header-2columns",
        "icon-software-layout-header-3columns",
        "icon-software-magnete",
        "icon-software-paintroller",
        "icon-software-reflect-horizontal",
        "icon-software-reflect-vertical",
        "icon-software-polygonallasso",
        "icon-software-remove-vectorpoint",
        "icon-software-scale-expand",
        "icon-software-vertical-distribute-center",
        "icon-software-vertical-distribute-top",
        "icon-software-transform-bezier",
        "icon-software-vertical-align-center"
    ];

    return{
        formatDate : function (date) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return monthNames[monthIndex] + ' ' + day + ' ' + year;
        },
        
        idGen: function (start) {
            var id = start;
            return function() {
                return id++;
            }
        },
        
        clearForm: function () {
            // clears the form in create task form
            $('#new-task-title').val('');
            $('#new-description').val('');
            $('#new-date-created').val('');
            $('#new-due-date').val('');

            // clears the form in the create user form
            $('#new-name').val('');
            $('#new-role').val('');
            $('#new-dateAssigned').val('');
            $('#new-dueDate').val('');
            $('#new-task').val('');
            $('#new-task-description').val('')

        },

        randomIcon: function () {
            return icons[Math.floor(Math.random() * (icons.length-1))];
        }
    }
}
