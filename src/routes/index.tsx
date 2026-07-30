import { createFileRoute, Link } from '@tanstack/react-router'
import SwitchLogo from '#/assets/brand-logo.png'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="bg-surface font-body-base text-on-surface technical-grid">
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
        <div className="h-20 max-w-7xl mx-auto px-margin-desktop flex items-center justify-between">
          <Link to="/">
            <img
              alt="Profile"
              className="w-14 h-14 rounded-full object-cover"
              src={SwitchLogo}
            />
          </Link>
          <nav
            className="hidden lg:flex items-center gap-8"
            data-active-classes="text-primary border-b-2 border-primary"
          >
            <Link
              aria-current="page"
              className="font-label-caps transition-colors tracking-widest text-primary border-b-2 border-primary"
              data-path="home"
              to="/"
            >
              HOME
            </Link>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest"
              data-path="product"
              href="#"
            >
              PRODUCT CATALOG
            </a>
            <a
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors tracking-widest"
              data-path="data-sheet"
              href="#"
            >
              DATA SHEET
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              className="bg-secondary text-on-secondary px-6 py-3 font-label-caps text-label-caps flex items-center gap-2 hover:bg-on-secondary-container transition-all"
              href="https://api.whatsapp.com/send?phone=2348081147003"
            >
              WHATSAPP{' '}
              <svg
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                    fill="#ffffff"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <main className="w-full pt-20 min-h-screen">
        <div className="flex flex-col w-full">
          <section className="relative w-full min-h-[90vh] flex items-center bg-surface overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-50"></div>
            <div className="absolute top-margin-desktop left-margin-desktop crosshair crosshair-tl pointer-events-none"></div>
            <div className="absolute top-margin-desktop right-margin-desktop crosshair crosshair-tr pointer-events-none"></div>
            <div className="absolute bottom-margin-desktop left-margin-desktop crosshair crosshair-bl pointer-events-none"></div>
            <div className="absolute bottom-margin-desktop right-margin-desktop crosshair crosshair-br pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pt-20">
              <div className="col-span-1 lg:col-span-5 flex flex-col justify-center space-y-8 relative">
                <div>
                  <span className="inline-block bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps px-3 py-1 mb-6 border border-outline">
                    SYS_ONLINE // GRID_SYNC_ACTIVE
                  </span>
                  <h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
                    Reliable, Verifiable <br />
                    <span className="text-primary italic font-serif">
                      Solar Metering
                    </span>
                    <br />
                    for Africa's Grid.
                  </h1>
                  <p className="font-data-mono text-data-mono text-on-surface-variant max-w-md">
                    Industrial-grade precision switching solutions engineered
                    for high-performance hardware procurement and field
                    deployment.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 flex items-center justify-center gap-3 hover:bg-on-primary-container transition-colors border border-primary relative overflow-hidden group"
                    href="#"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      CHAT ON WHATSAPP
                      <span className="material-symbols-outlined text-sm">
                        chat_bubble
                      </span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                  </a>
                  <a
                    className="bg-surface text-on-surface font-label-caps text-label-caps px-8 py-4 flex items-center justify-center gap-3 border border-outline hover:bg-surface-container transition-colors"
                    href="#demo"
                  >
                    SEE CUMULUS IN ACTION
                    <span className="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-7 relative flex items-center justify-center">
                <div className="absolute top-10 left-10 bg-surface/60 backdrop-blur-md border border-white/40 p-3 flex flex-col gap-1 z-20 shadow-xl">
                  <span className="font-label-caps text-[10px] text-on-surface">
                    MAX_CURRENT
                  </span>
                  <span className="font-data-mono text-data-mono text-primary">
                    100A RMS
                  </span>
                </div>
                <div className="absolute bottom-20 right-10 bg-inverse-surface/80 backdrop-blur-md border border-white/20 p-3 flex flex-col gap-1 z-20 shadow-xl">
                  <span className="font-label-caps text-[10px] text-inverse-on-surface">
                    THEFT_DETECT
                  </span>
                  <span className="font-data-mono text-data-mono text-secondary-container">
                    ACTIVE // SENSITIVE
                  </span>
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 z-20">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_var(--color-secondary)]"></div>
                  <div className="w-px h-12 bg-outline mx-auto"></div>
                  <div className="font-label-caps text-[10px] text-on-surface [writing-mode:vertical-rl]">
                    STATUS_OK
                  </div>
                </div>
                <div className="relative w-full aspect-square max-w-2xl bg-surface-container border border-outline-variant p-4">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-outline-variant -translate-x-px -translate-y-px"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-outline-variant translate-x-px -translate-y-px"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-outline-variant -translate-x-px translate-y-px"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-outline-variant translate-x-px translate-y-px"></div>
                  <div className="w-full h-full bg-surface-container-low border border-outline flex items-center justify-center overflow-hidden relative">
                    <img
                      alt="Smart Meter CUMULUS Series"
                      className="w-full h-full object-contain p-8 mix-blend-multiply hover:scale-105 transition-transform duration-700"
                      src="https://lh3.googleusercontent.com/aida/AP1WRLtc83e6Rg-bpK8lMaFwQD31vV14SFflKdyRUlY03yhgYp6JXVJHWZzQ0tR2naZUTEA1BsJZEcgzrfnnZhQdSBC_RawXrN6gMDb256SQrezPzTq3IbNfkk-YM-1hNZS7LZeD0NdKFIKmyr-6lY_yCWNgNg-naj6wKLfpwDTeBOUVP4tk4e-29ATqQdTvPS3CY2JPbZiBT4VPfHrVnqbSzF40n1IfwE_L66QzdOJYaiFJrtEzbXZky04_bWo"
                    />

                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="w-full h-0.5 bg-primary/30 blur-[1px] absolute top-0 animate-scan"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-inverse-surface text-inverse-on-surface py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div>
                <div className="font-label-caps text-label-caps text-inverse-primary mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    warning
                  </span>
                  GRID_REALITY // NG_SECTOR
                </div>
                <h2 className="font-headline-md text-headline-md mb-6 max-w-lg">
                  Navigating unpredictable grid infrastructure requires
                  resilient hardware.
                </h2>
                <p className="font-body-base text-body-base text-surface-container-highest max-w-md opacity-80">
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
            <div className="max-w-7xl mx-auto px-margin-desktop">
              <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-4">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Hardware Modules
                  </h2>
                  <div className="font-data-mono text-data-mono text-on-surface-variant mt-2">
                    CUMULUS_METERING_UNIT // EXPLODED_VIEW
                  </div>
                </div>
                <div className="font-label-caps text-label-caps text-outline hidden md:block">
                  VIEW_01 // VIEW_02
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative aspect-square bg-surface border border-outline group p-8 flex items-center justify-center">
                  <div className="absolute top-2 left-2 font-data-mono text-[10px] text-outline">
                    FIG. 1 / FRONT_ELEVATION
                  </div>

                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary/50"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary/50"></div>
                  <img
                    alt="Cumulus Meter Front View"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLvtWoIOJzkYj8np1Y5MgHXi6GCdl_k9EbXHWhPzyg_ISX-s1yk4niFMgUF_UetznL4DiOiyUI-JYeTJWPQbx52haQEyAlFVxrudbN8rUcjMyP4q9arf5EeDFjDXhZWMr4Bk8GDhe-3F-9HibdH4FM_8rKiMXT-eRoblETqG2HJKckxymP_Fv9pCY6WJQpX3t_h3Y3WKrlokwGFulXmoGvUO-QMCxtKcfZamkgGGZII41dJtQV7QfnYEog"
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
                    FIG. 2 / ISOMETRIC_PERSPECTIVE
                  </div>

                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary/50"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-primary/50"></div>
                  <img
                    alt="Cumulus Meter Isometric View"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLt39JlxyLwVPOZfwsYgGXo7VGBV85Qx5jErAmTKof1cGugzsgcectCkhxl7yx3pRDPUCsV05s6Vxkn0ccYnrdiTA9lGWv49-nBzBTkRtLmNojUzi0NZFqEADSridVZ4sOihJEjnXh7h0LZj77nDmTx5PoWKS_uiIgw4QgvySNrE2fKbTzvtEjCE70U740JTwiHdG60oXdTx9FlZPIhCF9ZS882jX_rAKW03YSPKFyfrn15AIAjuasA6-qo"
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
            <div className="max-w-7xl mx-auto px-margin-desktop">
              <div className="mb-16">
                <span className="font-label-caps text-label-caps text-primary border border-primary px-2 py-1">
                  TECH_SPECS
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface mt-6">
                  Core Telemetry &amp; Protection
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant border border-outline-variant">
                <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-surface-container transition-colors group">
                  <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <h3 className="font-data-mono text-data-mono text-on-surface text-lg">
                    100A Max Current
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant">
                    Designed to handle significant load variations without
                    tripping, ensuring continuous supply for high-demand
                    residential and light-commercial applications.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-surface-container transition-colors group">
                  <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <h3 className="font-data-mono text-data-mono text-on-surface text-lg">
                    Advanced Theft Detection
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant">
                    Multi-sensor tamper detection logs magnetic interference,
                    cover removal, and reverse current flow, instantly reporting
                    anomalies to the central dashboard.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-surface-container transition-colors group">
                  <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">
                      network_check
                    </span>
                  </div>
                  <h3 className="font-data-mono text-data-mono text-on-surface text-lg">
                    Predictive Maintenance
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant">
                    Machine learning algorithms analyze power quality data
                    locally to predict relay wear and capacitor degradation
                    before catastrophic failure.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-8 flex flex-col gap-4 hover:bg-surface-container transition-colors group">
                  <div className="w-12 h-12 border border-outline flex items-center justify-center bg-surface-bright group-hover:border-primary group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">sync_alt</span>
                  </div>
                  <h3 className="font-data-mono text-data-mono text-on-surface text-lg">
                    Bi-directional Metering
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant">
                    Natively supports solar net-metering. Accurately records
                    imported and exported energy on separate registers for
                    precise billing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full py-24 bg-surface-container-highest relative"
            id="demo"
          >
            <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Data Visibility at Scale
                </h2>
                <p className="font-body-base text-body-base text-on-surface-variant">
                  Monitor fleet health, track revenue recovery, and isolate
                  tamper events in real-time through the Switch Management
                  Dashboard.
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
                <button className="w-fit mt-4 bg-transparent border border-on-surface text-on-surface font-label-caps text-label-caps px-6 py-3 hover:bg-on-surface hover:text-surface transition-colors flex items-center gap-2">
                  REQUEST_DEMO_ACCESS{' '}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </button>
              </div>
              <div className="col-span-1 lg:col-span-8 relative">
                <div className="bg-surface border border-outline p-2 relative shadow-2xl">
                  <div className="flex items-center gap-2 mb-2 px-2 border-b border-outline-variant pb-2">
                    <div className="w-2 h-2 rounded-full bg-error"></div>
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <div className="font-label-caps text-[10px] text-outline ml-4 flex-1 text-center">
                      SWITCH_DASHBOARD_V2.1
                    </div>
                  </div>
                  <img
                    alt="Switch Management Dashboard Interface"
                    className="w-full h-auto object-cover border border-outline-variant"
                    src="https://lh3.googleusercontent.com/aida/AP1WRLv08Y7nDvlLkJ-PNQ56GejdYlycHWUJmhZ7-5gPWcog1A_lwCiw14RjMVapbYJX66EEpfDVKKCjNeSDen6yBrQdjLdb_7tRjWUr_M-pm15IRQ_jB9FtVRvcG9hZr3RfD7zH_ictwR-Id5FU2M0gGYu9JUULEoM3MzU2enjKGggSPesPFjck4K546Fd6rjKyfaxW1DJBDS3p_4tCEUs8GOsEarv54sqWGNv5E17W993lw_WxCsdV9MQAWU0"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-inverse-surface/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity cursor-pointer group">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl">
                        play_arrow
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-inverse-surface text-inverse-on-surface py-16 border-y border-outline">
            <div className="max-w-7xl mx-auto px-margin-desktop">
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
                    COMPLIANCE_STANDARDS
                  </div>
                  <div className="flex flex-wrap gap-4 font-data-mono text-sm text-inverse-on-surface">
                    <span className="border border-surface-container-highest/50 px-3 py-1 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-secondary-container">
                        check_circle
                      </span>{' '}
                      IEC 62052-11
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

          <section className="w-full py-24 bg-surface">
            <div className="max-w-4xl mx-auto px-margin-desktop">
              <div className="text-center mb-16">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Technical Briefing
                </h2>
                <p className="font-data-mono text-data-mono text-outline mt-2">
                  COMMON_QUERIES // FIELD_DEPLOYMENT
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
                  <div className="pb-6 font-body-base text-on-surface-variant pl-10 pr-4">
                    The Cumulus series supports GSM/GPRS (2G/3G/4G fallback),
                    NB-IoT, and local optical port communication. Modbus RTU
                    over RS485 is available on extended modules.
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
                  <div className="pb-6 font-body-base text-on-surface-variant pl-10 pr-4">
                    Yes. All our prepayment meters are fully STS (Standard
                    Transfer Specification) compliant and can seamlessly
                    integrate with any existing STS Edition 2 certified vending
                    platform.
                  </div>
                </details>

                <details className="group border-b border-outline-variant">
                  <summary className="flex justify-between items-center py-6 cursor-pointer list-none font-data-mono text-on-surface text-lg hover:text-primary transition-colors">
                    <span className="flex items-center gap-4">
                      <span className="text-outline text-sm">03</span> How does
                      it handle severe voltage fluctuations?
                    </span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <div className="pb-6 font-body-base text-on-surface-variant pl-10 pr-4">
                    Equipped with a wide operating voltage range (110V - 300V
                    AC) and robust internal surge protection (up to 6kV), it is
                    designed to survive unstable grid conditions without
                    internal component failure.
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
                className="bg-surface text-primary font-label-caps text-label-caps px-10 py-5 flex items-center gap-3 hover:bg-surface-container shadow-xl transition-transform hover:-translate-y-1"
                href="#"
              >
                <span className="material-symbols-outlined">chat</span>
                CONTACT_US_ON_WHATSAPP
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container-highest border-t border-outline">
        <div className="max-w-7xl mx-auto px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-primary">
              SYSTEM_IDENTITY
            </div>
            <p className="font-data-mono text-data-mono text-on-surface-variant">
              Industrial precision switching solutions for high-performance
              hardware procurement.
            </p>
          </div>
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-on-surface">
              EXPLORE_NODES
            </div>
            <nav className="flex flex-col gap-3">
              <a
                className="font-data-mono text-data-mono text-on-surface-variant hover:text-primary"
                data-path="catalog"
                href="#"
              >
                ./catalog
              </a>
              <a
                className="font-data-mono text-data-mono text-on-surface-variant hover:text-primary"
                data-path="data-sheet"
                href="#"
              >
                ./datasheets
              </a>
              <a
                className="font-data-mono text-data-mono text-on-surface-variant hover:text-primary"
                data-path="support"
                href="#"
              >
                ./support_desk
              </a>
            </nav>
          </div>
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-on-surface">
              CONTACT_CHANNELS
            </div>
            <div className="flex flex-col gap-3 font-data-mono text-data-mono text-on-surface-variant">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">mail</span>{' '}
                info@whynotswitch.com
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">call</span>{' '}
                +1-800-SWITCH
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">chat</span>{' '}
                WhatsApp Active
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-on-surface">
              DATA_STREAM
            </div>
            <div className="flex flex-col gap-4">
              <input
                className="bg-transparent border border-outline px-4 py-2 font-data-mono text-data-mono focus:outline-none focus:border-primary w-full"
                placeholder="EMAIL_ADDRESS"
                type="email"
              />
              <button className="bg-primary text-on-primary font-label-caps text-label-caps py-2 w-full">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-outline-variant py-8">
          <div className="max-w-7xl mx-auto px-margin-desktop flex justify-between items-center font-data-mono text-[10px] text-outline uppercase tracking-widest">
            <span>© 2024 WNS_INDUSTRIAL_CORE</span>
            <span>LAT: 40.7128 N / LONG: 74.0060 W</span>
          </div>
        </div>
      </footer>
      <a
        className="fixed bottom-8 right-8 z-100 w-14 h-14 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group"
        href="#"
      >
        <span className="material-symbols-outlined text-secondary text-3xl">
          chat
        </span>
        <div className="absolute -top-10 right-0 bg-secondary text-on-secondary font-label-caps text-[10px] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          SUPPORT_ONLINE
        </div>
      </a>
    </div>
  )
}
