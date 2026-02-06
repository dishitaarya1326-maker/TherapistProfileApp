export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-white/60 backdrop-blur-md px-6 py-20"
    >
      {/* BACKGROUND IMAGE (SUBTLE) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/office2.jpeg')" }}
      />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* LEFT — PRACTICE INFO */}
        <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-2xl font-medium text-[var(--forest)] mb-4">
            Dr. Maya Reynolds, PsyD
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Licensed Clinical Psychologist
            <br />
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </p>

          {/* CONTACT DETAILS */}
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
            Phone:{" "}
            <a
              href="tel:+13105550123"
              className="underline underline-offset-4 hover:text-[var(--forest)]"
            >
              (310) 555-0123
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:contact@mayareynoldspsychology.com"
              className="underline underline-offset-4 hover:text-[var(--forest)]"
            >
              contact@mayareynoldspsychology.com
            </a>
          </p>

          <p className="mt-4 text-gray-600 text-sm">
            In-person &amp; Telehealth (California)
          </p>
        </div>

        {/* CENTER — LINKS */}
        <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6">
          <h4 className="text-lg font-medium text-[var(--forest)] mb-4">
            Explore
          </h4>

          <ul className="space-y-3 text-gray-700">
            {[
              { label: "About", id: "about" },
              { label: "Therapeutic Approach", id: "therapeautic approach" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-[var(--sage)] transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — OFFICE HOURS + MAP */}
        <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6">
          <h4 className="text-lg font-medium text-[var(--forest)] mb-4">
            Office Hours
          </h4>

          <p className="text-gray-700 mb-4">
            Monday – Friday
            <br />
            10:00 AM – 6:00 PM
          </p>

          <div className="w-full h-40 rounded-xl overflow-hidden border border-white/40">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Santa%20Monica%20CA&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative max-w-7xl mx-auto mt-16 pt-8 border-t border-white/40 text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-4">
        <p>
          All Rights Reserved © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </p>
        <p>Calm, client-centered care</p>
      </div>
    </footer>
  );
}
