import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Arena = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Вместимость',
      description: 'До 5000 зрителей',
      details: 'Комфортные места с отличным обзором из любой точки арены',
    },
    {
      icon: 'Wifi',
      title: 'Современная инфраструктура',
      description: 'Бесплатный Wi-Fi',
      details: 'Высокоскоростной интернет по всей территории',
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Питание',
      description: 'Фудкорт и кафе',
      details: 'Широкий выбор блюд и напитков',
    },
    {
      icon: 'ParkingCircle',
      title: 'Парковка',
      description: '300 парковочных мест',
      details: 'Бесплатная парковка для посетителей',
    },
    {
      icon: 'Accessibility',
      title: 'Доступность',
      description: 'Безбарьерная среда',
      details: 'Специальные места для людей с ограниченными возможностями',
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Охрана 24/7',
      details: 'Современная система видеонаблюдения',
    },
  ];

  const specifications = [
    { label: 'Площадь игрового поля', value: '40 × 20 м' },
    { label: 'Высота потолков', value: '12.5 м' },
    { label: 'Раздевалки', value: '4 комнаты' },
    { label: 'VIP-ложи', value: '8 лож' },
    { label: 'Медиацентр', value: '50 мест' },
    { label: 'Год постройки', value: '2010' },
  ];

  return (
    <section id="arena" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Об арене
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Современная спортивная площадка с первоклассным оборудованием и комфортными условиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Технические характеристики</CardTitle>
            <CardDescription>Основные параметры арены</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 rounded-lg bg-muted/50"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={24} className="text-primary" />
                Адрес
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Москва, Ленинградский проспект, 36</p>
              <p className="text-sm text-muted-foreground">м. Динамо (5 минут пешком)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" size={24} className="text-primary" />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">Ежедневно</p>
              <p className="text-sm text-muted-foreground">В дни мероприятий - по расписанию событий</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Arena;