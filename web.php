<?php

use Damin\Route;

Route::get("/", "MainController@index");
Route::get("/index", "MainController@index");
Route::get("/company", "MainController@company");
Route::get("/musician", "MainController@group");
Route::get("/musician/group", "MainController@group");
Route::get("/musician/solo", "MainController@solo");
Route::get("/actor", "MainController@actor");
Route::get("/entertainer", "MainController@entertainer");
Route::get("/model", "MainController@model");
Route::get("/cheer", "MainController@cheer");
Route::get("/influencer", "MainController@influencer");
Route::get("/notice", "MainController@notice");

// 모델
Route::get("/model/anna", "ModelController@anna");
Route::get("/model/sally", "ModelController@sally");