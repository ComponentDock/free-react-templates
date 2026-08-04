export function SelectPet() {
  return (
    <section className="bg-paper py-16 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row">
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white lg:text-left">
          Please select your favourite pet
        </h2>
        <button
          type="button"
          className="inline-block bg-brand px-8 font-medium uppercase leading-[42px] text-white transition-colors hover:brightness-95"
        >
          Fill Adoption Form
        </button>
      </div>
    </section>
  )
}
