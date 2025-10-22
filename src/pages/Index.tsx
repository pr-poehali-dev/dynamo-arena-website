import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Events from '@/components/Events';
import Schedule from '@/components/Schedule';
import Tickets from '@/components/Tickets';
import Arena from '@/components/Arena';
import Gallery from '@/components/Gallery';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const scrollToTickets = (eventId: string) => {
    setSelectedEvent(eventId);
    const ticketsSection = document.getElementById('tickets');
    ticketsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Events onBookTicket={scrollToTickets} />
        <Schedule />
        <Tickets selectedEventId={selectedEvent} />
        <Arena />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
