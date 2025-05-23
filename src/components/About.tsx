import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Lets goo */}
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 pt-32">
        <h1 className="text-4xl font-bold text-center mb-16">ABOUT US</h1>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-semibold mb-4">ABOUT <span className="font-semibold text-red-500">TEDx</span>, x = INDEPENDENTLY ORGANIZED EVENT</h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                IN THE SPIRIT OF IDEAS WORTH SPREADING, TEDx IS A PROGRAM OF LOCAL, SELF-ORGANIZED EVENTS THAT BRING
                PEOPLE TOGETHER TO SHARE A TED-LIKE EXPERIENCE. AT A TEDx EVENT, TED TALKS VIDEO AND LIVE SPEAKERS
                COMBINE TO SPARK DEEP DISCUSSION AND CONNECTION. THESE LOCAL, SELF-ORGANIZED EVENTS ARE BRANDED TEDx,
                WHERE x = INDEPENDENTLY ORGANIZED TED EVENT. THE TED CONFERENCE PROVIDES GENERAL GUIDANCE FOR THE TEDx
                PROGRAM, BUT INDIVIDUAL TEDx EVENTS ARE SELF-ORGANIZED. (SUBJECT TO CERTAIN RULES AND REGULATIONS.)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">ABOUT <span className="font-semibold text-red-500">TED</span></h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                TED IS A NONPROFIT ORGANIZATION DEVOTED TO IDEAS WORTH SPREADING. STARTED AS A FOUR-DAY CONFERENCE IN
                CALIFORNIA 30 YEARS AGO, TED HAS GROWN TO SUPPORT ITS MISSION WITH MULTIPLE INITIATIVES. THE TWO ANNUAL
                TED CONFERENCES INVITE THE WORLD'S LEADING THINKERS AND DOERS TO SPEAK FOR 18 MINUTES OR LESS. MANY OF
                THESE TALKS ARE THEN MADE AVAILABLE, FREE, AT TED.COM. TED SPEAKERS HAVE INCLUDED BILL GATES, JANE
                GOODALL, ELIZABETH GILBERT, SIR RICHARD BRANSON, NANDAN NILEKANI, PHILIPPE STARCK, NGOZI OKONJO-IWEALA,
                SAL KHAN AND DANIEL KAHNEMAN.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 text-justify">
                THE ANNUAL TED CONFERENCE TAKES PLACE EACH SPRING IN VANCOUVER, BRITISH COLUMBIA. TED'S MEDIA
                INITIATIVES INCLUDE TED.COM, WHERE NEW TED TALKS ARE POSTED DAILY; TED TRANSLATORS, WHICH PROVIDES
                SUBTITLES AND INTERACTIVE TRANSCRIPTS AS WELL AS TRANSLATIONS FROM VOLUNTEERS WORLDWIDE; THE EDUCATIONAL
                INITIATIVE TED-ED. TED HAS ESTABLISHED THE AUDACIOUS PROJECT THAT TAKES A COLLABORATIVE APPROACH TO
                FUNDING IDEAS WITH THE POTENTIAL TO CREATE CHANGE AT THRILLING SCALE; TEDx, WHICH SUPPORTS INDIVIDUALS
                OR GROUPS IN HOSTING LOCAL, SELF-ORGANIZED TED-STYLE EVENTS AROUND THE WORLD, AND THE TED FELLOWS
                PROGRAM, HELPING WORLD-CHANGING INNOVATORS FROM AROUND THE GLOBE TO AMPLIFY THE IMPACT OF THEIR
                REMARKABLE PROJECTS AND ACTIVITIES.
              </p>
            </section>
          </div>

          <div className="space-y-8">
            <h2 className="text-xl font-semibold">OUR PAST EVENTS</h2>
            <div className="space-y-4">
              <a href="http://2023.tedxace.com/" target="_blank" className={`aspect-video  rounded-lg flex items-center justify-center bg-cover    `} style={{ backgroundImage: "url('https://res.cloudinary.com/dlsaawg9j/image/upload/v1742411208/23_tcg7ky.jpg')" }}>
                <span className="text-2xl font-bold w-full h-full flex items-center justify-center bg-black/40">2023</span>
              </a>
              <a href="http://2024.tedxace.com/" target="_blank" className={`aspect-video  rounded-lg flex items-center justify-center bg-cover   `} style={{ backgroundImage: "url('https://res.cloudinary.com/dlsaawg9j/image/upload/v1742411180/2024_iggezb.jpg')" }}>
                <span className="text-2xl font-bold w-full h-full flex items-center justify-center z-10 bg-black/40">2024</span>
              </a>

            </div>
          </div>
        </div>
      </main>

      {/* Follow Us Section */}
      <section className="py-16 text-center">
        <h2 className="text-xl font-semibold mb-8">FOLLOW US ON</h2>
        <div className="flex  w-full items-center  justify-center  md:space-x-8">
          <div className="grid  grid-cols-2 md:flex md:space-x-8">
            <a href="http://twitter.com/tedxace" className="p-2 hover:text-purple-500 ">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="http://www.youtube.com/@tedxace4216" className="p-2 hover:text-purple-500">
              <Youtube className="w-8 h-8" />
            </a>

            <a href="https://www.facebook.com/tedxace/" className="p-2 hover:text-purple-500">
              <Facebook className="w-8 h-8" />
            </a>

            <a href="https://in.linkedin.com/company/tedxace" className="p-2 hover:text-purple-500">
              <Linkedin className="w-8 h-8" />
            </a>


            <a href="https://instagram.com/tedxace" className="p-2 hover:text-purple-500">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  )
}