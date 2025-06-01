import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-gradient-to-b from-background to-content2/30 pt-16 pb-24"
    >
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f6,transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b82f6,transparent_40%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
              <Icon icon="lucide:sparkles" />
              <span className="text-sm font-medium">Профессиональная автомойка</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Безупречная чистота вашего автомобиля
            </h1>
            
            <p className="text-foreground-600 text-lg md:text-xl max-w-lg">
              Мы предлагаем полный спектр услуг по мойке и детейлингу автомобилей с использованием современного оборудования и экологичных средств.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button 
                size="lg" 
                color="primary" 
                variant="shadow"
                href="#services"
                as="a"
                className="font-medium"
              >
                Наши услуги
                <Icon icon="lucide:arrow-right" className="ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="bordered" 
                color="primary"
                href="#contact"
                as="a"
                className="font-medium"
              >
                Записаться
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <Image
                    key={num}
                    src={`https://img.heroui.chat/image/avatar?w=100&h=100&u=${num}`}
                    alt={`Customer ${num}`}
                    className="w-10 h-10 rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-warning" />
                  ))}
                </div>
                <p className="text-foreground-600 text-sm">
                  <span className="font-semibold">4.9/5</span> на основе <span className="font-semibold">2,000+</span> отзывов
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://img.heroui.chat/image/places?w=800&h=600&u=1"
                alt="Car Wash Service"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="bg-background/80 backdrop-blur-md rounded-xl p-4 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Icon icon="lucide:timer" className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Быстрый сервис</h3>
                      <p className="text-sm text-foreground-600">Комплексная мойка за 30 минут</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};