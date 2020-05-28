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

        // Put all existing projects in array
        $projectArr = array_slice(scandir(PARTS . 'projecten'), 2);

        // If no specific project is given redirect to projects page
        if (empty($urlArr['pageVars'][0])) header("Refresh: 2; url=" . PageController::url('alle_projecten') . "");

        // Check if given project exists
        elseif (in_array($urlArr['pageVars'][0] . '.phtml', $projectArr)) {

            // Load projects from right folder
            $this->Project = PageController::get_part_string(
                'projecten/' . $urlArr['pageVars'][0],
                array('baseUrl' => $this->urlArr['baseUrl']));

            // Set previous project if exist else redirect back to projects page
            if ($urlArr['pageVars'][0] . '.phtml' !== $projectArr[0]) {
                $str = explode('_', $urlArr['pageVars'][0]);
                $this->Prev = 'projecten/' . preg_replace('/\d/', $str[1] - 1, $urlArr['pageVars'][0]);
            } else $this->Prev = 'alle_projecten';

            // Set next project if exist else redirect back to create project page
            if ($urlArr['pageVars'][0] . '.phtml' !== end($projectArr)) {
                $str = explode('_', $urlArr['pageVars'][0]);
                $this->Next = 'projecten/' . preg_replace('/\d/', $str[1] + 1, $urlArr['pageVars'][0]);
            } else $this->Next = 'project_aanmaken';

        } else header("Refresh: 2; url=" . PageController::url('alle_projecten') . "");
    }
}