define(
    [
        'text!templates/index.html',
        'backbone',
        'underscore',
        'jquery'
    ],
    function (template, Backbone, _, $) {
        "use strict";

        return Backbone.View.extend({
            tagName: 'div',
            className: 'row-fluid',
            template: _.template(template),

            events: {
                'click #watch': 'watch'
            },

            initialize: function (options) {
                this.ventilator = options.ventilator;
            },

            render: function () {
                $('body').removeClass('loading');
                this.$el.html(this.template());
            },

            watch: function (e) {
                e.preventDefault();

                this.ventilator.trigger('navigate:watch', this.$('#username').val());
            }
        });
    }
);
