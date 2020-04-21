import React from 'react';
import {Svg,Path,G,Circle} from 'react-native-svg';

const VoiceMessage = ({ style = {},size='100%'}) => (
    <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G id="Voice-Message" transform="matrix(1,0,0,1,-0.162561,-0.328613)">
        <G transform="matrix(0.816327,0,0,0.153061,3.25122,30.1053)">
            <Path d="M45.017,8.981C45.017,7.25 44.754,5.845 44.429,5.845L6.405,5.845C6.081,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.081,45.045 6.405,45.045L44.429,45.045C44.754,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z" style={{fill:'rgb(90,130,194)'}}/>
        </G>
        <G transform="matrix(1.21864,0,0,1.21864,-6.23765,-6.49728)">
            <Path d="M14.626,14.897C18.754,14.897 22.106,18.249 22.106,22.377C22.106,26.506 18.754,29.857 14.626,29.857C10.498,29.857 7.146,26.506 7.146,22.377C7.146,18.249 10.498,14.897 14.626,14.897ZM14.626,18.637C16.69,18.637 18.366,20.313 18.366,22.377C18.366,24.442 16.69,26.117 14.626,26.117C12.562,26.117 10.886,24.442 10.886,22.377C10.886,20.313 12.562,18.637 14.626,18.637Z" style={{fill:'rgb(246,187,26)'}}/>
        </G>
        <G transform="matrix(1.21864,0,0,1.21864,18.915,-6.49728)">
            <Path d="M14.626,14.897C18.754,14.897 22.106,18.249 22.106,22.377C22.106,26.506 18.754,29.857 14.626,29.857C10.498,29.857 7.146,26.506 7.146,22.377C7.146,18.249 10.498,14.897 14.626,14.897ZM14.626,18.637C16.69,18.637 18.366,20.313 18.366,22.377C18.366,24.442 16.69,26.117 14.626,26.117C12.562,26.117 10.886,24.442 10.886,22.377C10.886,20.313 12.562,18.637 14.626,18.637Z" style={{fill:'rgb(246,187,26)'}}/>
        </G>
        <G transform="matrix(1,0,0,1,-0.859856,-1.42476)">
            <Circle cx="12.446" cy="22.197" r="3.94" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(1,0,0,1,24.2928,-1.42476)">
            <Circle cx="12.446" cy="22.197" r="3.94" style={{fill:'rgb(56,170,86)'}}/>
        </G>
    </G>
</Svg>
);

export default VoiceMessage
