import * as React from "react";

import { useState } from "react";

import Button from "../Button";
import Checkbox from "../Checkbox";

import {
    faAngleRight,
    faAngleLeft,
    faAnglesRight,
    faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const dataSet = ["html", "css", "react", "vue", "angular", "php", ".net", "sql", "laravel"];

const Index = () => {
    const [data, setData] = useState([
        ...dataSet.slice(0, 5).map((item) => ({ name: item, checked: false, leftCol: true })),
        ...dataSet.slice(-4).map((item) => ({ name: item, checked: false, leftCol: false })),
    ]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setData((currentItems) =>
            currentItems.map((item) => (item.name === name ? { ...item, checked } : item))
        );
    };

    const disableButton = (key: number) => {
        switch (key) {
            case 1: // move all to right
                return !data.some((item) => item.leftCol);
            case 2: // move selected to right
                return !data.some((item) => item.checked && item.leftCol);
            case 3: // move selected to left
                return !data.some((item) => item.checked && !item.leftCol);
            case 4: // move all to left
                return !data.some((item) => !item.leftCol);
            default:
                return true;
        }
    };

    const moveSelected = (isInLeft: boolean) => {
        setData((currentItems) => currentItems.map((item) => ({ ...item, leftCol: isInLeft })));
    };

    const moveAll = (isInLeft: boolean) => {
        setData((currentItems) =>
            currentItems.map((item) =>
                item.checked === true && item.leftCol === !isInLeft
                    ? { ...item, checked: false, leftCol: isInLeft }
                    : item
            )
        );
    };

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>column 1</th>
                        <th>action</th>
                        <th>column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {data
                                .filter((item) => item.leftCol)
                                .map(({ name, checked }, i) => (
                                    <Checkbox
                                        text={name}
                                        key={i}
                                        checked={checked}
                                        onChange={onChange}
                                    />
                                ))}
                        </td>

                        <td>
                            <Button
                                icon={faAnglesRight}
                                text='move all to right'
                                disabled={disableButton(1)}
                                onClick={() => {
                                    moveSelected(false);
                                }}
                            />

                            <Button
                                icon={faAngleRight}
                                text='move selected to right'
                                disabled={disableButton(2)}
                                onClick={() => {
                                    moveAll(false);
                                }}
                            />

                            <Button
                                icon={faAngleLeft}
                                text='move selected to left'
                                disabled={disableButton(3)}
                                onClick={() => {
                                    moveAll(true);
                                }}
                            />

                            <Button
                                icon={faAnglesLeft}
                                text='move all to left'
                                disabled={disableButton(4)}
                                onClick={() => {
                                    moveSelected(true);
                                }}
                            />
                        </td>

                        <td>
                            {data
                                .filter((item) => !item.leftCol)
                                .map(({ name, checked }, i) => (
                                    <Checkbox
                                        text={name}
                                        key={i}
                                        checked={checked}
                                        onChange={onChange}
                                    />
                                ))}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Index;
