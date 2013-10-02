$(document).ready(function () {
    var canvas = new fabric.Canvas('c');

    canvas.on('object:moving', OnObjectMoving);
    DrawHexGrid();

    function GridPoint(x, y) {
        this.X = x;
        this.Y = y;
    }

    var gridPoints = new Array();
    gridPoints[0] = new GridPoint(100, 100);
    gridPoints[1] = new GridPoint(200, 200);
    gridPoints[2] = new GridPoint(300, 300);
    gridPoints[3] = new GridPoint(400, 400);
    gridPoints[4] = new GridPoint(500, 500);

    $.getJSON("/TestData/TestJSON.txt", function (json) {
        //canvas.loadFromJSON(json);

        canvas.backgroundColor = 'rgba(0,0,255,0.3)';

        $(document).ready(function () {
            $.ajax({
                type: "POST",
                url: "Board/GetBoard",
                data: "{}", // pass in data usually
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    //try
                    //{
                    //    console.log(data);
                    //    canvas.loadFromJSON(data);
                    //    setTimeout(function () { canvas.renderAll(); }, 50);
                    //}
                    //catch (err) { }
                }
            });
        });

        setTimeout(function () { canvas.renderAll(); }, 50);
    });

    $("#square").click(function () {
        //var rect = new LabeledRect({
        //    left: 100,
        //    top: 100,
        //    width: 100,
        //    height: 100,
        //    fill: 'green',
        //    padding: 10,
        //    label: "Test"
        //});

        //canvas.add(rect);

        DrawHexGrid();
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
            left: 0,
            top: 0,
            radius: 40,
            fill: 'blue',
            padding: 10
        });

        canvas.add(circle);
    });

    $("#image").click(function () {
        AddImageToCanvas('/Images/squirrel.jpg', { top: 100, left: 100 });
    });

    $("#export").click(function () {
        var test = JSON.stringify(canvas);
        console.log(test);
    });

    function AddImageToCanvas(url, options)
    {
        switch (options.type)
        {
            case "NonPlayableCharacter":
                NonPlayableCharacter.FromURL(url, function (oImg) {
                    oImg.set({ top: options.top, left: options.left, name: options.name, attributes: [{ name: 'test', value: 'test-val' }, { name: 'test1', value: 'test-val1' }] });
                    canvas.add(oImg);
                });
                break;
            case "PlayableCharacter":
                PlayableCharacter.FromURL(url, function (oImg) {
                    oImg.set({ top: options.top, left: options.left, name: options.name, attributes: [{ name: 'test', value: 'test-val' }, { name: 'test1', value: 'test-val1' }] });
                    canvas.add(oImg);
                });
                break;
            default:
                BaseModel.FromURL(url, function (oImg) {
                    oImg.set({ top: options.top, left: options.left });
                    canvas.add(oImg);
                });
                break;
        }
    }

    function DrawHexGrid()
    {
        var sideLenght = 65;
        //var sideDelta = GetSideDelta(sideLenght);
        //var polygon = new fabric.Polygon([
        //    { x: sideDelta, y: 0 },
        //    { x: sideDelta + sideLenght, y: 0 },
        //    { x: (sideLenght + 2 * sideDelta), y: sideDelta },
        //    { x: sideDelta + sideLenght, y: 2 * sideDelta },
        //    { x: sideDelta, y: 2 * sideDelta },
        //    { x: 0, y: sideDelta },
        //]);

        var x = Math.ceil(canvas.width / (sideLenght * 3));
        var y = Math.ceil(canvas.height / (sideLenght * 2));

        var polygon = new fabric.Polygon([
                    { x: sideLenght, y: 0 },
                    { x: 2 * sideLenght, y: 0 },
                    { x: (3 * sideLenght), y: sideLenght },
                    { x: 2 * sideLenght, y: 2 * sideLenght },
                    { x: sideLenght, y: 2 * sideLenght },
                    { x: 0, y: sideLenght },
        ]);

        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                var polygon1 = polygon.clone();
                var polygon2 = polygon.clone();

                polygon1.toObject = function () {
                    return undefined;
                };

                polygon2.toObject = function () {
                    return undefined;
                };

                canvas.add(polygon1.set({ left: i * (sideLenght * 4), top: j * (sideLenght * 2), fill: 'none', stroke: 'gray', selectable: false }));
                canvas.add(polygon2.set({ left: (i * (sideLenght * 4)) + (2 * sideLenght), top: (j * (sideLenght * 2)) + sideLenght, fill: 'none', stroke: 'gray', selectable: false }));
            }
        }
    }

    function GetSideDelta(lenght)
    {
        return Math.sqrt(Math.pow(lenght, 2) / 2);
    }

    function DrawSquareGrid() {

    }

    function OnObjectMoving(options) {
        var activeObject = options.target;
        if (activeObject != undefined && activeObject != null) {
            var x = activeObject.left;
            var y = activeObject.top;

            var snapX = x;
            var snapY = y;

            // this is only a test, snap calculation will be different
            for (var i = 0; i < gridPoints.length; i++) {
                var point = gridPoints[i];
                if (point.X > snapX && point.Y > snapY) {
                    var prevPoint;
                    if (i > 0) {
                        prevPoint = gridPoints[i - 1];
                    }
                    else {
                        prevPoint = gridPoints[0];
                    }

                    activeObject.left = prevPoint.X;
                    activeObject.top = prevPoint.Y;

                    setTimeout(function () { canvas.renderAll(); }, 5);
                    break;
                }
            }
        }
    };

    $("img.toolbox-item").draggable({
        drag: function (event, ui) {
            //console.log(event);
        },
        revert: 'invalid',
        helper: 'clone'
    });
    $("#c").droppable({
        drop: function (event, ui) {
            AddImageToCanvas(ui.draggable.attr('src'), { top: ui.offset.top, left: ui.offset.left, name: ui.draggable.attr('data-name'), type: ui.draggable.attr('data-type') })
        },
        accept: function (el) {
            /* This is a filter function, you can perform logic here 
               depending on the element being filtered: */
            return el.is('img');
        }
    });
});