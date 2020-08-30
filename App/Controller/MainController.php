<?php

namespace Damin\Controller;

use Damin\DB;

class MainController extends MasterController {
    public function index(){
        $this->render("main", []);
    }

    public function company()
    {
        $this->render("company", []);
    }

    public function group()
    {
        $this->render("group", []);
    }

    public function solo()
    {
        $this->render("solo", []);
    }

    public function actor()
    {
        $this->render("actor", []);
    }

    public function entertainer()
    {
        $this->render("entertainer", []);
    }

    public function model()
    {
        $this->render("model", []);
    }

    public function cheer()
    {
        $this->render("cheer", []);
    }

    public function influencer()
    {
        $this->render("influencer", []);
    }

    public function notice()
    {
        $this->render("notice", []);
    }

}

