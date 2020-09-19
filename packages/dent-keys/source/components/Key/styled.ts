// #region imports
    // #region libraries
    import styled from 'styled-components';
    // #endregion libraries
// #endregion imports



// #region module
export interface IStyledKey {
    type: 'single' | 'functional';
}

export const StyledKey = styled.div<IStyledKey>`
    border: 1px solid black;
    display: grid;
    place-content: center;
    user-select: none;
    min-height: 30px;
    min-width: 30px;

    font-family: 'Ubuntu';

    width: ${
        ({
            type,
        }: IStyledKey) => {
            switch (type) {
                case 'single':
                    return '30px';
                default:
                    return '';
            }
        }
    };
`;
// #endregion module
