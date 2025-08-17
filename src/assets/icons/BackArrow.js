import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width="18px"
            height="20px"
            viewBox="0 0 18 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            fill={'#fff'}
        >
            <G
                strokeWidth={2}
                stroke="#fff"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path
                    d="M0 9h16M16 9L7.938.938M16 9l-8.062 8.062"
                    transform="translate(-219 -26) translate(216 24) matrix(-1 0 0 1 24 0) translate(4 3)"
                />
            </G>
        </Svg>
    )
}

export default SvgComponent
