<?php

namespace Damin\Controller;

use Damin\DB;

class ProfileController extends MasterController {
    public function anna() 
    {
        $this->render("anna",[]);
    }

    public function sally()
    {
        $this->render("sally", []);
    }

    public function sunwooseon()
    {
        $this->render("sun-woo-seon", []);
    }

    public function kimeunjoo() 
    {
        $this->render("kim-eun-joo", []);
    }

    public function seogayoon()
    {
        $this->render("seo-ga-yoon", []);
    }

    public function kimdamin()
    { 
        $this->render("kim-da-min", []);
    }

    public function jangdonghyuk()
    {
        $this->render("jang-dong-hyuk", []);
    }
}