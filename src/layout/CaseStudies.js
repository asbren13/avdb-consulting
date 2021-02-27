import '../assets/css/case-studies.css';

export default function CaseStudiesSection() {
	return (
		<div className="case-studies-section" id="case-studies">
			<div className="image-section">
				<div className="header-box heavy red-bg">Case Studies</div>
			</div>
			<div className="text-container">
				<div className="text-content red heavy">Case studies available upon request.</div>
				<div className="text-content"><a className="button red-bg" href="mailto:alisongvdb@gmail.com?subject=Case Studies Request">Request here.</a></div> 
			</div>
		</div>
	);
}