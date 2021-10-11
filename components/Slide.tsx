import styles from "./Slide.module.scss";
import { ReactNode } from "react";

interface Props {
    readonly header: string;
    readonly paragraph: string;
    readonly image: ReactNode;
    readonly onPrev: Function;
    readonly onNext: Function;
}

const Slide: React.FunctionComponent<Props> = props => {
    const { header, paragraph, image, onPrev, onNext } = props;

    return (
        <div className={styles.embla__slide}>
            <div className={styles.top_wrap}>
                <div className={styles.hero_img}>{image}</div>

                <main className={styles.main}>
                    <div className={styles.main_info}>
                        <h1>{header}</h1>
                        <p>{paragraph}</p>

                        <a href="#">
                            SHOP NOW
                            <span>
                                <svg
                                    width="40"
                                    height="12"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                        fill="#000"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className={styles.btn_wrap}>
                        <button
                            type="button"
                            aria-label="previous"
                            className={styles.button}
                            onClick={() => onPrev()}
                        >
                            <svg
                                width="14"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13 0L1 12l12 12"
                                    stroke="#FFF"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>

                        <button
                            type="button"
                            aria-label="next"
                            className={styles.button}
                            onClick={() => onNext()}
                        >
                            <svg
                                width="14"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 0l12 12L1 24"
                                    stroke="#FFF"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Slide;
