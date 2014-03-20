<?php 
include("topOfPage.php");
?>
		
		<div class="content">
		
					
					<form name="registration" onsubmit="return validateForm()" method="post" action="welcom.php" >
					
						<h1>Registration Form</h1>
						 
						<input type="text" name="firstname" placeholder="First Name" onblur="validate_fname()">
						
						 
						<input type="text" name="lastname" placeholder="Last Name" onblur="validate_lname()"><br>
					
						 
						<input type="text" name="phonenumber" placeholder="Phone Number (ex.xxx-xxx-xxxx)" onblur="validate_phone()">
						
						 
						<input type="text" name="email" placeholder="Email" onblur="validate_email()"><br>
						
						 
						<input type="password" name="password" placeholder="Password"  >
						
						 
						<input type="password" name="confpassword" placeholder="Confirm Password" >
						
						<input type="submit" value="Submit"/>
					</form>
					
		</div>
		
	
<?php 
include("bottom.php");
?>

