"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const sections = [
  {
    id: "problem",
    title: "Çocuğunuz yemek yemiyor mu?",
    text: "Yemek saatleri birçok aile için stresli geçebiliyor. HASYRA, zorlamak yerine alışkanlık oluşturmayı destekler.",
    image: "/problem.png",
  },
  {
    id: "technology",
    title: "Gerçek lokmayı algılayan teknoloji.",
    text: "Çocuğun yemek yerken yaptığı gerçek hareketler analiz edilir. Amaç ekran süresi değil, gerçek davranışı ödüllendirmektir.",
    image: "/technology.png",
  },
  {
    id: "how",
    title: "HASYRA nasıl çalışır?",
    text: "Çocuk lokma alır, HASYRA hareketi algılar, ödül içeriği devreye girer ve pozitif alışkanlık desteklenir.",
    image: "/how.png",
  },
  {
    id: "parent",
    title: "Ebeveynler için içiniz rahat olsun.",
    text: "Lokma sayısı, ilerleme takibi, süre kontrolü ve ödül yönetimi ebeveyn kontrolünde ilerler.",
    image: "/parent.png",
  },
];

export default function Home() {

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f6f2] text-[#071a38]">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[4px] origin-left bg-gradient-to-r from-green-500 via-orange-400 to-green-500"
        style={{ scaleX }}
      />

      <div className="pointer-events-none fixed left-[-120px] top-[120px] h-[360px] w-[360px] rounded-full bg-green-300/30 blur-[90px]" />

      <div className="pointer-events-none fixed right-[-140px] top-[420px] h-[420px] w-[420px] rounded-full bg-orange-300/30 blur-[100px]" />

      <nav className="sticky top-0 z-50 px-4 py-4">

        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[34px] bg-white/85 px-7 py-5 shadow-[0_18px_60px_rgba(7,26,56,0.10)] backdrop-blur-2xl">

          <a href="#" className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="HASYRA Logo"
              className="h-16 w-16 rounded-2xl object-cover shadow-lg"
            />

            <span className="text-3xl font-black tracking-tight text-[#071a38]">
              Has<span className="text-orange-500">y</span>ra
            </span>

          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-[#071a38] lg:flex">

            <a
              href="#problem"
              className="transition hover:-translate-y-1 hover:text-green-600"
            >
              Problem
            </a>

            <a
              href="#technology"
              className="transition hover:-translate-y-1 hover:text-green-600"
            >
              Teknoloji
            </a>

            <a
              href="#how"
              className="transition hover:-translate-y-1 hover:text-green-600"
            >
              Nasıl Çalışır?
            </a>

            <a
              href="#parent"
              className="transition hover:-translate-y-1 hover:text-green-600"
            >
              Ebeveynler
            </a>
            <div className="flex items-center gap-3 ml-4">

              <a
                href="/"
                className="transition hover:scale-110"
                title="English"
              >
                <img
                  src="/flag-gb.png"
                  alt="English"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </a>

              <a
                href="/tr"
                className="transition hover:scale-110"
                title="Türkçe"
              >
                <img
                  src="/flag-tr.png"
                  alt="Türkçe"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </a>

            </div>

          </div>

          <a
            href="#soon"
            className="hidden rounded-full bg-gradient-to-r from-green-500 to-orange-500 px-6 py-3 text-sm font-black text-white shadow-[0_16px_45px_rgba(249,115,22,0.30)] transition hover:scale-105 lg:inline-flex"
          >
            🚀 Çok Yakında →
          </a>

        </div>

      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 overflow-hidden px-6 py-20 md:grid-cols-2">
        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-green-300/20 blur-[100px]" />
        <div className="absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-orange-300/20 blur-[100px]" />
        <div>
          <div className="mb-6 inline-flex rounded-full bg-green-600 px-5 py-2 text-sm font-bold text-white">
            Yakında Sizlerle
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-7xl">
            Kendi kendine{" "}
            <span className="bg-gradient-to-r from-green-500 to-orange-400 bg-clip-text text-transparent">yemek yemeyi</span>{" "}
            destekliyoruz.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-slate-600">
            HASYRA, gerçek yemek davranışını algılayarak ekran süresini pozitif
            alışkanlıklara dönüştüren akıllı yemek alışkanlığı sistemidir.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#soon"
              className="inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-green-500 to-orange-500 px-10 py-5 text-lg font-black text-white shadow-[0_18px_50px_rgba(249,115,22,0.28)] transition hover:scale-105"
            >
              🚀 Çok Yakında →
            </a>

            <a
              href="#how"
              className="inline-flex items-center gap-3 rounded-3xl border-2 border-green-500 bg-white/70 px-10 py-5 text-lg font-black text-green-700 shadow-sm transition hover:scale-105 hover:bg-white"
            >
              Nasıl Çalışır? →
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-black/5 pt-8">

            <div>
              <div className="text-3xl font-black text-[#071a38]">
                AI
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Gerçek davranış analizi
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-[#071a38]">
                Smart
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Adaptif alışkanlık sistemi
              </div>
            </div>

            <div>
              <div className="text-3xl font-black text-[#071a38]">
                Parent
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Ebeveyn kontrollü deneyim
              </div>
            </div>

          </div>
        </div>

        <div className="relative">
          <img
            src="/hero.png"
            alt="HASYRA çocuklar için akıllı yemek alışkanlığı"
            className="premium-card float-soft mx-auto w-full max-w-[620px] rounded-[42px] shadow-[0_40px_120px_rgba(7,26,56,0.18)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-5 rounded-[36px] bg-white p-6 shadow-sm md:grid-cols-4">
          {[
            ["Gerçek Lokma", "Yapay zeka destekli algılama."],
            ["Pozitif Ödül", "Her lokma motivasyona dönüşür."],
            ["Ebeveyn Kontrolü", "Süreç sizin kontrolünüzde."],
            ["Sağlıklı Rutin", "Küçük adımlar alışkanlık olur."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-[#f8f6f2] p-6">
              <h3 className="mb-2 text-lg font-black">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {sections.map((item, index) => (
        <motion.section
          key={item.id}
          id={item.id}
          className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-0 top-10 h-40 w-40 rounded-full bg-green-200/20 blur-3xl" />
          <div className={index % 2 === 1 ? "md:order-2" : ""}>
            <div className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-green-600">
              HASYRA
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              {item.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {item.text}
            </p>
          </div>

          <div>
            <img
              src={item.image}
              alt={item.title}
              className="premium-card w-full rounded-[42px] bg-white shadow-xl"
            />
          </div>
        </motion.section>
      ))}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-green-600">
          HASYRA EXPERIENCE
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.75fr]">

          <div>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Gerçek davranış.
              <span className="bg-gradient-to-r from-green-500 to-orange-400 bg-clip-text text-transparent">
                {" "}Gerçek ödül.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              HASYRA, çocuğun gerçek yemek davranışını algılar.
              Lokma geldiğinde içerik devam eder.
              Yemek davranışı olmadığında ekran pasif hale gelir.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-[#071a38]">
                “Ekran sadece oyalamaz.
                Sağlıklı alışkanlığı destekler.”
              </p>
            </div>
          </div>

          <div className="premium-card relative mx-auto max-w-[420px] overflow-hidden rounded-[36px] border border-white/60 bg-white p-2 shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            >
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-6 text-sm font-black uppercase tracking-[0.25em] text-green-600">
          WHY HASYRA
        </div>

        <div className="mb-10">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Ekranı alışkanlığa dönüştürüyoruz.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            HASYRA, ekran süresini gerçek yemek davranışıyla ilişkilendirir.
            Amaç sadece içerik tüketimi değil,
            sağlıklı ve bağımsız yemek alışkanlıkları oluşturmaktır.
          </p>
        </div>

        <img
          src="/why.png"
          alt="Why Hasyra"
          className="premium-card mx-auto w-full max-w-[950px] rounded-[42px] shadow-2xl"
        />

      </section>
      <section id="soon" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 overflow-hidden rounded-[44px] bg-[#071a38] p-8 text-white md:grid-cols-2 md:p-14">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-bold">
              Çok Yakında
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Gerçek alışkanlıklar çok yakında başlıyor.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              App Store ve Google Play hazırlıkları devam ediyor. HASYRA,
              çocukların yemek saatlerini daha pozitif bir deneyime dönüştürmek
              için geliyor.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/50"
              />

              <button className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:scale-105">
                Haberdar Ol
              </button>
            </div>

            <p className="mt-3 text-sm text-white/45">
              Lansman duyurusu ve erken erişim için.
            </p>
          </div>

          <img
            src="/soon.png"
            alt="HASYRA çok yakında"
            className="premium-card w-full rounded-[36px] shadow-2xl"
          />
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white/40 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div>
            <strong className="text-[#071a38]">HASYRA</strong> © 2026 — Smart Feeding Assistant for Kids
          </div>

          <div className="flex gap-5">
            <a
              href="/privacy-policy-tr.html"
              className="transition hover:text-green-600"
            >
              Gizlilik
            </a>

            <a href="mailto:info@hasyra.com" className="transition hover:text-green-600">
              info@hasyra.com
            </a>

            <a href="#soon" className="transition hover:text-green-600">
              Erken Erişim
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}