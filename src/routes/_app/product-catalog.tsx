import { WhatsApp } from '#/components/icons/WhatsApp'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/product-catalog')({
  component: RouteComponent,
  head: () => ({ meta: [{ title: 'Product Catalog' }] }),
})

const whatsappUrl = 'https://wa.me/2348081147003'

const tags = {
  cumulus: ['Smart metering', 'IoT monitoring', 'Load control'],
  maxwell: ['Energy metering', 'Technical data', 'Field hardware'],
}

function RouteComponent() {
  return (
    <main className="min-h-screen w-full pt-20">
      <section className="border-b border-outline-variant bg-surface-container-low px-margin-desktop py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[81%]">
          <div className="mb-6 flex items-center gap-3 font-label-caps text-label-caps uppercase tracking-widest">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-box-icon lucide-box"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            Product catalog
          </div>
          <h1 className="font-display-lg text-display-lg uppercase text-on-surface">
            Hardware for clearer
            <br />
            energy operations.
          </h1>
          <p className="mt-6 max-w-xl font-data-mono text-data-mono text-on-surface-variant">
            Verified metering products for practical energy operations, with a
            catalog system designed to grow without inventing the roadmap.
          </p>
        </div>
      </section>

      <section className="px-margin-desktop py-16 lg:py-28">
        <div className="mx-auto w-full max-w-[81%]">
          <div className="mb-5 flex justify-between font-data-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
            <span>02 Products</span>
            <span>Catalog / Current</span>
          </div>
          <div className="flex flex-col gap-12">
            <article className="grid overflow-hidden border border-on-surface bg-surface md:grid-cols-2">
              <div className="relative min-h-88 overflow-hidden border-b border-on-surface bg-surface-container md:min-h-142 md:border-r md:border-b-0">
                <span className="absolute top-5 left-5 z-20 font-data-mono text-[10px] uppercase tracking-widest">
                  Fig. 01 / Cumulus
                </span>
                <img
                  alt="Cumulus smart energy meter"
                  className="h-full w-full object-cover mix-blend-multiply"
                  src="/assets/cumulus5.jpeg"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <div className="mb-10 flex items-center gap-2 font-data-mono text-[12px] font-bold uppercase tracking-widest">
                  <span className="size-2 rounded-full bg-secondary" />
                  Current product
                </div>
                <h2 className="font-display-lg text-display-lg text-on-surface">
                  Cumulus
                </h2>
                <p className="mt-5 text-on-surface-variant font-data-mono text-data-mono text-[15px]">
                  Smart metering hardware designed to help decentralized energy
                  operators monitor, manage and control connected loads.
                </p>
                <TagList _tags={tags.cumulus} />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    className="bg-on-surface px-5 py-4 font-label-caps text-sm text-surface transition-transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
                    to="/datasheet"
                  >
                    <span>View datasheet</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right-icon lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    className="border border-on-surface px-5 text-on-secondary py-4 font-label-caps text-sm bg-secondary hover:bg-secondary/80 flex justify-center items-center gap-2 transition-transform hover:-translate-y-0.5"
                    href={whatsappUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <WhatsApp width={20} height={20} color="#ffffff" />
                    <span>Ask about Cumulus</span>
                  </a>
                </div>
              </div>
            </article>

            <article className="grid overflow-hidden border border-on-surface bg-surface md:grid-cols-2">
              <div className="order-2 flex flex-col justify-center border-t border-on-surface p-8 md:order-1 md:border-t-0 md:border-r lg:p-14">
                <div className="mb-10 flex items-center gap-2 font-data-mono text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span className="size-2 rounded-full bg-outline" />
                  Currently unavailable
                </div>
                <h2 className="font-display-lg text-display-lg text-on-surface">
                  Maxwell
                </h2>
                <p className="mt-5 text-on-surface-variant font-data-mono text-data-mono text-[15px]">
                  Metering hardware for dependable energy measurement and
                  technical evaluation.
                </p>
                <TagList _tags={tags.maxwell} />
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    className="bg-on-surface px-5 py-4 font-label-caps text-sm text-surface transition-transform hover:-translate-y-0.5 flex justify-center items-center gap-2"
                    href="/assets/maxwell-datasheet.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View data sheet</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right-icon lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    className="border px-5 py-4 font-label-caps text-sm text-on-secondary flex justify-center items-center gap-2 transition-transform hover:-translate-y-0.5 bg-secondary hover:bg-secondary/80"
                    href="https://wa.me/2348081147003"
                  >
                    <span>Ask about availability</span>
                    <WhatsApp width={20} height={20} color="#ffffff" />
                  </a>
                </div>
              </div>
              <div className="relative order-1 min-h-88 overflow-hidden bg-surface-container md:order-2 md:min-h-142">
                <span className="absolute top-5 right-5 z-20 font-data-mono text-[10px] uppercase tracking-widest">
                  Fig. 02 / Maxwell
                </span>
                <img
                  alt="Maxwell energy meter"
                  className="h-full w-full object-contain p-10 mix-blend-multiply"
                  src="/assets/maxwell.png"
                />
                <div className="absolute inset-0 z-10 grid place-items-center bg-on-surface/60">
                  <div className="border-3 border-red-500 bg-on-surface/85 w-[60%] flex justify-center items-center h-15 font-label-caps md:text-lg text-[15px] font-semibold uppercase tracking-[0.2em] text-white">
                    <span>Out of stock</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary px-margin-desktop py-20">
        <div className="mx-auto w-full max-w-[81%] grid md:grid-cols-5 grid-cols-1 justify-between gap-8 lg:flex-row lg:items-end">
          <div className="md:col-span-3 col-span-1">
            <span className="font-label-caps text-sm uppercase tracking-widest text-white">
              Start a conversation
            </span>
            <h2 className="mt-4 font-display-lg text-display-lg text-on-primary">
              Planning an energy project? Let's specify the right meter.
            </h2>
          </div>
          <a
            className="w-fit md:col-span-2 col-span-1 mx-auto text-sm bg-secondary px-6 py-4 font-label-caps text-label-caps text-on-secondary flex gap-2 justify-center items-center hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_var(--color-on-secondary-fixed-variant)] hover:shadow-none"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span>Chat on WhatsApp</span>
            <WhatsApp width={24} height={24} color="#ffffff" />
          </a>
        </div>
      </section>
    </main>
  )
}

function TagList({ _tags }: { _tags: Array<string> }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2 font-data-mono text-[10px] uppercase">
      {_tags.map((tag) => (
        <span className="border border-outline-variant px-3 py-2" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}
