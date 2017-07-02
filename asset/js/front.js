(function($) {
    $(document).ready(function() {
        //Fix navbar multiple level
        var navbar = $('.pi-navbar-nav');
        var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
        navbar.find('>li').each(function() {
            var $this = $(this);
            var caretStr = '<span class="pi-navbar-caret"></span>';
            caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
            if ($this.find('li').length) {
                $this.append(caretStr);
            }
        });
        navbar.find('ul').addClass('dropdown-menu');

        if (!hasBrand) {
            navbar.css('marginLeft', '-15px');
        }
    });
    $(document).ready(function() {
        $('.header-search').click(function () {
            var title = $('.header-search-title').val();
            var category = $('.header-search-category').val();
            var time = $('.header-search-time').val();
            var url = "https://www.agama.ir/event#!/search?";
            if (title) {
                url = url + "title=" + title;
            }
            if (category) {
                url = url + "&category=" + category;
            }
            if (time) {
                url = url + "&time=" + time;
            }
            location.href = url;
        });
    });
})(jQuery)