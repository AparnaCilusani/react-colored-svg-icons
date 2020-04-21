import React from 'react';
import {Svg,Path,G} from 'react-native-svg';

const Youtube = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G transform="matrix(0.19346,0,0,0.19346,19.357,19.357)">
        <G transform="matrix(4.16667,0,0,4.16667,-771.71,-1539.19)">
            <Path d="M190.971,402.458C175.921,402.458 163.678,390.215 163.678,375.165C163.678,360.117 175.921,347.873 190.971,347.873C206.02,347.873 218.263,360.117 218.263,375.165C218.263,390.215 206.02,402.458 190.971,402.458Z" style={{fill:'rgb(239,60,62)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(4.16667,0,0,4.16667,-771.71,-1539.19)">
            <Path d="M195.843,375.716L188.593,379.693C188.277,379.863 187.994,379.635 187.994,379.277L187.994,371.115C187.994,370.751 188.286,370.524 188.602,370.703L195.901,374.889C196.225,375.073 196.169,375.539 195.843,375.716ZM207.313,371.027C207.313,367.156 204.174,364.018 200.304,364.018L182.125,364.018C178.254,364.018 175.115,367.156 175.115,371.027L175.115,379.547C175.115,383.417 178.254,386.556 182.125,386.556L200.304,386.556C204.174,386.556 207.313,383.417 207.313,379.547L207.313,371.027Z" style={{fill:'white',fillRule:'nonzero'}}/>
        </G>
    </G>
</Svg>

);

export default Youtube