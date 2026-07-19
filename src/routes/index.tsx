import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Star,
  MapPin,
  Phone,
  Clock,
  Users,
  Award,
  Calendar,
  Instagram,
  Facebook,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero.png.asset.json";
import g1 from "@/assets/gallery-2.png.asset.json";
import g2 from "@/assets/gallery-3.png.asset.json";
import g3 from "@/assets/gallery-4.png.asset.json";
import g4 from "@/assets/gallery-5.png.asset.json";
import g5 from "@/assets/gallery-6.png.asset.json";
import g6 from "@/assets/gallery-7.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:image", content: "https://id-preview--ba6a8d3c-f63a-425c-9dfd-6e356078c2c3.lovable.app/og.jpg" },
    ],
  }),
  component: Index,
});

const RESERVE_URL = "https://wa.me/18093795878?text=Hola%20quiero%20reservar%20una%20cita";

const services = [
  { name: "Corte Clásico", desc: "Corte a tijera y máquina con acabado profesional.", price: "RD$ 500", time: "30 min" },
  { name: "Corte + Barba", desc: "Corte completo con diseño y perfilado de barba.", price: "RD$ 800", time: "45 min" },
  { name: "Afeitado Tradicional", desc: "Navaja, toalla caliente y aceites premium.", price: "RD$ 600", time: "30 min" },
  { name: "Combo Premium", desc: "Corte, barba, afeitado y ritual facial completo.", price: "RD$ 1,200", time: "60 min" },
  { name: "Corte Junior", desc: "Corte especial para niños hasta 12 años.", price: "RD$ 400", time: "25 min" },
  { name: "Diseño de Cejas", desc: "Perfilado masculino con detalle a navaja.", price: "RD$ 250", time: "15 min" },
];

const gallery = [g1, g2, g3, g4, g5, g6];

const testimonials = [
  { name: "Andrés R.", text: "El mejor corte que me han hecho en Santo Domingo. Ambiente relajado, atención de otro nivel.", stars: 5 },
  { name: "Miguel S.", text: "Voy hace más de un año y nunca fallan. El afeitado con toalla caliente es una experiencia.", stars: 5 },
  { name: "Jorge M.", text: "Profesionales de verdad. Reservas fáciles, siempre puntuales y el resultado siempre impecable.", stars: 5 },
  { name: "Pedro L.", text: "Se siente como estar en casa. Ya es mi lugar fijo cada dos semanas.", stars: 5 },
];

const faqs = [
  { q: "¿Cómo hago una reserva?", a: "Puedes reservar por WhatsApp, llamada o directamente desde el botón 'Reservar cita' en esta página. Confirmamos tu horario en minutos." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos efectivo, tarjetas de crédito/débito, transferencias y pagos por app (ATH Móvil, PayPal)." },
  { q: "¿Puedo cancelar o reprogramar mi cita?", a: "Sí, sin costo hasta 2 horas antes de tu cita. Solo escríbenos por WhatsApp." },
  { q: "¿Qué productos utilizan?", a: "Trabajamos con marcas premium como Reuzel, Layrite, American Crew y Proraso para garantizar la mejor calidad." },
  { q: "¿Necesito reservar o puedo llegar sin cita?", a: "Aceptamos walk-ins según disponibilidad, pero recomendamos reservar para asegurar tu barbero y horario preferido." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-gold" />
            <span className="font-display text-xl tracking-widest lowercase">sena barber club 1989</span>
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-wider text-muted-foreground md:flex">
            <a href="#servicios" className="hover:text-gold">Servicios</a>
            <a href="#galeria" className="hover:text-gold">Galería</a>
            <a href="#equipo" className="hover:text-gold">Equipo</a>
            <a href="#ubicacion" className="hover:text-gold">Ubicación</a>
          </nav>
          <a href={RESERVE_URL} className="hidden rounded-sm bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold-foreground transition hover:opacity-90 md:inline-block">
            Reservar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <img src={heroImg.url} alt="Interior de Sena Barber Club" className="absolute inset-0 h-full w-full object-cover" width={1024} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-6 px-6 py-32">
          <div className="max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold whitespace-pre-line">
              <span className="h-px w-10 bg-gold" /> SANTO DOMINGO · EST. 1989{"\n\n"}
            </p>
            <h1 className="font-display text-6xl leading-[0.9] md:text-8xl">
              Un corte<br />
              <span className="text-gold">como en casa,</span><br />
              con nivel premium.
            </h1>
            <p className="mt-8 max-w-lg text-lg text-muted-foreground">
              Cortes modernos, afeitados tradicionales y una experiencia pensada para el hombre que exige lo mejor. Reserva tu silla en menos de 30 segundos.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={RESERVE_URL} className="group inline-flex items-center gap-3 rounded-sm bg-gold px-8 py-4 text-sm font-bold uppercase tracking-widest text-gold-foreground transition hover:opacity-90">
                <Calendar className="h-4 w-4" /> Reservar cita
              </a>
              <a href="#servicios" className="inline-flex items-center gap-3 rounded-sm border border-border px-8 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition hover:border-gold hover:text-gold">
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { icon: Star, label: "5 / 5", sub: "Google Reviews" },
            { icon: Award, label: "+20 años", sub: "de experiencia" },
            { icon: Users, label: "+15,000", sub: "clientes atendidos" },
            { icon: MapPin, label: "Santo Domingo", sub: "C. David Ben Gurion 101" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon className="h-8 w-8 shrink-0 text-gold" />
              <div>
                <div className="font-display text-2xl tracking-wider">{label}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Servicios" title="Precios claros, calidad sin excepción" />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition hover:border-gold">
              <div className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rotate-45 bg-gold/10 transition group-hover:bg-gold/20" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl tracking-wide">{s.name}</h3>
                <span className="whitespace-nowrap font-display text-xl text-gold">{s.price}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {s.time}</span>
                <a href={RESERVE_URL} className="text-gold hover:underline">Reservar →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Galería" title="Trabajos que hablan por sí solos" />
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {gallery.map((src, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-sm ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={src} alt={`Trabajo ${i + 1}`} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionTitle eyebrow="Testimonios" title="Lo que dicen nuestros clientes" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-sm border border-border bg-card p-8">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground">"{t.text}"</p>
                <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle eyebrow="Visítanos" title="Ubicación & horarios" />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps?q=Calle+David+Ben+Gurion+101,+Santo+Domingo&output=embed"
              className="h-full min-h-[400px] w-full grayscale"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center gap-8 rounded-sm border border-border bg-card p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Dirección</p>
              <p className="mt-2 font-display text-2xl">C. David Ben Gurion 101,<br />Santo Domingo</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold">Horario</p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p><span className="text-foreground">Lunes a viernes</span> · 9:00 a.m. – 7:00 p.m.</p>
                <p><span className="text-foreground">Sábado</span> · 9:00 a.m. – 7:00 p.m.</p>
                <p><span className="text-foreground">Domingo</span> · Cerrado</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={RESERVE_URL} className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-gold-foreground hover:opacity-90">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="tel:+18093795878" className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-bold uppercase tracking-widest hover:border-gold hover:text-gold">
                <Phone className="h-4 w-4" /> Llamar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <SectionTitle eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mt-16 divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full flex-col gap-3 py-6 text-left transition"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-lg tracking-wide">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${open ? "rotate-180" : ""}`} />
                  </div>
                  {open && <p className="text-muted-foreground">{f.a}</p>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Tu silla te espera</p>
          <h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">
            Reserva tu cita y<br />
            <span className="text-gold">siéntete en casa.</span>
          </h2>
          <a href={RESERVE_URL} className="mt-10 inline-flex items-center gap-3 rounded-sm bg-gold px-10 py-5 text-sm font-bold uppercase tracking-widest text-gold-foreground transition hover:opacity-90">
            <Calendar className="h-5 w-5" /> Reservar ahora
          </a>
          <div className="mt-10 flex justify-center gap-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/senabarberclub_1989/" },
              { Icon: Facebook, href: "https://www.facebook.com/people/Sena-Barbershop-1989/61560201747243/" },
              { Icon: MessageCircle, href: RESERVE_URL },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="rounded-sm border border-border p-3 text-muted-foreground transition hover:border-gold hover:text-gold">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-widest text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Scissors className="h-4 w-4 text-gold" />
            <span>SENA BARBER CLUB 1989{"\n"}</span>
          </div>
          <div>© {new Date().getFullYear()} · Todos los derechos reservados</div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <a
        href={RESERVE_URL}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-bold uppercase tracking-widest text-gold-foreground shadow-2xl shadow-black/50 transition hover:scale-105"
      >
        <Calendar className="h-4 w-4" />
        <span className="hidden sm:inline">Reservar cita</span>
        <span className="sm:hidden">Reservar</span>
      </a>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-8 bg-gold" /> {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}