'use strict';
var bubbles = function bubbles() {
    var c = void 0;
    if (0 < window.location.href.indexOf('agent/tickets')) {
        var d = $('nav#main_navigation').css('background-color'),
            e = d.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i),
            f = ('0' + parseInt(e[1], 10).toString(16)).slice(-2) + ('0' + parseInt(e[2], 10).toString(16)).slice(-2) + ('0' + parseInt(e[3], 10).toString(16)).slice(-2);
        c = function c(n, o) {
            var p = parseInt(n, 16),
                q = (p >> 16) + o;
            255 < q ? q = 255 : 0 > q && (q = 0);
            var s = (255 & p >> 8) + o;
            255 < s ? s = 255 : 0 > s && (s = 0);
            var t = (255 & p) + o;
            return 255 < t ? t = 255 : 0 > t && (t = 0), (t | s << 8 | q << 16).toString(16)
        };
        var h = c(f, 20);
        h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20), h = c(h, 20);
        var i = $('head'),
            j = i.find('.line-color').length;
        1 > j && i.append($('<style class="line-color">\n          p.agent-line {\n            background-color: #' + h + ' !important;\n            border-color: #' + f + ' !important;\n          }\n          .arrow-agent:before {\n            border-bottom-color: ' + d + ' !important;\n          }\n          .arrow-agent:after {\n            border-bottom-color: #' + h + ' !important;\n          }\n          </style>'));
        var k = $('.event-container').find('.ember-view.event.chat div.content:contains(") ***")');
        k.each(function() {
            var n = $(this),
                o = n.find('p')[0],
                p = n.find('p')[1],
                q = $(p).html();
            $(o).addClass('system-line'), $(p).replaceWith('<div class="chat-comment"><p class="chat-line">' + q + '</p></div>')
        });
        var l = $('.chat-comment');
        l.each(function() {
            var n = $(this),
                o = n.html();
            n.html(o.replace(/<br>\\*/g, '</p><p class="chat-line">'))
        });
        var m = $('.chat-line');
        m.each(function() {
            var n = $(this),
                o = n.html(),
                p = n.text(),
                q = n.nextAll().slice(0, 4),
                s = q.html(),
                t = n.parent();
            t = t.parent(), t = t.parent(), t = t.parent(), t = t.parent(), t = t.parent(), t = t.parent();
            var u = t.find('div.header.clearfix div.actor span.name a').text();
            if (0 < p.indexOf(') ***')) n.addClass('system-line');
            else if (0 < p.indexOf('Agent uploaded: ')) n.replaceWith('<p class="chat-line system-line">' + o + '<br>' + s + '</p>'), q.css('display', 'none');
            else if (0 < p.indexOf('Visitor uploaded: ')) n.replaceWith('<p class="chat-line system-line">' + o + '<br>' + s + '</p>'), q.css('display', 'none');
            else if (0 < o.indexOf(') ' + u)) {
                n.addClass('user-line');
                var v = n.find('span');
                1 > v.length && n.append($('<span class="arrow-chat arrow-user"> </span>'))
            } else if ('system-line' != n.attr('class')) {
                n.addClass('agent-line');
                var _v = n.find('span');
                1 > _v.length && n.append($('<span class="arrow-chat arrow-agent"> </span>'))
            }
        })
    }
};
$(document).ready(function() {
    setTimeout(bubbles, 2e3)
}), $('*').click(function() {
    setTimeout(bubbles, 1300)
});