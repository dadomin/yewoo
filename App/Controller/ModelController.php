<?php

namespace Damin\Controller;

use Damin\DB;

class ModelController extends MasterController {
    public function index() 
    {
        $this->render("model",[]);
    }
}