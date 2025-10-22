import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    arena: [
      { label: 'О нас', href: '#arena' },
      { label: 'Новости', href: '#news' },
      { label: 'Галерея', href: '#gallery' },
      { label: 'Контакты', href: '#contact' },
    ],
    services: [
      { label: 'Мероприятия', href: '#events' },
      { label: 'Расписание', href: '#schedule' },
      { label: 'Билеты', href: '#tickets' },
      { label: 'VIP-ложи', href: '#tickets' },
    ],
    info: [
      { label: 'Политика конфиденциальности', href: '#' },
      { label: 'Правила посещения', href: '#' },
      { label: 'Часто задаваемые вопросы', href: '#' },
      { label: 'Партнерам', href: '#' },
    ],
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Trophy" size={28} className="text-primary" />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Арена Динамо
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Современная спортивная арена для незабываемых событий
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'Facebook', link: '#' },
                { icon: 'Instagram', link: '#' },
                { icon: 'Twitter', link: '#' },
                { icon: 'Youtube', link: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-9 h-9 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                >
                  <Icon name={social.icon as any} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Арена</h3>
            <ul className="space-y-2">
              {footerLinks.arena.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Арена Динамо. Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+74951234567" className="hover:text-primary transition-colors flex items-center gap-1">
                <Icon name="Phone" size={14} />
                +7 (495) 123-45-67
              </a>
              <a href="mailto:info@dynamo-arena.ru" className="hover:text-primary transition-colors flex items-center gap-1">
                <Icon name="Mail" size={14} />
                info@dynamo-arena.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
