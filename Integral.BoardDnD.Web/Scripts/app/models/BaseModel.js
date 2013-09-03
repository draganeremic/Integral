var BaseModel = fabric.util.createClass(fabric.Image, {
    type: 'BaseModel',
    name: '',
    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
        this.set('name', options.name || '');
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            name: this.get('name')
        });
    },
    _render: function(ctx) {
        this.callSuper('_render', ctx);

        ctx.font = '20px Helvetica';
        ctx.fillStyle = '#333';
        ctx.fillText(this.name, -this.width/2, -this.height/2 + 20);
    }
});

BaseModel.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new BaseModel(img, imgOptions));
    });
};