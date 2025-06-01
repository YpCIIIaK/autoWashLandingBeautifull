import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      role: "Владелец BMW X5",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
      content: "Отличный сервис! Машина выглядит как новая после комплексной мойки. Особенно понравилась тщательная уборка салона и полировка кузова.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      role: "Владелец Audi Q7",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
      content: "Регулярно пользуюсь услугами этой автомойки. Всегда качественно, быстро и по разумной цене. Рекомендую всем, кто ценит свое время и автомобиль.",
      rating: 5,
    },
    {
      name: "Дмитрий Иванов",
      role: "Владелец Mercedes GLC",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
      content: "Заказывал детейлинг салона. Результат превзошел ожидания! Кожаные сиденья выглядят как новые, все пятна удалены. Буду обращаться снова.",
      rating: 5,
    },
    {
      name: "Мария Козлова",
      role: "Владелец Volkswagen Tiguan",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
      content: "Очень довольна обслуживанием. Персонал вежливый и профессиональный. Машину помыли быстро, пока я ждала в комфортной зоне ожидания с кофе.",
      rating: 4,
    },
    {
      name: "Сергей Николаев",
      role: "Владелец Toyota Camry",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=5",
      content: "Нанесли керамическое покрытие на кузов. Эффект потрясающий - вода скатывается, грязь не прилипает. Стоит своих денег однозначно!",
      rating: 5,
    },
    {
      name: "Анна Соколова",
      role: "Владелец Kia Sportage",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=6",
      content: "Приятно удивлена качеством услуг. Машину не просто помыли, а действительно привели в порядок. Отдельное спасибо за внимание к деталям!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Узнайте, что говорят о нас наши клиенты, которые уже оценили качество наших услуг.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-default-200" shadow="sm">
              <CardBody className="gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3">
                    <Avatar src={testimonial.avatar} size="lg" />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-foreground-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} icon="lucide:star" className="text-warning" />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                      <Icon key={i} icon="lucide:star" className="text-default-300" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground-600">"{testimonial.content}"</p>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full">
            <Icon icon="lucide:thumbs-up" />
            <span className="text-sm font-medium">98% клиентов рекомендуют нас друзьям</span>
          </div>
        </div>
      </div>
    </section>
  );
};