import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "Процесс", href: "#process" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Цены", href: "#pricing" },
    { name: "Галерея", href: "#gallery" },
    { name: "Контакты", href: "#contact" },
  ];
  
  const services = [
    { name: "Экспресс-мойка", href: "#services" },
    { name: "Комплексная мойка", href: "#services" },
    { name: "Детейлинг", href: "#services" },
    { name: "Химчистка", href: "#services" },
    { name: "Полировка", href: "#services" },
    { name: "Защитные покрытия", href: "#services" },
  ];

  return (
    <footer className="bg-content2/80 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="lucide:droplets" className="text-primary text-2xl" />
              <span className="font-bold text-xl">SparkleWash</span>
            </div>
            <p className="text-foreground-600 mb-4">
              Профессиональная автомойка с полным спектром услуг по уходу за вашим автомобилем.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-default-100 p-2 rounded-full hover:bg-default-200 transition-colors">
                <Icon icon="logos:vk" className="text-xl" />
              </a>
              <a href="#" className="bg-default-100 p-2 rounded-full hover:bg-default-200 transition-colors">
                <Icon icon="logos:telegram" className="text-xl" />
              </a>
              <a href="#" className="bg-default-100 p-2 rounded-full hover:bg-default-200 transition-colors">
                <Icon icon="logos:whatsapp-icon" className="text-xl" />
              </a>
              <a href="#" className="bg-default-100 p-2 rounded-full hover:bg-default-200 transition-colors">
                <Icon icon="logos:instagram-icon" className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    color="foreground" 
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    color="foreground" 
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-primary" />
                <span>ул. Автомобильная, 123, Москва</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" />
                <Link href="tel:+79991234567" color="foreground">+7 (999) 123-45-67</Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" />
                <Link href="mailto:info@sparklewash.ru" color="foreground">info@sparklewash.ru</Link>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary" />
                <span>Ежедневно с 8:00 до 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-500 text-sm">
            © {currentYear} SparkleWash. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link href="#" color="foreground" className="text-sm hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" color="foreground" className="text-sm hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};