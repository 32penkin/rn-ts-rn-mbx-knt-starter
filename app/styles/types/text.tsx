import {RkTheme} from 'react-native-ui-kitten';


function bootstrap() {

  RkTheme.setType('RkText', 'basic', {
    color: theme => theme.text.primary,
    text: {
      textAlign: 'left',
    },
  });

  RkTheme.setType('RkText', 'h1', {
    fontFamily: theme => theme.fonts.light,
    fontSize: 28,
    text: {
      lineHeight: 35,
      letterSpacing: -0.2
    }
  });

  RkTheme.setType('RkText', 'h2', {
    fontFamily: theme => theme.fonts.regular,
    fontSize: 21,
    text: {
      lineHeight: 28,
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'h3', {
    fontFamily: theme => theme.fonts.medium,
    fontSize: 18,
    text: {
      lineHeight: 24,
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'h4', {
    fontFamily: theme => theme.fonts.regular,
    fontSize: 18,
    text: {
      lineHeight: 24,
      letterSpacing: 0.2
    }
  });

  RkTheme.setType('RkText', 'h5', {
    fontFamily: theme => theme.fonts.bold,
    fontSize: 16,
    text: {
      lineHeight: 21,
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'body', {
    fontFamily: theme => theme.fonts.regular,
    fontSize: 16,
    text: {
      lineHeight: 21,
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'body2', {
    fontFamily: theme => theme.fonts.regular,
    fontSize: 14,
    text: {
      lineHeight: 21,
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'micro', {
    fontFamily: theme => theme.fonts.micro,
    fontSize: 11,
    text: {
      lineHeight: 14,
      letterSpacing: 1.4,
    }
  });


  RkTheme.setType('RkText', 'microDescription', {
    fontFamily: theme => theme.fonts.microBold,
    fontSize: 11,
    text: {
      letterSpacing: 1.4
    }
  });


  RkTheme.setType('RkText', 'microMedium', {
    fontFamily: theme => theme.fonts.microMedium,
  });

  RkTheme.setType('RkText', 'microBold', {
    fontFamily: theme => theme.fonts.microBold,
  });

  RkTheme.setType('RkText', 'microSemiBold', {
    fontFamily: theme => theme.fonts.microSemiBold,
  });

  RkTheme.setType('RkText', 'microRegular', {
    fontFamily: theme => theme.fonts.micro,
  });

  RkTheme.setType('RkText', 'tabLabel', {
    fontFamily: theme => theme.fonts.micro,
    fontSize: 9,

    text: {
      includeFontPadding: false,
      textAlignVertical: 'center',
      paddingVertical: {
        ios: null,
        android: 2
      },
      lineHeight: {
        ios: 21,
        android: null
      }
    }
  });

  RkTheme.setType('RkText', 'button', {
    fontFamily: theme => theme.fonts.medium,
    fontSize: 14,
    text: {
      paddingVertical: 3,
      letterSpacing: 1.6,
    }
  });

  RkTheme.setType('RkText', 'noPadding', {
    text: {
      paddingVertical: 0,
    }
  });

  RkTheme.setType('RkText', 'baseMedium', {
    fontFamily: theme => theme.fonts.medium,
  });

  RkTheme.setType('RkText', 'bold', {
    fontFamily: theme => theme.fonts.bold,
  });

  RkTheme.setType('RkText', 'center', {
    text: {
      textAlign: 'center',
    }
  });

  RkTheme.setType('RkText', 'right', {
    text: {
      textAlign: 'right',
    }
  });

  RkTheme.setType('RkText', 'left', {
    text: {
      textAlign: 'left',
    }
  });

  RkTheme.setType('RkText', 'header', {
    fontFamily: theme => theme.fonts.regular,
    color: theme => theme.text.header,
    fontSize: 21,
    text: {
      letterSpacing: 0.1
    }
  });

  RkTheme.setType('RkText', 'headerButton', {
    color: theme => theme.text.header,
    fontFamily: theme => theme.fonts.microMedium,
    fontSize: 11,
    text: {
      letterSpacing: 1.4,
    }
  });

  RkTheme.setType('RkText', 'hero', {
    fontFamily: theme => theme.fonts.microLight,
    color: theme => theme.text.white,
    fontSize: 42,
    text: {
      letterSpacing: 0.7
    }
  });

  RkTheme.setType('RkText', 'largeValue', {
    fontFamily: theme => theme.fonts.microLight,
    fontSize: 35,
    text: {
      lineHeight: 49,
      letterSpacing: 0.6
    }
  });

  RkTheme.setType('RkText', 'smallAmount', {
    fontFamily: theme => theme.fonts.micro,
    fontSize: 11,
    text: {
      lineHeight: 14,
      letterSpacing: 0.3
    }
  });

  RkTheme.setType('RkText', 'amount', {
    fontFamily: theme => theme.fonts.micro,
    fontSize: 16
  });

  RkTheme.setType('RkText', 'amountBig', {
    fontFamily: theme => theme.fonts.micro,
    fontSize: 21
  });

  RkTheme.setType('RkText', 'primary', {
    color: theme => theme.text.primary
  });

  RkTheme.setType('RkText', 'secondary', {
    color: theme => theme.text.secondary
  });

  RkTheme.setType('RkText', 'inactive', {
    color: theme => theme.text.inactive
  });

  RkTheme.setType('RkText', 'orange', {
    color: theme => theme.text.orange
  });

  RkTheme.setType('RkText', 'darkOrange', {
    color: theme => theme.text.orange
  });

  RkTheme.setType('RkText', 'white', {
    color: theme => theme.text.white
  });

  RkTheme.setType('RkText', 'inactiveDark', {
    color: theme => theme.text.inactiveDark
  });

  RkTheme.setType('RkText', 'chatAccent', {
    color: theme => theme.text.chatAccent
  });

  RkTheme.setType('RkText', 'success', {
    color: theme => theme.text.success
  });

  RkTheme.setType('RkText', 'hint', {
    color: theme => theme.text.hint
  });

  RkTheme.setType('RkText', 'frozen', {
    color: theme => theme.text.frozen
  });

  RkTheme.setType('RkText', 'underline', {
    text: {
      textDecorationLine: 'underline'
    }
  });

  RkTheme.setType('RkText', 'welcome', {
    fontFamily: theme => theme.fonts.light,
    fontSize: 25,
    text: {
      lineHeight: 35,
      letterSpacing: -0.2
    }
  });

  RkTheme.setType('RkText', 'keyboard', {
    fontFamily: theme => theme.fonts.microMedium,
    fontSize: theme => theme.scaleVertical(28),
  });
}

export default bootstrap;