import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface TicketsProps {
  selectedEventId: string | null;
}

const Tickets = ({ selectedEventId }: TicketsProps) => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedRow, setSelectedRow] = useState('');
  const [selectedSeat, setSelectedSeat] = useState('');
  const [quantity, setQuantity] = useState('1');

  const events = [
    { id: 'volleyball-championship', name: 'Чемпионат России по волейболу', date: '15 ноября 2024' },
    { id: 'handball-final', name: 'Финал Кубка России по гандболу', date: '22 ноября 2024' },
    { id: 'esports-tournament', name: 'Турнир по CS:GO', date: '30 ноября 2024' },
    { id: 'concert', name: 'Концерт популярных исполнителей', date: '10 декабря 2024' },
  ];

  const sectors = [
    { id: 'vip', name: 'VIP ложа', price: 5000, available: 12 },
    { id: 'sector-a', name: 'Сектор A (центр)', price: 2500, available: 45 },
    { id: 'sector-b', name: 'Сектор B', price: 1500, available: 78 },
    { id: 'sector-c', name: 'Сектор C', price: 1000, available: 120 },
    { id: 'standing', name: 'Стоячие места', price: 500, available: 200 },
  ];

  const rows = Array.from({ length: 20 }, (_, i) => ({ id: `row-${i + 1}`, name: `Ряд ${i + 1}` }));
  const seats = Array.from({ length: 30 }, (_, i) => ({ id: `seat-${i + 1}`, name: `Место ${i + 1}` }));

  useEffect(() => {
    if (selectedEventId) {
      setSelectedEvent(selectedEventId);
    }
  }, [selectedEventId]);

  const handleBooking = () => {
    if (!selectedEvent || !selectedSector) {
      toast.error('Выберите мероприятие и сектор');
      return;
    }

    const event = events.find(e => e.id === selectedEvent);
    const sector = sectors.find(s => s.id === selectedSector);
    
    toast.success('Билет успешно забронирован!', {
      description: `${event?.name} - ${sector?.name}`,
    });

    setSelectedEvent('');
    setSelectedSector('');
    setSelectedRow('');
    setSelectedSeat('');
    setQuantity('1');
  };

  const selectedSectorData = sectors.find(s => s.id === selectedSector);
  const totalPrice = selectedSectorData ? selectedSectorData.price * parseInt(quantity) : 0;

  return (
    <section id="tickets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Покупка билетов
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Выберите мероприятие и место для бронирования билетов онлайн
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Выбор билета</CardTitle>
              <CardDescription>Заполните форму для бронирования</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event">Мероприятие</Label>
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger id="event">
                    <SelectValue placeholder="Выберите мероприятие" />
                  </SelectTrigger>
                  <SelectContent>
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id}>
                        {event.name} - {event.date}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sector">Сектор</Label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger id="sector">
                    <SelectValue placeholder="Выберите сектор" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector.id} value={sector.id}>
                        {sector.name} - {sector.price} ₽ (доступно: {sector.available})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedSector && selectedSector !== 'standing' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="row">Ряд</Label>
                    <Select value={selectedRow} onValueChange={setSelectedRow}>
                      <SelectTrigger id="row">
                        <SelectValue placeholder="Выберите ряд" />
                      </SelectTrigger>
                      <SelectContent>
                        {rows.map((row) => (
                          <SelectItem key={row.id} value={row.id}>
                            {row.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seat">Место</Label>
                    <Select value={selectedSeat} onValueChange={setSelectedSeat}>
                      <SelectTrigger id="seat">
                        <SelectValue placeholder="Выберите место" />
                      </SelectTrigger>
                      <SelectContent>
                        {seats.map((seat) => (
                          <SelectItem key={seat.id} value={seat.id}>
                            {seat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="quantity">Количество билетов</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" onClick={handleBooking}>
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Забронировать билет
              </Button>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Схема арены</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 p-8">
                    <div className="w-full h-full border-4 border-primary/20 rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Target" size={48} className="text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Арена</p>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                      <Badge>Сектор A</Badge>
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <Badge>Сектор C</Badge>
                    </div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Badge>Сектор B</Badge>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <Badge>Сектор B</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedSectorData && (
              <Card>
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Сектор:</span>
                    <span className="font-medium">{selectedSectorData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Цена за билет:</span>
                    <span className="font-medium">{selectedSectorData.price} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Количество:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Всего:</span>
                      <span className="font-bold text-primary">{totalPrice} ₽</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;