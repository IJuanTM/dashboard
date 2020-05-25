<?php
date_default_timezone_set('Europe/Amsterdam');
$day = date('D');

if ($day == 'Mon') {
    echo "Maandag";
} elseif ($day == 'Tue') {
    echo "Dinsdag";
} elseif ($day == 'Wed') {
    echo "Woensdag";
} elseif ($day == 'Thu') {
    echo "Donderdag";
} elseif ($day == 'Fri') {
    echo "Vrijdag";
} elseif ($day == 'Sat') {
    echo "Zaterdag";
} elseif ($day == 'Sun') {
    echo "Zondag";
}