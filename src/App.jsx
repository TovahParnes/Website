import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { devBranch } from "./config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home.jsx";
import Snapchat from "./pages/Snapchat.jsx";
import About from "./pages/AboutLarv.jsx";
import Calendar from "./pages/CalendarPage.jsx";
import Event from "./pages/Event.jsx";
import Fair from "./pages/Fair";
import Gallery from "./pages/Gallery";
import LARVMap from "./pages/Map";
import PrepWeek from "./pages/PrepWeek";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import IndMeetStudents from "./pages/IndMeetStudents";
import Involved from "./pages/Involved";
import Volunteer from "./pages/Volunteer";
import VolunteerApplication from "./pages/VolunteerApplication";
import VolunteerNomination from "./pages/VolunteerNomination";
import Coordinator from "./pages/Coordinator";
import CoordinatorApplication from "./pages/CoordinatorApplication";
import PG from "./pages/PG";
import PGApplication from "./pages/PGAplication";
import Organizations from "./pages/Organizations";
import IndMeetOrganizations from "./pages/IndMeetOrganizations";
import InitialApplication from "./pages/InitialApplication";
import FinalApplication from "./pages/FinalApplication";
import Catalog from "./pages/Catalog";
import Faq from "./pages/FAQ";
import NotFound from "./pages/404";
import "./css/App.min.css";
import StudentsFAQ from "./content/studentsfaq.json";
import OrganizationsFAQ from "./content/organizationsfaq.json";
import ScrollToTop from "./components/ScrollToTop";
import IAContract from "./pages/IAContract";
import Pricelist from "./pages/Pricelist";
import InvitationDigital from "./pages/InvitationDigital";
import InvitationInnovation from "./pages/InvitationInnovation";
import CompanyGuide from "./pages/CompanyVCFGuide";
import GoogleForm from "./pages/GoogleForm";
import Quiz from "./pages/Quiz";
import Quiz1 from "./pages/Quiz1";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";

function DevBranchBanner() {
	if (devBranch().enabled) {
		return (
			<div className="devBranchBanner">
				<p>{devBranch().name}</p>
			</div>
		);
	}
	return null;
}

function Page() {
	return (
		<BrowserRouter>
			<DevBranchBanner />
			<ScrollToTop />
			<div className="App">
				<Navbar />
				<div className="Content">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/snapchat" component={Snapchat} />
						<Route exact path="/home/about" component={About} />
						<Route exact path="/home/calendar" component={Calendar} />
						<Route exact path="/event" component={Event} />
						<Route exact path="/fair" component={Fair} />
						<Route exact path="/fair/catalog" component={Catalog} />
						<Route exact path="/fair/map" component={LARVMap} />
						<Route exact path="/fair/gallery" component={Gallery} />
						<Route exact path="/prep-week" component={PrepWeek} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/students" component={Students} />
						<Route exact path="/students/faq">
							<Faq questions={StudentsFAQ} />
						</Route>
						<Route
							exact
							path="/students/individual-meetings"
							component={IndMeetStudents}
						/>
						<Route exact path="/involved" component={Involved} />
						<Route exact path="/involved/volunteer" component={Volunteer} />
						<Route
							exact
							path="/involved/volunteer/application"
							component={VolunteerApplication}
						/>
						<Route
							exact
							path="/involved/volunteer/nomination"
							component={VolunteerNomination}
						/>
						<Route exact path="/involved/coordinator" component={Coordinator} />
						<Route
							exact
							path="/involved/coordinator/application"
							component={CoordinatorApplication}
						/>
						<Route exact path="/involved/pg" component={PG} />
						<Route
							exact
							path="/involved/pg/application"
							component={PGApplication}
						/>
						<Route exact path="/organizations" component={Organizations} />
						<Route exact path="/organizations/faq">
							<Faq questions={OrganizationsFAQ} />
						</Route>
						<Route
							exact
							path="/organizations/individual-meetings"
							component={IndMeetOrganizations}
						/>
						<Route
							exact
							path="/organizations/initial-application"
							component={InitialApplication}
						/>
						<Route
							exact
							path="/organizations/final-application"
							component={FinalApplication}
						/>
						<Route
							exact
							path="/organizations/LARV_IA_avtal_2021.pdf"
							component={IAContract}
						/>
						<Route
							exact
							path="/organizations/prislista_digital.pdf"
							component={Pricelist}
						/>
						<Route
							exact
							path="/organizations/inbjudan_digital.pdf"
							component={InvitationDigital}
						/>
						<Route
							exact
							path="/organizations/inbjudan_innovation.pdf"
							component={InvitationInnovation}
						/>

						<Route
							exact
							path="/organizations/company_VCF_guide.pdf"
							component={CompanyGuide}
						/>

						<Route exact path="/quiz" component={Quiz} />
						<Route exact path="/quiz/one">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLSdQ37hbcq5H1QiYZqF9sbrTFGC2tSVswMEocexftknthQL7RQ/viewform?embedded=true"
								height="1800px"
							/>
						</Route>
						<Route exact path="/quiz/two">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLScsa_wCB5QoQC9LwnCB0FCBN9ST_PFVg9UmXo6c407Jkbdvyw/viewform?embedded=true"
								height="1800px"
							/>
						</Route>
						<Route exact path="/quiz/three">
							<GoogleForm
								formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfKhUl7D1TcJX8VDHolQo_Cj2k9OkXwDCT1q6zzTwLtxb_Pcw/viewform?embedded=true"
								height="1800px"
							/>
						</Route>

						<Redirect from="/postbeskrivningar/pg" to="/involved" />
						<Redirect from="/foretag/inledande-anmalan/" to="/organizations" />
						<Route component={NotFound} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

const Loader = () => (
	<div className="App">
		{/* <img src={logo} className="App-logo" alt="logo" /> */}
		<div>loading...</div>
	</div>
);

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Page />
		</Suspense>
	);
}
