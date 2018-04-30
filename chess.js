$(".chessboard").children().addClass("box");


var black=['\u265A','\u265B','\u265C','\u265D','\u265E','\u265F'];
var white=['\u2654','\u2655','\u2656','\u2657','\u2658','\u2659'];

var pc1,init,out,selpiece,flag=0,chance=0,pc,undopc;

function undo(){
	if(flag==1){
	undopc.html(pc1);
	undopc.removeClass("anim");
	flag=0;
	chance=swap(chance);
	}
	else
		alert("Nothing to Undo!!");
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        undo();
    }
});

function refresh(){
	var ch=confirm("Are you sure you want to quit?");
	if(ch==1)
	location.reload();
}
function swap(chance)
{
	if(chance==0)
		return 1;
	else
		return 0;
}

$(".box").click(function(){
	pc=$(this).html();
	if(pc && flag==0){
		if(($.inArray(pc,white)!=-1 && chance==0) || (($.inArray(pc,black)!=-1 && chance==1))){
		undopc=$(this);
		$(this).addClass("anim");
		flag=1;
		pc1=pc;
		selpiece=$(this).html();
		$(this).html("");
		init=$(this).attr('id');
		chance=swap(chance);
		}
		else
			alert("Not your Chance!!");
	}
	else{
		if(pc=='\u265A' && $.inArray(pc1,white)!=-1){
			alert("White Wins!");
			undopc.removeClass("anim");
		}
		else if(pc=='\u2654' && $.inArray(pc1,black)!=-1){
			alert("Black Wins!");
			undopc.removeClass("anim");
		}
		out=$(this).attr('id');
		// For black pawn
		if(selpiece=='\u265F'){
			var flagover=0;
			for(var i=out[0];i<init[0];i++){
				id=i+(init[1]);
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			if(flagover==1)
				alert("Invalid move for Pawn");
			else{

		if(((out[1]==init[1] && init[0]-out[0]==1) || (Math.abs(out[1]-init[1])==1 && out[0]-init[0]==-1 && $.inArray(pc,white)!=-1) || (init[0]=='7' && out[1]==init[1] && init[0]-out[0]==2)) && ($.inArray(pc,black)==-1)){
		$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
		}
		else
			alert("Invalid move for Pawn");
			}
		}
		// For white Pawn
		if(selpiece=='\u2659'){
			var flagover=0;
			for(var i=init[0];i<out[0];i++){
				id=i+(init[1]);
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			if(flagover==1)
				alert("Invalid move for Pawn");
			else{
		if(((out[1]==init[1] && out[0]-init[0]==1) || (Math.abs(out[1]-init[1])==1 && out[0]-init[0]==1 && $.inArray(pc,black)!=-1)  || (init[0]=='2' && out[1]==init[1] && out[0]-init[0]==2)) && ($.inArray(pc,white)==-1)){
		$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
		}
		else
			alert("Invalid move for Pawn");
		}
		}
		// For black Rook
		if(selpiece=='\u265C'){
			var flagover=0;
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+out[1];
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			for(var i=Math.min(out[1],init[1]);i<Math.max(out[1],init[1]);i++){
				id=out[0]+i;
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			if(flagover==1)
				alert("Invalid move for Rook");
			else{

			if((out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,black)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Rook");
			}
		}
		// For black King
		if(selpiece=='\u265A'){
			if(((Math.abs(out[1]-init[1])==1 && Math.abs(out[0]-init[0])==1) || out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,black)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for King");
		}
		// For black Bishop
		if(selpiece=='\u265D'){
			var flagover=0;
			var jf=0;
			if(out[0]<=init[0]){
				var j=out[1];
				jf=1;
			}
			else
				var j=init[1];
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+j.toString();
				var thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
				if(jf==1)
				j--;
				else
					j++;
			}
			if(flagover==1)
				alert("Invalid move for Bishop");
			else{	
			if(Math.abs(out[1]-init[1])==Math.abs(out[0]-init[0]) && ($.inArray(pc,black)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Bishop");
		}
		}
		// For black Queen
	if(selpiece=='\u265B'){
			var flagover=0;
		if(Math.abs(out[0]-init[0])==Math.abs(out[1]-init[1])){		
			var jf=0;
			if(out[0]<=init[0]){
				var j=out[1];
				jf=1;
			}
			else
				var j=init[1];
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+j.toString();
				var thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
				if(jf==0)
				j++;
				else
					j--;
			}
		}
		else{
		for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+out[1];
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			for(var i=Math.min(out[1],init[1]);i<Math.max(out[1],init[1]);i++){
				id=out[0]+i;
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
		}
		if(flagover==1)
			alert("Invalid move for Queen");
		else{
			if(((Math.abs(out[1]-init[1])==Math.abs(out[0]-init[0])) || out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,black)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Queen");
		}
	}
		// For black Knight
	if(selpiece=='\u265E'){
			if(((Math.abs(out[1]-init[1])==2 && Math.abs(out[0]-init[0])==1) || (Math.abs(out[1]-init[1])==1 && Math.abs(out[0]-init[0])==2)) && ($.inArray(pc,black)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Knight");
		}
		// For white Rook
		if(selpiece=='\u2656'){
			var flagover=0;
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+out[1];
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			for(var i=Math.min(out[1],init[1]);i<Math.max(out[1],init[1]);i++){
				id=out[0]+i;
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			if(flagover==1)
				alert("Invalid move for Rook");
			else{

			if((out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,white)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Rook");
			}
		}
		// For white King
		if(selpiece=='\u2654'){
			if(((Math.abs(out[1]-init[1])==1 && Math.abs(out[0]-init[0])==1) || out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,white)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for King");
		}
		// For white Bishop
		if(selpiece=='\u2657'){
			var jf=0;
			var flagover=0;
			if(out[0]<=init[0]){
				var j=out[1];
				jf=1;
			}
			else
				var j=init[1];
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+j.toString();
				var thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
				if(jf==1)
				j--;
				else
					j++;
			}
			if(flagover==1)
				alert("Invalid move for Bishop");
			else{	
			if((Math.abs(out[1]-init[1])==Math.abs(out[0]-init[0])) && ($.inArray(pc,white)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Bishop");
		}
		}
		// For white Queen
	if(selpiece=='\u2655'){
		var flagover=0;
		if(Math.abs(out[0]-init[0])==Math.abs(out[1]-init[1])){
			var jf=0;
			if(out[0]<=init[0]){
				var j=out[1];
				jf=1;
			}
			else
				var j=init[1];
			for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+j.toString();
				alert(id);
				var thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
				if(jf==0)
				j++;
				else
					j--;
			}
		}
		else{
		for(var i=Math.min(out[0],init[0]);i<Math.max(out[0],init[0]);i++){
				id=i+out[1];
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
			for(var i=Math.min(out[1],init[1]);i<Math.max(out[1],init[1]);i++){
				id=out[0]+i;
				thishtml=$("#"+id).html();
				if(thishtml)
					flagover=1;
			}
		}
		if(flagover==1)
			alert("Invalid move for Queen");
		else{
			if(((Math.abs(out[1]-init[1])==Math.abs(out[0]-init[0])) || out[1]==init[1] || out[0]==init[0]) && ($.inArray(pc,white)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Queen");
		}
	}
		// For white Knight
	if(selpiece=='\u2658'){
			if(((Math.abs(out[1]-init[1])==2 && Math.abs(out[0]-init[0])==1) || (Math.abs(out[1]-init[1])==1 && Math.abs(out[0]-init[0])==2)) && ($.inArray(pc,white)==-1)){
				$(this).html(pc1);
		pc1="";
		flag=0;
		undopc.removeClass("anim");
			}
		else
			alert("Invalid move for Knight");
		}
	}
});
