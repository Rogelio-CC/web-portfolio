// Imports of necessary modules or components
import { Suspense, lazy, useState, useEffect } from 'react';

// Lazy load components for better performance
const Navbar = lazy(() => import('~/navbar/navbar'));
const HeaderTitle = lazy(() => import('~/headerTitleWithPhoto/headerTitle'));
const AboutMe = lazy(() => import('~/aboutMe/aboutMe'));
const Experience = lazy(() => import('~/experience/experience'));
const TechnicalSkills = lazy(() => import('~/technicalSkills/technicalSkills'));
const SoftSkills = lazy(() => import('~/softSkills/softSkills'));
const RelevantProjects = lazy(() => import('~/relevantProjects/relevantProjects'));
const ChangeIdiomSwitch = lazy(() => import('~/changeIdiomSwitch/changeIdiomSwitch'));

export function Welcome() {
  const loadingScreen = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontSize: '4.5rem',
    color: 'oklch(28.2% 0.091 267.935)'
  }

  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulate a short delay to ensure all components are mounted
    const timeout = setTimeout(() => setReady(true), 100); // Adjust time as needed
    return () => clearTimeout(timeout);
  }, []);

  if (!ready) {
    return (
    <div style={loadingScreen}>
      Cargando...
    </div>
  );
  }

  return (
    <Suspense fallback={
      <div style={loadingScreen}>
        Cargando...
      </div>
      }>
      <section>
        <Navbar />
        <ChangeIdiomSwitch />
        <HeaderTitle />
        <RelevantProjects />
        <TechnicalSkills />
        <Experience />
        <SoftSkills />
        <AboutMe />
      </section>
    </Suspense>
  );
}
