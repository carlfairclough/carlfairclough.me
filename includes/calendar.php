<?php

date_default_timezone_set(UTC);
$currentMonth = date('F Y');
$currentMonthNum = date('n');
$monthsToShow = 6;


$booked = array(
    '2 March 2015',
    '3 March 2015',
    '4 March 2015',
    '5 March 2015',
    '6 March 2015',
    '9 March 2015',
    '10 March 2015',
    '11 March 2015',
    '12 March 2015',
    '13 March 2015',
    '16 March 2015',
    '17 March 2015',
    '19 March 2015',
    '20 March 2015',
    '23 March 2015',
    '24 March 2015',
    '26 March 2015',
    '27 March 2015',
    '30 March 2015',
    '31 March 2015',
    '1 April 2015',
    '2 April 2015',
    '3 April 2015',
    '9 April 2015',
    '10 April 2015',
    '6 April 2015',
    '7 April 2015',
    '8 April 2015',
    '13 April 2015',
    '14 April 2015',
    '16 April 2015',
    '22 April 2015',
    '23 April 2015',
    '24 April 2015',
    '27 April 2015',
    '28 April 2015',
    '29 April 2015',
    '1 May 2015',
    '4 May 2015',
    '5 May 2015',
    '6 May 2015',
    '7 May 2015',
    '8 May 2015',
    '11 May 2015',
    '12 May 2015',
    '13 May 2015',
    '14 May 2015',
    '15 May 2015',
    '18 May 2015',
    '19 May 2015',
    '20 May 2015',
    '21 May 2015',
    '22 May 2015',
    '25 May 2015',
    '26 May 2015',
    '17 August 2015',
    '18 August 2015',
    '19 August 2015',
    '20 August 2015',
    '21 August 2015',
    '24 August 2015',
    '25 August 2015',
    '26 August 2015',
    '27 August 2015',
    '28 August 2015',
    '31 August 2015',);


$content = '';

for ($m = 0 ; $m < $monthsToShow; $m++) {

    $month = date('F Y', strtotime('+'.$m.' months', strtotime($currentMonth)));

    // find out how many days are before the start of the month
    $startDay = (int) date('w', strtotime($month));
    $startDay = $startDay-1;

    // find out how many days are after the end of the month
    $monthDays = date('t', strtotime($month));
    $endMonthDate = $monthDays.' '.$month;
    $endDay = (int) date('w', strtotime($endMonthDate));

    // how many items in the month view
    $daysToShow = $monthDays+$startDay+6-$endDay;

    $content .= '<div class="cal-wrap"><h4>'.$month.'</h4>';
    $content .= '<ul class="month-cal">';

    for ($d = 0 ; $d < $daysToShow; $d++) {

        $dom = $d-$startDay+1;
        $dom .= ' '.$month;

        // is the day booked or a weekend?
        $dow = date('N', strtotime($dom));
        $availability = 'Available';
        if (in_array($dom, $booked)) {
            $availability = 'Booked';
        } else if ($dow > 5) {
            $availability = 'Unavailable';
        };


        if ( $d < $startDay ) {
            $content .='<li class="other-month"></li>';
        } else if ($d < ($startDay+$monthDays) ) {
            $content .= '<li class="'.$dow.' '.$availability.'">'.$dom.': '.$availability.'</li>';
        } else {
            $content .= '<li class="other-month"></li>';
        };
    }; 

    $content .= '</ul></div>';

};

echo $content;
?>

