const skills = ['Optio eveniet ex laborum', 'Inventore sapiente tenetur', 'Ipsam aliquam esse']

export function Biography() {
  return (
    <section
      id="biography"
      className="relative bg-dark-bg py-20 before:absolute before:left-0 before:top-0 before:h-1 before:w-[100px] before:bg-brand"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-4xl font-bold uppercase text-white">Biography</h2>
        <img
          src="https://picsum.photos/seed/lens-portrait/600/400"
          alt="Portrait of the photographer"
          className="mb-8 w-1/2 rounded object-cover"
        />
        <h3 className="mb-4 text-2xl text-white">Hi, I&apos;m Jed</h3>
        <p className="mb-4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam a velit. Harum
          eligendi quod reiciendis quos ullam libero est dolor, corporis dolores assumenda,
          delectus, quidem voluptatibus dolorum temporibus enim!
        </p>
        <p className="mb-8 text-gray-300">
          Neque facilis soluta, accusantium quaerat, adipisci porro animi, hic fugiat id vero
          placeat dolorem accusamus sapiente odio consequatur debitis beatae eius quos alias.
        </p>
        <h3 className="mb-4 text-xl text-white">Photographer for 10 years</h3>
        <p className="mb-8 text-gray-300">
          Tempore repudiandae rerum numquam iste, quibusdam omnis voluptates quaerat veniam neque
          odit sit vel dolores. Optio eveniet ex laborum similique inventore sapiente tenetur.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {[0, 1].map((col) => (
            <ul key={col} className="space-y-4">
              {skills.map((skill) => (
                <li key={`${col}-${skill}`} className="flex items-start gap-2 text-gray-300">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-check-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {skill}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
