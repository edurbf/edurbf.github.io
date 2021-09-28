class LinkBox {
    constructor(title, image, link, parent){
        this.ref = document.createElement("a")
        this.imgEl = document.createElement("img")
        this.pEl = document.createElement("p")
        this.ref.className = "linkBox"
        this.pEl.className = "linkBoxSubtitle"
        this.title = title
        this.image = image
        this.link = link
        this.update()
        this.instance(parent)
    }
    
    update(){
        this.ref.href = this.link
        this.ref.appendChild(this.imgEl)
        this.imgEl.src = this.image
        this.ref.appendChild(this.pEl)
        this.pEl.innerText = this.title
    }    
    
    instance(parent){
        parent.appendChild(this.ref)
    }
}

fancyLinks = document.getElementById("fancyLinks")
manualLinks = [	new LinkBox("The game", "dodgeIco.png", "DodgeWeb/Dodge.html", fancyLinks),
				new LinkBox("Pop pop pop", "popCat.png", "PopcatWeb/Popcat.html", fancyLinks),
				new LinkBox("3D pic", "good_color_sphere.png", "VRView.html", fancyLinks)]