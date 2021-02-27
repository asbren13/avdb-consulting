import MainContent from '../content/MainContent';
import ConsultingBox from '../common/ConsultingBox';
import '../assets/css/main.css';

const { firstName, lastName, text, title } = MainContent;

export default function Main() {
	return (
		<div className="main-section-container" id="main">
		<div className="main-section">
			<div className="image-section">
				<ConsultingBox text={title} />
			</div>
			<div className="text-section">
				<div className="name heavy">{firstName}<br/> {lastName}</div>
				<div className="info-text">{text}</div>
			</div>
		</div>
		</div>
	);
}