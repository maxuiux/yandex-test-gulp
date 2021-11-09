/* -main js */

// clean jS
(function () {

    'use strict';

    // class
    const exploitationRulesSliderr = '.exploitation-rules-slider';

    // header swiper slider
    new Swiper(exploitationRulesSliderr, {

        // progressbar
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // key control
        keyboard: {
            enable: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

    });

})();

