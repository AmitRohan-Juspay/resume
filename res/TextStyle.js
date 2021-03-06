const Colors = require('./Colors').color;
const Font = require('./Font');

exports.textStyle = {
  TITLE: {
    LIGHT: {
      color: Colors.WHITE,
      textSize: Font.fontSize.FONT_36,
      fontStyle: Font.fontStyle.EXTRABOLD
    },
    DARK: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_36,
      fontStyle: Font.fontStyle.EXTRABOLD
    }
  },
  SYMBOL: {
    STATUSBAR: {
      TIME: {
        color: Colors.WHITE,
        textSize: Font.fontSize.FONT_14,
        fontStyle: Font.fontStyle.MEDIUM
      }
    },
    KEYBOARD: {
      SYMBOL: {
        color: Colors.DIRT_GREEN,
        textSize: Font.fontSize.FONT_22,
        fontStyle: Font.fontStyle.MEDIUM
      },
      ALPHA: {
        color: Colors.DIRT_GREEN,
        textSize: Font.fontSize.FONT_22,
        fontStyle: Font.fontStyle.ROBOTO
      },
      ACTION: {
        color: Colors.DIRT_GREEN,
        textSize: Font.fontSize.FONT_14,
        fontStyle: Font.fontStyle.MEDIUM
      },
      SMALL: {
        color: Colors.DIRT_GREEN,
        textSize: Font.fontSize.FONT_10,
        fontStyle: Font.fontStyle.MEDIUM
      }
    }
  },
  HEADING: {
    LIGHT: {
      color: Colors.WHITE,
      textSize: Font.fontSize.FONT_20,
      fontStyle: Font.fontStyle.BOLD

    },
    DARK: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_20,
      fontStyle: Font.fontStyle.BOLD
    }
  },
  TOOLBAR: {
    HEADING: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_16,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  CARD: {
    TITLE: {
      LIGHT: {
        color: Colors.WHITE,
        textSize: Font.fontSize.FONT_16,
        fontStyle: Font.fontStyle.BOLD
      },
      DARK: {
        color: Colors.PRIMARY_BLACK,
        textSize: Font.fontSize.FONT_16,
        fontStyle: Font.fontStyle.BOLD
      },
      DAY: {
        color: Colors.LIGHT_TEXT,
        textSize: Font.fontSize.FONT_22,
        fontStyle: Font.fontStyle.EXTRABOLD
      },
      NIGHT: {
        color: Colors.NIGHT_TEXT,
        textSize: Font.fontSize.FONT_22,
        fontStyle: Font.fontStyle.EXTRABOLD
      }
    },
    BODY: {
      LIGHT: {
        color: Colors.WHITE,
        textSize: Font.fontSize.FONT_14,
        fontStyle: Font.fontStyle.REGULAR
      },
      DARK: {
        REGULAR: {
          color: Colors.PRIMARY_BLACK,
          textSize: Font.fontSize.FONT_14,
          fontStyle: Font.fontStyle.REGULAR
        },
        BOLD: {
          color: Colors.PRIMARY_BLACK,
          textSize: Font.fontSize.FONT_14,
          fontStyle: Font.fontStyle.BOLD
        },
        BLUE_R: {
          color: Colors.PRIMARY_ACCENT,
          textSize: Font.fontSize.FONT_14,
          fontStyle: Font.fontStyle.REGULAR
        }
      },
      DAY: {
        REGULAR: {
          color: Colors.LIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.REGULAR
        },
        BOLD: {
          color: Colors.LIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.BOLD
        }
      },
      NIGHT: {
        REGULAR: {
          color: Colors.NIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.REGULAR
        },
        BOLD: {
          color: Colors.NIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.BOLD
        }
      }
    },
    DESCRIPTION: {
      NIGHT: {
        REGULAR: {
          color: Colors.NIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.REGULAR
        },
        BOLD: {
          color: Colors.NIGHT_TEXT,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.BOLD
        }
      },
      DAY: {
        REGULAR: {
          color: Colors.LIGHT_TEXT_2,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.REGULAR
        },
        BOLD: {
          color: Colors.LIGHT_TEXT_2,
          textSize: Font.fontSize.FONT_20,
          fontStyle: Font.fontStyle.BOLD
        }
      }
    },
    ACTION: {
        color: Colors.COLOR_ACCENT,
        textSize: Font.fontSize.FONT_20,
        fontStyle: Font.fontStyle.BOLD
    },
    HEADING: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_14,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  HINT: {
    BOLD: {
      color: Colors.DARK_GRAY,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.BOLD
    },
    LIGHT: {
      color: Colors.WHITE,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.SEMIBOLD
    },
    SEMI: {
      color: Colors.DARK_GRAY,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.SEMIBOLD
    },
    GREEN: {
      color: Colors.SUCCESS_GREEN,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.SEMIBOLD
    },
    REGULAR: {
      color: Colors.DARK_GRAY,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.REGULAR
    },
    RED: {
      color: Colors.ERROR_RED,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.SEMIBOLD
    },
    BLUE: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  TABBAR: {
    SELECTED: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.BOLD
    }
  },
  BOTTOMBAR: {
    DEFAULT: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_10,
      fontStyle: Font.fontStyle.SEMIBOLD
    },
    SELECTED: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_10,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  FILTER: {
    REGULAR_BLUE: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.REGULAR
    },
    REGULAR_BLACK: {
      color: Colors.PRIMARY_BLACK,
      textSize: Font.fontSize.FONT_12,
      fontStyle: Font.fontStyle.REGULAR
    }
  },
  CLICKABLE: {
    BLUE_SEMI: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_14,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  SECTION: {
    TITLE: {
      color: Colors.PRIMARY_ACCENT,
      textSize: Font.fontSize.FONT_14,
      fontStyle: Font.fontStyle.SEMIBOLD
    }
  },
  NOTHING: {
    color: Colors.PRIMARY_ACCENT,
    textSize: Font.fontSize.FONT_22,
    fontStyle: Font.fontStyle.BOLD
  },
   LOADING_TEXT: {
    color: Colors.PRIMARY_ACCENT,
    textSize: Font.fontSize.FONT_18,
    fontStyle: Font.fontStyle.BOLD
  }

};
