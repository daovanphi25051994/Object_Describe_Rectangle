function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getWidth = function () {
        return this.width;
    }
    this.getHeight = function () {
        return this.height;
    }
    this.getPerimeter = function () {
        return ((this.width + this.height) * 2);
    }
    this.getArea = function () {
        return this.height * this.width;
    }
    this.setWidth = function (width) {
        this.width = width;
    }
    this.setHeight = function (height) {
        this.height = height;
    }
}

function createRectangle() {
    let ctx = document.getElementById("game-board").getContext("2d");
    let rectangle1 = new Rectangle(300, 200);
    let rectangle2 = new Rectangle(150, 100);
    let areaOfRectangle1 = rectangle1.getArea();
    let perimeterOfRectangle1 = rectangle1.getPerimeter();
    let areaOfRectangle2 = rectangle2.getArea();
    let perimeterOfRectangle2 = rectangle2.getPerimeter();
    let dataOfRectangle1 = rectangle1.getWidth() + " x " + rectangle1.getHeight() + "(cm);  perimeter : " + perimeterOfRectangle1 + "(cm);  area : " + areaOfRectangle1 + "cm2";
    let dataOfRectangle2 = rectangle2.getWidth() + " x " + rectangle2.getHeight() + "(cm);  perimeter : " + perimeterOfRectangle2 + "(cm);  area : " + areaOfRectangle2 + "cm2";
    document.getElementById("data-rectangle").innerHTML = dataOfRectangle1 + "<br>" + dataOfRectangle2;

    ctx.rect(100, 100, rectangle1.width, rectangle1.height);
    ctx.stroke();
    ctx.rect(800, 400, rectangle2.width, rectangle2.height);
    ctx.stroke();

}

createRectangle();

