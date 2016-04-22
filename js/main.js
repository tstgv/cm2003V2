
	<!-- Page Load events  -->  
  $(document).ready(function () {
  var temp="";

 
	 // Flat shadow effect function call 	
	flattyShadow();	
	<!-- Only when page loads, watchlist is active by default -->
	flag=true;	
    <!-- When page loads, load watchlist -->  
		display("Watchlist");
		
	// jquery menu click event handler    			
	$('body').on('click', '#Monetary', function () {
     display("Monetary");
   });
	  $('body').on('click', '#Virtual', function () {
     display("Virtual");
   });
	  $('body').on('click', '#Metals', function () {
     display("Metals");
   });
	$('body').on('click', '#Watchlist', function () {
     display("Watchlist");
   });	
		$('body').on('click', '#gold', function () {
    pageClicked ("gold");
   });	
   $('body').on('click', '#copper', function () {
    pageClicked ("copper");
   });	
   $('body').on('click', '#silver', function () {
    pageClicked ("silver");
   });	
   		$('body').on('click', '#platinum', function () {
    pageClicked ("platinum");
   });	
		

      });	
	  
	 jQuery(window).load(function(){$(".loader").delay(1000).fadeOut("slow"),$(".loader-img").delay(3e3).fadeOut()});

	  
	function loadWatchlist (){	
	
		var empty=true;
		var result="<div class='container contStyle' >  <br>";
		//match case with input paramenter
		if (localStorage.gold == "yes"){empty=false; result+='<div class="col-xs-6 col-sm-3" style=""><a id="gold"   ><div class="flatty_shadow"><span class="color1">G</span></div><h3>Gold</h3> </a></div>';}
		if (localStorage.silver == "yes"){empty=false; result+='<div class="col-xs-6 col-sm-3" style=""><a id="silver"  ><div class="flatty_shadow"><span class="color2">S</span></div><h3>Silver</h3> </a></div>';}
		if (localStorage.platinum == "yes"){empty=false; result+='<div class="col-xs-6 col-sm-3" style=""><a id="platinum"  ><div class="flatty_shadow"><span class="color3">P</span></div><h3>Platinum</h3> </a></div>';}
		if (localStorage.copper == "yes"){empty=false; result+='<div class="col-xs-6 col-sm-3" style=""><a id="copper"  ><div class="flatty_shadow"><span class="color4">C</span></div><h3>Copper</h3> </a></div>';}
		
		else if (empty == true){return "<p>You have no items on your watchlist for this session yet.</p>";}//empty list return
		
		result+="</div>";
		return result;		
	}
	
	//Since 1 page handles all subpages, this function keeps track of clicked submenu
	function pageClicked (name){
								
	localStorage.setItem("clicked",name);	
	window.location.href = "./precious-metals.html";
	name="";
	}
	
 
	function generateMenu(name){
	//Main menus bellow
	if (name=="Watchlist"){return '<ul id="lateral" class="nav nav-sidebar"> <li class="active" id="Watchlist" ><a  onclick=""><i class="fa fa-star"></i> Watchlist</a></li><li id="Metals"><a href="#"><i class="fa fa-diamond"></i> Precious Metals</a></li><li id="Monetary"> <a href="#"><i class="fa fa-gbp"></i> Monetary Currencies</a></li><li id="Virtual"><a href="#"><i class="fa fa-btc"></i> Virtual Currencies</a></li></ul>'}
	else if (name=="Virtual"){return '<ul id="lateral" class="nav nav-sidebar"> <li id="Watchlist" ><a  onclick=""><i class="fa fa-star"></i> Watchlist</a></li><li id="Metals"><a href="#"><i class="fa fa-diamond"></i> Precious Metals</a></li><li id="Monetary"> <a href="#"><i class="fa fa-gbp"></i> Monetary Currencies</a></li><li class="active" id="Virtual"><a href="#"><i class="fa fa-btc"></i> Virtual Currencies</a></li></ul>'}
	else if (name=="Monetary"){return '<ul id="lateral" class="nav nav-sidebar"> <li id="Watchlist" ><a  onclick=""><i class="fa fa-star"></i> Watchlist</a></li><li id="Metals"><a href="#"><i class="fa fa-diamond"></i> Precious Metals</a></li><li class="active" id="Monetary"> <a href="#"><i class="fa fa-gbp"></i> Monetary Currencies</a></li><li id="Virtual"><a href="#"><i class="fa fa-btc"></i> Virtual Currencies</a></li></ul>'}
	else if (name=="Metals"){return '<ul id="lateral" class="nav nav-sidebar"> <li id="Watchlist" ><a  onclick=""><i class="fa fa-star"></i> Watchlist</a></li><li class="active" id="Metals"><a href="#"><i class="fa fa-diamond"></i> Precious Metals</a></li><li id="Monetary"> <a href="#"><i class="fa fa-gbp"></i> Monetary Currencies</a></li><li id="Virtual"><a href="#"><i class="fa fa-btc"></i> Virtual Currencies</a></li></ul>'}
	else{}
	} 		
	// menu display function  -->  	
	function display(name){	
	<!-- pageContent variable is assigned to minified html code -->
	pageContent = "";	
	color="";
	
	//watchlist minified html code
	if (name == "Watchlist"){		
	pageContent="<h1 class='page-header'><i class='fa fa-star'></i> My watchlist</h1>";	
	pageContent+=loadWatchlist();
	menu=generateMenu("Watchlist");//generate side menu html
	}
	
	//watchlist minified html code
	else if (name == "Virtual"){
	
	//virtual page contents
	pageContent="<h1 class='page-header'><i class='fa fa-btc'></i> Virtual Currencies</h1><br><div class='container contStyle'> <div id='Bitcoin' class='col-xs-6 col-sm-3 ' style=''> <a ><div class='flatty_shadow'><span class='color1'>B</span> </div><h3>Bitcoin</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='/news.html'><div class='flatty_shadow'><span class='color2'>P</span> </div><h3>PeerCoin</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='/news.html'><div class='flatty_shadow'> <span class='color3'>L</span> </div><h3>LiteCoin</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='/news.html'><div class='flatty_shadow'><span class='color4'>D</span> </div><h3>DarkCoin</h3> </a> </div></div>";				
	menu=generateMenu("Virtual");
	}
	else if (name == "Monetary"){
	
	//monetary page contents
	pageContent="<h1 class='page-header'><i class='fa fa-gbp'></i> Monetary Currencies</h1><br><div class='container contStyle'> <div class='col-xs-6 col-sm-3 ' style=''> <a href='./money/gbp.html'><div class='flatty_shadow'><span class='color1'><i class='fa fa-gbp'></i></span> </div><h3>Gbp</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='./money/eur.html'><div class='flatty_shadow'><span class='color2'><i class='fa fa-eur'></i></span> </div><h3>Euro</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='./money/usd.html'><div class='flatty_shadow'> <span class='color3'><i class='fa fa-usd'></i></span> </div><h3>Dollar</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''> <a href='./money/jpy.html'><div class='flatty_shadow'><span class='color4'><i class='fa fa-jpy'></i></span> </div><h3>Yen</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='./money/rupee.html'><div class='flatty_shadow'><span class='color2'>R</span> </div><h3>Rupee</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color1'>B</span> </div><h3>Real</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color4'>C</span> </div><h3>Cad</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color2'>A</span> </div><h3>Aud</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color3'>H</span> </div><h3>Hkd</h3> </a> </div><div class='col-xs-6 col-sm-3 ' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color1'>P</span> </div><h3>Mex Peso</h3> </a> </div><div class='col-xs-6 col-sm-3' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color4'><i class='fa fa-rub'></i></span> </div><h3>Ruble</h3> </a> </div><div class='col-xs-6 col-sm-3 features-box wow fadeInDown animated' style=''><a href='/news.html'><div class='flatty_shadow'><span class='color3'>F</span> </div><h3>Franc</h3> </a> </div></div>";
	menu=generateMenu("Monetary");
	}
	else if (name == "Metals"){
	pageContent='<h1 class="page-header"><i class="fa fa-diamond"></i> Precious Metals</h1><br><div class="container contStyle"> <div class="col-xs-6 col-sm-3" style=""><a  id="gold" ><div class="flatty_shadow"><span class="color1">G</span></div><h3>Gold</h3> </a></div><div id="silver" class="col-xs-6 col-sm-3" style=""><a   ><div class="flatty_shadow"><span class="color2">S</span></div><h3>Silver</h3> </a></div><div class="col-xs-6 col-sm-3  style=""><a  id="platinum" ><div class="flatty_shadow"><span class="color3">P</span></div><h3>Platinum</h3> </a></div><div class="col-xs-6 col-sm-3 " style=""><a  id="copper" ><div class="flatty_shadow"><span class="color4">C</span></div><h3>Copper</h3> </a></div></div>	';
	menu=generateMenu("Metals");
	}		
	else{	
	<!-- In case of error  -->
	alert("Something is wrong!!");
	}
			
	// Inject minified html into content div -->	
	$("#Menu").html(menu);			
	$("#Content").html(pageContent);	
	<!-- call flatshadow css render function after injecting code -->

	flattyShadow();	
	
	};
	

