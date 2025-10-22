import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface EventsProps {
  onBookTicket: (eventId: string) => void;
}

const Events = ({ onBookTicket }: EventsProps) => {
  const events = [
    {
      id: 'volleyball-championship',
      title: 'Чемпионат России по волейболу',
      date: '15 ноября 2024',
      time: '19:00',
      category: 'Волейбол',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/d4292e1b-1ad1-4bca-bcdc-acd13585cb4c.jpg',
      price: 'от 800 ₽',
      available: true,
    },
    {
      id: 'handball-final',
      title: 'Финал Кубка России по гандболу',
      date: '22 ноября 2024',
      time: '18:00',
      category: 'Гандбол',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
      price: 'от 1200 ₽',
      available: true,
    },
    {
      id: 'esports-tournament',
      title: 'Турнир по CS:GO',
      date: '30 ноября 2024',
      time: '14:00',
      category: 'Киберспорт',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e46e7a9f-c1fe-4260-9b76-67c6928f0186.jpg',
      price: 'от 500 ₽',
      available: true,
    },
    {
      id: 'concert',
      title: 'Концерт популярных исполнителей',
      date: '10 декабря 2024',
      time: '20:00',
      category: 'Концерт',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
      price: 'от 2000 ₽',
      available: true,
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Волейбол': return 'Circle';
      case 'Гандбол': return 'Target';
      case 'Киберспорт': return 'Gamepad2';
      case 'Концерт': return 'Music';
      default: return 'Calendar';
    }
  };

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ближайшие мероприятия</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите событие и забронируйте лучшие места прямо сейчас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4">
                  <Icon name={getCategoryIcon(event.category) as any} size={14} className="mr-1" />
                  {event.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {event.time}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-2xl font-bold text-primary">{event.price}</p>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => onBookTicket(event.id)}
                  disabled={!event.available}
                >
                  <Icon name="Ticket" size={16} className="mr-2" />
                  Купить билет
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
