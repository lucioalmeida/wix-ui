import * as React from 'react';
import {string} from 'prop-types';
import Popover, {Placement} from '../Popover';
import {buildChildrenObject, createComponentThatRendersItsChildren} from '../../utils';
import {createHOC} from '../../createHOC';

interface TooltipProps {
  classes: TooltipClasses;
  placement?: Placement;
}

interface TooltipState {
  isOpen: boolean;
}

type TooltipClasses = {
  tooltip: string;
};

class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {
  static Element = createComponentThatRendersItsChildren('Tooltip.Element');
  static Content = createComponentThatRendersItsChildren('Tooltip.Content');

  static defaultProps = {
    placement: 'top'
  };

  static propTypes = {
    /** The location to display the content */
    placement: string,
    /** Classes object */
    classes: object.isRequired
  };

  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isOpen: false
    };
  }

  open() {
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
    }
  }

  close() {
    if (this.state.isOpen) {
      this.setState({isOpen: false});
    }
  }

  render () {
    const {placement, children, classes} = this.props;
    const childrenObject = buildChildrenObject(children, {Element: null, Content: null});
    const {isOpen} = this.state;

    return (
      <Popover
        placement={placement}
        shown={isOpen}
        onMouseEnter={this.open}
        onMouseLeave={this.close}>
        <Popover.Element>
          <div
            data-hook="tooltip-element">
            {childrenObject.Element}
          </div>
        </Popover.Element>
        <Popover.Content>
          <div className={classes.tooltip}>
            {childrenObject.Content}
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

export default createHOC(Tooltip);
