"use client";

const About = () => {
  return (
    <section id="about" className="min-h-screen pt-24 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">À propos</h2>
        <p className="text-lg text-gray-600 mb-12">
          Lorem ipsum dolor sit amet.
        </p>

        {/* Grid d'informations */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🔍 Notre Mission
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque ipsum nec lacus vulputate.
            </p>
          </div>

          {/* Info 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🌍 Nos Valeurs
            </h3>
            <p className="text-gray-600">
              Curabitur nec ligula vitae lorem ullamcorper tincidunt. Morbi at
              velit nec est eleifend bibendum.
            </p>
          </div>

          {/* Info 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🚀 Notre Vision
            </h3>
            <p className="text-gray-600">
              Ut fringilla lacus at magna suscipit, id pretium purus suscipit.
              Sed sed turpis eu quam suscipit.
            </p>
          </div>

          {/* Info 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              🤝 Nos Partenaires
            </h3>
            <p className="text-gray-600">
              Fusce nec ex quis lorem tempus aliquet. Vestibulum id felis at
              nunc aliquet posuere nec in massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
