export function ColorPalette() {
  const colorVariants = [
    // Row 1
    { name: 'Primary', bg: 'bg-primary', text: 'text-white', hover: 'hover:bg-primary-hover' },
    {
      name: 'Secondary',
      bg: 'bg-secondary',
      text: 'text-white',
      hover: 'hover:bg-secondary-hover',
    },
    { name: 'Success', bg: 'bg-success', text: 'text-white', hover: 'hover:bg-success-hover' },
    {
      name: 'Info',
      bg: 'bg-info',
      text: 'text-slate-900 dark:text-slate-100',
      hover: 'hover:bg-info-hover',
    },
    {
      name: 'Warning',
      bg: 'bg-warning',
      text: 'text-slate-900 dark:text-slate-100',
      hover: 'hover:bg-warning-hover',
    },
    { name: 'Danger', bg: 'bg-danger', text: 'text-white', hover: 'hover:bg-danger-hover' },
    {
      name: 'Light',
      bg: 'bg-light',
      text: 'text-slate-900 dark:text-slate-100',
      hover: 'hover:bg-light-hover',
    },
    { name: 'Orange', bg: 'bg-orange', text: 'text-white', hover: 'hover:bg-orange-hover' },
    // Row 2
    { name: 'Indigo', bg: 'bg-indigo', text: 'text-white', hover: 'hover:bg-indigo-hover' },
    { name: 'Pink', bg: 'bg-pink', text: 'text-white', hover: 'hover:bg-pink-hover' },
    {
      name: 'Deep Orange',
      bg: 'bg-deeporange',
      text: 'text-white',
      hover: 'hover:bg-deeporange-hover',
    },
    { name: 'Aqua', bg: 'bg-aqua', text: 'text-white', hover: 'hover:bg-aqua-hover' },
    { name: 'Dark', bg: 'bg-dark', text: 'text-white', hover: 'hover:bg-dark-hover' },
    { name: 'Black', bg: 'bg-black', text: 'text-white', hover: 'hover:bg-gray-800' },
    { name: 'Purple', bg: 'bg-purple', text: 'text-white', hover: 'hover:bg-purple-hover' },
    { name: 'Blue', bg: 'bg-blue', text: 'text-white', hover: 'hover:bg-blue-hover' },
    // Row 3
    { name: 'Brown', bg: 'bg-brown', text: 'text-white', hover: 'hover:bg-brown-hover' },
    { name: 'Blue Gray', bg: 'bg-bluegray', text: 'text-white', hover: 'hover:bg-bluegray-hover' },
  ] as const

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white text-center">
          Button Colors
        </h2>
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            {colorVariants.slice(0, 8).map(({ name, bg, text, hover }) => (
              <button
                key={name}
                type="button"
                className={`rounded-full font-medium transition-colors duration-150 px-5 py-2.5 text-base ${bg} ${text} ${hover}`}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {colorVariants.slice(8, 16).map(({ name, bg, text, hover }) => (
              <button
                key={name}
                type="button"
                className={`rounded-full font-medium transition-colors duration-150 px-5 py-2.5 text-base ${bg} ${text} ${hover}`}
              >
                {name}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {colorVariants.slice(16).map(({ name, bg, text, hover }) => (
              <button
                key={name}
                type="button"
                className={`rounded-full font-medium transition-colors duration-150 px-5 py-2.5 text-base ${bg} ${text} ${hover}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
