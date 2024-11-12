import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Citius Technologies</div>
							<div className="work-subtitle">
								Full stack developer
							</div>
							<div className="work-duration">JAN 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Metlife</div>
							<div className="work-subtitle">
								Full Stack developer
							</div>
							<div className="work-duration">JUL 2023 - DEC 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;