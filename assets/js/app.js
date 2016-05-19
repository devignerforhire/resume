!(function( $ ) {

    var dfh = function() {

        this.listen();

    }

    dfh.prototype = {

    	constructor: dfh,

        toggleProjects: function() {

            $( '.projects' ).toggle();

            if ( $( '.projects' ).is( ':visible' ) ) {
				$( 'button.show-more span' ).html('Show less');
            } else {
				$( 'button.show-more span' ).html('Show more');
            }

        },
        listen: function() {

            var $this = this;


            $( document ).on( 'click', 'button.show-more', function( e ) {

                e.preventDefault();

                $this.toggleProjects();

            } );

        }

    };

    // Fire js
    $( document ).ready( function() {

        new dfh();

		$('.accordion').find('.accordion-toggle').click(function(){

			// Expand or collapse the panel
			$(this).next().slideToggle('fast');

			// Hide the other panels
			$(".accordion-content").not($(this).next()).slideUp('fast');
			$(".accordion-content i").not($(this).next()).addClass('down-icon')

		});

    });

})( window.jQuery );
