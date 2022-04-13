import {useState} from "react";
import "./Tabs.css";

export default function Tabs() {
    const [active, setActive] = useState(0);

    const elements = ["Первый", "Второй подлиннее", "Третий", "Третий", "Третий"];

    const onContentClickHandler = (e, index) => {
        setActive(index);
        e.currentTarget.scrollIntoView({
            inline: "center",
            block: "nearest",
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="test-spacer"></div>
            <div className="grid">
                <div className="row">
                    <div className="col col_xs_12">
                        <div className="wrapper">
                            <ul className="list">
                                {elements.map((el, id) => (
                                    <li key={`${el}_${id}`}>
                                        <button
                                            onClick={(e) => onContentClickHandler(e, id)}
                                            className={id === active && "active"}
                                            type="button"
                                        >
                                            {el}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>Some content</div>
                    </div>
                </div>
            </div>
            <div className="test-spacer"></div>
        </>
    );
}
