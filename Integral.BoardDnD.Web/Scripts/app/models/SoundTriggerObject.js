var SoundTriggerObject = fabric.util.createClass(BaseModel, {
    type: 'SoundTriggerObject',

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {

        });
    }
});

SoundTriggerObject.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new SoundTriggerObject(img, imgOptions));
    });
};