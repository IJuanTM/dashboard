<?php

class ApplicationController extends ApplicationModel
{
    public function __construct()
    {
        // Load the page
        new PageController();
    }

    public static function load_svg($name)
    {
        // A clever svg loader
        $file = BASEDIR . SVG . $name . '.svg';
        if (file_exists($file)) {
            return file_get_contents($file);
        } else {
            echo $file;
            exit;
        }
    }

    public static function sanitize($raw_data)
    {
        // Clean input from a form
        $data = htmlspecialchars($raw_data);
        $data = self::escape($data);
        return $data;
    }

    public static function escape($value)
    {
        // Sanitize characters
        $return = '';
        for ($i = 0; $i < strlen($value); ++$i) {
            $char = $value[$i];
            $ord = ord($char);
            if ($char !== "'" && $char !== "\"" && $char !== '\\' && $ord >= 32 && $ord <= 126) {
                $return .= $char;
            } else {
                $return .= '\\x' . dechex($ord);
            }
        }
        return $return;
    }
}