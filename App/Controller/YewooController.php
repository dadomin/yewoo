<?php 

namespace Damin\Controller;

use Damin\DB;

class YewooController extends MasterController {
    public function index(){
        $this->render("yewoo", []);
    }
}