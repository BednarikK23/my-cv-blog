import React from 'react';
import categoryColors from './styles';

export default function TagRow({tags}) {
    return (
        <div className={"tags-container"}>
            {tags.map((tag, index) => (
                <span className={"tag"} key={index} style={{backgroundColor: categoryColors[tag]}}>
                    {tag.toUpperCase()}
                </span>
            ))}
        </div>
    );
}