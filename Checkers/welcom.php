<?php
			$title="A Warm Welcom";
			$str="";
			
			
			if(empty($_POST['firstname']) || trim($_POST['firstname'])=="" || empty($_POST['lastname']) || trim($_POST['lastname'])=="" )
			{
				$str = $str.$_POST["firstname"];
				$error=True;
				$title="Please Go Back";
			}
			
// 			$valid = preg_match("^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}-[0-9]{4}", $_POST['phonenumber']);
// 			if(!$valid || empty($_POST["phonenumber"]) || trim($_POST["phonenumber"])==="" )
// 			{
// 				$str.$_POST["phonenumber"];
// 				$error=True;
// 				$title="Please Go Back";
// 			}
			
			
// 			$patter = "[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}";
// 			$valid = preg_match($pattern,$_POST["email"]);
// 			if($valid || empty($_POST["email"]) || trim($_POST["email"])===""  )
// 			{
// 				$str.$_POST["email"];
// 				$error=True;
// 				$title="Please Go Back";
// 			}
			
			
			$paaword = $_Post['password'];
			if(strlen(trim($password)) < 8 || empty($_POST['password']) || trim($_POST['password'])=="")
			{
				$str = $str.$_POST["password"].'1';
				$error=True;
				$title="Please Go Back";
			}
			
// 			if(strlen($_Post['password'])<8)
// 			{
// 				$str = $str.$_POST["password"].'3';
// 				$error=True;
// 				$title="Please Go Back";
// 			}
			
			if(empty($_POST['confpassword']) || trim($_POST['confpassword'])=="" || $_POST['confpassword'] != $_POST['password']  )
			{
				$str = $str.$_POST["confpassword"].'2';
				$error=True;
				$title="Please Go Back";
			}
			
?>
			
<?php 
include("topOfPage.php");
?>


		<h1><?php echo $title?></h1>
	<?php if(isset($error)){ ?>
		<p> Sorry, The Form is Incomplete! </p>
		<p> Please go back and fill out all the required fields. <br> Thank You!
		<?php echo $str;?>
		</p>
		
	<?php }
	
	else{?>
		<p> Hello <span style="color: blue">
		<?php echo$str; ?></span>, welcome to our site.</p>
		
		<p> We will contact you shortly.</p>
		<?php } ?>



<?php 
include("bottom.php");
?>