define([
    'jquery',
    'jquery/ui',
    'domReady!',
    'mediaelement'
], function ($) {
    'use strict';

    $('#swenson-song').mediaelementplayer({
    		success: function(mediaElement, originalNode, instance) {
    			console.log('works');
    		}
  	});

});
