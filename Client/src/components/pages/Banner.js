import React from 'react'

export const Banner = () => {
  return (
    <div>
        {/* <!-- Banner --> */}

	<div class="banner">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="banner_item align-items-center" style={{"background-image":"url(images/banner_1.jpg)"}}>
						<div class="banner_category">
							<a href="categories.html">women's</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="banner_item align-items-center" style={{"background-image":"url(images/banner_2.jpg)"}}>
						<div class="banner_category">
							<a href="categories.html">accessories's</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="banner_item align-items-center" style={{"background-image":"url(images/banner_3.jpg)"}}>
						<div class="banner_category">
							<a href="categories.html">men's</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}
