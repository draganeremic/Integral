var EnvironmentObject = fabric.util.createClass(BaseModel, {
    type: 'EnvironmentObject',

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            
        });
    }
});

EnvironmentObject.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new EnvironmentObject(img, imgOptions));
    });
};