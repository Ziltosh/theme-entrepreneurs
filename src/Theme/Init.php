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

        add_action('wp_enqueue_scripts', function () {
            Assets::enqueueStyle('main', 'main.pcss');
        });

    }
}