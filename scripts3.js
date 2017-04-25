
function Photo (name,location) {
	this.name = name;
	this.location = location;
}

function Album (albumName) {
	this.albumName = albumName;
	this.photos = [];
	this.addPhoto = addPhoto;
	this.listPhotos = listPhotos;
	this.accessPhoto = accessPhoto;

	function addPhoto (foto) {
		this.photos.push(foto);
	}

	function listPhotos () {
		for (var i = 0; i < this.photos.length; i++) {
			console.log('A photo of: ' + this.photos[i].name);
		}
	}

	function accessPhoto(orderNumber) {
		console.log(this.photos[orderNumber-1]);			
	}

}