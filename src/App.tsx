/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const translations = {
    ca: {
        title: "The Living Manuscript",
        date: "Barcelona, Tardor de 2024",
        greeting: "Benvolgut lector,",
        intro: "T’escric aquesta nota des del silenci d’un estudi que fa olor de cedre i paper vell. Aquesta és la meva llar digital, un espai on el temps sembla córrer a una velocitat diferent. M'agrada pensar que la tecnologia, quan s'utilitza amb intenció, pot ser tan càlida com una conversa a la vora del foc.",
        p1_start: "Soc un consultor independent que creu en la ",
        p1_span: "proximitat humana",
        p1_end: " i en el valor de les idees que es couen a foc lent. No busco la perfecció rígida de les graelles corporatives, sinó l'harmonia d'allò que té ànima.",
        p2_start: "Entenc la meva feina com un exercici de ",
        p2_span: "transparència absoluta",
        p2_end: ". En un món de soroll constant, el meu compromís és el silenci productiu i la claredat. Treballo amb projectes que busquen un impacte real, sense artificis.",
        p3_start: "La meva ",
        p3_span: "consultoria freelance",
        p3_end: " se centra en l'estratègia de marca i l'acompanyament creatiu. Ajudo a traduir visions complexes en missatges que la gent vulgui desar en una capsa de fusta, com aquesta carta.",
        footer_text: 'Si creus que podem construir alguna cosa amb sentit, estaria encantat de rebre una resposta teva a <a class="text-secondary hover:underline" href="mailto:hola@tudominio.com">hola@tudominio.com</a> o trobar-nos a <a class="text-secondary hover:underline" href="https://twitter.com/tuusuario">@tuusuario</a>. No cal que sigui formal; les millors col·laboracions neixen d\'una curiositat compartida.',
        regards: "Atentament,",
        copyright: "Composed with intent. © 2024"
    },
    es: {
        title: "El Manuscrito Vivo",
        date: "Barcelona, Otoño de 2024",
        greeting: "Estimado lector,",
        intro: "Te escribo esta nota desde el silencio de un estudio que huele a cedro y papel viejo. Este es mi hogar digital, un espacio donde el tiempo parece correr a una velocidad diferente. Me gusta pensar que la tecnología, cuando se usa con intención, puede ser tan cálida como una conversación al lado del fuego.",
        p1_start: "Soy un consultor independiente que cree en la ",
        p1_span: "proximidad humana",
        p1_end: " y en el valor de las ideas que se cocinan a fuego lento. No busco la perfección rígida de las cuadrículas corporativas, sino la armonía de lo que tiene alma.",
        p2_start: "Entiendo mi trabajo como un ejercicio de ",
        p2_span: "transparencia absoluta",
        p2_end: ". En un mundo de ruido constante, mi compromiso es el silencio productivo y la claridad. Trabajo con proyectos que buscan un impacto real, sin artificios.",
        p3_start: "Mi ",
        p3_span: "consultoría freelance",
        p3_end: " se centra en la estrategia de marca y el acompañamiento creativo. Ayudo a traducir visiones complejas en mensajes que la gente quiera guardar en una caja de madera, como esta carta.",
        footer_text: 'Si crees que podemos construir algo con sentido, estaría encantado de recibir una respuesta tuya en <a class="text-secondary hover:underline" href="mailto:hola@tudominio.com">hola@tudominio.com</a> o encontrarnos en <a class="text-secondary hover:underline" href="https://twitter.com/tuusuario">@tuusuario</a>. No hace falta que sea formal; las mejores colaboraciones nacen de una curiosidad compartida.',
        regards: "Atentamente,",
        copyright: "Compuesto con intención. © 2024"
    }
};

const images = {
    img1: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6jXdDA-uLTkTl_2om_Q5Ne36inLNDhh81miiBlgAtZzuOX70SYXIPF8zxA_ao4-WG4s-O6_6aFGgS_vNOhdrgp1IfpNoQeWTcz0B-sOasZKC1UtMHCY7my7ra3tBeb8YlOZ4Owvih7PJveaLHuBpNE7VHP9uwb2Ml1aXIReCWpOIOt96Zg34LEqz1bq3-6uFdiOBTnpTv2NAtcW10Rjod-LFhgZ_5onQE4X02NvH-4Z_UugMs7pyVFTpWLs3QBXEqxO9YV6DtrOPr",
    img2: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4-S3gZQ148vO119pOE-8uDXJFsmA7lmwD8PHKdrcr43iuTeCtlB1qzvO87UsJYajWe3ZzSnIBf48F03R-l0cjOlkQoKQKdFxPC4KElD3xoED8XWJ4iDEX0j8xvTyRHFVadbh_Y8kOHiGzJLWB-qZACWDfTqZVE0-lUKtumLRKTMNiYM9HcOs4b6Llorx93OI6mHujWXtux8KyBCI_HO7P3Usl6Ko9KsXTOTyvjcenDpQmAoGFBKNbbhW5NP3iHdoqJgUGLHuU9Rpm",
    img3: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-rC8Eges0IB-nbpwNhxBtNlgC5bCmpNUb65HskivfBRpCGYE5k7J5kN8qw5FmWBk7rxW_1wLfi93aeD0GSqV3JScLjESKWScb98b190P9YMOcG6sijSMkdwwM3PzeD07ir4QSuhandmEdroHKIfKPV7ZHNbKvR_aUmSkn3TDGpj4cbyh26bczr3X-NmvEpIQM8MpoJP8a-Fulo-ltLmzptOd32DNC048hVgnvYJ-FYkk_PJ29KVOq9xo21ZY9VcaxuYtEoNK6ZIYG"
};

export default function App() {
  const [lang, setLang] = useState<'ca' | 'es'>('ca');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-surface text-primary font-body selection:bg-[#fdcdbc] selection:text-[#795548]">
      <div className="grain-overlay"></div>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[1000] bg-surface flex items-center justify-center"
          >
            <div className="ink-spot"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
              className="absolute flex items-center justify-center"
            >
              <svg className="text-primary/60" fill="none" height="64" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" width="64">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="w-full top-0 left-0 bg-transparent z-50 fixed"
      >
        <div className="flex justify-end items-center w-full px-8 py-6 max-w-5xl mx-auto">
          <div className="flex gap-4 font-serif italic text-sm tracking-tight items-center">
            <button
              className={`transition-opacity duration-500 hover:opacity-100 ${lang === 'ca' ? 'text-primary underline decoration-wavy' : 'text-secondary opacity-70'}`}
              onClick={() => setLang('ca')}
            >
              CA
            </button>
            <span className="text-secondary opacity-70">/</span>
            <button
              className={`transition-opacity duration-500 hover:opacity-100 ${lang === 'es' ? 'text-primary underline decoration-wavy' : 'text-secondary opacity-70'}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <main className="max-w-2xl mx-auto px-6 pt-32 pb-40">
          <header className="mb-20">
            <motion.h1
              key={`title-${lang}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-4"
            >
              {t.title}
            </motion.h1>
            <motion.p
              key={`date-${lang}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-label text-on-surface-variant text-sm tracking-widest uppercase"
            >
              {t.date}
            </motion.p>
          </header>

          <article className="space-y-8 text-lg md:text-xl leading-relaxed text-primary/90">
            <motion.p
              key={`greeting-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.greeting}
            </motion.p>
            <motion.p
              key={`intro-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.intro}
            </motion.p>
            <motion.p
              key={`p1-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t.p1_start}
              <span className="ink-underline italic cursor-default text-secondary">
                {t.p1_span}
                <span className="vintage-reveal">
                  <img alt="vintage workshop" className="w-full h-full object-cover grayscale-[0.5] sepia-[0.3]" src={images.img1} referrerPolicy="no-referrer" />
                </span>
              </span>
              {t.p1_end}
            </motion.p>
            <motion.p
              key={`p2-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {t.p2_start}
              <span className="ink-underline italic cursor-default text-secondary">
                {t.p2_span}
                <span className="vintage-reveal">
                  <img alt="hands writing" className="w-full h-full object-cover grayscale-[0.5] sepia-[0.3]" src={images.img2} referrerPolicy="no-referrer" />
                </span>
              </span>
              {t.p2_end}
            </motion.p>
            <motion.p
              key={`p3-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t.p3_start}
              <span className="ink-underline italic cursor-default text-secondary">
                {t.p3_span}
                <span className="vintage-reveal">
                  <img alt="desk archive" className="w-full h-full object-cover grayscale-[0.5] sepia-[0.3]" src={images.img3} referrerPolicy="no-referrer" />
                </span>
              </span>
              {t.p3_end}
            </motion.p>
            <motion.p
              key={`footer-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              dangerouslySetInnerHTML={{ __html: t.footer_text }}
            />

            <motion.div
              key={`signature-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-12"
            >
              <p className="text-lg md:text-xl leading-relaxed">{t.regards}</p>
              <p className="mt-4 text-3xl opacity-80 font-headline font-light italic">Emanuel Rocha</p>
            </motion.div>
          </article>
        </main>

        <footer className="w-full pb-16">
          <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8">
            <motion.p
              key={`copyright-${lang}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="font-label text-[10px] text-on-surface-variant/40 tracking-[0.2em] uppercase"
            >
              {t.copyright}
            </motion.p>
          </div>
        </footer>
      </motion.div>

      <div className="fixed bottom-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
        <svg className="text-secondary" fill="none" height="120" stroke="currentColor" viewBox="0 0 100 100" width="120">
          <path d="M100 0 Q 50 0, 50 50 T 0 100" strokeWidth="0.5"></path>
          <path d="M100 20 Q 70 20, 70 50 T 20 100" strokeWidth="0.5"></path>
        </svg>
      </div>
    </div>
  );
}
