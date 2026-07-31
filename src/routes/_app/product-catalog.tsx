import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/product-catalog')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="w-full pt-20 min-h-screen">
      <div className="flex flex-col w-full">
        {/* <!-- Header / Telemetry Section --> */}
        <div className="w-full bg-surface-container-high shadow-md relative z-10 pt-12 pb-24 px-margin-desktop overflow-hidden">
          {/* <!-- Decorative blueprint crosshairs --> */}
          <div className="absolute top-4 left-4 crosshair crosshair-tl opacity-50"></div>
          <div className="absolute top-4 right-4 crosshair crosshair-tr opacity-50"></div>
          <div className="max-w-[81%] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest bg-primary/10 px-2 py-1 w-fit">
                SYS.CATALOG // V.2.0.4
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface uppercase tracking-tight">
                Industrial Node Procurement
              </h1>
              <p className="font-data-mono text-data-mono text-on-surface-variant">
                Live telemetry and real-time inventory tracking for primary
                switching hardware. Select a node to view technical
                specifications or initiate a WhatsApp procurement channel.
              </p>
            </div>
            {/* <!-- Rich Visual: Network / Stock Status --> */}
            <div className="flex items-center gap-6 bg-surface p-4 shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-outline">
                  NETWORK STATUS
                </span>
                <span className="font-data-mono text-data-mono text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  OPTIMAL / 98.4%
                </span>
              </div>
              <div className="w-px h-12 bg-outline-variant"></div>
              <svg
                className="text-primary"
                fill="none"
                height="48"
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="48"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeOpacity={0.2}
                ></circle>
                <path d="M12 2a10 10 0 0 1 8 4" stroke="currentColor"></path>
                <path d="M12 12l4-4" stroke="currentColor"></path>
                <circle
                  cx="12"
                  cy="12"
                  fill="currentColor"
                  r="1"
                  stroke="none"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        {/* <!-- Main Catalog Grid Layout --> */}
        <div className="flex flex-col lg:flex-row w-full max-w-[81%] mx-auto px-margin-desktop gap-12 relative z-20 -mt-12 mb-24">
          {/* <!-- Decorative Sidebar Menu --> */}
          <div className="hidden lg:flex flex-col w-12 items-center pt-16 gap-12">
            <span className="font-label-caps text-label-caps text-outline-variant [writing-mode:vertical-rl] rotate-180 tracking-widest whitespace-nowrap">
              ACTIVE INVENTORY STREAMS
            </span>
            <div className="w-px h-32 bg-outline-variant"></div>
          </div>
          {/* <!-- Product Grid --> */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {/* <!-- Product Card 1: Single Phase --> */}
            <div className="bg-surface-container flex flex-col relative group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-2 crosshair crosshair-tl opacity-50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 crosshair crosshair-br opacity-50 z-10"></div>
              {/* <!-- Image Container --> */}
              <div className="relative w-full h-80 bg-surface-variant flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_70%)]"></div>
                <img
                  className="w-full h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtc83e6Rg-bpK8lMaFwQD31vV14SFflKdyRUlY03yhgYp6JXVJHWZzQ0tR2naZUTEA1BsJZEcgzrfnnZhQdSBC_RawXrN6gMDb256SQrezPzTq3IbNfkk-YM-1hNZS7LZeD0NdKFIKmyr-6lY_yCWNgNg-naj6wKLfpwDTeBOUVP4tk4e-29ATqQdTvPS3CY2JPbZiBT4VPfHrVnqbSzF40n1IfwE_L66QzdOJYaiFJrtEzbXZky04_bWo"
                />
                {/* <!-- HUD Element --> */}
                <div className="absolute top-4 right-4 bg-surface/60 backdrop-blur-md px-3 py-1 font-label-caps text-label-caps text-on-surface shadow-sm z-20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    bolt
                  </span>{' '}
                  SP-100
                </div>
              </div>
              {/* <!-- Content Area --> */}
              <div className="p-6 flex flex-col flex-1 gap-6 bg-surface">
                <div>
                  <h3 className="font-display-lg text-headline-md text-on-surface">
                    WNS-SP-100
                  </h3>
                  <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">
                    Single-Phase Precision Meter
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-data-mono text-[12px] text-on-surface-variant mt-auto">
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">PHASE / RATING</span>
                    <span className="text-on-surface font-bold">
                      SINGLE / 100A
                    </span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">VOLTAGE</span>
                    <span className="text-on-surface font-bold">230V AC</span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">ENVIRONMENT</span>
                    <span className="text-on-surface font-bold">
                      INDOOR (IP54)
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps flex justify-between px-6 items-center hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm group/btn mt-2">
                  <span>ENQUIRE ON WHATSAPP</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Product Card 2: Three Phase --> */}
            <div className="bg-surface-container flex flex-col relative group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-2 crosshair crosshair-tl opacity-50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 crosshair crosshair-br opacity-50 z-10"></div>
              {/* <!-- Image Container --> */}
              <div className="relative w-full h-80 bg-surface-variant flex items-center justify-center p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_70%)]"></div>
                <img
                  className="w-full h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLvtWoIOJzkYj8np1Y5MgHXi6GCdl_k9EbXHWhPzyg_ISX-s1yk4niFMgUF_UetznL4DiOiyUI-JYeTJWPQbx52haQEyAlFVxrudbN8rUcjMyP4q9arf5EeDFjDXhZWMr4Bk8GDhe-3F-9HibdH4FM_8rKiMXT-eRoblETqG2HJKckxymP_Fv9pCY6WJQpX3t_h3Y3WKrlokwGFulXmoGvUO-QMCxtKcfZamkgGGZII41dJtQV7QfnYEog"
                />
                {/* <!-- HUD Element --> */}
                <div className="absolute top-4 right-4 bg-surface/60 backdrop-blur-md px-3 py-1 font-label-caps text-label-caps text-on-surface shadow-sm z-20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-secondary">
                    electric_meter
                  </span>{' '}
                  TP-300
                </div>
              </div>
              {/* <!-- Content Area --> */}
              <div className="p-6 flex flex-col flex-1 gap-6 bg-surface">
                <div>
                  <h3 className="font-display-lg text-headline-md text-on-surface">
                    WNS-TP-300
                  </h3>
                  <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">
                    Three-Phase Industrial Meter
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-data-mono text-[12px] text-on-surface-variant mt-auto">
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">PHASE / RATING</span>
                    <span className="text-on-surface font-bold">
                      THREE / 300A
                    </span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">VOLTAGE</span>
                    <span className="text-on-surface font-bold">400V AC</span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">ENVIRONMENT</span>
                    <span className="text-on-surface font-bold">
                      INDOOR/OUTDOOR
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps flex justify-between px-6 items-center hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm group/btn mt-2">
                  <span>ENQUIRE ON WHATSAPP</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Product Card 3: Outdoor Enclosure --> */}
            <div className="bg-surface-container flex flex-col relative group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-2 crosshair crosshair-tl opacity-50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 crosshair crosshair-br opacity-50 z-10"></div>
              {/* <!-- Image Container --> */}
              <div className="relative w-full h-80 bg-surface-variant flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  data-alt="Industrial outdoor electrical enclosure box, rugged steel, heavy duty, studio lighting, technical blueprint style overlay, highly detailed, neutral grey background"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCUa_Y1Nyc7Cmx6B0lmBdxanOvSG3_IP9CisdYCzJakYlmrhmQQVW8N4zTZvSxi84O0Zg0FoOHvo8_PumpjefUZ6UY1dNNNw3LbeA4tqR0Zc8ve5rd0dbhPdyDGOwdXRiFok-PGTYnkVu8li5silYXhoQ5YEaaCIcu7xxb6kf7ARG4l-BPDKB-R1pOV43TI0_ixTF-O5olrdciqPWnECXH8HJQFY8evP9G3F0SPoqg6StTSY8Z2D_L')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-surface-variant/20 mix-blend-multiply"></div>
                {/* <!-- HUD Element --> */}
                <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 font-label-caps text-label-caps text-on-surface shadow-sm z-20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-on-surface">
                    shield
                  </span>{' '}
                  ENC-HD
                </div>
              </div>
              {/* <!-- Content Area --> */}
              <div className="p-6 flex flex-col flex-1 gap-6 bg-surface">
                <div>
                  <h3 className="font-display-lg text-headline-md text-on-surface">
                    WNS-ENC-HD
                  </h3>
                  <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">
                    Heavy Duty Node Enclosure
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-data-mono text-[12px] text-on-surface-variant mt-auto">
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">MATERIAL</span>
                    <span className="text-on-surface font-bold">
                      GALVANIZED STEEL
                    </span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">DIMENSIONS</span>
                    <span className="text-on-surface font-bold">
                      600x400x250mm
                    </span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">ENVIRONMENT</span>
                    <span className="text-on-surface font-bold">
                      OUTDOOR (IP67)
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps flex justify-between px-6 items-center hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm group/btn mt-2">
                  <span>ENQUIRE ON WHATSAPP</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Product Card 4: Control Relay --> */}
            <div className="bg-surface-container flex flex-col relative group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-2 crosshair crosshair-tl opacity-50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 crosshair crosshair-br opacity-50 z-10"></div>
              {/* <!-- Image Container --> */}
              <div className="relative w-full h-80 bg-surface-variant flex items-center justify-center p-8 overflow-hidden">
                <img
                  className="w-full h-full object-contain mix-blend-darken group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                  data-alt="High precision industrial control relay, macro photography, metallic components, safety orange accents, stark lighting, technical aesthetic isolated on light grey"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nSGi-gcGdoKXD-FjvdLbqql6rHjGdis-VXfuIYhQhECOTXMGGbGAuBCTK3eCQwfBu_ntcP0AON0ea2HepDPfWCO0o1LC3t_6-IqQ-oCLhRQ7Mw1aLYYytyBlwKiwsBWheDXB-Wv_6ufZhWuBubsxisxh-d4JlfmbVUtMbVmuqVu4oL4xd2Sxw0OMcCjUy5OHM7LOQ7tJEo2RiA03n1G3rRfPX0zdtMJiHcjwgnnmarMjSOQLWZqC"
                />
                {/* <!-- HUD Element --> */}
                <div className="absolute top-4 right-4 bg-surface/60 backdrop-blur-md px-3 py-1 font-label-caps text-label-caps text-on-surface shadow-sm z-20 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                    memory
                  </span>{' '}
                  RLY-50
                </div>
              </div>
              {/* <!-- Content Area --> */}
              <div className="p-6 flex flex-col flex-1 gap-6 bg-surface">
                <div>
                  <h3 className="font-display-lg text-headline-md text-on-surface">
                    WNS-RLY-50
                  </h3>
                  <p className="font-data-mono text-data-mono text-on-surface-variant mt-1">
                    Industrial Control Relay
                  </p>
                </div>
                <div className="flex flex-col gap-2 font-data-mono text-[12px] text-on-surface-variant mt-auto">
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">POLES / THROW</span>
                    <span className="text-on-surface font-bold">
                      DPDT / 50A
                    </span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">COIL VOLTAGE</span>
                    <span className="text-on-surface font-bold">24V DC</span>
                  </div>
                  <div className="flex justify-between bg-surface-container-low px-3 py-2 shadow-sm">
                    <span className="text-outline">MOUNTING</span>
                    <span className="text-on-surface font-bold">
                      DIN RAIL 35mm
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-label-caps text-label-caps flex justify-between px-6 items-center hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm group/btn mt-2">
                  <span>ENQUIRE ON WHATSAPP</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
