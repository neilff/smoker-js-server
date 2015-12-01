import React, { PropTypes } from 'react';

import Dropdown from '../common/Dropdown';
import Icon from '../common/Icon';

const Menu = ({ isVisible, saveConversionType, displayUnit }) => {
  const displayUnitOptions = [
    {
      idx: 'C',
      title: 'Celcius',
    },
    {
      idx: 'F',
      title: 'Fahrenheit',
    },
  ];

  return (
    <Dropdown style={ styles.base } isVisible={ isVisible }>
      Display Units:
      <ul className="list-reset">
        {
          displayUnitOptions.map(i => {
            return (
              <li
                key={ i.idx }
                style={ styles.listItem }
                className="ml1 mr1 mt1"
                onClick={ () => saveConversionType(i.idx) }>
                <Icon
                  isVisible={ i.idx === displayUnit }
                  style={ styles.icon }
                  type="ion-ios-checkmark-empty" />
                { i.title }
              </li>
            );
          })
        }
      </ul>
    </Dropdown>
  );
};

Menu.displayName = 'Menu';
Menu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  saveConversionType: PropTypes.func.isRequired,
  displayUnit: PropTypes.string.isRequired,
};
Menu.defaultProps = {};

const styles = {
  base: {
    top: '50px',
    right: '0',
    width: '240px',
  },
  listItem: {
    cursor: 'pointer',
  },
  icon: {
    width: '1.5rem',
  },
};

export default Menu;
