import React from "react";

type Props = {
    number: number;
    additional?: string;
    text: string;
    defaultHover?: boolean;
};

const CardWithNumber = ({ number, text, additional, defaultHover }: Props) => {
    return (
        <div className={`group p-3 border border-dashed rounded-2xl transition-all ${defaultHover ? "border-opacity-50" : "hover:border-opacity-50 border-opacity-0"}  border-moreblue `}>
            <div className={`${defaultHover ? "bg-lightgrey opacity-100" : "group-hover:bg-lightgrey opacity-70 group-hover:opacity-100"} rounded-md px-4 py-4 text-center transition-all `}>
                <p className="sm:text-2xl font-[600]">
                    {number}{additional && <span className="text-moreblue">{additional}</span>}
                </p>
                <p className=" text-xs sm:text-sm">{text}</p>
            </div>
        </div>
    );
};

export default CardWithNumber;
