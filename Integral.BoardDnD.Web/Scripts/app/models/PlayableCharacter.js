var PlayableCharacter = fabric.util.createClass(Character, {
    type: 'PlayableCharacter',

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {

        });
    }
});

PlayableCharacter.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new PlayableCharacter(img, imgOptions));
    });
};