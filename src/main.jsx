import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import Sample from './components/Sample';
import Footer from './components/Footer';


createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<Hero />
		<FeaturesSection />
		<Sample />
		<CallToAction />	
		<Footer />
	</StrictMode>
);
