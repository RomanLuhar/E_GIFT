import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
         <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          to="styles/bootstrap4/bootstrap.min.css"
        />
        <link
          to="plugins/font-awesome-4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          to="plugins/OwlCarousel2-2.2.1/owl.carousel.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          to="plugins/OwlCarousel2-2.2.1/owl.theme.default.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          to="plugins/OwlCarousel2-2.2.1/animate.css"
        />
        <link rel="stylesheet" type="text/css" to="styles/main_styles.css" />
        <link rel="stylesheet" type="text/css" to="styles/responsive.css" />
      

      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="styles/bootstrap4/popper.js"></script>
      <script src="styles/bootstrap4/bootstrap.min.js"></script>
      <script src="plugins/Isotope/isotope.pkgd.min.js"></script>
      <script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
      <script src="plugins/easing/easing.js"></script>
      <script src="js/custom.js"></script>
      </Helmet>
        
	<header class="header trans_300">

{/* <!-- Top Navigation --> */}

<div class="top_nav">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="top_nav_left">free shipping on all u.s orders over $50</div>
            </div>
            <div class="col-md-6 text-right">
                <div class="top_nav_right">
                    <ul class="top_nav_menu">

                        {/* <!-- Currency / Language / My Account --> */}

                        <li class="currency">
                            <Link to="#">
                                usd
                                <i class="fa fa-angle-down"></i>
                            </Link>
                            <ul class="currency_selection">
                                <li><Link to="#">cad</Link></li>
                                <li><Link to="#">aud</Link></li>
                                <li><Link to="#">eur</Link></li>
                                <li><Link to="#">gbp</Link></li>
                            </ul>
                        </li>
                        <li class="language">
                            <Link to="#">
                                English
                                <i class="fa fa-angle-down"></i>
                            </Link>
                            <ul class="language_selection">
                                <li><Link to="#">French</Link></li>
                                <li><Link to="#">Italian</Link></li>
                                <li><Link to="#">German</Link></li>
                                <li><Link to="#">Spanish</Link></li>
                            </ul>
                        </li>
                        <li class="account">
                            <Link to="#">
                                My Account
                                <i class="fa fa-angle-down"></i>
                            </Link>
                            <ul class="account_selection">
                                <li><Link to="/Login"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</Link></li>
                                <li><Link to="/SignUp"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Main Navigation --> */}

<div class="main_nav_container">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-right">
                <div class="logo_container">
                    <Link to="/">E-<span>Gift</span></Link>
                </div>
                <nav class="navbar">
                    <ul class="navbar_menu">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/NewArrival">shop</Link></li>
                        <li><Link to="Single">pages</Link></li>
                        <li><Link to="#">blog</Link></li>
                        <li><Link to="/Contact">contact</Link></li>
                    </ul>
                    <ul class="navbar_user">
                        <li><Link to="#"><i class="fa fa-search" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
                        <li class="checkout">
                            <Link to="Cart">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span id="checkout_items" class="checkout_items">2</span>
                            </Link>
                        </li>
                    </ul>
                    <div class="hamburger_container">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>

</header>

    </div>
  )
}
