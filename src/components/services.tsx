import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Services = () => {
  const services = [
    {
      icon: "lucide:car",
      title: "Экспресс-мойка",
      description: "Быстрая и качественная мойка кузова автомобиля с использованием современных моющих средств.",
      features: ["Мойка кузова", "Чистка колёс", "Сушка и полировка"],
      popular: false,
    },
    {
      icon: "lucide:sparkles",
      title: "Комплексная мойка",
      description: "Полная мойка автомобиля снаружи и внутри для идеальной чистоты.",
      features: ["Мойка кузова", "Уборка салона", "Чистка ковриков", "Полировка пластика"],
      popular: true,
    },
    {
      icon: "lucide:layers",
      title: "Детейлинг",
      description: "Профессиональный уход за автомобилем с вниманием к каждой детали.",
      features: ["Глубокая химчистка", "Полировка кузова", "Защитное покрытие", "Обработка кожи"],
      popular: false,
    },
    {
      icon: "lucide:shield",
      title: "Защитные покрытия",
      description: "Нанесение защитных составов для долговременной защиты кузова.",
      features: ["Керамическое покрытие", "Жидкое стекло", "Защита от царапин", "Водоотталкивающий эффект"],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Мы предлагаем полный спектр услуг по уходу за вашим автомобилем, от быстрой мойки до профессионального детейлинга.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`border ${service.popular ? 'border-primary' : 'border-default-200'}`}
              shadow="sm"
            >
              <CardBody className="gap-4">
                <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center ${
                  service.popular ? 'bg-primary/20 text-primary' : 'bg-default-100 text-foreground-600'
                }`}>
                  <Icon icon={service.icon} className="text-2xl" />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    {service.popular && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Популярно
                      </span>
                    )}
                  </div>
                  <p className="text-foreground-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon 
                          icon="lucide:check-circle" 
                          className={service.popular ? "text-primary" : "text-success"} 
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
              
              <CardFooter>
                <Button 
                  fullWidth 
                  color={service.popular ? "primary" : "default"} 
                  variant={service.popular ? "solid" : "flat"}
                  href="#contact"
                  as="a"
                >
                  Записаться
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};