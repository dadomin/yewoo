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
}