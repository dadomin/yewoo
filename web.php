<?php

use Damin\Route;

Route::get("/", "MainController@index");
Route::get("/index", "MainController@index");
Route::get("/yewoo", "YewooController@index");
Route::get("/model", "ModelController@index");