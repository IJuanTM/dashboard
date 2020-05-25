<?php
spl_autoload_register(function ($className) {
    $filename = 'inc';
    if (strpos($className, 'Controller') !== false) {
        $filename .= '/controllers/';
    } elseif (strpos($className, 'Model') !== false) {
        $filename .= '/models/';
    } elseif (strpos($className, 'Page') !== false) {
        $filename = 'page/';
    } else {
        $filename .= '/lib/';
    }
    $filename .= $className . '.php';
    if (file_exists($filename)) {
        // Require the page
        require_once $filename;
    } else {
        // Load the error 404 page when no page is found
        require_once ERROR_404_PAGE;
        header("Refresh: 1; url=" . PageController::url('alle_projecten') . "");
    }
});