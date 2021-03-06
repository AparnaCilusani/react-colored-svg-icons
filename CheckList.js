import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const CheckList = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G transform="matrix(0.408266,0,0,0.408266,4.75525,1.4605)">
        <Path d="M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z" style={{fillRule:'nonzero'}}/>
    </G>
    <G id="Items">
        <G transform="matrix(0.612245,0,0,0.153061,-1.56159,7.10532)">
            <Path d="M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(0.612245,0,0,0.153061,-1.56159,17.3493)">
            <Path d="M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(0.612245,0,0,0.153061,-1.56159,27.5933)">
            <Path d="M45.017,15.645C45.017,10.236 43.919,5.845 42.567,5.845L8.267,5.845C6.915,5.845 5.817,10.236 5.817,15.645L5.817,35.245C5.817,40.654 6.915,45.045 8.267,45.045L42.567,45.045C43.919,45.045 45.017,40.654 45.017,35.245L45.017,15.645Z" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(1.62215,0,0,1.39405,-25.5779,-10.4379)">
            <Path d="M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(1.62215,0,0,1.39405,-25.5779,-0.504626)">
            <Path d="M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z" style={{fill:"rgb(233,74,60)"}}/>
        </G>
        <G transform="matrix(1.62215,0,0,1.39405,-25.5779,9.4286)">
            <Path d="M36.914,18.445L42.403,13.226L44.125,15.038L37.46,21.375L36.924,21.93L36.9,21.907L36.878,21.928L36.383,21.408L33.351,18.48L35.088,16.682L36.914,18.445Z" style={{fill:"rgb(90,130,194)"}}/>
        </G>
    </G>
</Svg>

);
export default CheckList