$(document).ready(function () {
    var canvas = new fabric.Canvas('c');

    $.getJSON("/TestData/TestJSON.txt", function (json) {
        //canvas.loadFromJSON(json);

        //setTimeout(function () { canvas.renderAll(); }, 50);
    });

    $("#square").click(function () {
        var rect = new fabric.Rect({
            left: 100,
            top: 100,
            width: 100,
            height: 100,
            fill: 'green',
            padding: 10
        });

        canvas.add(rect);
    });

    $("#triangle").click(function () {
        var triangle = new fabric.Triangle({
            left: 100,
            top: 100,
            width: 100,
            height: 100,
            fill: 'red',
            padding: 10
        });

        canvas.add(triangle);
    });

    $("#circle").click(function () {
        var circle = new fabric.Circle({
            left: 100,
            top: 100,
            radius: 40,
            fill: 'blue',
            padding: 10
        });

        canvas.add(circle);
    });

    $("#image").click(function () {
        var oImage;
        fabric.Image.fromURL('/Images/squirrel.jpg', function (oImg) {
            oImg.set({ top: 200, left: 200 });

            canvas.add(oImg);
        });
    });

    $("#export").click(function () {
        var test = JSON.stringify(canvas);
        console.log(test);
    });
});