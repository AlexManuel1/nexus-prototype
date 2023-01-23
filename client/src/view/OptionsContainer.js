import React, { useContext, useEffect, useRef } from 'react';
import OptionButton from './OptionButton';

const OptionsContainer = () => {
    return (
        <div id="shapeContainer">
            <OptionButton selection="cursor" />
            <OptionButton selection="rectangle" />
        </div>
    );
};

export default OptionsContainer;