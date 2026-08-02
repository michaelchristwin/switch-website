import { IsometricProjection } from '#/assets/schematics'
import { WhatsApp } from '#/components/icons/WhatsApp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/datasheet')({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: 'Data Sheet | Switch' }],
  }),
})

function RouteComponent() {
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
                  <div className="text-on-surface">100A / Phase</div>
                </div>
                <div className="border border-outline-variant p-4 relative crosshair crosshair-bl">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Comm_Protocol
                  </div>
                  <div className="text-on-surface">Modbus RTU / Lora</div>
                </div>
                <div className="border border-outline-variant p-4 relative crosshair crosshair-br">
                  <div className="text-[10px] text-outline mb-1 uppercase">
                    Cert_Level
                  </div>
                  <div className="text-on-surface">IEC 62053-22</div>
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
                      Nominal Voltage (Un)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      3x230/400V
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Voltage Range
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      0.7Un - 1.2Un
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Base Current (Ib)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      5A or 10A
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Maximum Current (Imax)
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      100A
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
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Power Consumption
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      &lt; 2W, 10VA per phase
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Environmental & Communication --> */}
              <div>
                <h3 className="font-label-caps text-label-caps text-primary mb-6 border-l-2 border-primary pl-3">
                  ENVIRON_&amp;_COMM
                </h3>
                <div className="flex flex-col border-t border-outline-variant">
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Operating Temperature
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      -40°C to +70°C
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
                      Local Communication
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      Optical Port (IEC 62056-21)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Remote Communication
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      Pluggable Module (GPRS/3G/4G/RF)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant hover:bg-surface-container-low transition-colors px-2">
                    <span className="font-data-mono text-data-mono text-on-surface-variant">
                      Protocol
                    </span>
                    <span className="font-data-mono text-data-mono text-on-surface font-semibold">
                      DLMS/COSEM, Modbus RTU
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Engineering Drawings & Certifications --> */}
        <section
          className="w-full bg-surface py-16 border-b border-outline-variant overflow-hidden relative"
          id="engineering-drawings"
        >
          <div className="max-w-[81%] mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">
                    SCHEMATICS &amp;
                    <br />
                    COMPLIANCE
                  </h2>
                  <p className="font-label-caps text-body-base text-on-surface-variant">
                    Designed for seamless integration into standard DIN
                    enclosures or surface mounting. Verified against rigorous
                    international metrology standards.
                  </p>
                </div>
                <div className="bg-surface-container p-6 border border-outline-variant relative">
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
                </div>
              </div>
              <div className="lg:col-span-2 relative">
                {/* <!-- Conceptual Blueprint Image placeholder --> */}
                <div className="w-full aspect-video border border-outline p-2 bg-surface-container-low relative group">
                  {/* <!-- Top right tab --> */}
                  <div className="absolute -top-px right-4 bg-outline text-surface-container-lowest font-label-caps z-10 text-[9px] px-2 py-0.5 uppercase">
                    ISOMETRIC PROJECTION
                  </div>
                  <div className="w-full h-full border border-dashed border-outline-variant bg-surface relative flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-multiply"
                      data-alt="A highly detailed, technical blueprint-style line drawing of a 3-phase electric meter, shown in multiple orthographic views (front, side, top) on a pale industrial grid background, rendered in thin charcoal lines with measurement callouts, strictly adhering to an engineering schematic aesthetic."
                      style={{
                        backgroundImage: `url(${IsometricProjection})`,
                      }}
                    ></div>
                    {/* <!-- Overlay dimensions text for realism --> */}
                    <div className="absolute top-1/4 left-1/4 font-data-mono text-[10px] text-primary -rotate-90 origin-left">
                      W: 175mm
                    </div>
                    <div className="absolute bottom-1/4 right-1/3 font-data-mono text-[10px] text-primary">
                      D: 72mm
                    </div>
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
