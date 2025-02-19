import { useState } from "react";

interface HoverTooltipProps {
    defaultObject: React.ReactNode;
    hoverObject?: React.ReactNode;
    text: string;
    link?: string;
    location?: 'right' | 'top';
}

const HoverTooltip = ({ defaultObject, hoverObject, text, link, location = 'right' }: HoverTooltipProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (link) {
            window.open(link, "_blank");
        }
    };

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            style={{ cursor: (isHovered && link) ? 'pointer' : 'default' }}
        >
            {(hoverObject && isHovered) ? hoverObject : defaultObject}
            {isHovered && (
                <div className={`absolute z-30 inline-block text-xs ${location == 'right' ? "left-full" : "bottom-full"} rounded-lg border-[1px] p-2 m-2 whitespace-nowrap
                bg-background-light dark:bg-background-dark border-gray-text dark:border-white text-variable-blue-light dark:text-variable-blue-dark`}>
                    {text}
                    {location == 'right' && <div className="absolute z-40 rotate-45 top-[13px] left-[-5px] bg-background-light dark:bg-background-dark border-l-[1px] border-b-[1px] border-gray-text dark:border-white w-2 h-2"></div>}
                    {location == 'top' && <div className="absolute z-40 rotate-45 top-[29px] left-[25px] bg-background-light dark:bg-background-dark border-r-[1px] border-b-[1px] border-gray-text dark:border-white w-2 h-2"></div>}
                </div>
            )}
        </div>
    );
};

export default HoverTooltip;
