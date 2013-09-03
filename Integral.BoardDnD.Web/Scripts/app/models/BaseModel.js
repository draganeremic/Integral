﻿var BaseModel = fabric.util.createClass(fabric.Image, {
    type: 'BaseModel',
    
    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            
        });
    }
});

BaseModel.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new BaseModel(img, imgOptions));
    });
};