import React from "react";
import './Header.css';

function Header() {
    return (
        <>
            <header className="site-header site-header-full">
                <div className="site-header-brand-banner-container">
                    <div
                        id="vatSelectionPop"
                        role="dialog"
                        aria-labelledby="vatPopTitle"
                        className=""
                    >
                        <button
                            data-section="VAT Pop-Up"
                            data-position={1}
                            data-translation="Pop-Up Closed"
                            className="vat-pop-close-button"
                            id="vatSelectionCloseButton"
                            tabIndex={-1}
                        >
                            <img
                                src="https://swan.prod.merch.vpsvc.com/v2/icons/close.85e7f885b43a4696861ed533934f3b01.svg"
                                alt=""
                                className="swan-icon swan-icon-skin-standard swan-icon-type-close"
                            />
                            <span className="swan-visually-hidden" />
                        </button>
                        <h2
                            id="vatPopTitle"
                            className="vat-pop-title swan-heading swan-mb-0 swan-text-2 swan-font-weight-bold swan-text-center"
                        ></h2>
                        <button
                            aria-describedby="vatPopExclusiveLabel"
                            data-section="VAT Pop-Up"
                            data-position={2}
                            data-translation="Pop-Up Clicked:See prices ex. 20% VAT"
                            id="vatSelectionExclusionButton"
                            tabIndex={-1}
                            type="button"
                            className="swan-button swan-button-skin-primary swan-button-mini swan-mt-5"
                        />
                        <button
                            aria-describedby="vatPopInclusiveLabel"
                            data-section="VAT Pop-Up"
                            data-position={3}
                            data-translation="Pop-Up Clicked:See prices inc. 20% VAT"
                            id="vatSelectionInclusionButton"
                            tabIndex={-1}
                            type="button"
                            className="swan-button swan-button-skin-secondary swan-button-mini swan-mt-1"
                        />
                    </div>
                </div>
                <div className="site-header-main-container swan-bounded-content p-0">
                    <div className="site-header-main full-width-container full-width-container-capped">
                        <div className="site-header-logo-and-tagline">
                            <div className="swan-visible-xs swan-visible-sm">
                                <button className="site-header-navburger swan-button-skin-unstyled">
                                    <span className="swan-visually-hidden">Site Navigation</span>
                                    <span aria-hidden="true" data-dialog-show="navigation-dialog">
                                        <span className="navburger">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <line
                                                    x1="5.75"
                                                    y1="9.25"
                                                    x2="18.25"
                                                    y2="9.25"
                                                    stroke="black"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                                <line
                                                    x1="5.75"
                                                    y1="15.25"
                                                    x2="18.25"
                                                    y2="15.25"
                                                    stroke="black"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                </button>
                            </div>
                            <div className="swan-visible-xs">
                                <button className="swan-button-skin-unstyled mobile-search-toggle">
                                    <span className="swan-visually-hidden">Search</span>
                                    <span aria-hidden="true" data-dialog-show="navigation-dialog">
                                        <img
                                            src="https://swan.prod.merch.vpsvc.com/v2/icons/search.3594f845fd4e26d76fd4cf3b291a9e7e.svg"
                                            alt=""
                                            className="swan-icon swan-icon-size-20p swan-icon-skin-standard swan-icon-type-search"
                                        />
                                    </span>
                                </button>
                            </div>
                            <div className="site-header-logo">
                                <a
                                    aria-label="Return to Home Page"
                                    data-fidoprefetchhint="EAGER"
                                    data-position={0}
                                    data-section="Header"
                                    data-translation="homePage"
                                    href="index.html"
                                >
                                    <span aria-hidden="true">
                                        <span className="logo-fullsize">
                                            <img src="/assets/images/DRD logo.png" width={150} alt="" />
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="swan-visible-xs">
                            <div className="mobile-search-veil" />
                        </div>
                        <div className="site-header-search-container">
                            <div className="swan-visible-xs">
                                <button className="swan-button-skin-unstyled close-search">
                                    <span className="swan-visually-hidden">Close</span>
                                    <span aria-hidden="true" data-dialog-show="navigation-dialog">
                                        <svg
                                            width={17}
                                            height={16}
                                            viewBox="0 0 17 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <line
                                                x1="14.25"
                                                y1="7.94995"
                                                x2="3.75"
                                                y2="7.94995"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 4L3 8C3 8 5.47619 10.4762 7 12"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="search-context-inner-wrapper">
                                <div
                                    className="search-application search-results-analytics-container"
                                    data-search-application-name="SearchBarFlyout"
                                >
                                    <div role="group">
                                        <search>
                                            <form className="site-header-search-form" action="#">
                                                <label
                                                    className="swan-visually-hidden swan-label-required"
                                                    htmlFor="siteHeaderSearch-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                                >
                                                    Search
                                                </label>
                                                <div className="search-input">
                                                    <input
                                                        type="search"
                                                        defaultValue=""
                                                        id="siteHeaderSearch-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                                        required=""
                                                        aria-required="true"
                                                        aria-autocomplete="list"
                                                        placeholder="Search"
                                                        autoComplete="off"
                                                        aria-controls="siteHeaderSearchFlyoutLabel-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                                        aria-owns="siteSearchResultsListBox-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                                        className="swan-polyfill-empty search-bar-input site-header-search swan-input"
                                                    />
                                                    <button
                                                        type="submit"
                                                        aria-label="Search"
                                                        className="search-input-submit swan-button swan-button-skin-secondary"
                                                    >
                                                        <img
                                                            src="https://swan.prod.merch.vpsvc.com/v2/icons/search.3594f845fd4e26d76fd4cf3b291a9e7e.svg"
                                                            alt=""
                                                            className="search-submit-icon swan-icon swan-icon-skin-standard swan-icon-type-search"
                                                        />
                                                    </button>
                                                </div>
                                            </form>
                                        </search>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="site-header-links" aria-label="User Functions">
                            <ul
                                role="list"
                                style={{ alignItems: "flex-start" }}
                                className="swan-list swan-list-skin-minimal swan-display-flex"
                            >
                                <li className="icon-alignment swan-p-0">
                                    <div className="site-header-link-menu nohover">
                                        <a
                                            className="site-header-link site-header-link-content site-header-link-menu-top-item"
                                            aria-label="Help is here"
                                            data-position={0}
                                            data-section="Header"
                                            data-translation="contactUs"
                                            href="javascript:void(0)"
                                        >
                                            <span className="site-header-link-icon">
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.5472 4C9.31915 4 5.04166 8.27749 5.04166 13.5055C5.04166 15.4066 5.59615 17.2285 6.62592 18.7336L5.04166 22.4566C4.88324 22.7734 5.20009 23.0903 5.59615 23.0111L9.31915 21.4268C10.8242 22.4566 12.6461 23.0111 14.5472 23.0111C19.7752 23.0111 24.0527 18.7336 24.0527 13.5055C24.0527 8.27749 19.7752 4 14.5472 4Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit={10}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <ellipse
                                                        cx="14.548"
                                                        cy="17.4679"
                                                        rx="0.792128"
                                                        ry="0.792127"
                                                        fill="black"
                                                    />
                                                    <path
                                                        d="M14.5474 15.4073L14.4682 13.8231C15.7356 13.8231 16.8446 12.7933 16.8446 11.4467C16.8446 10.1001 15.8148 9.07031 14.4682 9.07031C13.1216 9.07031 12.0918 10.1001 12.0918 11.4467H12.171C12.171 10.1001 13.28 9.07031 14.5474 9.07031C15.8148 9.07031 16.9238 10.1793 16.9238 11.4467C16.9238 12.7933 15.894 13.8231 14.5474 13.8231V15.4073Z"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit={10}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="swan-visible-lg swan-visible-xl">
                                                <span className="site-header-link-text swan-text-1">
                                                    <span className="site-header-link-primary">
                                                        Help is here
                                                    </span>
                                                    <span className="site-header-link-subtext swan-text-dark-grey">
                                                        1.866.207.4955
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="icon-alignment swan-p-0">
                                    <div className="site-header-link-menu swan-hidden-xs">
                                        <a
                                            className="site-header-link site-header-link-content site-header-link-menu-top-item"
                                            aria-label="My Projects"
                                            data-position={0}
                                            data-section="Header"
                                            data-translation="myProjects"
                                            href="javascript:void(0)"
                                        >
                                            <span className="site-header-link-icon site-header-icon-myprojects">
                                                <svg
                                                    width={22}
                                                    height={17}
                                                    viewBox="0 0 22 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M21.5 13.875C21.5 14.8694 21.0689 15.5634 20.4851 15.9837C19.9396 16.3764 19.3075 16.5 18.875 16.5H2.625C1.63056 16.5 0.936647 16.0689 0.516349 15.4851C0.123586 14.9396 0 14.3075 0 13.875V1.75C0 0.783502 0.783502 0 1.75 0H7.74469C8.30074 0 8.82369 0.264253 9.15354 0.711902L9.55003 1.25H19.75C20.7165 1.25 21.5 2.0335 21.5 3V13.875ZM1.5 1.75C1.5 1.61193 1.61193 1.5 1.75 1.5H7.74469C7.82413 1.5 7.89884 1.53775 7.94596 1.6017L10.8465 5.5381C11.1763 5.98575 11.6993 6.25 12.2553 6.25H19.75C19.8885 6.25 20 6.36192 20 6.49952V13.875C20 14.3806 19.8061 14.6241 19.6086 14.7663C19.3729 14.9361 19.0675 15 18.875 15H2.625C2.11944 15 1.87585 14.8061 1.73365 14.6086C1.56391 14.3729 1.5 14.0675 1.5 13.875V1.75ZM20 4.76772V3C20 2.86193 19.8881 2.75 19.75 2.75H10.6553L12.054 4.6483C12.1012 4.71225 12.1759 4.75 12.2553 4.75H19.75C19.8349 4.75 19.9183 4.75604 20 4.76772Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="swan-visible-lg swan-visible-xl">
                                                <span className="site-header-link-text swan-text-1">
                                                    <span className="site-header-link-primary">
                                                        My Projects
                                                    </span>
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="icon-alignment swan-p-0">
                                    <div
                                        id="siteHeaderAccountMFEContainer"
                                        className="site-header-link-account site-header-link-menu swan-hidden-xs"
                                    >
                                        <a
                                            className="site-header-link site-header-link-content site-header-link-menu-top-item"
                                            aria-label="Account"
                                            data-position={0}
                                            data-section="Header"
                                            data-translation="myAccount"
                                            href="javascript:void(0)"
                                        >
                                            <span className="site-header-link-icon">
                                                <svg
                                                    width={28}
                                                    height={28}
                                                    viewBox="0 0 28 28"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="13.4197"
                                                        cy="10.8738"
                                                        r="4.37382"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        d="M5.75586 22.5005C5.75586 21.5482 5.9541 20.6053 6.33925 19.7255C6.7244 18.8457 7.28893 18.0463 8.0006 17.3729C8.71227 16.6996 9.55715 16.1654 10.487 15.801C11.4168 15.4366 12.4134 15.249 13.4199 15.249C14.4263 15.249 15.4229 15.4366 16.3528 15.801C17.2826 16.1654 18.1275 16.6996 18.8392 17.3729C19.5509 18.0463 20.1154 18.8457 20.5005 19.7255C20.8857 20.6053 21.0839 21.5482 21.0839 22.5005"
                                                        stroke="black"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            <div className="swan-visible-lg swan-visible-xl">
                                                <span className="site-header-link-text site-header-link-text-signin swan-text-1">
                                                    Account
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="icon-alignment swan-p-0">
                                    <div className="site-header-link-cart site-header-link-menu nohover">
                                        <a
                                            data-position={0}
                                            data-section="Header"
                                            data-translation="Cart"
                                            data-testid="cart-redirect-link"
                                            className="site-header-link swan-link swan-link-skin-unstyled"
                                        >
                                            <div
                                                className="cart-item-count-container"
                                                data-testid="mini-cart-auth-wrapper-container"
                                            >
                                                <div
                                                    className="cart-item-count"
                                                    data-testid="mini-cart-auth-wrapper"
                                                >
                                                    <div
                                                        style={{ alignItems: "center" }}
                                                        className="swan-display-flex"
                                                    >
                                                        <div className="cart-icon" data-testid="cart-icon">
                                                            <svg
                                                                width={28}
                                                                height={29}
                                                                viewBox="0 0 28 29"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g clipPath="url(#clip0)">
                                                                    <path
                                                                        d="M22 8.09863H6V24.7986H22V8.09863Z"
                                                                        stroke="black"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit={10}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M11.5 10.6002V5.5002C11.5 4.8002 12.1 4.2002 12.8 4.2002H15.4C16.1 4.2002 16.7 4.8002 16.7 5.5002V10.7002"
                                                                        stroke="black"
                                                                        strokeWidth="1.5"
                                                                        strokeMiterlimit={10}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0">
                                                                        <rect
                                                                            width={24}
                                                                            height={24}
                                                                            fill="white"
                                                                            transform="translate(2 2.5)"
                                                                        ></rect>
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <div className="cart-label" data-testid="cart-label">
                                                            <div className="swan-visible-lg swan-visible-xl">
                                                                <div className="swan-text-1">Cart</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    {/* ============================ Large Screen ======================= */}
                    <nav className="navbar large_screen_PC d-none d-md-block  navbar-expand-lg navbar-light bg-light p-2">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav nav-tabs" id="navId" role="tablist">
                                    {/* 1st */}
                                    <li className="nav-item " id="menu_label_1">
                                        <a
                                            className="nav-link  icon"
                                            href="Car Wraps/Car_Wraps.html"
                                            data-target="#dropdownMenu1"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Car Wraps
                                        </a>
                                        <div className="set_dropdwon" id="dropdown_menu_label_1">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="Car Wraps/Spot_Graphics_heading.html">
                                                            <h6>Spot Graphics</h6>
                                                        </a>
                                                        <a href="Car Wraps/Custom_Spot_Graphics.html">
                                                            Custom Spot Graphics
                                                        </a>
                                                        <a href="Car Wraps/Fleet_Spot_Graphics.html">
                                                            Fleet Spot Graphics
                                                        </a>
                                                        <a href="Car Wraps/Basic_Spot_Graphics.html">
                                                            Basic Spot Graphics
                                                        </a>
                                                        <a href="Car Wraps/Trailer_Spot_Graphics.html">
                                                            Trailer Spot Graphics
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="Car Wraps/Partial_Wraps_heading.html">
                                                            <h6>Partial Wraps</h6>
                                                        </a>
                                                        <a href="Car Wraps/1by8_wrap.html">1/8 Wrap</a>
                                                        <a href="Car Wraps/1by4_wrap.html">1/4 Wrap</a>
                                                        <a href="Car Wraps/1by2_wrap.html">1/2 Wrap</a>
                                                        <a href="Car Wraps/3by4_wrap.html">3/4 Wrap</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="Car Wraps/Full_Wraps_heading.html">
                                                            <h6>Full Wraps</h6>
                                                        </a>
                                                        <a href="Car Wraps/Custom_Full_Wrap.html">
                                                            Custom Full Wrap
                                                        </a>
                                                        <a href="Car Wraps/Full_Color_Change_Wrap.html">
                                                            Full Color Change Wrap
                                                        </a>
                                                        <a href="Car Wraps/Commercial_Full_Wrap.html">
                                                            Commercial Full Wrap
                                                        </a>
                                                        <a href="Car Wraps/Fleet_Full_Wrap_with_One_Way_Vision.html">
                                                            Fleet Full Wrap with One-Way Vision
                                                        </a>
                                                        <a href="Car Wraps/Full_One_Way_Vision.html">
                                                            Full One-Way Vision
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="Car Wraps/Design_and_Customization.html">
                                                            <h6>Design and Customization</h6>
                                                        </a>
                                                        <a href="Car Wraps/Upload_Your_Design.html">
                                                            Upload Your Design
                                                        </a>
                                                        <a href="Car Wraps/Upload_Your_Design.html" />
                                                        Make a Design
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 2nd */}
                                    <li className="nav-item bg-light" id="menu_label_2">
                                        <a
                                            className="nav-link icon text-decoration-none"
                                            href="Store Fronts/Store_fronts.html"
                                            data-target="#dropdownMenu2"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Store fronts
                                        </a>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_2">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a
                                                            href="Store Fronts/Vinyl_Types_Applications_heading.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Vinyl Types and Applications</h6>
                                                        </a>
                                                        <a
                                                            href="Store Fronts/Frosted_Glass_Vinyl.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Frosted Glass Vinyl
                                                        </a>
                                                        <a
                                                            href="Store Fronts/Full_Coverage_One_Way_Vision_Vinyl.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Full Coverage One-Way Vision Vinyl
                                                        </a>
                                                        <a
                                                            href="Store Fronts/Color_Cut_Out_Vinyl.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Color Cut-Out Vinyl
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a
                                                            href="Store Fronts/Design_and_Customization.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Design and Customization</h6>
                                                        </a>
                                                        <a
                                                            href="Store Fronts/Upload_Your_Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Upload Your Design
                                                        </a>
                                                        <a
                                                            href="Store Fronts/Make_a_Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Make a Design
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 3rd */}
                                    <li className="nav-item " id="menu_label_3">
                                        <a
                                            className="nav-link icon "
                                            href="window tints/window-tints.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            window tints
                                        </a>
                                        <div className="set_dropdwon" id="dropdown_menu_label_3">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="window tints/window-tints_heading.html">
                                                            <h6 className="text-start">Window Tint</h6>
                                                        </a>
                                                        <a href="window tints/Car Window Tints.html">
                                                            Car Window Tints
                                                        </a>
                                                        <a href="window tints/Fleet Window Tints.html">
                                                            Fleet Window Tints
                                                        </a>
                                                        <a href="window tints/Commercial Site-Store Window Tints.html">
                                                            Commercial Site/Store Window Tints
                                                        </a>
                                                        <a href="window tints/House Window Tints.html">
                                                            House Window Tints
                                                        </a>
                                                        <a href="window tints/Custom Window Tints.html">
                                                            Custom Window Tints
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="window tints/PRE-CUT PATTERNS_heading.html">
                                                            <h6 className="text-start">Pre-Cut Car Patterns</h6>
                                                        </a>
                                                        <a href="window tints/Custom Window Tints.html">
                                                            Custom Window Tints
                                                        </a>
                                                        <a href="window tints/Shop All Patterns.html">
                                                            Shop All Patterns
                                                        </a>
                                                        <a href="window tints/All-around-Front-Back-Sides.html">
                                                            All around Front, Back, and Sides
                                                        </a>
                                                        <a href="window tints/Singles-Piece-Visor-Strip-Sunroof.html">
                                                            Single Piece Visor Strip, Sunroof
                                                        </a>
                                                        <a href="window tints/Sides-Front.html">Sides + Front</a>
                                                        <a href="window tints/Sides-Back.html">Sides + Back</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        {/* Add more links if necessary, or keep this section empty if not needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 4th */}
                                    <li className="nav-item" id="menu_label_4">
                                        <a
                                            className="nav-link icon text-decoration-none"
                                            href="Advertising and office maketing/Advertising_office_maketing.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Advertising and Marketing
                                        </a>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_4">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a
                                                            href="Advertising and office maketing/Print Advertising_heading.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Print Advertising</h6>
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Flyers.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Flyers
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Posters.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Posters
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Brochures.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Brochures
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Catalogs.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Catalogs
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Promotional Items_heading.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Promotional Items</h6>
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Business Cards.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Business Cards
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Branded Merchandise.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Branded Merchandise
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Pens.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Pens
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Notebooks.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Notebooks
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a
                                                            href="Advertising and office maketing/Signage and Displays_heading.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Signage and Displays</h6>
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Posters.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Posters
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/PopUp Banners.html"
                                                            className="text-decoration-none"
                                                        >
                                                            PopUp Banners
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Window Decals.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Window Decals
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Floor Graphics.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Floor Graphics
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Directional Signs.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Directional Signs
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Branded Stationery.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Branded Stationery
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Desk Accessories.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Desk Accessories
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Corporate Gifts.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Corporate Gifts
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Trade Show Giveaways.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Trade Show Giveaways
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a
                                                            href="Advertising and office maketing/Promotional Materials_heading.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Design Services</h6>
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Logo Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Logo Design
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Custom Graphics.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Custom Graphics
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Brand Guidelines.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Brand Guidelines
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Business Card Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Business Card Design
                                                        </a>
                                                        <a
                                                            href="Advertising and office maketing/Marketing Collateral Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Marketing Collateral Design
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 5th */}
                                    <li className="nav-item" id="menu_label_5">
                                        <a
                                            className="nav-link icon text-decoration-none"
                                            href="signs-posters/signs-posters.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Signs and Banners
                                        </a>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_5">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Banner Types</h6>
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-decoration-none"
                                                        >
                                                            Vinyl Banners
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-decoration-none"
                                                        >
                                                            Mesh Banners
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-decoration-none"
                                                        >
                                                            Construction Site Mesh Fence Banners
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-decoration-none"
                                                        >
                                                            Pole Banners
                                                        </a>
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="text-decoration-none"
                                                        >
                                                            Truck Frame Banners
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Signage Solutions</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Yard Signs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Sidewalk AFrame Signs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Posters
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Solid Aluminum Signs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Acrylic Signs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Cardstock Signs
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 6th */}
                                    <li className="nav-item " id="menu_label_6">
                                        <a
                                            className="nav-link icon "
                                            href="Apparel and Merch/Apparel_Merch.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Apparel &amp; Merch
                                        </a>
                                        <div className="set_dropdwon" id="dropdown_menu_label_6">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="">
                                                            <h6>Custom Apparel</h6>
                                                        </a>
                                                        <a href="">T-Shirts</a>
                                                        <a href="">Hoodies and Sweetshirts</a>
                                                        <a href="">Polo shirts</a>
                                                        <a href="">Caps &amp; Hats</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="">Jackets</a>
                                                        <a href="">Workwear</a>
                                                        <a href="">
                                                            <h6>Permotional Merchandies</h6>
                                                        </a>
                                                        <a href="">Tote Bags</a>
                                                        <a href="">Muge &amp; Drinkware</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="">Phone Cases</a>
                                                        <a href="">Key Chain</a>
                                                        <a href="">Stickers</a>
                                                        <a href="">Notebook &amp; Journals</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 7th */}
                                    <li className="nav-item" id="menu_label_7">
                                        <a
                                            className="nav-link icon text-decoration-none"
                                            href="Event Promotional product/Event_Promotional_product.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Event Promotion &amp; Production
                                        </a>
                                        <div className="set_dropdwon bg-light" id="dropdown_menu_label_7">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Printed Materials</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Pens
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Mugs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Fitted Table Covers
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Table Throws
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Table Runner
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Banners &amp; Graphics</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            RollUp Retractable Banners
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            XFrame Banners
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Indoor Floor Graphics
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Outdoor Rough Surface Graphics
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Carpet Graphics
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Flags</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Feather Flags
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Teardrop Flags
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Regular Flags
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Event Tents/Setups</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Event Setup
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Tents
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Table Covers
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Retractable Banners
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Flags
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <a href="">
                                                            <h6>Promotional Products</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Promotional Products
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Custom Labels
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Gender Reveal</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Event Setup
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Engaging Products
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Decorations
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Reveal Surprises
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Custom Graphics
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Gifts
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 8th */}
                                    <li className="nav-item  bg-light" id="menu_label_8">
                                        <a
                                            className="nav-link icon "
                                            href="invitations gifts and stationarys/invitations_gifts_stationarys.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            invitations gifts and stationarys,
                                        </a>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_8">
                                            <div className="container-fluid">
                                                <div className="row text-start">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Invitation Cards</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Wedding Invitations
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Birthday Invitations
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Event Invitations
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Save the Date Cards
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            RSVP Cards
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Personalized Gifts</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Customized Mugs
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Personalized Keychains
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Custom Tote Bags
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Personalized Notebooks
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Engraved Pens
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="#" className="text-decoration-none">
                                                            <h6>Stationery Products</h6>
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Custom Notepads
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Greeting Cards
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Letterhead
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Envelopes
                                                        </a>
                                                        <a href="#" className="text-decoration-none">
                                                            Business Cards
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        {/* Additional content can go here if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 9th  */}
                                    <li className="nav-item " id="menu_label_9">
                                        <a
                                            className="nav-link icon "
                                            href="website/Website.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            websites by done Right
                                        </a>
                                        <div className="set_dropdwon" id="dropdown_menu_label_9">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Design Services</a>
                                                        <a href="javascript:void(0)">QR Code Generator </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Wedding Design Services</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Design</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Maker</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 10th */}
                                    <li className="nav-item " id="menu_label_9">
                                        <a
                                            className="nav-link icon "
                                            href="Logo_design.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Logo and Branding&nbsp;design&nbsp; help
                                        </a>
                                        <div className="set_dropdwon" id="dropdown_menu_label_9">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Design Services</a>
                                                        <a href="javascript:void(0)">QR Code Generator </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Wedding Design Services</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Design</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Maker</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* ================================ Small Screen =============================== */}
                    <nav className="navbar Small_screen_mobile  d-block d-md-none  navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav nav-tabs" id="navId" role="tablist">
                                    {/* 1st */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link  icon"
                                            href="#"
                                            data-target="#dropdownMenu1"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Car Wraps
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu1">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="Car Wraps\Basic spot graphics.html">
                                                            Basic spot graphics
                                                        </a>
                                                        <a href="Car Wraps\Partial wrap.html">Partial wrap</a>
                                                        <a href="Car Wraps\Basic spot graphics.html">
                                                            Spot graphics
                                                        </a>
                                                        <a href="car wraps/full  warp.html">Full wrap</a>
                                                        <a href="car wraps/window perf.html">Window perf</a>
                                                        <a href="car wraps/tailgate wrap.html">Tailgate wrap</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="car wraps/full  warp.html">Full wrap</a>
                                                        <a href="javascript:void(0)">1/8 wrap</a>
                                                        <a href="javascript:void(0)">1/4 wrap</a>
                                                        <a href="javascript:void(0)">1/2 wrap</a>
                                                        <a href="javascript:void(0)">3/4 wrap</a>
                                                        <a href="Car Wraps\Basic spot graphics.html">
                                                            Spot graphics
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 2nd */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link  icon"
                                            href="#"
                                            data-target="#dropdownMenu2"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Store fronts{" "}
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Frosted glass vinyl</a>
                                                        <a href="javascript:void(0)">color vinyl</a>
                                                    </div>
                                                    {/* <div class="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                              <a href="javascript:void(0)">Envelopes
                                                  &amp;
                                                  Mailing</a><a href="javascript:void(0)">Notes,
                                                  Pads
                                                  &amp; Journals</a><a href="javascript:void(0)">Bookmarks</a><a
                                                  href="javascript:void(0)">Checks</a><a
                                                  href="javascript:void(0)">Letterhead</a><a
                                                  href="javascript:void(0)">Carbonless
                                                  Forms</a><a href="javascript:void(0)">Business
                                                  Invitations</a><a href="javascript:void(0)">Mugs</a><a
                                                  href="javascript:void(0)">Pens,
                                                  Pencils
                                                  &amp;
                                                  Markers</a>
                                          </div>
                                          <div class="col-sm-3 gap-2 d-flex flex-column">
                                              <a href="javascript:void(0)">Office
                                                  &amp;
                                                  Indoor
                                                  Signs</a><a href="javascript:void(0)">Desk
                                                  Accessories</a><a href="javascript:void(0)">Postcard
                                                  Mailing Services</a><a href="javascript:void(0)">Foil
                                                  Accent Postcards</a><a href="javascript:void(0)">Key
                                                  Card
                                                  Holders</a><a href="javascript:void(0)">Gift
                                                  Card
                                                  Holders</a><a href="javascript:void(0)">Embossed
                                                  Gloss Rack Cards</a><a href="javascript:void(0)">Dater
                                                  Stamps</a>
                                          </div>
                                          <div class="col-sm-3 gap-2 d-flex flex-column">
                                              <a href="javascript:void(0)">Small
                                                  (4.2 x
                                                  5.5)</a><a href="javascript:void(0)">Standard
                                                  (4x6)</a><a href="javascript:void(0)">Large
                                                  (5x7)</a><a href="javascript:void(0)">Jumbo
                                                  (6x11)</a><a href="javascript:void(0)">Flyers</a><a
                                                  href="javascript:void(0)">Brochures
                                              </a><a href="javascript:void(0)">Presentation
                                                  Folders</a><a href="javascript:void(0)">Notebooks</a><a
                                                  href="javascript:void(0)">Teacher
                                                  Stamps</a><a href="javascript:void(0)">Free
                                                  Business Sample Kit</a>
                                          </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 3rd */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            print advertising
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Hanging Banners</a>
                                                        <a href="javascript:void(0)">Standing Banners</a>
                                                        <a href="javascript:void(0)">Flags</a>
                                                        <a href="javascript:void(0)">Yard Signs</a>
                                                        <a href="javascript:void(0)">Posters</a>
                                                        <a href="javascript:void(0)">Rigid Signs &amp; Boards</a>
                                                        <a href="javascript:void(0)">
                                                            Canvas Print &amp; Wall Art
                                                        </a>
                                                        <a href="javascript:void(0)">Car Signs</a>
                                                        <a href="javascript:void(0)">Door &amp; Desk Signs</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">A-Frame Signs</a>
                                                        <a href="javascript:void(0)">Table Covers</a>
                                                        <a href="javascript:void(0)">Tabletop Displays</a>
                                                        <a href="javascript:void(0)">Displays &amp; Tents</a>
                                                        <a href="javascript:void(0)">Wall &amp; Window Decals</a>
                                                        <a href="javascript:void(0)">Signage Accessories</a>
                                                        <a href="javascript:void(0)">Outdoor Signs</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Trade Show</a>
                                                        <a href="javascript:void(0)">Real Estate Signs</a>
                                                        <a href="javascript:void(0)">Political Signs</a>
                                                        <a href="javascript:void(0)">Wedding &amp; Party Signs</a>
                                                        <a href="javascript:void(0)">Vinyl Banners</a>
                                                        <a href="javascript:void(0)">Car Door Magnets</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Car Window Decals</a>
                                                        <a href="javascript:void(0)">
                                                            Shop New Arrivals in Signage
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 4th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            print advertising &amp; office marketing materials
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Sticker Singles</a>
                                                        <a href="javascript:void(0)">Sheet Stickers</a>
                                                        <a href="javascript:void(0)">Car Stickers</a>
                                                        <a href="javascript:void(0)">
                                                            Wall, Floor &amp; Window Stickers
                                                        </a>
                                                        <a href="javascript:void(0)">Roll Labels</a>
                                                        <a href="javascript:void(0)">Shipping Labels</a>
                                                        <a href="javascript:void(0)">Sheet Labels</a>
                                                        <a href="javascript:void(0)">Tags</a>
                                                        <a href="javascript:void(0)">Stamps &amp; Ink</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            Shipping Boxes &amp; Mailers
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Product Boxes &amp; Pouches
                                                        </a>
                                                        <a href="javascript:void(0)">Shopping &amp; Gift Bags</a>
                                                        <a href="javascript:void(0)">Food Packaging</a>
                                                        <a href="javascript:void(0)">Packaging Insert Cards</a>
                                                        <a href="javascript:void(0)">Packaging Accessories</a>
                                                        <a href="javascript:void(0)">Circle Stickers</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Rectangle Stickers</a>
                                                        <a href="javascript:void(0)">Square Stickers</a>
                                                        <a href="javascript:void(0)">Oval Stickers</a>
                                                        <a href="javascript:void(0)">Die-Cut Sheet Stickers</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Die-Cut Sticker Singles</a>
                                                        <a href="javascript:void(0)">Kiss-Cut Stickers</a>
                                                        <a href="javascript:void(0)">Face Stickers</a>
                                                        <a href="javascript:void(0)">Packaging Samples</a>
                                                        <a href="javascript:void(0)">Sticker Singles</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 5th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            signs banners &amp; posters
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">T-shirts</a>
                                                        <a href="javascript:void(0)">Tank Tops</a>
                                                        <a href="javascript:void(0)">Polo Shirts</a>
                                                        <a href="javascript:void(0)">Dress Shirts</a>
                                                        <a href="javascript:void(0)">Jackets &amp; Vests</a>
                                                        <a href="javascript:void(0)">Hoodies &amp; Sweatshirts</a>
                                                        <a href="javascript:void(0)">Pants &amp; Shorts</a>
                                                        <a href="javascript:void(0)">Aprons</a>
                                                        <a href="javascript:void(0)">
                                                            Socks, Gloves &amp; Scarves
                                                        </a>
                                                        <a href="javascript:void(0)">Totes</a>
                                                        <a href="javascript:void(0)">Backpacks</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Drawstring Bags</a>
                                                        <a href="javascript:void(0)">Cooler Bags</a>
                                                        <a href="javascript:void(0)">Gym &amp; Duffel Bags</a>
                                                        <a href="javascript:void(0)">Laptop Bags</a>
                                                        <a href="javascript:void(0)">Fanny Packs</a>
                                                        <a href="javascript:void(0)">Paper Bags</a>
                                                        <a href="javascript:void(0)">Caps</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Beanies</a>
                                                        <a href="javascript:void(0)">Visors</a>
                                                        <a href="javascript:void(0)">Bucket Hats</a>
                                                        <a href="javascript:void(0)">Soccer</a>
                                                        <a href="javascript:void(0)">Basketball</a>
                                                        <a href="javascript:void(0)">Male</a>
                                                        <a href="javascript:void(0)">Female</a>
                                                        <a href="javascript:void(0)">Kids</a>
                                                        <a href="javascript:void(0)">Long Sleeve</a>
                                                        <a href="javascript:void(0)">Short Sleeve</a>
                                                        <a href="javascript:void(0)">Crew-neck</a>
                                                        <a href="javascript:void(0)">V-neck</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Backside Printing</a>
                                                        <a href="javascript:void(0)">Quick Dry</a>
                                                        <a href="javascript:void(0)">100% Cotton</a>
                                                        <a href="javascript:void(0)">New Arrivals</a>
                                                        <a href="javascript:void(0)">Best Sellers</a>
                                                        <a href="javascript:void(0)">No Minimum Order Quantity</a>
                                                        <a href="javascript:void(0)">Express Shipping</a>
                                                        <a href="javascript:void(0)">Groups &amp; Teams</a>
                                                        <a href="javascript:void(0)">Clothing &amp; Bags</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 6th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Apparel &amp; Merch
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Mugs</a>
                                                        <a href="javascript:void(0)">Water Bottles</a>
                                                        <a href="javascript:void(0)">
                                                            Travel Mugs, Tumblers &amp; Cups
                                                        </a>
                                                        <a href="javascript:void(0)">Glassware</a>
                                                        <a href="javascript:void(0)">Drinkware Gift Sets</a>
                                                        <a href="javascript:void(0)">Drinkware Accessories</a>
                                                        <a href="javascript:void(0)">
                                                            Pens, Pencils &amp; Markers
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            Notes, Pads &amp; Journals
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Badge Holders &amp; Lanyards
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Desk &amp; Workspace Accessories
                                                        </a>
                                                        <a href="javascript:void(0)">Mouse Pads</a>
                                                        <a href="javascript:void(0)">Music &amp; Audio</a>
                                                        <a href="javascript:void(0)">USB Flash Drives</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            Chargers &amp; Power Banks
                                                        </a>
                                                        <a href="javascript:void(0)">Tech Accessories</a>
                                                        <a href="javascript:void(0)">Candy</a>
                                                        <a href="javascript:void(0)">Chocolate</a>
                                                        <a href="javascript:void(0)">Snacks</a>
                                                        <a href="javascript:void(0)">Gourmet Gifts</a>
                                                        <a href="javascript:void(0)">Keychains</a>
                                                        <a href="javascript:void(0)">Home &amp; Tools</a>
                                                        <a href="javascript:void(0)">Health &amp; Beauty</a>
                                                        <a href="javascript:void(0)">Outdoors &amp; Leisure</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Sport Accessories</a>
                                                        <a href="javascript:void(0)">Travel Essentials</a>
                                                        <a href="javascript:void(0)">New Arrivals</a>
                                                        <a href="javascript:void(0)">Best Sellers</a>
                                                        <a href="javascript:void(0)">No Minimum Order Quantity</a>
                                                        <a href="javascript:void(0)">Express Shipping</a>
                                                        <a href="javascript:void(0)">Engraved Products</a>
                                                        <a href="javascript:void(0)">Promotional Products</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 7th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Event Promotional product
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            Invitations &amp; Announcements
                                                        </a>
                                                        <a href="javascript:void(0)">Thank You Cards </a>
                                                        <a href="javascript:void(0)">Holiday Cards</a>
                                                        <a href="javascript:void(0)">Note Cards</a>
                                                        <a href="javascript:void(0)">Bookmarks</a>
                                                        <a href="javascript:void(0)">Envelopes &amp; Mailing</a>
                                                        <a href="javascript:void(0)">
                                                            Notebooks, Pads &amp; Journals
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Pens, Pencils &amp; Markers
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            Canvas Prints &amp; Wall Art
                                                        </a>
                                                        <a href="javascript:void(0)">Photo Books</a>
                                                        <a href="javascript:void(0)">Photo Gifts</a>
                                                        <a href="javascript:void(0)">
                                                            Mugs, Glasses &amp; Drinkware
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Gift Bags, Tags &amp; Wrapping Paper
                                                        </a>
                                                        <a href="javascript:void(0)">Photo Calendars</a>
                                                        <a href="javascript:void(0)">Business Stationery</a>
                                                        <a href="javascript:void(0)">Save the Dates</a>
                                                        <a href="javascript:void(0)">Invitations Suites</a>
                                                        <a href="javascript:void(0)">
                                                            Day-Of Essentials &amp; Signage
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Parties &amp; Showers</a>
                                                        <a href="javascript:void(0)">
                                                            Thank You Cards &amp; Keepsakes
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Free Invitation Sample Kit
                                                        </a>
                                                        <a href="javascript:void(0)">
                                                            Party Supplies &amp; Signs
                                                        </a>
                                                        <a href="javascript:void(0)">Birthday Shop</a>
                                                        <a href="javascript:void(0)">Baby Shop</a>
                                                        <a href="javascript:void(0)">Graduation Shop</a>
                                                        <a href="javascript:void(0)">Pet Gifts</a>
                                                        <a href="javascript:void(0)">Back to School </a>
                                                        <a href="javascript:void(0)">Mugs</a>
                                                        <a href="javascript:void(0)">Canvas Prints</a>
                                                        <a href="javascript:void(0)">Cocktail Napkins</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Acrylic Blocks</a>
                                                        <a href="javascript:void(0)">Speckled Mugs</a>
                                                        <a href="javascript:void(0)">Guest Books</a>
                                                        <a href="javascript:void(0)">Tabletop Wood Prints</a>
                                                        <a href="javascript:void(0)">Easel-Back Canvas Prints</a>
                                                        <a href="javascript:void(0)">Event T-Shirts</a>
                                                        <a href="javascript:void(0)">Stadium Cups</a>
                                                        <a href="javascript:void(0)">
                                                            Invitations, Gifts &amp; Stationery
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 8th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            invitations gifts and stationarys{" "}
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Websites</a>
                                                        <a href="javascript:void(0)">Domains</a>
                                                        <a href="javascript:void(0)">Instagram Post</a>
                                                        <a href="javascript:void(0)">Facebook Post</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Instagram Story</a>
                                                        <a href="javascript:void(0)">Youtube Thumbnail</a>
                                                        <a href="javascript:void(0)">High-quality Templates</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">
                                                            See all by Done Right Decals
                                                        </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 9th  */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="#"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            websites by done Right
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Design Services</a>
                                                        <a href="javascript:void(0)">QR Code Generator </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Wedding Design Services</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Design</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Maker</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 10th */}
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link icon "
                                            href="Logo_design.html"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Logo and Branding&nbsp;design&nbsp;help
                                        </a>
                                        <div className="dropdown-menu fullscreen" id="dropdownMenu">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Design Services</a>
                                                        <a href="javascript:void(0)">QR Code Generator </a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <a href="javascript:void(0)">Wedding Design Services</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Design</a>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <a href="javascript:void(0)">Logo Maker</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </header>

        </>


    );
};
export default Header;