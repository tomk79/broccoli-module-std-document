<?php
namespace tomk79\broccoliFieldStdDocument\fields;
class summernoteEditor extends \broccoliHtmlEditor\fieldBase{

    private $broccoli;

    /**
     * constructor
     */
    public function __construct($broccoli){
        $this->broccoli = $broccoli;
        parent::__construct($broccoli);
    }

	/**
	 * データをバインドする (Server Side)
	 */
	public function bind( $fieldData, $mode, $mod ){
		$rtn = '';
		if( is_array($fieldData) ){
			if( array_key_exists('src', $fieldData) && is_string($fieldData['src']) && strlen($fieldData['src']) ){
				$rtn .= $fieldData['src'];
			}
		}
		return $rtn;
	}

}