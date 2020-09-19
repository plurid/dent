// #region imports
    // #region libraries
    import React from 'react';

    import { storiesOf } from '@storybook/react';
    import { action } from '@storybook/addon-actions';
    import { withKnobs } from '@storybook/addon-knobs';
    // #endregion libraries


    // #region external
    import Key from '../';
    // #endregion external
// #endregion imports



// #region module
const actions = {
    atClick: action('atClick'),
};

const keys = [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '[',
    ']',
];


storiesOf(
    'Key',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    return (
        <div
            style={{
                display: 'grid',
                // gridTemplateColumns: '1fr',
                gridTemplateColumns: `repeat(${keys.length}, 1fr)`,
                gridGap: '1rem',
                // width: '150px',
            }}
        >
            {/* <Key
                type="single"
                text="Q"
                {...actions}
            /> */}

            {keys.map(key => {
                return (
                    <Key
                        type="single"
                        text={key.toUpperCase()}
                        {...actions}
                    />
                );
            })}
        </div>
    );
});
// #endregion module
