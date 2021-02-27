import CurrentClientsContent from '../content/CurrentClientsContent';
import '../assets/css/clients.css';

const { title, content } = CurrentClientsContent;

export default function CurrentClientsSection() {
	return (
		<div className="clients-section" id="clients">
			<div className="text-section-container">
				{content.map(item => (
					<div className="text-section red">
						<div className={`client-logo ${item.logoName}`} />
						<div className="text-content">
							<div className="text-title uppercase">{item.clientName}</div>
							<div className="text-item">{item.clientText}</div>
						</div>
					</div>
				))}
			</div>
			<div className="image-section">
				<div className="header-box heavy red-bg">{title}</div>
			</div>
		</div>
	);
}