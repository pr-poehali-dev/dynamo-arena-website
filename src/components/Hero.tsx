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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-md bg-black/40 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-center">
              Арена Динамо
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto text-center leading-relaxed">
              Легендарная спортивная площадка для волейбола, гандбола, киберспорта и грандиозных концертов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg shadow-lg" asChild>
                <a href="#events">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Афиша мероприятий
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-white/30 hover:bg-white/10 text-white shadow-lg" asChild>
                <a href="#tickets">
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Купить билеты
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: 'Users', value: '5000', label: 'Мест' },
                { icon: 'Trophy', value: '50+', label: 'Турниров в год' },
                { icon: 'Music', value: '20+', label: 'Концертов' },
                { icon: 'Gamepad2', value: '15+', label: 'Киберспорт' },
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Icon name={item.icon as any} size={28} className="text-primary mb-3 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;