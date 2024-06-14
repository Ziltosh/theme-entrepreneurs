<?php

namespace Theme;

use ViteHelpers\Assets;

class Init
{
    public static function init()
    {
        Assets::register([
            'dir' => get_stylesheet_directory(), // or get_stylesheet_directory() for themes
            'url' => get_stylesheet_directory_uri(), // or get_stylesheet_directory_uri() for themes
        ]);

        Assets::font('suisseIntl/SuisseIntl-Regular.otf');
        Assets::font('suisseIntl/SuisseIntl-Medium.otf');
        Assets::font('suisseIntl/SuisseIntl-Light.otf');
        Assets::font('montreal/PPNeueMontreal-Medium.ttf');
        Assets::font('montreal/PPNeueMontreal-Regular.otf');
        Assets::font('Inter-VariableFont_slnt,wght.ttf');

        add_action('wp_enqueue_scripts', function () {
            Assets::enqueueStyle('main', 'main.pcss');
            Assets::enqueueScript('global', 'global.js');
        });

        add_action('admin_enqueue_scripts', function () {
            Assets::enqueueStyle('main', 'main.pcss');
        });

    }
}