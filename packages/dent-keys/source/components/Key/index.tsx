// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region internal
    import {
        StyledKey,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface KeyProperties {
    type: 'single' | 'functional';
    text?: string;
    atClick: (
        event: any,
    ) => void;
}

const Key: React.FC<KeyProperties> = (
    properties,
) => {
    const {
        type,
        text,
        atClick,
    } = properties;


    return (
        <StyledKey
            onClick={(event) => atClick(event)}
            type={type}
        >
            {text}
        </StyledKey>
    );
}
// #endregion module



// #region exports
export default Key;
// #endregion exports
