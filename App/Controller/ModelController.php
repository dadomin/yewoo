<?php

namespace Damin\Controller;

use Damin\DB;

class ModelController extends MasterController {
    public function anna() 
    {
        $this->render("model-anna",[]);
    }

    public function sally()
    {
        $this->render("model-sally", []);
    }
}