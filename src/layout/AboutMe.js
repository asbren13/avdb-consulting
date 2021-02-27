import MainContent from '../content/MainContent';
import AboutMeContent from '../content/AboutMeContent';
import ConsultingBox from '../common/ConsultingBox';
import '../assets/css/about-me.css';

const { title } = MainContent;
const { headerText, subHeaderText, bulletPoints } = AboutMeContent;

export default function AboutMeSection() {
	return (
		<div className="about-me" id="about-me">
			<div className="text-container">
				<div className="header-text heavy">{headerText}</div>
				<div className="subheader-text heavy">{subHeaderText}</div>
				<div className="text-content-container">
					{bulletPoints.map((bullet, i) => (
						<div className="text-content" key={i}>
							<div className="icon-image">
								<div className={bullet.icon} />
							</div>
							<div className="text-item">{bullet.text}</div>
						</div>
					))}
				</div>
			</div>
			<div className="image-container">
				<ConsultingBox text = {title} />
			</div>
		</div>
	);
}