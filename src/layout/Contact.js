import ContactContent from '../content/ContactContent';
import '../assets/css/contact.css';

export default function ContactSection() {
	const { title, textOne, textTwo } = ContactContent;
	return (
		<div className="contact-section" id="contact">
			<div className="side-text-section"><span className="red heavy uppercase">{title}</span></div>
			<div className="text-container">
				<div className="text-container-content red-bg">
					<div className="text-content">{textOne}</div>
					<div className="text-content">{textTwo}</div>
					<div className="contact-icons">
						<a className="button red heavy" target="_blank" rel="noreferrer" href="mailto:alisongvdb@gmail.com?subject=Let's get in touch">
							<i className="fa fa-paper-plane"/>
						</a>
						<a className="button red heavy" target="_blank" rel="noreferrer" href="https://www.instagram.com/alisonvdb">
							<i className="fab fa-instagram-square"/>
						</a>
						<a className="button red heavy" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alisonvdb/">
							<i className="fab fa-linkedin"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}