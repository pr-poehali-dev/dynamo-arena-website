import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Gallery = () => {
  const images = {
    volleyball: [
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/d4292e1b-1ad1-4bca-bcdc-acd13585cb4c.jpg',
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
    ],
    handball: [
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/d4292e1b-1ad1-4bca-bcdc-acd13585cb4c.jpg',
    ],
    esports: [
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e46e7a9f-c1fe-4260-9b76-67c6928f0186.jpg',
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
    ],
    arena: [
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e6a30144-c7e8-453d-974f-987a3627033c.jpg',
      'https://cdn.poehali.dev/projects/854ab1b9-6622-4c36-9856-3c7eb7e3a805/files/e46e7a9f-c1fe-4260-9b76-67c6928f0186.jpg',
    ],
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 relative inline-block">
            Галерея
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Фотографии с мероприятий и видов арены
          </p>
        </div>

        <Tabs defaultValue="volleyball" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="volleyball">Волейбол</TabsTrigger>
            <TabsTrigger value="handball">Гандбол</TabsTrigger>
            <TabsTrigger value="esports">Киберспорт</TabsTrigger>
            <TabsTrigger value="arena">Арена</TabsTrigger>
          </TabsList>

          {Object.entries(images).map(([category, categoryImages]) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image}
                        alt={`${category} ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;