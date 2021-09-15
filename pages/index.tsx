import Head from "next/head";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Slide from "../components/Slide";
import { scss, cond } from "../utilities/scss";

export default function Home() {
    const [open, setOpen] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    return (
        <div className={styles.main_wrap}>
            <Head>
                <title>Frontend Mentor | Room homepage</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <header
                className={`${styles.header} ${
                    open ? styles.header_mobile : null
                }`}
            >
                <button
                    type="button"
                    aria-label="button"
                    className={styles.hamburger_btn}
                    onClick={() => setOpen(!open)}
                >
                    {!open ? (
                        <img
                            src="./images/icon-hamburger.svg"
                            alt="hambuger button"
                        />
                    ) : (
                        <img src="./images/icon-close.svg" alt="close button" />
                    )}
                </button>
                <img
                    src="/images/logo.svg"
                    alt=""
                    className={scss(
                        styles.logo,
                        cond(styles.logo_mobile, open)
                    )}
                />
                <nav className={open ? styles.mobile_menu : styles.menu}>
                    <a href="*"> home</a>
                    <a href="*"> shop</a>
                    <a href="*"> about</a>
                    <a href="*"> contact</a>
                </nav>
            </header>
            <div className={scss(styles.embla, cond(styles.background, open))}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="images/desktop-image-hero-1.jpg"
                                        media="(min-width:900px)"
                                    />
                                    <img
                                        src="images/mobile-image-hero-1.jpg"
                                        alt="image"
                                    />
                                </picture>
                            }
                            header="
                                            Discover innovative ways to decorate"
                            paragraph="
                                            We provide unmatched quality,
                                            comfort, and style for property
                                            owners across the country. Our
                                            experts combine form and function in
                                            bringing your vision to life. Create
                                            a room in your own style with our
                                            collection and make your property a
                                            reflection of you and what you love.
                                        "
                        />
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="images/desktop-image-hero-2.jpg"
                                        media="(min-width:900px)"
                                    />
                                    <img
                                        src="images/mobile-image-hero-2.jpg"
                                        alt="image"
                                    />
                                </picture>
                            }
                            header="
                            We are available all across the globe"
                            paragraph="
                            With stores all over the world, it's
                            easy for you to find furniture for your
                            home or place of business. Locally,
                            we’re in most major cities throughout
                            the country. Find the branch nearest you
                            using our store locator. Any questions?
                            Don't hesitate to contact us today.
                                        "
                        />
                        <Slide
                            image={
                                <picture>
                                    <source
                                        srcSet="images/desktop-image-hero-3.jpg"
                                        media="(min-width:900px)"
                                    />
                                    <img
                                        src="images/mobile-image-hero-3.jpg"
                                        alt="image"
                                    />
                                </picture>
                            }
                            header="
                            Manufactured with the best materials"
                            paragraph="
                            Our modern furniture store provide a
                            high level of quality. Our company has
                            invested in advanced technology to
                            ensure that every product is made as
                            perfect and as consistent as possible.
                            With three decades of experience in this
                            industry, we understand what customers
                            want for their home and office.
                                        "
                        />
                    </div>
                </div>

                <div className={styles.btn_wrap}>
                    <button
                        type="button"
                        aria-label="previous"
                        className={styles.button}
                        onClick={() => emblaApi.scrollPrev()}
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
                        onClick={() => emblaApi.scrollNext()}
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
            </div>
            <section
                aria-label="more info"
                className={scss(
                    styles.bottom_wrap,
                    cond(styles.background, open)
                )}
            >
                <div className={styles.left_wrap}>
                    <img src="images/image-about-dark.jpg" alt="image left" />
                </div>

                <div className={styles.center_wrap}>
                    <div className={styles.wrap_info}>
                        <h3>ABOUT OUR FURNITURE</h3>
                        <p>
                            Our multifunctional collection blends design and
                            function to suit your individual taste. Make each
                            room unique, or pick a cohesive theme that best
                            express your interests and what inspires you. Find
                            the furniture pieces you need, from traditional to
                            contemporary styles or anything in between. Product
                            specialists are available to help you create your
                            dream space.
                        </p>
                    </div>
                </div>

                <div className={styles.right_wrap}>
                    <img src="images/image-about-light.jpg" alt="image left" />
                </div>
            </section>
        </div>
    );
}
