function todoCtrl() {

    var vm = this;

    // Массив для хранения списка задач задач
    vm.list = [];

    // Добавление новой задачи
    vm.addTask = function () {

        // Проверка на заполнение полей
        if (vm.newTask !== null && vm.deadline !== undefined) {

            var task = {
                status: false,
                task: vm.newTask,
                deadline: vm.deadline
            };

            //Добавление задачи в список
            vm.list.push(task);

            // Отчистка полей
            vm.newTask = null;
            vm.deadline = undefined;

        } else {
            // Если поля не заполнены показать предупреждение
            alert('Необходимо заполнить все поля!')
        }
    };

    // Удаление выбранной задачи
    vm.deleteTask = function (index) {
        // Удаляем текущую задачу используя ($index)
        vm.list.splice(index, 1)
    }

}

angular.module('todoApp')
    .controller('TodoCtrl', [todoCtrl]);