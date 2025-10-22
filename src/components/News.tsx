import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      id: 1,
      title: 'Арена Динамо принимает чемпионат России по волейболу',
      date: '1 ноября 2024',
      category: 'Волейбол',
      excerpt: 'В середине ноября на арене пройдет грандиозный чемпионат России по волейболу. Ожидается участие лучших команд страны.',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/d4292e1b-1ad1-4bca-bcdc-acd13585cb4c.jpg',
    },
    {
      id: 2,
      title: 'Новая система бронирования билетов запущена',
      date: '28 октября 2024',
      category: 'Новости арены',
      excerpt: 'Теперь вы можете выбрать точное место и забронировать билеты онлайн через наш сайт. Удобно и быстро!',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
    },
    {
      id: 3,
      title: 'Киберспортивный турнир соберет лучших игроков',
      date: '25 октября 2024',
      category: 'Киберспорт',
      excerpt: '30 ноября состоится крупнейший турнир по CS:GO. Призовой фонд составит более 1 миллиона рублей.',
      image: 'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e46e7a9f-c1fe-4260-9b76-67c6928f0186.jpg',
    },
  ];

  return (
    <section id="news" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Новости</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Последние события и анонсы арены
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {item.date}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {item.excerpt}
                </CardDescription>
                <Button variant="link" className="p-0">
                  Читать далее
                  <Icon name="ChevronRight" size={16} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
