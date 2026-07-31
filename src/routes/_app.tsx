import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import SwitchLogo from '#/assets/brand-logo.png'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-surface font-body-base text-on-surface technical-grid">
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant">
        <div className="h-20 max-w-[81%] mx-auto px-margin-desktop flex items-center justify-between">
          <Link to="/">
            <img
              alt="Profile"
              className="w-18 h-18 object-cover"
              src={SwitchLogo}
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              className="font-label-caps text-label-caps transition-colors tracking-widest "
              activeProps={{
                className: 'text-primary border-b-2 border-primary',
              }}
              inactiveProps={{
                className: 'text-on-surface-variant hover:text-primary',
              }}

              to="/"
            >
              HOME
            </Link>
            <Link
              to="/product-catalog"
              className="font-label-caps text-label-caps transition-colors tracking-widest"
              activeProps={{
                className: 'text-primary border-b-2 border-primary',
              }}
              inactiveProps={{
                className: 'text-on-surface-variant hover:text-primary',
              }}
            >
              PRODUCT CATALOG
            </Link>
            <Link
              to="/data-sheet"
              className="font-label-caps text-label-caps transition-colors tracking-widest"
              activeProps={{
                className: 'text-primary border-b-2 border-primary',
              }}
              inactiveProps={{
                className: 'text-on-surface-variant hover:text-primary',
              }}
            >
              DATA SHEET
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              className="bg-secondary text-on-secondary px-6 py-3 font-label-caps text-label-caps flex items-center gap-2 hover:bg-on-secondary-container transition-all"
              target="_blank"
              href="https://wa.me/2348081147003"
            >
              <span>WHATSAPP</span>
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
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
      <Outlet />
      <footer className="w-full bg-surface-container-highest border-t border-outline">
        <div className="max-w-[81%] mx-auto px-margin-desktop py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
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
              CONTACT CHANNELS
            </div>
            <div className="flex flex-col gap-3 font-data-mono text-data-mono text-on-surface-variant">
              <a
                className="flex items-center gap-2"
                href="mailto:info@whynotswitch.com"
              >
                <span className="material-symbols-outlined text-sm">mail</span>
                info@whynotswitch.com
              </a>
              <a className="flex items-center gap-2" href="tel:+2348081147003">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+234 808 114 7003</span>
              </a>
              <a
                className="flex items-center gap-2"
                target="_blank"
                href="https://wa.me/2348081147003"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
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
                      fill="#564337"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                      fill="#564337"
                    ></path>
                  </g>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-on-surface">
              SUBSCRIBE AND NEVER MISS A POST
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
          <div className="max-w-[81%] mx-auto px-margin-desktop flex justify-between items-center font-data-mono text-[10px] text-outline uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Switch Electric Ltd</span>
            <span>LAT: 40.7128 N / LONG: 74.0060 W</span>
          </div>
        </div>
      </footer>
      <a
        className="fixed bottom-8 right-8 z-100 w-14 h-14 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group"
        href="https://wa.me/2348081147003"
        target="_blank"
      >
        <svg
          viewBox="0 0 24 24"
          width={35}
          height={35}
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
              fill="#25d366"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
              fill="#25d366"
            ></path>
          </g>
        </svg>
        <div className="absolute -top-10 right-0 rounded-md bg-whatsapp text-on-secondary font-label-caps text-[10px] px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </div>
      </a>
    </div>
  )
}
