import * as React from 'react';
import Button, { ButtonProps } from '../Button';

export type ToggleButtonProps = ButtonProps;

const ToggleButton = React.forwardRef(
  (props: ToggleButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    return <Button {...props} ref={ref} as="a" ripple={false} />;
  }
);

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;