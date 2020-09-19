// #region imports
    // #region libraries
    import React from 'react';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import { withKnobs } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import Qwerty from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    atClick: action('atClick'),
};


storiesOf(
    'Qwerty',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    return (
        <div
            style={{
                // display: 'grid',
                // gridTemplateColumns: '1fr',
                // gridGap: '1rem',
                // width: '200px',
            }}
        >
            <Qwerty
                {...actions}
            />
        </div>
    );
});
// #endregion module
