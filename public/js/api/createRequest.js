"use strict";

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  xhr.responseType = options.responseType;
  xhr.withCredentials = true;

  let formData = new FormData();
  formData.append("mail", `${options.data.email}`);
  formData.append("password", `${options.data.password}`);

  try {
    if (options.method == "GET") {
      xhr.open(`${options.method}`, `${options.url}?mail=${options.data.email}&password=${options.data.password}`);
      xhr.send();
    } else {
      xhr.open(`${options.method}`, `${options.url}`);
      xhr.send(formData);
    }

  } catch (e) {
    options.callback(e);
  }

  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      options.callback(null, JSON.parse(xhr.responseText));
    } else {
      options.callback(err);
    }
  });

  return xhr;
};
