const TextSeparator = ({totalRender, text, textCount}) => {
    return (
        <>
            <p className="md:text-sm text-xs">
                {!totalRender ?
                    text.slice(0, textCount).split("").map((char, index) => (
                        <span key={index} className="text-chr">{char}</span>
                    ))
                    :
                    text
                }
            </p>
        </>
    )
}

export default TextSeparator;