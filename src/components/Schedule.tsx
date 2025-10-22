import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Schedule = () => {
  const scheduleData = {
    november: [
      { date: '15 ноября', time: '19:00', event: 'Чемпионат России по волейболу', type: 'volleyball' },
      { date: '18 ноября', time: '17:00', event: 'Тренировочный день гандбольной команды', type: 'handball' },
      { date: '22 ноября', time: '18:00', event: 'Финал Кубка России по гандболу', type: 'handball' },
      { date: '25 ноября', time: '15:00', event: 'Региональный турнир по волейболу', type: 'volleyball' },
      { date: '30 ноября', time: '14:00', event: 'Турнир по CS:GO', type: 'esports' },
    ],
    december: [
      { date: '3 декабря', time: '19:00', event: 'Международный матч по гандболу', type: 'handball' },
      { date: '7 декабря', time: '16:00', event: 'Чемпионат города по волейболу', type: 'volleyball' },
      { date: '10 декабря', time: '20:00', event: 'Концерт популярных исполнителей', type: 'concert' },
      { date: '15 декабря', time: '18:00', event: 'Финал киберспортивной лиги', type: 'esports' },
      { date: '20 декабря', time: '19:00', event: 'Рождественский волейбольный матч', type: 'volleyball' },
    ],
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'volleyball': return 'Circle';
      case 'handball': return 'Target';
      case 'esports': return 'Gamepad2';
      case 'concert': return 'Music';
      default: return 'Calendar';
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'volleyball': return 'text-blue-500';
      case 'handball': return 'text-green-500';
      case 'esports': return 'text-purple-500';
      case 'concert': return 'text-pink-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Расписание
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Полное расписание всех мероприятий на арене
          </p>
        </div>

        <Tabs defaultValue="november" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="november">Ноябрь 2024</TabsTrigger>
            <TabsTrigger value="december">Декабрь 2024</TabsTrigger>
          </TabsList>

          <TabsContent value="november" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>События ноября</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduleData.november.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Icon 
                        name={getEventIcon(item.type) as any} 
                        size={24} 
                        className={getEventColor(item.type)}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.event}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="december" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>События декабря</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduleData.december.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <Icon 
                        name={getEventIcon(item.type) as any} 
                        size={24} 
                        className={getEventColor(item.type)}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{item.event}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;