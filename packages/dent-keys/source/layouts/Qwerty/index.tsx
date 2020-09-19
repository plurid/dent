// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region external
    import Key from '../../components/Key';
    // #endregion external


    // #region internal
    import {
        StyledQwerty,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface QwertyProperties {
}

const Qwerty: React.FC<QwertyProperties> = (
    properties,
) => {
    // const {
    // } = properties;


    return (
        <StyledQwerty>
            Qwerty
        </StyledQwerty>
    );
}
// #endregion module



// #region exports
export default Qwerty;
// #endregion exports
