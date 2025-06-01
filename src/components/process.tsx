import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Process = () => {
  const steps = [
    {
      icon: "lucide:calendar",
      title: "Запись",
      description: "Выберите удобное время и услугу через сайт или по телефону",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=2"
    },
    {
      icon: "lucide:car",
      title: "Приезд",
      description: "Приезжайте в назначенное время или закажите выездную мойку",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=3"
    },
    {
      icon: "lucide:sparkles",
      title: "Мойка",
      description: "Наши специалисты выполнят все необходимые работы качественно и быстро",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=4"
    },
    {
      icon: "lucide:check-circle",
      title: "Результат",
      description: "Получите сияющий чистотой автомобиль и приятные бонусы для постоянных клиентов",
      image: "https://img.heroui.chat/image/places?w=400&h=300&u=5"
    }
  ];

  return (
    <section id="process" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Простой и удобный процесс, который экономит ваше время и гарантирует отличный результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-sm overflow-visible">
              <CardBody className="gap-4 p-0">
                <div className="relative">
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute -bottom-6 left-6 bg-background shadow-md rounded-full w-12 h-12 flex items-center justify-center border border-default-200">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                
                <div className="p-6 pt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon={step.icon} className="text-primary text-xl" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-foreground-600">{step.description}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-primary/20 p-4 rounded-full">
              <Icon icon="lucide:info" className="text-primary text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Экологичность и безопасность</h3>
              <p className="text-foreground-600">
                Мы используем только экологически чистые моющие средства, безопасные для вашего автомобиля и окружающей среды. 
                Наше оборудование соответствует всем современным стандартам и позволяет экономить воду при сохранении высокого качества мойки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};