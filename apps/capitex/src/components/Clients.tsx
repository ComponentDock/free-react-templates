export function Clients() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 lg:grid-cols-4">
        {/* Counter 1 */}
        <div className="flex flex-col items-center justify-center bg-brand/10 py-12">
          <span className="mb-2 text-4xl font-bold text-navy md:text-5xl">2000+</span>
          <span className="text-sm font-medium text-body">Loan Approval</span>
        </div>

        {/* Client image 1 */}
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/capitex-client1/400/300"
            alt="Client 1"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Client image 2 */}
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/capitex-client2/400/300"
            alt="Client 2"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Counter 2 */}
        <div className="flex flex-col items-center justify-center bg-brand/10 py-12">
          <span className="mb-2 text-4xl font-bold text-navy md:text-5xl">99%</span>
          <span className="text-sm font-medium text-body">Satisfied Customers</span>
        </div>
      </div>
    </section>
  )
}
