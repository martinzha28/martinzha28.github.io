import { useState } from "react";

interface HoverTooltipProps {
    defaultObject: React.ReactNode;
    hoverObject?: React.ReactNode;
    text: string;
    link?: string;
}

const HoverTooltip = ({ defaultObject, hoverObject, text, link }: HoverTooltipProps) => {
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
            style={{ cursor: isHovered ? 'pointer' : 'default' }}
        >
            {isHovered ? hoverObject : defaultObject}
            {isHovered && (
                <div className="absolute inline-block text-xs left-full rounded-lg border-[1px] p-2 m-2
                bg-backgound-light dark:bg-background-dark border-gray-text dark:border-white text-variable-blue-light dark:text-variable-blue-dark">    
                    {text}
                </div>
            )}
        </div>
    );
};

export default HoverTooltip;

/*                 after:content-[''] after:absolute after:top-1/2 after:right-full 
                after:border-x-[5px] after:border-t-[5px] after:border-x-transparent after:ml-[-5px]
                after:border-t-black after:border-r-transparent after:border-b-transparent after:border-l-transparent */