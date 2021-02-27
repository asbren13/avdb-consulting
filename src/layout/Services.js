import ServicesContent from '../content/ServicesContent';
import '../assets/css/services.css';

const { title, textContent } = ServicesContent;

export default function ServicesSection() {
	return (
		<div className="services-section" id="services">
			<div className="image-section">
				<div className="header-box heavy red-bg">{title}</div>
			</div>
			<div className="text-section">
				{textContent.map(item => (
					<div className="text-content red">
						<div className="text-title uppercase">{item.boldItem}</div>
						<div className="text-item">{item.text}</div>
					</div>
				))}
			</div>
		</div>
	);
}