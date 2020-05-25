<?php
date_default_timezone_set('Europe/Amsterdam');
echo date('j');
$month = date('M');

if ($month == 'Jan') {
    echo " Januari";
} elseif ($month == 'Feb') {
    echo " Februari";
} elseif ($month == 'Mar') {
    echo " Maart";
} elseif ($month == 'Apr') {
    echo " April";
} elseif ($month == 'May') {
    echo " Mei";
} elseif ($month == 'Jun') {
    echo " Juni";
} elseif ($month == 'Jul') {
    echo " Juli";
} elseif ($month == 'Aug') {
    echo " Augustus";
} elseif ($month == 'Sep') {
    echo " September";
} elseif ($month == 'Oct') {
    echo " Oktober";
} elseif ($month == 'Nov') {
    echo " November";
} elseif ($month == 'Dec') {
    echo " December";
}