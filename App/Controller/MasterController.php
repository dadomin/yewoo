<?php

namespace Damin\Controller;

class MasterController {
	public function render($page, $data = [])
	{
		extract($data);
		require __ROOT . "/views/header.php";
		require __ROOT . "/views/" . $page . ".php";
		require __ROOT . "/views/footer.php";
	}

	public function render2($page, $data= [])
	{	
		extract($data);
		require __ROOT . "/views/header.php";
		require __ROOT . "/views/" . $page . ".php";
		require __ROOT . "/views/footer.php";
	}
}