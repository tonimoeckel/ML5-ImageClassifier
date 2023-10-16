import React from "react";

interface MasonryLayoutProps {
    columns: number;
    gap: number;
    items: any[];
}

export const MasonryLayout = ({
                                                                columns,
                                                                gap,
                                                                items
                                                            }: MasonryLayoutProps) => {
    return (
        <div style={{display: "flex", justifyContent: 'space-between'}}>
            {new Array(columns).fill(undefined).map((_, colIndex) => {
                return <div
                    className="column"
                    style={{ marginLeft: colIndex > 0 ? gap : 0 }}
                    key={colIndex}
                >
                    {React.Children.toArray(items).flatMap((el, elIndex) => {
                        if (elIndex % columns !== colIndex) {
                            return [];
                        } else {
                            return (
                                <div
                                    className="child"
                                    style={{ marginBottom: gap }}
                                    key={elIndex}
                                >
                                    {el}
                                </div>
                            );
                        }
                    })}
                </div>
            })}
        </div>
    );
};