import React, { useState, useRef, useEffect } from 'react';

const Selector = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const self = useRef(null);

    useEffect(() => {
        document.addEventListener('touchstart', e => {
            if (e.target === self.current) {
                return;
            }

            setMenuOpen(false);
        });
    }, []);

    const showOptions = () => {

        return props.options
            .filter(option => option.value !== props.selectedValue)
            .map(option => {
            return (
                <div
                    className="option"
                    onClick={() => props.onSelect(option.value)}
                    key={option.value}
                >
                    {option.display}
                </div>
            );
        });
    };

    const displayValue = props.options.find(option => option.value === props.selectedValue);

    return (
        <div className="selector">
            <div className="selector-name">
                {props.name}
            </div>
            <div
                className="selector-menu"
                onClick={() => setMenuOpen(!menuOpen)}
                ref={self}
            >
                <div className="selector-selected">
                    {displayValue.display}
                </div>
                <div className="selector-options">
                    {menuOpen && showOptions()}
                </div>
            </div>
        </div>
    );

};

export default Selector;