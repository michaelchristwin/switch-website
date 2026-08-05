import { BottomView, Connection, MeterLabeling } from '#/assets/schematics'
import { WhatsApp } from '#/components/icons/WhatsApp'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '#/components/ui/tabs'

export const Route = createFileRoute('/_app/datasheet')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'DataSheet' }],
  }),
})

function RouteComponent() {
  const threePhaseSteps = [
    'Port 5 activated for voltage probes and external CT sensors',
    'External CT: primary 1-300A, secondary 5A output only',
    'Signal control pins activated for external Contactor/ATS',
    'Internally connected to SSR control signal',
    'Supports 3-Phase 4-Wire direct connect up to 300A',
  ]

  const singlePhaseSteps = [
    'Use Ports 3 (IN) and 4 (OUT)',
    '25mm cable glands - max two 16mm conductors per gland',
    'Live IN → Neutral IN Neutral OUT → Live OUT',
    'Inbuilt SSR rated at 80A (input to output)',
    'Inbuilt CT sensor no external CT required',
  ]
  const parts = [
    'LoRaWAN antenna port - install before power on',
    'LED Displays (Power, Status, Relay, COMM indicators)',
    'Single Phase IN via 25mm cable gland (Live & Neutral)',
    'Single Phase OUT via 25mm cable gland (Live & Neutral)',
    'Polyphse Ports (see wiring diagram)',
    'Ventilation slot - maintain clearance',
    'DIN Rail Mount',
  ]
  return (
    <main className="w-full pt-20 min-h-screen">
      <div className="flex flex-col w-full relative">
        {/* <!-- Crosshair decorations --> */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-outline -ml-px -mt-px"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-outline -mr-px -mt-px"></div>
        <section className="max-w-[81%] mx-auto px-margin-desktop py-12 lg:py-24 w-full border-b border-outline-variant relative">
          <div className="absolute top-0 left-margin-desktop w-px h-full bg-outline-variant/30 hidden lg:block"></div>
          <div className="absolute top-0 right-margin-desktop w-px h-full bg-outline-variant/30 hidden lg:block"></div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10">
            {/* <!-- Tech Specs Left --> */}
            <div className="flex-1 order-2 lg:order-1 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-primary"></div>
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
                  TECHNICAL SPECIFICATION SHEET
                </span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-4 uppercase">
                CUMULUS
                <br />
                <span className="text-on-surface-variant">SERIES-G3</span>
              </h1>
              <p className="font-data-mono text-data-mono text-on-surface-variant mb-8 max-w-lg border-l-2 border-primary pl-4">
                High-precision multi-phase smart metering node designed for
                industrial-grade data telemetry. Features integrated LoRaWAN
                networking and strict ±0.1% accuracy tolerance under peak loads.
              </p>
              <div className="grid grid-cols-2 gap-4 font-data-mono text-data-mono mb-12">
                <div className="border border-outline-variant p-4 relative crosshair crosshair-tl">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Op_Voltage
                  </div>
                  <div className="text-on-surface">110V - 400V AC</div>
                </div>
                <div className="border border-outline-variant p-4 relative crosshair crosshair-tr">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Max_Current
                  </div>
                  <div className="text-on-surface">80A / Phase</div>
                </div>
                <div className="border border-outline-variant p-4 relative crosshair crosshair-bl">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Comm_Protocol
                  </div>
                  <div className="text-on-surface">LoraWAN + MQTT</div>
                </div>
                <div className="border border-outline-variant p-4 relative crosshair crosshair-br">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Security_Level
                  </div>
                  <div className="text-on-surface">
                    AES-128 & ED25519 cryptography
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-primary text-on-primary md:px-8 px-4 md:py-4 py-3 font-label-caps text-xs sm:text-sm tracking-widest flex items-center gap-2 hover:bg-on-primary-fixed-variant transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  DOWNLOAD PDF DATASHEET
                </button>
                <a
                  className="text-on-secondary bg-secondary hover:translate-y-1 md:px-8 px-4 md:py-4 py-3 font-label-caps text-xs sm:text-sm tracking-widest flex items-center gap-2 hover:bg-on-secondary-container transition-colors group"
                  href="https://wa.me/2349065787011"
                  target="_blank"
                >
                  <span>TECHNICAL SUPPORT</span>
                  <WhatsApp color="#ffffff" width={20} height={20} />
                </a>
              </div>
            </div>
            {/* <!-- Product Image Right --> */}
            <div className="flex-1 order-1 lg:order-2 relative flex items-center justify-center">
              {/* <!-- Blueprint backdrop --> */}
              <div className="absolute inset-0 border border-outline-variant bg-surface-container-low opacity-50 technical-grid -z-10"></div>
              {/* <!-- Registration marks --> */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-outline"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-outline"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-outline"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-outline"></div>
              <div className="relative w-full p-8">
                <iframe
                  className="h-100 w-full border border-outline bg-white sm:h-130"
                  src="/assets/cumulus-datasheet.pdf#view=FitH"
                  title="Cumulus product data sheet"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Complete Spec Table Section --> */}
        <section className="w-full bg-surface-container-lowest border-b border-outline-variant">
          <div className="md:max-w-[81%] max-w-full mx-auto px-margin-desktop py-16">
            <div className="flex items-center justify-between border-b-2 border-on-surface pb-4 mb-12 px-2">
              <h2 className="font-headline-md sm:text-headline-md text-xl font-semibold text-on-surface uppercase">
                HARDWARE_PARAMETERS
              </h2>
              <span className="font-data-mono text-data-mono text-outline uppercase">
                REV_2.4.1
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {/* <!-- Electrical Ratings --> */}
              <div>
                <h3 className="font-label-caps text-label-caps text-primary mb-6 border-l-2 border-primary pl-3">
                  ELECTRICAL_RATINGS
                </h3>
                <div className="flex flex-col border-t border-outline-variant">
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Operating Voltage (L-N)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      180-240V
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Operating Voltage (L-L)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      400-480V
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Self Consumption
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      &le; 2W
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Single phase Maximum Current (Imax)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      80A
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Polyphase Maximum Current
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      300A per phase
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Frequency
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      50Hz / 60Hz ±5%
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Environmental & Communication --> */}
              <div>
                <h3 className="font-label-caps text-label-caps text-primary mb-6 border-l-2 border-primary pl-3">
                  ENVIRON_&amp;_EXTERNALS
                </h3>
                <div className="flex flex-col border-t border-outline-variant">
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Operating Temperature
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      -20°C to +80°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Storage Temperature
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      -40°C to +85°C
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Humidity
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      ≤ 95% non-condensing
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Protection Rating
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      IP54
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      CT Primary Range
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      1-300A
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      CT Secondary Range
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      5A
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full bg-surface py-16 border-b border-outline-variant overflow-hidden relative"
          id="engineering-drawings"
        >
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
                    LABELLING &amp;
                    <br />
                    PORT IDENTIFICATION
                  </h2>
                </div>
                <ol className="list-decimal font-label-caps text-[16px]">
                  {parts.map((part) => (
                    <li key={part}>{part}</li>
                  ))}
                </ol>
                {/* <div className="bg-surface-container p-6 border border-outline-variant relative">
                  <div className="absolute top-0 left-0 w-2 h-2 border-b border-r border-outline bg-surface"></div>
                  <h3 className="font-label-caps text-label-caps text-on-surface mb-4">
                    CERTIFICATION MARKS
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 border border-outline bg-surface hover:border-primary transition-colors">
                      <span className="font-display-lg text-[24px] font-bold text-on-surface-variant leading-none mb-1">
                        CE
                      </span>
                      <span className="font-data-mono text-[8px] text-outline">
                        EN 50470-1/3
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-outline bg-surface hover:border-primary transition-colors">
                      <span className="font-display-lg text-[24px] font-bold text-on-surface-variant leading-none mb-1">
                        MID
                      </span>
                      <span className="font-data-mono text-[8px] text-outline">
                        DIR 2014/32/EU
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-outline bg-surface hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px] text-on-surface-variant mb-1">
                        verified_user
                      </span>
                      <span className="font-data-mono text-[8px] text-outline">
                        DLMS CERT
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 border border-outline bg-surface hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-[28px] text-on-surface-variant mb-1">
                        shield
                      </span>
                      <span className="font-data-mono text-[8px] text-outline">
                        IP54 RATED
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="lg:col-span-2 relative">
                {/* <!-- Conceptual Blueprint Image placeholder --> */}
                <div className="w-full aspect-video border border-outline p-2 bg-surface-container-low relative group">
                  {/* <!-- Top right tab --> */}
                  <div className="absolute -top-px right-4 bg-outline text-surface-container-lowest font-label-caps z-10 text-[9px] px-2 py-0.5 uppercase">
                    METER LABELLING
                  </div>
                  <div className="w-full h-full border border-dashed border-outline-variant bg-surface relative flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80 mix-blend-multiply"
                      data-alt="A highly detailed, technical blueprint-style line drawing of a 3-phase electric meter, shown in multiple orthographic views (front, side, top) on a pale industrial grid background, rendered in thin charcoal lines with measurement callouts, strictly adhering to an engineering schematic aesthetic."
                      style={{
                        backgroundImage: `url(${MeterLabeling})`,
                      }}
                    ></div>

                    {/* <!-- Hover scan line effect --> */}
                    <div className="absolute inset-0 w-full h-0.5 bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-data-mono text-[10px] text-outline">
                    SCALE: 1:2 (A4)
                  </span>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface hover:bg-surface-variant">
                      <span className="material-symbols-outlined text-sm">
                        zoom_in
                      </span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border border-outline text-on-surface hover:bg-surface-variant">
                      <span className="material-symbols-outlined text-sm">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-24 bg-surface-container-highest relative"
          id="installation-guide"
        >
          <div className="max-w-[81%] mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Installation Guide
              </h2>
              <p className="font-body-base text-body-base text-on-surface-variant">
                Remove the metal terminal cover by unscrewing the fasteners
                before wiring. The meter features a standard DIN rail mounting
                groove (item 7) compatible with 35mm DIN rails. For wall
                mounting, use the provided bracket hardware and ensure the
                enclosure is level and securely fastened.
              </p>
              <Tabs className="w-75" defaultValue="three-phase">
                <TabsList>
                  <TabsTrigger value="single-phase">
                    Single Phase Wiring
                  </TabsTrigger>
                  <TabsTrigger value="three-phase">
                    Three Phase Wiring
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="single-phase">
                  <ul className="list-disc">
                    {singlePhaseSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="three-phase">
                  <ul className="list-disc">
                    {threePhaseSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
              <Link
                to="/datasheet"
                className="w-fit mt-4 bg-youtube transition-transform text-white font-label-caps text-sm px-6 py-3 hover:bg-red-700 hover:translate-y-1 hover:text-surface flex items-center gap-2"
              >
                <span>VIEW TUTORIALS</span>
                <svg
                  viewBox="0 -3 20 20"
                  width={28}
                  height={28}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>youtube [#168]</title>
                    <desc>Created with Sketch.</desc> <defs> </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-300.000000, -7442.000000)"
                        fill="#fff"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                            id="youtube-[#168]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
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
        {/* <!-- Engineering Drawings & Certifications --> */}
        <section className="w-full py-24 bg-surface-bright relative">
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Wiring Diagram
                </h2>
                <div className="font-data-mono text-data-mono text-on-surface-variant mt-2">
                  CUMULUS METERING UNIT
                </div>
              </div>
              <div className="font-label-caps text-label-caps text-outline hidden md:block">
                VIEW 01 // VIEW 02
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative aspect-square bg-surface border border-outline group p-8 flex items-center justify-center">
                <div className="absolute top-2 left-2 font-data-mono text-[10px] text-outline">
                  FIG. 1 / BOTTOM VIEW
                </div>

                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary/50"></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary/50"></div>
                <img
                  alt="Cumulus Meter Front View"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  src={BottomView}
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
                  FIG. 2 / THREE PHASE CONNECTION
                </div>

                <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary/50"></div>
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-primary/50"></div>
                <img
                  alt="Cumulus Meter Isometric View"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  src={Connection}
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
        {/* <!-- CTA Section for Installers --> */}
        <section className="w-full bg-inverse-surface py-20 relative overflow-hidden">
          {/* <!-- Grid overlay on dark background --> */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a3e40_1px,transparent_1px),linear-gradient(to_bottom,#3a3e40_1px,transparent_1px)] bg-size-[32px_32px]"></div>
          <div className="max-w-4xl mx-auto px-margin-desktop relative z-10 text-center flex flex-col items-center">
            <span className="font-label-caps text-label-caps text-inverse-primary mb-4 block tracking-widest border border-inverse-primary px-3 py-1">
              PROCUREMENT &amp; INSTALLATION
            </span>
            <h2 className="font-display-lg text-display-lg text-surface-container-lowest mb-6">
              READY TO DEPLOY
              <br />
              AT SCALE?
            </h2>
            <p className="font-label-caps text-body-base text-surface-variant mb-10 max-w-2xl text-center">
              Our field engineering team is available for technical
              consultation, network topology planning, and pilot phase
              deployment support.
            </p>
            <a
              className="bg-secondary text-on-secondary px-8 py-5 font-label-caps text-[14px] font-bold tracking-widest flex items-center gap-3 hover:bg-secondary/60 transition-colors border border-transparent shadow-[4px_4px_0px_0px_rgba(184,242,166,0.3)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 duration-200"
              href="https://wa.me/2348081147003"
            >
              <WhatsApp width={20} height={20} color="#ffffff" />
              CONNECT ON WHATSAPP
            </a>
            <div className="mt-8 font-data-mono text-[10px] text-surface-dim opacity-70">
              &gt; SYSTEM_STATUS: ENGINEERS_ONLINE
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
