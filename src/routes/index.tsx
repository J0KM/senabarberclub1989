import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award,
  Calendar,
  ChevronDown,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import heroAsset from "@/assets/hero.png.asset.json";
import gallery8Asset from "@/assets/gallery-8.png.asset.json";
import gallery9Asset from "@/assets/gallery-9.png.asset.json";
import gallery10Asset from "@/assets/gallery-10.png.asset.json";
import gallery11Asset from "@/assets/gallery-11.png.asset.json";
import gallery12Asset from "@/assets/gallery-12.png.asset.json";
import gallery13Asset from "@/assets/gallery-13.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sena Barber Club 1989 | Barbería en Santo Domingo" },
      {
        name: "description",
        content:
          "Sena Barber Club 1989 en Santo Domingo. Cortes modernos, afeitados profesionales y reservas por WhatsApp.",
      },
      { property: "og:title", content: "Sena Barber Club 1989" },
      {
        property: "og:description",
        content:
          "Barbería premium en C. David Ben Gurion 101, Santo Domingo. Reserva tu cita por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const PHONE_DISPLAY = "809 379 5878";
const PHONE_E164 = "18093795878";
const RESERVE_URL = `https://wa.me/${PHONE_E164}?text=Hola%20quiero%20reservar%20una%20cita`;
const INSTAGRAM_URL = "https://www.instagram.com/senabarberclub_1989/";
const FACEBOOK_URL =
  "https://www.facebook.com/people/Sena-Barbershop-1989/61560201747243/?name=xhp_nt__fb__action__open_user";

const galleryImages = [
  { src: gallery8Asset.url, alt: "Corte moderno visto desde atrás" },
  { src: gallery9Asset.url, alt: "Perfil con fade limpio y barba perfilada" },
  { src: gallery10Asset.url, alt: "Cabello claro estilizado con barba cuidada" },
  { src: gallery11Asset.url, alt: "Barbero cortando el pelo de un niño" },
  { src: gallery12Asset.url, alt: "Corte gris con línea precisa" },
  { src: gallery13Asset.url, alt: "Corte moderno con line up definido" },
];

const services = [
  {
    name: "Corte clásico",
    desc: "Tijera, máquina y terminación limpia para el día a día.",
    price: "RD$ 500",
    time: "30 min",
  },
  {
    name: "Corte + barba",
    desc: "Fade, perfilado de barba y detalles a navaja.",
    price: "RD$ 800",
    time: "45 min",
  },
  {
    name: "Afeitado profesional",
    desc: "Toalla caliente, navaja y productos premium.",
    price: "RD$ 600",
    time: "30 min",
  },
  {
    name: "Combo premium",
    desc: "Corte, barba, afeitado y ritual completo de acabado.",
    price: "RD$ 1,200",
    time: "60 min",
  },
  {
    name: "Corte junior",
    desc: "Servicio cómodo y paciente para niños hasta 12 años.",
    price: "RD$ 400",
    time: "25 min",
  },
  {
    name: "Diseño de cejas",
    desc: "Perfilado masculino natural con precisión.",
    price: "RD$ 250",
    time: "15 min",
  },
];

const testimonials = [
  {
    name: "Andrés R.",
    text: "Atención excelente, ambiente relajado y el corte queda exactamente como uno lo pide.",
  },
  {
    name: "Miguel S.",
    text: "Se siente como llegar a casa. Buen trato, puntualidad y mucho detalle en la barba.",
  },
  {
    name: "Jorge M.",
    text: "Mi barbería fija en Santo Domingo. Siempre salgo limpio y listo.",
  },
  {
    name: "Pedro L.",
    text: "Reservé por WhatsApp y todo fue rápido. Trabajo profesional de verdad.",
  },
];

const faqs = [
  {
    q: "¿Cómo puedo reservar?",
    a: "Puedes tocar cualquier botón de Reservar cita o escribirnos por WhatsApp al 809 379 5878.",
  },
  {
    q: "¿Aceptan clientes sin cita?",
    a: "Sí, según disponibilidad. Para asegurar tu horario recomendamos reservar antes.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos en C. David Ben Gurion 101, Santo Domingo.",
  },
  {
    q: "¿Cuál es el horario?",
    a: "Lunes a sábado de 9:00 a.m. a 7:00 p.m. Domingo cerrado.",
  },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <Faq openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCta />
      <Footer />
      <FloatingReserveButton />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Sena Barber Club 1989">
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-gold text-gold">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-xl uppercase tracking-wide md:text-2xl">
            Sena Barber Club 1989
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex">
          <a href="#servicios" className="transition hover:text-gold">Servicios</a>
          <a href="#galeria" className="transition hover:text-gold">Galería</a>
          <a href="#ubicacion" className="transition hover:text-gold">Ubicación</a>
        </nav>

        <a
          href={RESERVE_URL}
          className="hidden items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-gold-foreground transition hover:opacity-90 md:inline-flex"
        >
          <Calendar className="h-4 w-4" />
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden pt-16">
      <img
        src={heroAsset.url}
        alt="Interior moderno de Sena Barber Club 1989"
        className="absolute inset-0 h-full w-full object-cover"
        width={1400}
        height={1000}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/35" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-24 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Santo Domingo · Est. 1989
          </p>
          <h1 className="mt-6 font-display text-6xl leading-[0.9] uppercase md:text-8xl lg:text-9xl">
            Corte premium,
            <span className="block text-gold">trato como en casa.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            Cortes modernos, barbas limpias y afeitados profesionales en C. David Ben Gurion 101,
            Santo Domingo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={RESERVE_URL}
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-gold-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              Reservar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-border bg-background/35 px-8 py-4 text-sm font-extrabold uppercase tracking-widest transition hover:border-gold hover:text-gold"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Star, value: "5 / 5", label: "Google Reviews" },
    { icon: Award, value: "+20 años", label: "de experiencia" },
    { icon: Users, value: "+15,000", label: "clientes atendidos" },
    { icon: MapPin, value: "Santo Domingo", label: "C. David Ben Gurion 101" },
  ];

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, value, label }) => (
          <div key={value} className="flex items-center gap-4">
            <Icon className="h-8 w-8 shrink-0 text-gold" />
            <div className="min-w-0">
              <div className="font-display text-2xl uppercase tracking-wide">{value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionTitle eyebrow="Servicios" title="Precios claros. Acabados limpios." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="border border-border bg-card p-7 transition hover:border-gold">
            <div className="flex items-start justify-between gap-5">
              <h3 className="font-display text-3xl uppercase tracking-wide">{service.name}</h3>
              <span className="whitespace-nowrap font-display text-2xl text-gold">{service.price}</span>
            </div>
            <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{service.desc}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                {service.time}
              </span>
              <a href={RESERVE_URL} className="text-gold hover:underline">
                Reservar →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionTitle eyebrow="Galería" title="Trabajos reales. Detalles visibles." />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden border border-border bg-card ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                width={900}
                height={900}
                className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/65 to-transparent opacity-0 transition group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionTitle eyebrow="Testimonios" title="Clientes que vuelven." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="border border-border bg-card p-7">
            <div className="flex gap-1 text-gold" aria-label="5 estrellas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-lg leading-8 text-foreground">“{testimonial.text}”</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              — {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="ubicacion" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionTitle eyebrow="Visítanos" title="Ubicación y horarios." />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[420px] overflow-hidden border border-border bg-card">
            <iframe
              title="Mapa de Sena Barber Club 1989"
              src="https://www.google.com/maps?q=Calle+David+Ben+Gurion+101,+Santo+Domingo&output=embed"
              className="h-full min-h-[420px] w-full grayscale"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center border border-border bg-card p-8 md:p-10">
            <InfoBlock icon={MapPin} label="Dirección">
              C. David Ben Gurion 101
              <br />
              Santo Domingo
            </InfoBlock>
            <InfoBlock icon={Clock} label="Horario">
              <span className="block">Lunes a viernes: 9:00 a.m. – 7:00 p.m.</span>
              <span className="block">Sábado: 9:00 a.m. – 7:00 p.m.</span>
              <span className="block">Domingo: cerrado.</span>
            </InfoBlock>
            <InfoBlock icon={Phone} label="Contacto">
              <a href={`tel:+${PHONE_E164}`} className="transition hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </InfoBlock>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={RESERVE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-extrabold uppercase tracking-widest text-gold-foreground transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`tel:+${PHONE_E164}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-extrabold uppercase tracking-widest transition hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number;
  setOpenFaq: (value: number) => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes." />
      <div className="mt-12 divide-y divide-border border-y border-border">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <button
              key={faq.q}
              type="button"
              onClick={() => setOpenFaq(isOpen ? -1 : index)}
              className="flex w-full flex-col gap-3 py-6 text-left"
            >
              <span className="flex items-center justify-between gap-4">
                <span className="font-display text-2xl uppercase tracking-wide">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`} />
              </span>
              {isOpen ? <span className="leading-7 text-muted-foreground">{faq.a}</span> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold">Tu silla te espera</p>
        <h2 className="mt-5 font-display text-5xl uppercase leading-none md:text-7xl">
          Reserva tu cita y sal impecable.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
          Escríbenos por WhatsApp y confirma tu horario en minutos.
        </p>
        <a
          href={RESERVE_URL}
          className="mt-9 inline-flex items-center justify-center gap-3 rounded-sm bg-gold px-9 py-4 text-sm font-extrabold uppercase tracking-widest text-gold-foreground transition hover:opacity-90"
        >
          <Calendar className="h-5 w-5" />
          Reservar ahora
        </a>
        <div className="mt-8 flex justify-center gap-3">
          <SocialLink href={INSTAGRAM_URL} label="Instagram">
            <Instagram className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={FACEBOOK_URL} label="Facebook">
            <Facebook className="h-5 w-5" />
          </SocialLink>
          <SocialLink href={RESERVE_URL} label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </SocialLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs font-bold uppercase tracking-widest text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4 text-gold" />
          <span>Sena Barber Club 1989</span>
        </div>
        <div>© {new Date().getFullYear()} · Todos los derechos reservados</div>
      </div>
    </footer>
  );
}

function FloatingReserveButton() {
  return (
    <a
      href={RESERVE_URL}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-4 text-sm font-extrabold uppercase tracking-widest text-gold-foreground shadow-2xl shadow-background/70 transition hover:scale-105"
    >
      <Calendar className="h-4 w-4" />
      <span className="hidden sm:inline">Reservar cita</span>
      <span className="sm:hidden">Reservar</span>
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-gold">
        <span className="h-px w-9 bg-gold" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-5xl uppercase leading-none md:text-6xl">{title}</h2>
    </div>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border py-6 first:pt-0 last:border-b-0">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
        <Icon className="h-4 w-4" />
        {label}
      </p>
      <div className="mt-2 font-display text-3xl uppercase leading-tight tracking-wide">{children}</div>
    </div>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-12 w-12 place-items-center border border-border text-muted-foreground transition hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}