import AboutAVDB from '../content/AboutAVDBContent';
import '../assets/css/about-avdb.css';

export default function AboutAVDBSection(){
	const { header, subheaderText, paragraphText } = AboutAVDB;
	return (
		<div className="about-avdb-section" id="about-avdb-consulting">
			<div className="header-content red-bg">
				<div className="header-text heavy">{header}</div>
				<div className="sub-header-text">{subheaderText}</div>
			</div>
			<div className="text-container">
				{paragraphText.map(text => (
					<span className="text-content red" dangerouslySetInnerHTML={{ __html: text }}/>
				))}
			</div>
		</div>
	)
}