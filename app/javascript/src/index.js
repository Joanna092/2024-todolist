import $ from 'jquery';

import {
  indexTasks,
  postTask,
} from "./requests.js";

indexTasks(function (response) {
  var htmlString = response.tasks.map(function (task) {
    return '<div class="row align-items-center"><div class="col-1"><input type="checkbox" class="mark-complete" data-id="' + task.id + '"' + (task.completed ? 'checked' : '') + '></div><div class="col-7">' + task.content + '</div><div class="col-4 d-flex justify-content-end"><button class="delete ml-2" data-id="' + task.id + '"><i class="fa fa-trash" aria-hidden="true"></i></button></div></div><hr>';
  });

  $("#tasks").html(htmlString);
});

