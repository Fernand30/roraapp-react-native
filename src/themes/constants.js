import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { StatusBar, Platform } from 'react-native';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Constants = {
    Navbar_Height : 45,
    Statusbar_Height : STATUSBAR_HEIGHT,

    UnitMargin: responsiveWidth(0.1),
    
  	UnitFontSize: responsiveFontSize(0.1),
  	
}

export default Constants;
