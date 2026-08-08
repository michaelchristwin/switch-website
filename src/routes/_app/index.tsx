import {
  Cumulus1,
  Cumulus2,
  Cumulus3,
  Cumulus4,
  Cumulus5,
} from '#/assets/cumulus'
import Carousel from '#/components/Carousel'
import { WhatsApp } from '#/components/icons/WhatsApp'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

const cumulusImages = [Cumulus5, Cumulus4, Cumulus3, Cumulus2, Cumulus1]
export const Route = createFileRoute('/_app/')({ component: Home })

function Home() {
  const introVideo = useRef<HTMLVideoElement | null>(null)
  const installationVideo = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    import('@google/model-viewer')
    if (!introVideo.current) return
    introVideo.current.playbackRate = 0.6
    if (!installationVideo.current) return
    installationVideo.current.playbackRate = 0.5
  }, [])
  return (
    <main className="w-full pt-20 min-h-screen">
      <div className="flex flex-col w-full">
        <section className="relative w-full min-h-[90vh] flex items-center bg-surface overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-50"></div>
          <div className="absolute top-margin-desktop left-margin-desktop crosshair crosshair-tl pointer-events-none"></div>
          <div className="absolute top-margin-desktop right-margin-desktop crosshair crosshair-tr pointer-events-none"></div>
          <div className="absolute bottom-margin-desktop left-margin-desktop crosshair crosshair-bl pointer-events-none"></div>
          <div className="absolute bottom-margin-desktop right-margin-desktop crosshair crosshair-br pointer-events-none"></div>
          <div className="max-w-[81%] mx-auto px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 py-20">
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8 relative md:mx-auto">
              <div>
                <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
                  Reliable, Verifiable <br />
                  <span className="text-primary italic font-serif">
                    Solar Metering
                  </span>
                  <br />
                  for Africa's Grid.
                </h1>
                <p className="font-data-mono text-data-mono text-on-surface-variant max-w-md">
                  Industrial-grade precision switching solutions engineered for
                  high-performance hardware procurement and field deployment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  className="bg-secondary text-on-secondary font-label-caps text-sm px-8 py-4 flex items-center justify-center gap-3 hover:bg-on-secondary-container transition-colors border relative overflow-hidden group"
                  target="_blank"
                  href="https://wa.me/2348081147003"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    CHAT ON WHATSAPP
                    <WhatsApp width={20} height={20} color="#ffffff" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </a>
                <Link
                  className="bg-surface text-on-surface font-label-caps text-sm px-8 py-4 flex items-center justify-center gap-3 border border-outline hover:bg-surface-container transition-colors"
                  to="/"
                  hash="3d-cumulus"
                >
                  SEE CUMULUS IN 3D
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rectangle-goggles-icon lucide-rectangle-goggles"
                  >
                    <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                  </svg>
                </Link>
              </div>
            </div>
            <video
              ref={introVideo}
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              className="col-span-1 md:col-span-7 relative rounded-xl aspect-video shadow-lg md:mx-auto"
            >
              <source
                src="https://res.cloudinary.com/dga4ze3p2/video/upload/v1785399810/about_cumulus_intro.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="w-full bg-inverse-surface text-inverse-on-surface py-24 relative overflow-hidden">
          <div className="max-w-[81%] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div>
              <div className="font-label-caps text-label-caps text-inverse-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>
                GRID_REALITY // NG_SECTOR
              </div>
              <h2 className="font-headline-md text-headline-md mb-6 max-w-lg">
                Navigating unpredictable grid infrastructure requires resilient
                hardware.
              </h2>
              <p className="font-label-caps text-sm text-surface-container-highest max-w-md opacity-80">
                Unreliable monitoring lead to revenue loss and hardware failure.
                Cumulus is engineered specifically for the harsh realities of
                the African power sector.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-full h-48 bg-surface/10 border border-surface/20 relative flex items-end p-4 gap-2">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[16px_16px]"></div>

                <div className="w-1/6 bg-error-container h-1/3 relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-[10px] text-error-container opacity-0 group-hover:opacity-100 transition-opacity">
                    V_DROP
                  </div>
                </div>
                <div className="w-1/6 bg-surface-container-highest h-2/3"></div>
                <div className="w-1/6 bg-surface-container-highest h-1/2"></div>
                <div className="w-1/6 bg-error-container h-1/4"></div>
                <div className="w-1/6 bg-surface-container-highest h-full"></div>
                <div className="w-1/6 bg-primary-container h-[90%] relative group">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-data-mono text-[10px] text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                    STABLE
                  </div>
                </div>
                <div className="absolute top-4 left-4 font-label-caps text-[10px] text-surface-container-highest">
                  DAILY_GRID_SUPPLY_VARIANCE
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-surface-bright relative">
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  RUGGED BY DESIGN
                </h2>
                <div className="font-data-mono text-data-mono text-on-surface-variant mt-2">
                  01110011 01101100 01101111 01100011 01101011 01101001 01110100
                </div>
              </div>
              <div className="font-label-caps text-label-caps text-outline hidden md:block">
                VIEW PHOT REEL
              </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square bg-surface border border-outline group p-8 flex items-center justify-center">
                <div className="absolute top-2 left-2 font-data-mono text-[10px] text-outline">
                  FIG. 1 / FRONT VIEW
                </div>

                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary/50"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary/50"></div>
                <img
                  alt="Cumulus Meter Front View"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  src={FrontView}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-surface-container text-on-surface font-label-caps text-[10px] px-2 py-1 border border-outline">
                    IP54_RATED
                  </span>
                  <span className="bg-surface-container text-on-surface font-label-caps text-[10px] px-2 py-1 border border-outline">
                    UV_RESISTANT
                  </span>
                </div>
              </div>

              <div className="relative aspect-square bg-surface border border-outline group p-8 flex items-center justify-center">
                <div className="absolute top-2 left-2 font-data-mono text-[10px] text-outline">
                  FIG. 2 / EXPLODED VIEW
                </div>

                <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary/50"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-primary/50"></div>
                <img
                  alt="Cumulus Meter Isometric View"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  src={ExplodedView}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-surface-container text-on-surface font-label-caps text-[10px] px-2 py-1 border border-outline">
                    TAMPER_SEALS
                  </span>
                  <span className="bg-surface-container text-on-surface font-label-caps text-[10px] px-2 py-1 border border-outline">
                    OPTICAL_PORT
                  </span>
                </div>
              </div>
            </div> */}
            <Carousel>
              {cumulusImages.map((image, i) => (
                <div key={image} className="w-100 md:w-170 h-fit">
                  <img
                    src={image}
                    alt={`Cumulus ${i + 1}`}
                    className="object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </section>
        <section
          className="w-full py-24 bg-surface-bright relative technical-grid"
          id="3d-cumulus"
        >
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="font-headline-md text-headline-md text-on-surface leading-tight inline-flex items-center gap-2 mb-1">
              <h2>CUMULUS 3D / VR</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-rectangle-goggles-icon lucide-rectangle-goggles"
              >
                <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
              </svg>
            </div>
            <div className="font-data-mono text-data-mono text-on-surface-variant mb-2">
              CUMULUS METERING UNIT
            </div>
            <div className="w-full relative crosshair crosshair-tl crosshair-br border border-on-surface p-2">
              <model-viewer
                alt="Cumulus Smart Meter 3D model"
                src="https://whynotswitch.com/3D/cumulus-decimated.glb"
                ios-src="https://whynotswitch.com/3D/cumulus.usdz"
                ar
                environment-image="https://whynotswitch.com/3D/ferndale_studio_07_4k.hdr"
                poster="https://whynotswitch.com/assets/poster.webp"
                ar-modes="webxr scene-viewer quick-look"
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
              ></model-viewer>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-surface-container-lowest border-y border-outline-variant relative">
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="mb-16">
              <span className="font-label-caps text-label-caps text-primary border border-primary px-2 py-1">
                TECH_SPECS
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-6">
                Headline Features &amp; Functionality
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big-icon lucide-circle-check-big"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  High Accuracy
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  ±0.1% active energy, ±0.2% reactive energy over 6000:1 dynamic
                  range
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-activity-icon lucide-activity"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                  </svg>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  Polyphase Metering
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  3-Phase 4-Wire direct connect up to 300A, SIngle pahse up to
                  80A
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-radio-icon lucide-radio"
                  >
                    <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
                    <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
                    <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
                    <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  LoRaWANⓇ Wireless
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Long range Sub-GHz up to 15km rural AES-128 encrypted.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-plus-icon lucide-shield-plus"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="M9 12h6" />
                    <path d="M12 9v6" />
                  </svg>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  IP54 Enclosure
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Indoor/Semi-Sheltered rated, -20°C to ±80°C operating range.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-inverse-surface text-inverse-on-surface py-16 border-y border-outline">
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="col-span-1 border-r border-surface-container-highest/30 pr-8">
                <div className="font-label-caps text-label-caps text-inverse-primary mb-2">
                  INDUSTRY_RECOGNITION
                </div>
                <img
                  alt="Nigerian Power Sector Award"
                  className="w-full h-auto max-h-24 object-contain brightness-0 invert opacity-80"
                  src="./assets/award.webp"
                />
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col gap-6 pl-0 md:pl-4">
                <div className="font-label-caps text-label-caps text-surface-container-highest">
                  COMPLIANCE STANDARDS
                </div>
                <div className="flex flex-wrap gap-4 font-data-mono text-sm text-inverse-on-surface">
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>
                    SON 62052-11
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>
                    IEC 62053-21
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>
                    NERC CERTIFIED
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>
                    STS PREPAYMENT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 bg-surface" id="faq">
          <div className="max-w-4xl mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Frequently Asked
              </h2>
              <p className="font-data-mono text-data-mono text-outline mt-2">
                COMMON QUERIES // USEFUL ANSWERS
              </p>
            </div>
            <div className="flex flex-col border-t border-outline-variant">
              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">01</span> What kind
                    of projects is Cumulus for?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  Cumulus is developed for decentralized electricity and
                  solar-compatible metering. Share your project type and
                  location so the team can confirm fit.
                </div>
              </details>

              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">02</span> Can I get
                    pricing online?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  Pricing is handled by enquiry because configuration, quantity,
                  delivery and installation needs can vary.
                </div>
              </details>

              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">03</span> Is
                    installation support available?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  <a
                    target="_blank"
                    href="https://wa.me/2348081147003"
                    className="text-primary underline"
                  >
                    Contact
                  </a>{' '}
                  Switch Electric with your site and system details to confirm
                  the support available for your project.
                </div>
              </details>

              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">04</span> Where can I
                    find technical documentation?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  The{' '}
                  <Link to="/datasheet" className="text-primary underline">
                    datasheet page
                  </Link>{' '}
                  links to the techincal documentation (plus PDF) and
                  installation guides.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="w-full bg-primary py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[32px_32px]"></div>
          <div className="max-w-4xl mx-auto px-margin-desktop text-center relative z-10 flex flex-col items-center">
            <h2 className="font-display-lg text-display-lg text-on-primary mb-6">
              Ready to upgrade your infrastructure?
            </h2>
            <p className="font-data-mono text-data-mono text-primary-fixed mb-10 max-w-2xl">
              Connect with our procurement engineering team for bulk pricing,
              technical schematics, and pilot deployment discussions.
            </p>
            <a
              className="bg-secondary text-inverse-on-surface font-label-caps text-smF px-10 py-5 flex items-center gap-3 hover:bg-secondary/80 transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_var(--color-on-secondary-fixed-variant)] hover:shadow-none"
              target="_blank"
              href="https://wa.me/2348081147003"
            >
              <WhatsApp color="#f0f1f2" width={20} height={20} />
              <span>CONTACT US ON WHATSAPP</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
