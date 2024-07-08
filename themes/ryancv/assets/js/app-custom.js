n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = n.prop(this, "elements");
                return e ? n.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !n(this).is(":disabled") && wt.test(this.nodeName) && !_t.test(e) && (this.checked || !re.test(e))
            }).map(function(e, t) {
                var s = n(this).val();
                return s == null ? null : n.isArray(s) ? n.map(s, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ie, `
`)
                    }
                }) : {
                    name: t.name,
                    value: s.replace(Ie, `
`)
                }
            }).get()
        }
    });