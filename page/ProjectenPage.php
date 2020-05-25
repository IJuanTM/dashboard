<?php

class ProjectenPage
{
    public $Project;
    public $Prev;
    public $Next;

    private $urlArr;

    public function __construct($urlArr)
    {
        $this->urlArr = $urlArr;
        $projectArr = array_slice(scandir(PARTS . 'projecten'), 2);
        if (empty($urlArr['pageVars'][0])) header("Refresh: 2; url=" . PageController::url('alle_projecten') . "");
        elseif (in_array($urlArr['pageVars'][0] . '.phtml', $projectArr)) {
            $this->Project = PageController::get_part_string(
                'projecten/' . $urlArr['pageVars'][0],
                array('baseUrl' => $this->urlArr['baseUrl']));
            if ($urlArr['pageVars'][0] . '.phtml' !== $projectArr[0]) {
                $str = explode('_', $urlArr['pageVars'][0]);
                $this->Prev = 'projecten/' . preg_replace('/\d/', $str[1] - 1, $urlArr['pageVars'][0]);
            } else $this->Prev = 'alle_projecten';
            if ($urlArr['pageVars'][0] . '.phtml' !== end($projectArr)) {
                $str = explode('_', $urlArr['pageVars'][0]);
                $this->Next = 'projecten/' . preg_replace('/\d/', $str[1] + 1, $urlArr['pageVars'][0]);
            } else $this->Next = 'alle_projecten';
        } else header("Refresh: 2; url=" . PageController::url('alle_projecten') . "");
    }
}