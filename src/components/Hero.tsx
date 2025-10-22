import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Арена Динамо
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Легендарная спортивная площадка для волейбола, гандбола, киберспорта и грандиозных концертов
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="text-lg" asChild>
            <a href="#events">
              <Icon name="Calendar" size={20} className="mr-2" />
              Афиша мероприятий
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg" asChild>
            <a href="#tickets">
              <Icon name="Ticket" size={20} className="mr-2" />
              Купить билеты
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { icon: 'Users', label: 'До 5000 мест' },
            { icon: 'Trophy', label: 'Профессиональные турниры' },
            { icon: 'Music', label: 'Концерты' },
            { icon: 'Gamepad2', label: 'Киберспорт' },
          ].map((item, index) => (
            <div 
              key={item.label}
              className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <Icon name={item.icon as any} size={32} className="text-primary" />
              <span className="text-sm text-white/80 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;