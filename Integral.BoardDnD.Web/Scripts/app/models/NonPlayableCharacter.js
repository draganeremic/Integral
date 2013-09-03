var NonPlayableCharacter = fabric.util.createClass(Character, {
    type: 'NonPlayableCharacter',

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {

        });
    }
});

NonPlayableCharacter.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new NonPlayableCharacter(img, imgOptions));
    });
};