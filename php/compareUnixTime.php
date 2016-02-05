<?php
function compareTime($time, $currentTime) //calculates the difference between two unix timestampos
	{
		if($time > $currentTime)
		{
			return "Time Error";
		}
		$days = 0;
		$hours = 0;
		$minutes =0;
		$seconds =0;
		$timeDifference = $currentTime - $time;
		while($timeDifference - 86400 > 0)
		{
			$days++;
			$timeDifference = $timeDifference - 86400;
		}
		while($timeDifference - 3600 > 0)
		{
			$hours++;
			$timeDifference = $timeDifference - 3600;
		}
		while($timeDifference - 60 > 0)
		{
			$minutes++;
			$timeDifference = $timeDifference - 60;
		}
		$seconds = $timeDifference ." Seconds ";
		if($days > 0){$days = $days . " Days ";}
			else{$days ="";}
		if($hours > 0){$hours = $hours . " Hours ";}
			else{$hours ="";}
		if($minutes > 0){$minutes = $minutes . " Minutes ";}
			else{$minute="";}
	
		$time = $days . $hours . $minutes . $seconds;
		return $time;
	}
	?>