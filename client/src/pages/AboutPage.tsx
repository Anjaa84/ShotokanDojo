export default function AboutPage() {
  return (
    <section className="bg-secondary kanji-background py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Hero Image */}
        <div className="md:w-1/2 relative">
          <img
            src="/karate-group.jpg"
            alt="Trishul Martial Arts Group"
            className="rounded-lg shadow-xl w-full h-auto"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg hidden md:block">
            <p className="font-accent text-2xl">10+ Years</p>
            <p className="text-sm">of Dedication</p>
          </div>
        </div>
        {/* About Content */}
        <div className="md:w-1/2 relative z-10">
          <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4">About Trishul Martial Arts Organization</h1>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="text-white mb-6 text-lg">
            Trishul Martial Arts Organization was founded in 2015 by <span className="font-bold text-accent">Sensei C.V. Sudarshan</span> with a powerful vision—to use martial arts as a tool to build discipline, confidence, and both physical and mental strength in individuals of all ages.
          </p>
          <p className="text-white mb-6 text-lg">
            Since its beginning, Trishul has grown into a respected training academy that welcomes kids, teenagers, ladies, gents, and professionals from all walks of life. Our goal is to promote self-defense, focus, leadership, and a healthy lifestyle through the traditional values of Karate.
          </p>
          <p className="text-white mb-6 text-lg">
            With over ten years of dedication, we have conducted hundreds of training sessions, awareness programs, school workshops, and public demonstrations. Our students have achieved remarkable success both nationally and internationally.
          </p>
          <p className="text-white mb-8 text-lg">
            Whether you are a complete beginner or looking to sharpen your skills, Trishul Martial Arts offers expert guidance, supportive training, and a strong community spirit.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-accent text-2xl font-bold mb-1">2015</div>
              <div className="text-white text-sm">Year Founded</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-accent text-2xl font-bold mb-1">100+</div>
              <div className="text-white text-sm">Programs Conducted</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg text-center flex-1 min-w-[120px]">
              <div className="text-accent text-2xl font-bold mb-1">National & International</div>
              <div className="text-white text-sm">Student Achievements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 