import React from "react";
import { Card, CardBody, Input, Textarea, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ContactForm = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:map-pin",
      title: "Адрес",
      content: "ул. Автомобильная, 123, Москва",
      link: "https://maps.google.com",
      linkText: "Посмотреть на карте"
    },
    {
      icon: "lucide:phone",
      title: "Телефон",
      content: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
      linkText: "Позвонить"
    },
    {
      icon: "lucide:mail",
      title: "Email",
      content: "info@sparklewash.ru",
      link: "mailto:info@sparklewash.ru",
      linkText: "Написать"
    },
    {
      icon: "lucide:clock",
      title: "Режим работы",
      content: "Ежедневно с 8:00 до 22:00",
      link: "",
      linkText: ""
    }
  ];

  return (
    <section id="contact" className="py-24 bg-content2/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto text-lg">
            Запишитесь на мойку, задайте вопрос или оставьте отзыв. Мы всегда рады помочь вам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border border-default-200" shadow="sm">
            <CardBody>
              <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>
              
              {isSubmitted ? (
                <div className="bg-success/10 text-success p-4 rounded-lg flex items-center gap-3">
                  <Icon icon="lucide:check-circle" className="text-2xl" />
                  <div>
                    <h4 className="font-semibold">Заявка отправлена!</h4>
                    <p>Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Ваше имя"
                    placeholder="Введите ваше имя"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    isRequired
                  />
                  
                  <Input
                    label="Телефон"
                    placeholder="+7 (___) ___-__-__"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    isRequired
                  />
                  
                  <Input
                    label="Email"
                    placeholder="example@mail.ru"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  
                  <Input
                    label="Интересующая услуга"
                    placeholder="Например: Комплексная мойка"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                  />
                  
                  <Textarea
                    label="Сообщение"
                    placeholder="Дополнительная информация или вопросы"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                  />
                  
                  <Button 
                    type="submit" 
                    color="primary" 
                    fullWidth
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </form>
              )}
            </CardBody>
          </Card>
          
          <div className="space-y-6">
            <Card className="border border-default-200" shadow="sm">
              <CardBody>
                <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg h-fit">
                        <Icon icon={item.icon} className="text-primary text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-foreground-600">{item.content}</p>
                        {item.link && (
                          <a 
                            href={item.link} 
                            className="text-primary text-sm hover:underline"
                            target={item.link.startsWith('http') ? "_blank" : undefined}
                            rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          >
                            {item.linkText}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-default-200" shadow="sm">
              <CardBody>
                <h3 className="text-xl font-semibold mb-4">Мы в социальных сетях</h3>
                <p className="text-foreground-600 mb-4">
                  Подписывайтесь на наши социальные сети, чтобы быть в курсе акций и новостей.
                </p>
                
                <div className="flex gap-4">
                  <a href="#" className="bg-default-100 p-3 rounded-full hover:bg-default-200 transition-colors">
                    <Icon icon="logos:vk" className="text-2xl" />
                  </a>
                  <a href="#" className="bg-default-100 p-3 rounded-full hover:bg-default-200 transition-colors">
                    <Icon icon="logos:telegram" className="text-2xl" />
                  </a>
                  <a href="#" className="bg-default-100 p-3 rounded-full hover:bg-default-200 transition-colors">
                    <Icon icon="logos:whatsapp-icon" className="text-2xl" />
                  </a>
                  <a href="#" className="bg-default-100 p-3 rounded-full hover:bg-default-200 transition-colors">
                    <Icon icon="logos:instagram-icon" className="text-2xl" />
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <Card className="border border-default-200" shadow="sm">
            <CardBody>
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.397087693002!2d37.62463491591714!3d55.75639998055643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square%2C%20Moskva%2C%20Russia%2C%20109012!5e0!3m2!1sen!2sus!4v1633338056489!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Карта расположения"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};