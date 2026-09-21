export function Courses() {
  return (
    <section id="menu" className="py-20">
      {/* Breakfast / First course */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Daily Food Courses with Drinks
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Our chefs curate fresh seasonal menus every day, combining prime cuts with locally
              sourced ingredients. From appetisers to desserts, every course is crafted to
              perfection.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Pair your meal with a selection from our wine list or enjoy a handcrafted cocktail
              from our bar. We believe great food deserves great accompaniment.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-block border-2 border-brand bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-brand hover:text-white"
            >
              See Full Menu
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/carnivor-food1/600/400"
              alt="Signature steak dish"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/carnivor-food2/300/200"
              alt="Side dish"
              className="absolute -bottom-6 -left-6 rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Lunch / Second course */}
      <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <img
              src="https://picsum.photos/seed/carnivor-food3/600/400"
              alt="Grilled platter"
              className="rounded-lg shadow-lg"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/carnivor-food4/300/200"
              alt="Garnish plate"
              className="absolute -bottom-6 -right-6 rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              Daily Food Courses with Drinks
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              From flame-kissed ribeyes to slow-braised short ribs, our menu celebrates the art of
              fire and patience. Every dish is a testament to the craft of steak preparation.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Our sommelier pairs each course with the perfect vintage, ensuring a dining experience
              that delights every sense.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://picsum.photos/seed/carnivor-chef/80/80"
                alt="Head chef"
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="font-bold text-ink">Marco Rivera</p>
                <p className="text-sm text-mist">Executive Chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
