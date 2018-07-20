/**
 * render Work list
 */
import React from 'react';
import PT from 'prop-types';
import Item from './Item';

import './styles.scss';

export default function WorkList(props) {
  const {
    workList,
    onDeleteItem,
  } = props;

  return (
    <div styleName={`container ${workList.items.length > 0 ? 'active' : ''}`}>
      <ul>
        {
          workList.items.map((work, index) => (
            <li key={`${work.company}${index + 1}`}>
              <Item work={work} index={index} onDeleteItem={onDeleteItem} />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

WorkList.propTypes = {
  workList: PT.shape().isRequired,
  onDeleteItem: PT.func.isRequired,
};
