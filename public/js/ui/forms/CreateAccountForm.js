"use strict";
/*Форма CreateAccountForm отвечает за следующие функции:
Отправляет запрос на создание счёта через Account.create
Закрывает окно, в котором находится форма при успешном ответе
Сбрасывает форму и вызывает App.update() при успешном ответе*/
/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * Наследуется от AsyncForm   
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно (в котором находится форма) в случае успеха,
   * а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(options) {
    Account.create(options.data, (err, response) => {
      if (response && response.success) {
        App.getModal("createAccount").close();
        App.update();
        this.element.reset();
      }
    })
  }
}
