import React from "react"
import { GrGithub, GrLinkedin, GrCodepen } from "react-icons/gr";
function Footer() {
	return (
		<footer>
			<section className="scocials">
				<ul>
					<li>
							<a id="githubLink" className=" btn" href="https://github.com/S0UPernova/" rel="noreferrer" 
								target="_blank" aria-label="Link to my github">
								<GrGithub 
									style={{
										color: "white",
										fontSize: "2rem"
									}}
								/>
							</a>

					</li>
					<li>
						<a id="codepenLink" className=" btn" href="https://codepen.io/s0upernova" rel="noreferrer" 
							target="_blank" aria-label="Link to my codepen">
							<GrCodepen
								style={{
									color: "black",
									fontSize: "2rem"
								}}
								/>
						</a>         
					</li>

					<li>
						<a id="linkedInLink" className=" btn" href="https://www.linkedin.com/in/michael-kielpinski-2a7019202/" 
							rel="noreferrer" target="_blank" aria-label="Link to my linkedin">
							<GrLinkedin
								style={{
									color: "steelBlue",
									backgroundColor: "white",
									fontSize: "2rem"
								}}
							/>
						</a>
					</li>
				</ul>
			</section>
		</footer>
	)
}
export default Footer