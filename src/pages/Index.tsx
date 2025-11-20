import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'portfolio', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "CSS/SCSS", level: 90 },
    { name: "PostgreSQL", level: 80 },
    { name: "Git", level: 95 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 }
  ];

  const projects = [
    {
      title: "E-commerce платформа",
      description: "Полнофункциональный интернет-магазин с системой платежей и управлением заказами",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://cdn.poehali.dev/projects/7f76d787-cf79-410b-a99c-95aba67ed003/files/e610a7c4-e726-4ec6-8834-8ad4450d7b49.jpg"
    },
    {
      title: "CRM система",
      description: "Система управления взаимоотношениями с клиентами для B2B компаний",
      tech: ["TypeScript", "Express", "MongoDB", "Redis"],
      image: "https://cdn.poehali.dev/projects/7f76d787-cf79-410b-a99c-95aba67ed003/files/d12e2375-4419-4339-b4d4-2d93c116e676.jpg"
    },
    {
      title: "Аналитическая панель",
      description: "Real-time дашборд для визуализации бизнес-метрик и аналитики",
      tech: ["React", "D3.js", "WebSocket", "AWS"],
      image: "https://cdn.poehali.dev/projects/7f76d787-cf79-410b-a99c-95aba67ed003/files/23293734-e93c-4fd3-a083-6ea4a8a29628.jpg"
    }
  ];

  const experience = [
    {
      period: "2022 - Настоящее время",
      position: "Senior Frontend Developer",
      company: "Tech Innovations Ltd",
      description: "Руководство командой из 5 разработчиков, архитектура frontend решений, внедрение лучших практик"
    },
    {
      period: "2020 - 2022",
      position: "Frontend Developer",
      company: "Digital Solutions",
      description: "Разработка веб-приложений, оптимизация производительности, менторинг junior разработчиков"
    },
    {
      period: "2019 - 2020",
      position: "Junior Frontend Developer",
      company: "StartupHub",
      description: "Создание пользовательских интерфейсов, работа с React и TypeScript"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-secondary">Портфолио</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'skills', label: 'Навыки' },
                { id: 'experience', label: 'Опыт' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-in text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-12 bg-primary" />
                <Badge className="text-xs font-semibold tracking-wider" variant="outline">
                  <Icon name="Code2" size={14} className="mr-1" />
                  WEB DEVELOPER
                </Badge>
                <div className="h-px w-12 bg-primary" />
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="text-secondary">Превращаю идеи</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  в технологии
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                6 лет создания надежных веб-решений, которые работают безупречно
                <span className="text-primary font-semibold"> 24/7</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-in-left">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Быстро</h3>
                  <p className="text-sm text-muted-foreground">Оптимизированные решения с высокой производительностью</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Надежно</h3>
                  <p className="text-sm text-muted-foreground">Проверенные технологии и лучшие практики разработки</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Современно</h3>
                  <p className="text-sm text-muted-foreground">Актуальный стек и инновационные подходы к задачам</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="text-base px-8 gap-2 shadow-lg shadow-primary/25" onClick={() => scrollToSection('portfolio')}>
                <Icon name="Briefcase" size={20} />
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 gap-2" onClick={() => scrollToSection('contact')}>
                <Icon name="MessageSquare" size={20} />
                Обсудить проект
              </Button>
            </div>

            <div className="mt-16 flex justify-center gap-8 text-center animate-fade-in">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">качество</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground/50" />
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-center">Обо мне</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Веб-разработчик с 6-летним опытом создания масштабируемых и производительных веб-приложений. 
                  Специализируюсь на frontend разработке с использованием современного стека технологий.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Моя страсть — превращать сложные бизнес-требования в элегантные пользовательские интерфейсы. 
                  Постоянно изучаю новые технологии и делюсь знаниями с командой.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow animate-fade-in">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Навыки</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Опыт работы</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <CardTitle>{exp.position}</CardTitle>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {exp.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Свяжитесь со мной</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Готов обсудить ваш проект или возможности сотрудничества
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="gap-2">
              <Icon name="Mail" size={20} />
              Email
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Github" size={20} />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Linkedin" size={20} />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Icon name="Phone" size={20} />
              Телефон
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Портфолио веб-разработчика. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;