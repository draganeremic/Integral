var Background = fabric.util.createClass(BaseModel, {
    type: 'Background',

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
        });
    }
});

Background.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new Background(img, imgOptions));
    });
};