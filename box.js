class Box {
    constructor(x,y,width,height) {

        var options= {
            restitution:6.0,
            friction:0.3,
            density:1.0

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
    }
display() {
    rectMode(CENTER)
    fill(rgb(255,0,0))
    rect(this.y,this.x,this.width,this.height);
}
};
