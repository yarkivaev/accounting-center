import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sidebar text-white py-20">
        <div className="container">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#fafafa" }}
          >
            Контакты
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Свяжитесь с нами любым удобным способом. Мы всегда рады ответить на
            ваши вопросы и обсудить сотрудничество.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                    <MapPin className="h-5 w-5" />
                    Адрес
                  </div>
                  <p className="text-lg text-sidebar font-medium">
                    398007, г. Липецк,
                    <br />
                    пл. Заводская, д. 1
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-wider text-sm">
                    <Clock className="h-5 w-5" />
                    Режим работы
                  </div>
                  <p className="text-lg text-sidebar font-medium">
                    Пн-Пт: 8:00 — 17:00
                    <br />
                    Сб-Вс: Выходной
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold text-sidebar border-b border-border pb-4">
                  Телефоны и E-mail
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase text-muted-foreground">
                      Бухгалтерия
                    </span>
                    <a
                      href="tel:+74742000000"
                      className="block text-lg font-bold text-sidebar hover:text-primary transition-colors"
                    >
                      +7 (4742) 00-00-00
                    </a>
                    <a
                      href="mailto:buh@svobodny-sokol.ru"
                      className="block text-base text-primary hover:underline"
                    >
                      buh@svobodny-sokol.ru
                    </a>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase text-muted-foreground">
                      Лаборатория
                    </span>
                    <a
                      href="tel:+74742000001"
                      className="block text-lg font-bold text-sidebar hover:text-primary transition-colors"
                    >
                      +7 (4742) 00-00-01
                    </a>
                    <a
                      href="mailto:lab@svobodny-sokol.ru"
                      className="block text-base text-primary hover:underline"
                    >
                      lab@svobodny-sokol.ru
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[400px] bg-secondary w-full relative border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2423.66687654321!2d39.646666!3d52.596666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM1JzQ4LjAiTiAzOcKwMzgnNDguMCJF!5e0!3m2!1sen!2sru!4v1620000000000!5m2!1sen!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-secondary/30 p-8 md:p-12 border border-border h-fit sticky top-24">
              <h2 className="text-2xl font-bold text-sidebar mb-6">
                Информация
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Мы всегда готовы ответить на ваши вопросы и предоставить
                  подробную консультацию по нашим услугам.
                </p>
                <p>
                  Для заключения договора или получения коммерческого
                  предложения, пожалуйста, свяжитесь с нами по телефону или
                  электронной почте.
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-bold text-sidebar uppercase tracking-wide mb-2">
                    Реквизиты
                  </p>
                  <p className="text-sm">
                    ООО «Учетный Центр Свободный Сокол»
                    <br />
                    ИНН: 4825000000
                    <br />
                    КПП: 482501001
                    <br />
                    ОГРН: 1024800000000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
