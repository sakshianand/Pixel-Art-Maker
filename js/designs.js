const sizepicker = document.getElementById('sizePicker');
//adding submit event listener and calling makegrid() to make grid as per selected height and width.
sizepicker.addEventListener('submit',function(e){
e.preventDefault();
makegrid();
});
//This function will make the desired grid and also add the colors to the cells when clicked.
function makegrid()
{
	const canvas = document.getElementById('pixelCanvas');
	const gridHeight = document.getElementById('inputHeight').value;
	const gridWidth = document.getElementById('inputWidth').value;
	//this will remove tr if it already exists so that grid doesnot get appended below
	if(canvas.hasChildNodes()) {
		while (canvas.firstChild) {
   		canvas.removeChild(canvas.firstChild);
		}
	}
	//making grid
	for(let r=0;r<gridHeight;r++){
		const tr = document.createElement('tr');
		canvas.appendChild(tr);

	for(let c=0;c<gridWidth;c++){
		const td = document.createElement('td');
		td.style.height='20px';
		tr.appendChild(td);
		td.setAttribute('class','cell');
	 }
	}
	//adding background color when clicked
	var cells=document.getElementsByClassName('cell');
	for(let i=0;i<cells.length;i++){
		cells[i].addEventListener('click',function(e){
			e.target.style.backgroundColor=document.getElementById('colorPicker').value;
		})
	}
}
