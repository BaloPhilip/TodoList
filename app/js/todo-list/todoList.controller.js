function todoCtrl() {

    var vm = this;

    // Текущая дата и время
    function _today () {
        return new Date()
    }

    // Проверка на заполнения поля "Task"
    function _validateNewTask(_task) {
        if (_task.title !== '') {
            return true;
        }
        return false;
    }

    // Массив для хранения списка задач задач
    vm.list = [];

    vm.newTask = {
        status: false,
        title: '',
        data: {date: _today()}
    };

    // Добавление новой задачи
    vm.addTask = function (_task) {

        // Проверка на заполнение полей
        if (_validateNewTask(_task)) {

            //Добавление задачи в список
            vm.list.push({
                status: _task.status,
                task: _task.title,
                deadline: _task.data.date
            });

            // Отчистка полей
            vm.newTask = {
                status: false,
                title: '',
                data: {date: _today()}
            };

        } else {
            // Если поля не заполнены показать предупреждение
            alert('Необходимо добавить "Task"!')
        }
    };

    // Удаление выбранной задачи
    vm.deleteTask = function (task) {
        vm.list.splice(vm.list.indexOf(task),1);
    };
}

angular.module('todoApp')
    .controller('TodoCtrl', [todoCtrl]);