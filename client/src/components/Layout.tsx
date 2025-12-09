import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/about", label: "О центре" },
    { href: "/accounting", label: "Бухгалтерия" },
    { href: "/laboratory", label: "Лаборатория" },
    { href: "/legal", label: "Юридические услуги" },
    { href: "/contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Top Bar */}
      <div className="bg-sidebar text-sidebar-foreground py-2 text-xs font-mono hidden md:block border-b border-sidebar-border">
        <div className="container flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              г. Липецк, Заводская пл., 1
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              poshevalova_la@svsokol.ru
            </span>
          </div>
          <span>ПН-ПТ: 8:00 - 17:00</span>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background py-3 shadow-sm">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
              С
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight">
                СВОБОДНЫЙ СОКОЛ
              </span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                Учетный Центр
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79205292360"
              className="flex items-center gap-2 text-sm font-bold hover:text-primary"
            >
              <Phone className="h-4 w-4" />
              +7 920 529-23-60
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 border-b",
                  location === link.href
                    ? "text-primary border-primary"
                    : "border-border"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79205292360"
              className="flex items-center gap-3 font-bold mt-4"
            >
              <Phone className="h-5 w-5" />
              +7 920 529-23-60
            </a>
          </nav>
        </div>
      )}

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  С
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-lg tracking-tight text-white">
                    СВОБОДНЫЙ СОКОЛ
                  </span>
                  <span className="text-[10px] text-sidebar-foreground/60 font-mono uppercase tracking-wider">
                    Учетный Центр
                  </span>
                </div>
              </div>
              <p className="text-sm text-sidebar-foreground/70 leading-relaxed max-w-xs">
                Комплексные решения для бизнеса: профессиональная бухгалтерия и
                высокоточная заводская лаборатория в одном центре.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                Навигация
              </h3>
              <ul className="space-y-3 text-sm text-sidebar-foreground/70">
                <li>
                  <Link href="/" className="hover:text-white">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    О центре
                  </Link>
                </li>
                <li>
                  <Link href="/accounting" className="hover:text-white">
                    Бухгалтерские услуги
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory" className="hover:text-white">
                    Заводская лаборатория
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="hover:text-white">
                    Юридические услуги
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="hover:text-white">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                Услуги
              </h3>
              <ul className="space-y-3 text-sm text-sidebar-foreground/70">
                <li>
                  <Link href="/accounting" className="hover:text-white">
                    Регистрация ИП и ООО
                  </Link>
                </li>
                <li>
                  <Link href="/accounting" className="hover:text-white">
                    Бухгалтерское сопровождение
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory" className="hover:text-white">
                    Химический анализ
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory" className="hover:text-white">
                    Механические испытания
                  </Link>
                </li>
                <li>
                  <Link href="/laboratory" className="hover:text-white">
                    Неразрушающий контроль
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">
                Контакты
              </h3>
              <ul className="space-y-4 text-sm text-sidebar-foreground/70">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>г. Липецк, Заводская пл., 1</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href="tel:+79205292360" className="hover:text-white">
                    +7 920 529-23-60
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:poshevalova_la@svsokol.ru"
                    className="hover:text-white"
                  >
                    poshevalova_la@svsokol.ru
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-sidebar-border/50 text-center text-xs text-sidebar-foreground/40">
            <p>
              © {new Date().getFullYear()} УЦ Свободный Сокол. Все права
              защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
