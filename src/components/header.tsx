import React from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "Процесс", href: "#process" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Цены", href: "#pricing" },
    { name: "Галерея", href: "#gallery" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <Navbar 
      maxWidth="xl" 
      isBordered 
      isBlurred 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background/70 backdrop-blur-md"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Icon icon="lucide:droplets" className="text-primary text-2xl" />
          <p className="font-bold text-inherit ml-2">SparkleWash</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link 
              color="foreground" 
              href={item.href}
              className="hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="primary" href="#contact" variant="flat">
            <Icon icon="lucide:phone" className="mr-2" />
            Связаться
          </Button>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={item.href}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};