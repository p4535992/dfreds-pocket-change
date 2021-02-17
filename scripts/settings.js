export default class Settings {
  static PACKAGE_NAME = 'dfreds-pocket-change';

  // Settings keys
  static ENABLED = 'enabled';
  static CREATURE_TYPES = 'creatureTypes';
  static CHANCE_OF_NO_CURRENCY = 'chanceOfNoCurrency';
  static CURRENCY_MULTIPLIER = 'currencyMultiplier';
  static USE_SILVER = 'useSilver';
  static USE_ELECTRUM = 'useElectrum';
  static USE_GOLD = 'useGold';
  static USE_PLATINUM = 'usePlatinum';

  /**
   * Register all the settings for the module
   */
  registerSettings() {
    game.settings.register(Settings.PACKAGE_NAME, Settings.ENABLED, {
      name: 'Enabled',
      hint:
        'If enabled, currency will be generated for tokens dropped in scenes.',
      scope: 'world',
      config: true,
      default: true,
      type: Boolean,
    });

    game.settings.register(Settings.PACKAGE_NAME, Settings.CREATURE_TYPES, {
      name: 'Creature types',
      hint:
        'These are the types of creatures that will generate currency, separated via semi-colons. Leave it blank to generate currency for all types of creatures. Example: Humanoid;Gnome;Elf',
      scope: 'world',
      config: true,
      default: 'Humanoid',
      type: String,
    });

    game.settings.register(Settings.PACKAGE_NAME, 'chanceOfNoCurrency', {
      name: 'Chance of no currency',
      hint:
        'This is the percent chance that no money will be generated for a token.',
      scope: 'world',
      config: true,
      default: 0.25,
      range: {
        min: 0,
        max: 1,
        step: 0.05,
      },
      type: Number,
    });

    game.settings.register(Settings.PACKAGE_NAME, 'currencyMultiplier', {
      name: 'Currency multiplier',
      hint: 'This multiplies the generated currency by the given number.',
      scope: 'world',
      config: true,
      default: 1,
      range: {
        min: 0,
        max: 2,
        step: 0.1,
      },
      type: Number,
    });

    game.settings.register(Settings.PACKAGE_NAME, Settings.USE_SILVER, {
      name: 'Use Silver',
      hint:
        'If enabled, generated currency could include silver. Copper is always included.',
      scope: 'world',
      config: true,
      default: true,
      type: Boolean,
    });

    game.settings.register(Settings.PACKAGE_NAME, Settings.USE_ELECTRUM, {
      name: 'Use Electrum',
      hint:
        'If enabled, generated currency could include electrum. Copper is always included.',
      scope: 'world',
      config: true,
      default: true,
      type: Boolean,
    });

    game.settings.register(Settings.PACKAGE_NAME, Settings.USE_GOLD, {
      name: 'Use Gold',
      hint:
        'If enabled, generated currency could include gold. Copper is always included.',
      scope: 'world',
      config: true,
      default: true,
      type: Boolean,
    });

    game.settings.register(Settings.PACKAGE_NAME, Settings.USE_PLATINUM, {
      name: 'Use Platinum',
      hint:
        'If enabled, generated currency could include platinum. Copper is always included.',
      scope: 'world',
      config: true,
      default: true,
      type: Boolean,
    });
  }

  /**
   * Returns the game setting for enabled
   *
   * @returns {Boolean} true if currency should be generated on token drop
   */
  static get enabled() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.ENABLED);
  }

  /**
   * Returns the game setting for creatureTypes
   *
   * @returns {String} a string separated by a semi-colon for the types of
   * creatures to generate currency for
   */
  static get creatureTypes() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.CREATURE_TYPES);
  }

  /**
   * Returns the game setting for chanceOfNoCurrency
   *
   * @returns {Number} a number between 0 and 1 with 0.1 steps, representing
   * the percent change that currency will not be generated
   */
  static get chanceOfNoCurrency() {
    return game.settings.get(
      Settings.PACKAGE_NAME,
      Settings.CHANCE_OF_NO_CURRENCY
    );
  }

  /**
   * Returns the game setting for currencyMultiplier
   *
   * @returns {Number} a number between 0 and 2 with 0.1 steps, representing
   * the amount to multiply the currency by
   */
  static get currencyMultiplier() {
    return game.settings.get(
      Settings.PACKAGE_NAME,
      Settings.CURRENCY_MULTIPLIER
    );
  }

  /**
   * Returns the game setting for useSilver
   *
   * @returns {Boolean} true if silver can be used
   */
  static get useSilver() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.USE_SILVER);
  }

  /**
   * Returns the game setting for useElectrum
   *
   * @returns {Boolean} true if electrum can be used
   */
  static get useElectrum() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.USE_ELECTRUM);
  }

  /**
   * Returns the game setting for useGold
   *
   * @returns {Boolean} true if gold can be used
   */
  static get useGold() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.USE_GOLD);
  }

  /**
   * Returns the game setting for usePlatinum
   *
   * @returns {Boolean} true if platinum can be used
   */
  static get usePlatinum() {
    return game.settings.get(Settings.PACKAGE_NAME, Settings.USE_PLATINUM);
  }
}