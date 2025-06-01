import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Pricing = () => {
  const pricingPlans = [
    {
      title: "Экспресс",
      description: "Быстрая мойка кузова для поддержания чистоты",
      price: "от 600 ₽",
      features: [
        "Мойка кузова",
        "Чистка колёс",
        "Сушка и полировка",
        "Чистка порогов"
      ],
      popular: false,
      icon: "lucide:car",
      color: "default"
    },
    {
      title: "Комплекс",
      description: "Полная мойка автомобиля снаружи и внутри",
      price: "от 1 200 ₽",
      features: [
        "Всё из тарифа Экспресс",
        "Уборка салона пылесосом",
        "Влажная уборка салона",
        "Мойка ковриков",
        "Чистка стёкол",
        "Полировка пластика салона"
      ],
      popular: true,
      icon: "lucide:sparkles",
      color: "primary"
    },
    {
      title: "Детейлинг",
      description: "Профессиональный уход за всеми деталями",
      price: "от 3 500 ₽",
      features: [
        "Всё из тарифа Комплекс",
        "Глубокая химчистка салона",
        "Полировка кузова",
        "Обработка кожи салона",
        "Чистка моторного отсека",
        "Защитное покрытие кузова"
      ],
      popular: false,
      icon: "lucide:layers",
      color: "default"
    }
  ];

  const additionalServices = [
    { name: "Полировка фар", price: "от 800 ₽" },
    { name: "Химчистка сидений", price: "от 1 500 ₽" },
    { name: "Керамическое покрытие", price: "от 15 000 ₽" },
    { name: "Удаление царапин", price: "от 1 200 ₽" },
    { name: "Озонирование салона", price: "от 1 000 ₽" },
    { name: "Мойка двигателя", price: "от 1 200 ₽" },
  ];

  return (
    <section id="pricing" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши цены</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Прозрачные цены на все услуги без скрытых доплат. Выберите подходящий тариф для вашего автомобиля.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border overflow-visible ${plan.popular ? 'border-primary' : 'border-default-200'}`}
              shadow="sm"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <CardHeader className="flex gap-3 pb-0 pt-8">
                <div className={`p-3 rounded-lg w-12 h-12 flex items-center justify-center ${
                  plan.popular ? 'bg-primary/20 text-primary' : 'bg-default-100 text-foreground-600'
                }`}>
                  <Icon icon={plan.icon} className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="text-foreground-500 text-sm">{plan.description}</p>
                </div>
              </CardHeader>
              
              <CardBody className="gap-6">
                <div>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-foreground-500 text-sm">за легковой автомобиль</p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon 
                        icon="lucide:check-circle" 
                        className={plan.popular ? "text-primary" : "text-success"} 
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              
              <CardFooter>
                <Button 
                  fullWidth 
                  color={plan.popular ? "primary" : "default"} 
                  variant={plan.popular ? "solid" : "flat"}
                  href="#contact"
                  as="a"
                >
                  Выбрать
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="border border-default-200" shadow="sm">
          <CardHeader>
            <h3 className="text-xl font-semibold">Дополнительные услуги</h3>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-content1 border border-default-100">
                  <span>{service.name}</span>
                  <span className="font-semibold">{service.price}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-foreground-600">
            * Цены могут варьироваться в зависимости от размера и состояния автомобиля. 
            Для точного расчета стоимости свяжитесь с нами.
          </p>
        </div>
      </div>
    </section>
  );
};