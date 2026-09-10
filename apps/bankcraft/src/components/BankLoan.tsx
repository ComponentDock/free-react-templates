export function BankLoan() {
  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:px-8">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/bankcraft-loan/600/400"
            alt="Bank loan services"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">Bank Loan</h4>
          <h2 className="mb-4 text-3xl font-bold text-ink">Banking Consultation</h2>
          <p className="mb-6 text-gray-500">
            Our loan specialists work closely with you to find the best financing solution. Whether
            you need a personal loan, mortgage, or business funding, we have flexible options with
            competitive rates.
          </p>
          <p className="mb-8 text-gray-500">
            Get pre-approved in minutes and receive personalized guidance throughout the entire
            process.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  )
}
