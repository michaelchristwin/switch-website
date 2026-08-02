import { ExplodedView, FrontView } from '#/assets/schematics'
import { WhatsApp } from '#/components/icons/WhatsApp'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/_app/')({ component: Home })

function Home() {
  const introVideo = useRef<HTMLVideoElement | null>(null)
  const installationVideo = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!introVideo.current) return
    introVideo.current.playbackRate = 0.6
    if (!installationVideo.current) return
    installationVideo.current.playbackRate = 0.5
  }, [introVideo])
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
                <a
                  className="bg-surface text-on-surface font-label-caps text-sm px-8 py-4 flex items-center justify-center gap-3 border border-outline hover:bg-surface-container transition-colors"
                  href="#demo"
                >
                  SEE CUMULUS IN ACTION
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
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
                Voltage fluctuations and unreliable metering lead to revenue
                loss and hardware failure. Cumulus is engineered specifically
                for the harsh realities of the African power sector.
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
                  GRID_VOLTAGE_VARIANCE_72H
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
                  Hardware Modules
                </h2>
                <div className="font-data-mono text-data-mono text-on-surface-variant mt-2">
                  CUMULUS METERING UNIT
                </div>
              </div>
              <div className="font-label-caps text-label-caps text-outline hidden md:block">
                VIEW_01 // VIEW_02
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                Core Telemetry &amp; Protection
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  100A Max Current
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Designed to handle significant load variations without
                  tripping, ensuring continuous supply for high-demand
                  residential and light-commercial applications.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  Advanced Theft Detection
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Multi-sensor tamper detection logs magnetic interference,
                  cover removal, and reverse current flow, instantly reporting
                  anomalies to the central dashboard.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">
                    network_check
                  </span>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  Predictive Maintenance
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Machine learning algorithms analyze power quality data locally
                  to predict relay wear and capacitor degradation before
                  catastrophic failure.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-primary/80 transition-colors group">
                <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">sync_alt</span>
                </div>
                <h3 className="font-data-mono text-data-mono text-on-surface text-lg group-hover:text-white">
                  Bi-directional Metering
                </h3>
                <p className="font-body-base text-sm text-on-surface-variant group-hover:text-white">
                  Natively supports solar net-metering. Accurately records
                  imported and exported energy on separate registers for precise
                  billing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-24 bg-surface-container-highest relative"
          id="demo"
        >
          <div className="max-w-[81%] mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Data Visibility at Scale
              </h2>
              <p className="font-body-base text-body-base text-on-surface-variant">
                Monitor fleet health, track revenue recovery, and isolate tamper
                events in real-time through the Switch Management Dashboard.
              </p>
              <div className="font-data-mono text-[10px] text-outline flex flex-col gap-2 mt-4">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-secondary rounded-full"></div>{' '}
                  LATENCY &lt; 500ms
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-secondary rounded-full"></div>{' '}
                  99.9% UPTIME SLA
                </span>
              </div>
              <Link
                to="/datasheet"
                className="w-fit mt-4 bg-transparent border border-on-surface text-on-surface font-label-caps text-sm px-6 py-3 hover:bg-on-surface hover:text-surface transition-colors flex items-center gap-2"
              >
                <span>VIEW DATASHEET</span>
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </Link>
            </div>
            <div className="col-span-1 lg:col-span-8 relative">
              <video
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                className="w-full h-auto object-cover border rounded-2xl aspect-video shadow-lg md:mx-auto"
              >
                <source
                  src="https://res.cloudinary.com/dga4ze3p2/video/upload/v1785398678/how_to_install_cumulus.mp4"
                  type="video/mp4"
                />
              </video>
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
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsNILHgojO0gHe91H_BM0TyQW1ywWf0xKACYJwMvJMvyUZyHxNXQytOg8E6J-7c2y9Ovbe16odI7cJfZtCctKuc9a8niup85PlphmJzYQQy2c5-0LaZn8Zc5_Ag0-1u7NWtYFO_ucJEpFFchF1K4I4yFaO2_v3a46hCaA54DWYVGiTJJTIAKs5KBDHnzuLzQg0FlDylt-W20_gGFBZBJHUu3CHisRPSsaeX6F3ABVCl2V8ejI0Oiv04Kg"
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
                    </span>{' '}
                    SON 62052-11
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>{' '}
                    IEC 62053-21
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>{' '}
                    NERC CERTIFIED
                  </span>
                  <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-secondary-container">
                      check_circle
                    </span>{' '}
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
                Technical Briefing
              </h2>
              <p className="font-data-mono text-data-mono text-outline mt-2">
                COMMON QUERIES // FIELD_DEPLOYMENT
              </p>
            </div>
            <div className="flex flex-col border-t border-outline-variant">
              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">01</span> What
                    communication protocols does Cumulus support?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  The Cumulus series supports GSM/GPRS (2G/3G/4G fallback),
                  NB-IoT, and local optical port communication. Modbus RTU over
                  RS485 is available on extended modules.
                </div>
              </details>

              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">02</span> Is the
                    meter compatible with existing STS vending systems?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  Yes. All our prepayment meters are fully STS (Standard
                  Transfer Specification) compliant and can seamlessly integrate
                  with any existing STS Edition 2 certified vending platform.
                </div>
              </details>

              <details className="group border-b border-outline-variant">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                  <span className="flex items-center gap-4">
                    <span className="text-outline text-sm">03</span> How does it
                    handle severe voltage fluctuations?
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pb-6 font-label-caps text-on-surface-variant pl-10 pr-4">
                  Equipped with a wide operating voltage range (110V - 300V AC)
                  and robust internal surge protection (up to 6kV), it is
                  designed to survive unstable grid conditions without internal
                  component failure.
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
