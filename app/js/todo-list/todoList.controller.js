function getTodaysDate() {
    return (new Date()).getTime();
}

function todoCtrl() {

    function _validateNewTask(_task) {

        if (_task.title !== '') {
            return true;
        }

        return false;
    }

    var vm = this;

    // Массив для хранения списка задач задач
    vm.list = [];

    vm.newTask = {
        status: false,
        title: '',
        deadline: getTodaysDate()
    };

    // Добавление новой задачи
    vm.addTask = function (_task) {

        // Проверка на заполнение полей
        if (_validateNewTask(_task)) {

            //Добавление задачи в список
            vm.list.push({
                status: _task.status,
                task: _task.title,
                deadline: _task.deadline
            });

            // Отчистка полей
            vm.newTask = {
                status: false,
                title: '',
                deadline: getTodaysDate()
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
    }

}

angular.module('todoApp')
    .controller('TodoCtrl', [todoCtrl]);