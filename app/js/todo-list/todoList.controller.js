function todoCtrl() {

    var vm = this;

    // Проверка на заполнения поля "Task"
    function _validateNewTask(_task) {
        if (_task.title !== '') {
            return true;
        }
        return false;
    }

    // Массив для хранения списка задач задач
    vm.list = [];

    vm.today = function () {
        return new Date();
    };

    vm.newTask = {
        status: false,
        title: '',
        dt: vm.today()
    };

    // Datepicker
    vm.clear = function () {
        vm.newTask.dt = null;
    };

    vm.open = function () {
        vm.popup.opened = true;
    };

    vm.setDate = function (year, month, day) {
        vm.newTask.dt = new Date(day, month, year);
    };

    vm.popup = {
        opened: false
    };

    // Добавление новой задачи
    vm.addTask = function (_task) {

        // Проверка на заполнение полей
        if (_validateNewTask(_task)) {

            //Добавление задачи в список
            vm.list.push({
                status: _task.status,
                task: _task.title,
                deadline: _task.dt
            });

            // Отчистка полей
            vm.newTask = {
                status: false,
                title: '',
                dt: vm.today()
            };

        } else {
            // Если поля не заполнены показать предупреждение
            alert('Необходимо заполнить все поля!')
        }
    };

    // Удаление выбранной задачи
    vm.deleteTask = function (index) {
        // Удаляем текущую задачу используя ($index)
        vm.list.splice(index, 1);
    };
}

angular.module('todoApp')
    .controller('TodoCtrl', [todoCtrl]);