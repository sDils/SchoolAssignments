<!-- 
STEVEN Di Lullo 
9597662
SOEN 287 - Checkers Assignment 
-->

<!DOCTYPE html>

<html lang = "en">
	<head>
		<meta charset="utf-8" />
		<title>King Me!</title>
		<link rel="stylesheet" href="CSS/styles.css" />
		<script type="text/javaScript" src="JS/JavaScript.js"></script>
		
	</head>

	<body onload="board()">
		
		<div id = "wrapper">
			<header>
			
				<div style = "position:relative;">
					<div id="name" style="position: absolute;">Checkers</div>
					<img id="logo" class="left" border="0" src="images/logo.jpg" alt="King Me" height="230" width="200">
					
				</div>	 
				
			</header>
			
			<div id="navBar">
				
				<nav>
					<ul class="right">
						<li><a href="underCon.html" title="Log In"> Log In</a></li>
						<li><a href="index.html" title="Quick Game"> Play Now</a></li>
						<li><a href="rules.html" title="Rules"> Rules</a></li>
						
						<li id ="clockDisplay" ></li>
					</ul>
					
				</nav>
				
				
			</div>
			
			
			<section id="mainScreen" class="right">
				
				<canvas id="gameBoard" width="640" height="640" ></canvas>
				<button id= "startButton" type="button" onclick="clicked()">START</button>
			</section>
				
				
				<section id="quickLinks" class="left">
					<aside>
						<dl>
							<dt><a href="signUp.html" title="Create Profile"> Create an Account</a></dt>
							<dt><a href="playerList.html" title="Profiles">Find Players</a></dt>
							<dt><a href="index.html" title="Play Game">Play Game</a></dt>
							<dt><a href="phptest.php" title="Testing">Test</a></dt>
						</dl>
					</aside>
				</section>
				
				
			<footer>
				<div id="footerBar" class = "bottom">
					<p><br>&copy; 2014, Up Scale Board Games Corp.</p>
					
					<ul>
						<li><a href="#" title="About Us"> About Us</a></li>
						<li><a href="#" title="Site Map"> Site Map</a></li>
						<li><a href="#" title="Terms & Conditions"> Terms &amp; Conditions</a></li>
						<li><a href="#" title="Careers"> Careers</a></li>
					</ul>
				</div>
			</footer>
			
			</div>

	</body>
</html>