export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-secondary kanji-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* About Image */}
          <div className="md:w-1/2 relative">
            <img 
              src="https://pixabay.com/get/g0849ea07e9384dd9726ab1fa3f4cfd1757c722f859e550e1d7d138e160f4d56e5c3a9ed6f2e54156d792c13e874cdb6e16c1399d6ce3a87acd9b65b1f79b548b_1280.jpg" 
              alt="Traditional karate dojo with students in training" 
              className="rounded-lg shadow-xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-accent text-2xl">30+ Years</p>
              <p className="text-sm">of teaching excellence</p>
            </div>
          </div>
          
          {/* About Content */}
          <div className="md:w-1/2 relative z-10">
            <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-4">Our Karate Philosophy</h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-white mb-6">
              Founded in 1992, our academy teaches traditional Shotokan Karate with a focus on the core principles: 
              <span className="font-bold text-accent"> Kihon</span> (basics), 
              <span className="font-bold text-accent"> Kata</span> (forms), and 
              <span className="font-bold text-accent"> Kumite</span> (sparring).
            </p>
            <p className="text-white mb-6">
              We believe karate training goes beyond physical techniques—it develops character, discipline, respect, and mental fortitude that benefit practitioners in all aspects of life.
            </p>
            <p className="text-white mb-8">
              Our structured curriculum accommodates students of all ages and abilities, from beginners to advanced practitioners preparing for competition and black belt examinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
                <div className="text-accent text-2xl font-bold mb-1">12</div>
                <div className="text-white text-sm">Certified Instructors</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
                <div className="text-accent text-2xl font-bold mb-1">5</div>
                <div className="text-white text-sm">Training Locations</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
                <div className="text-accent text-2xl font-bold mb-1">500+</div>
                <div className="text-white text-sm">Active Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
