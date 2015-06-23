/* Can create houses, move the user w/ keypad houses as boundaries
*/

//move distance
var moved = 5

//boundaries for map
var mapb = [0, 500, 500, 0];

var current_key = "dummy"
//comment



var zombie_list = [];

/*
//want to create a list of things i cant walk into
function zombie_type(ele){
	this.width = $(ele).width();
	this.height = $(ele).height();
	this.posx = $(ele).offset().left;
	this.posy = $(ele).offset().top;
	this.pwidth = $(ele).offset().left + $(ele).width();
	this.pheight = $(ele).offset().top + $(ele).height()
	};

var add_zombie = function(ele){
	zombie_list.push(new zombie_type(ele));
	};
*/


// contains all houses
var housecontainer = [];


// template for house info
function housetype(ele){
	this.width = $(ele).width();
	this.height = $(ele).height();
	this.posx = $(ele).offset().left;
	this.posy = $(ele).offset().top;
	this.pwidth = $(ele).offset().left + $(ele).width();
	this.pheight = $(ele).offset().top + $(ele).height()
	};

//adds house to housecontainer
var houseadd = function(ele){
	housecontainer.push(new housetype(ele));
	};

//Player starting position
var posx = 300;
var posy = 200;

//zombie is available because zombie is defined in map.html
var zombie = {
	
	width: $('.zombie').width(),
	height: $('.zombie').height(),
	posx:  333,
	posy: 33,
	//what is this?
	pwidth: $('.zombie').offset().left + $('.zombie').width(),
	pheight:  $('.zombie').offset().top + $('.zombie').height(),
	//this moves the square
	cssx: $('.zombie').offset().left + 'px',
	cssy: $('.zombie').offset().top + 'px'


}; 
//doesn't update in realtime
//TODO do i need to add something like this for zombies - yes
var user = {
	width: $('.player').width(),
	height: $('.player').height(),
	posx:  posx,
	posy: posy,
	pwidth: $('.player').offset().left + $('.player').width(),
	pheight:  $('.player').offset().top + $('.player').height(),
	cssx: $('.player').offset().left + 'px',
	cssy: $('.player').offset().top + 'px'
};

//updates users css position
var updatepos = function(){
	
	this.cssx = user.posx + 'px'
	this.cssy = user.posy + 'px'
	$('.player').css("top",user.cssy);
	$('.player').css("left",user.cssx);
	};
//updates player position
user.update = updatepos;


var find_direction = function(user_x,user_y,zombie_x,zombie_y){
	console.log("user_x %s user_y %s zomie_x %s zombie_y %s",user_x,user_y,zombie_x,zombie_y)
	diff_x = zombie_x - user_x
	diff_y = zombie_y - user_y
	console.log("diff_x %s diff_y %s",diff_x,diff_y)
	abs_x=Math.abs(diff_x)
	abs_y=Math.abs(diff_y)
	if (abs_x > abs_y){
		//move in x dir
		if(diff_x < 0){
			console.log("i want to move right")
		}else{
			console.log("i want to move left")
		}
	}else{
		//move in y dir
		}if(diff_y < 0){
			console.log("i want to move down")
		}else{
			console.log("i want to move up")
		}

};

//find user
//locate direction - then move up - down left right 10 spaces
var finduser = function(){
	console.log("james")
	user_cssx = user.posx 
	user_cssy = user.posy
	//now you  zombie needs
	zombie_x = zombie.posx
	zombie_y = zombie.posy
	console.log("find user: ccsx %s cssy %s",user_cssx,user_cssy)
	find_direction(user_cssx,user_cssy,zombie_x,zombie_y)	
	

}


//Players starting position
var posx = 300;
var posy = 200;


var posxcss = posx + 'px';
var posycss = posy + 'py';


	

/*
var create_zombie = function(id,x,y){
	var namediv = '<div id=' + id + " class = 'zombie' ></div>"
	$(namediv).appendTo('.map');
	var newid = '#' + id
	//console.log(newid);
	var xpos = String(x + "px");
	var ypos = String(y + "px");
	//console.log(xpos);
	$(newid).css({"backgroundColor":"yellow"});
	$(newid).css("left", xpos);
	$(newid).css("top",ypos);
	add_zombie(newid);
	};

*/
	

//creates house at location
var crtehouse = function(id1,x,y){
	var namediv = '<div id=' + id1 + " class = 'house' ></div>"
	$(namediv).appendTo('.map');
	var newid = '#' + id1
	//console.log(newid);
	var xpos = String(x + "px");
	var ypos = String(y + "px");
	//console.log(xpos);
	$(newid).css({"backgroundColor":"blue"});
	$(newid).css("left", xpos);
	$(newid).css("top",ypos);
	houseadd(newid);
	};
	

/*	
create_zombie("james",240,240);
console.log($("#james").offset())
*/

	
// Create some boundaries/house <"name",x,y> 
crtehouse("house1",350,200);
crtehouse("house2",200,400);
crtehouse("house4",100,100);	
crtehouse("house5",120,100);	
crtehouse("house6",140,100);	
crtehouse("house7",150,100);	
crtehouse("house8",160,100);
crtehouse("house9",160,100);	
crtehouse("house10",160,100);	
crtehouse("house11",160,100);	
crtehouse("house12",160,100);	
crtehouse("house13",160,100);	


	
//ability to move
mvlft = true;
mvrht = true;
mvup = true;
mvdwn = true;

//moving functions w/boundaries
var mvleft = function(){
	var offp = $('.player').offset();
	for (i=0; i in housecontainer; i++){
		if (offp.left >= housecontainer[i].pwidth & offp.left <= housecontainer[i].pwidth){
		if (offp.top < housecontainer[i].pheight & offp.top >= housecontainer[i].posy - 5){
			console.log("contact")
			mvlft = false;
			};
		};
	};
	//Map boundary
	if (offp.left <= mapb[3] + 10){
		mvlft = false;
		console.log('edge');
		};
	console.log(mvlft);

	// update user position
	if (mvlft == true){
		user.posx -= 5;
		};
	//resets move
	mvlft = true;
	//this updates the block position - both lines required
	user.update();
	};
	
var mvright = function(){
	var offp = $('.player').offset();
	for (i=0; i in housecontainer; i++){
		if (offp.left <= housecontainer[i].posx - 10 & offp.left >= housecontainer[i].posx - 10){
		if (offp.top < housecontainer[i].pheight & offp.top >= housecontainer[i].posy - 5){
			console.log("contact")
			mvrht = false;
			};
		};
	};
	if (offp.left >= mapb[1] - 5){
		mvrht = false;
		};
	if (mvrht == true){
		user.posx += 5;
		};
	//resets move
	mvrht = true;
	user.update();
	};

	
var movup = function(){
	var offp = $('.player').offset();
	for (i=0; i in housecontainer; i++){
		if (offp.top >= housecontainer[i].posy + 10 & offp.top <= housecontainer[i].posy + 10){
			if (offp.left >= housecontainer[i].posx - moved & offp.left <= housecontainer[i].posx + moved){
			console.log("contact")
			mvup = false;
			};
		};
	};
	if (offp.top <= mapb[0] + 10){
		mvup = false;
		console.log('boundary');
		};
	if (mvup == true){
		user.posy -= 5;
		};
	//resets move
	mvup = true;
	user.update();
	};

var mvdown = function(){
	var offp = $('.player').offset();
	for (i=0; i in housecontainer; i++){
		if (offp.top >= housecontainer[i].posy - moved - moved & offp.top <= housecontainer[i].posy){
			if (offp.left >= housecontainer[i].posx - moved & offp.left <= housecontainer[i].posx + moved){
			console.log("contact")
			mvdwn = false;
			};
		};
	};
	if (offp.top >= mapb[1]-5){
		mvdwn = false;
		};
		
	if (mvdwn == true){
		user.posy += 5;
		};
	//resets move
	mvdwn = true;
	user.update();
	};
	
	


	
	




var keylogger = function(){
	console.log(current_key);
	switch(current_key) {
        case 37: 
        console.log("left");
        mvleft();
        break;

        case 38:
        console.log("up");
        movup();
        break;

        case 39:
        console.log("right");
        mvright();
        break;

        case 40:
        console.log("down");
        mvdown();
        break;

        default: return;
        };
        console.log(posxcss,posycss);
    	posxcss = String(posx) + 'px';
		posycss = String(posy) + 'px';
		
    };


var test_printer = function(){
	console.log("jJAMESADASDASDASD")
	}


//user print
console.log("user: %",user)

console.log("james: %s",$("#james").offset())

//pos x, pos y
var move_zombie = function(){
	console.log("zombie moving %s %s",user.posx,"james")
	dir=finduser()	
	
	}
//create a function that moves zomie 1 step closer to user





//animation
$(document).ready(function(){

	$(document).keydown(function(e){
	current_key = e.which;
	
	keylogger();

	move_zombie();
	});
});
	
	
	

		
		

	
