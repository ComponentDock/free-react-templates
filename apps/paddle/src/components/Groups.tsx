export function Groups() {
  return (
    <section data-testid="groups" className="mb-12">
      <h2 className="mb-6 text-base font-medium text-paddle-heading">Button Groups</h2>
      <div className="flex flex-col gap-6">
        <div className="btn-group flex flex-wrap gap-0">
          <button className="btn-paddle bg-paddle-primary text-white">Button 1</button>
          <button className="btn-paddle border-2 border-paddle-primary text-paddle-primary">
            Button 1
          </button>
          <button className="btn-paddle bg-paddle-primary text-white">Button 1</button>
        </div>
        <div className="btn-group flex flex-wrap gap-0">
          <button className="btn-paddle bg-paddle-secondary text-white">Button 2</button>
          <button className="btn-paddle border-2 border-paddle-secondary text-paddle-secondary">
            Button 2
          </button>
          <button className="btn-paddle bg-paddle-secondary text-white">Button 2</button>
        </div>
      </div>
    </section>
  )
}
