var Character = fabric.util.createClass(BaseModel, {
    type: 'Character',
    name: '',
    attributes: [],

    initialize: function (element, options) {
        options || (options = {});

        this.callSuper('initialize', element, options);
        this.set('name', options.name || '');
        this.set('attributes', options.attributes || []);
    },
    toObject: function () {
        return fabric.util.object.extend(this.callSuper('toObject'), {
            name: this.get('name'),
            attributes: this.get('attributes')
        });
    },
    _render: function (ctx) {
        this.callSuper('_render', ctx);

        ctx.font = '16px Helvetica';
        ctx.fillStyle = '#333';
        ctx.fillText('My name is: ' + this.name, -this.width / 2, -this.height / 2 + 20);
    }
});

Character.FromURL = function (url, callback, imgOptions) {
    fabric.util.loadImage(url, function (img) {
        callback(new Character(img, imgOptions));
    });
};