import { useEffect } from 'react'
import { Heart, ArrowRight } from 'lucide-react'
import { Pagination } from './components/Pagination'
import { Dropdowns } from './components/Dropdowns'
import { Groups } from './components/Groups'
import { CheckboxesRadios } from './components/CheckboxesRadios'
import { SocialButtons } from './components/SocialButtons'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Paddle — Bootstrap Buttons #08'
  }, [])

  return (
    <div className="min-h-screen bg-white text-paddle-heading">
      <main className="mx-auto max-w-5xl px-4 py-20">
        {/* Section 1: Page Header */}
        <h1 className="mb-12 text-[32px] font-medium text-paddle-heading">Button #08</h1>

        {/* Section 2: Tags & Pointers */}
        <section data-testid="tags-pointers" className="mb-12">
          <h2 className="mb-6 text-base font-medium text-paddle-heading">Tags &amp; Pointers</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-round bg-paddle-secondary px-5 py-1 text-sm font-medium text-white">
              New
            </button>
            <button className="btn-tag relative bg-paddle-tertiary px-5 py-1 text-sm font-medium text-white">
              Sale
            </button>
            <button className="btn-paddle bg-paddle-primary text-white">
              Read more <ArrowRight className="ml-1 inline-block h-4 w-4" />
            </button>
            <button className="btn-paddle border-2 border-paddle-border bg-transparent text-paddle-heading">
              278,645
            </button>
          </div>
        </section>

        {/* Section 3: Pick Your Style */}
        <section data-testid="pick-style" className="mb-12">
          <h2 className="mb-6 text-base font-medium text-paddle-heading">Pick Your Style</h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-paddle bg-paddle-primary text-white">Default</button>
            <button className="btn-paddle border-2 border-paddle-primary text-paddle-primary">
              Default
            </button>
            <button className="btn-round bg-paddle-primary text-white">
              <Heart className="mr-1 inline-block h-4 w-4" /> Default
            </button>
            <button className="btn-paddle bg-paddle-primary text-white" aria-label="Like">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </button>
            <button className="btn-round border-2 border-paddle-primary text-paddle-primary">
              <Heart className="mr-1 inline-block h-4 w-4" /> Default with icon
            </button>
          </div>
        </section>

        {/* Section 4: Pick Your Size */}
        <section data-testid="pick-size" className="mb-12">
          <h2 className="mb-6 text-base font-medium text-paddle-heading">Pick Your Size</h2>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <button className="btn-paddle btn-paddle-sm bg-paddle-primary text-white">
              Default Small
            </button>
            <button className="btn-paddle bg-paddle-primary text-white">Default Regular</button>
            <button className="btn-paddle btn-paddle-lg bg-paddle-primary text-white">
              Default Large
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn-paddle btn-paddle-sm border-2 border-paddle-primary text-paddle-primary">
              Default Small
            </button>
            <button className="btn-paddle border-2 border-paddle-primary text-paddle-primary">
              Default Regular
            </button>
            <button className="btn-paddle btn-paddle-lg border-2 border-paddle-primary text-paddle-primary">
              Default Large
            </button>
          </div>
        </section>

        {/* Section 5: Pick Your Color */}
        <section data-testid="pick-color" className="mb-12">
          <h2 className="mb-6 text-base font-medium text-paddle-heading">Pick Your Color</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-paddle bg-paddle-primary text-white">Default Primary</button>
            <button className="btn-paddle bg-paddle-secondary text-white">Default Secondary</button>
            <button className="btn-paddle bg-paddle-tertiary text-white">Default Tertiary</button>
            <button className="btn-paddle bg-paddle-quarternary text-paddle-dark">
              Default Gradient
            </button>
          </div>
        </section>

        {/* Section 6: Pagination */}
        <Pagination />

        {/* Section 7: Dropdowns */}
        <Dropdowns />

        {/* Section 8: Groups */}
        <Groups />

        {/* Section 9: Checkboxes & Radios */}
        <CheckboxesRadios />

        {/* Section 10: Social Buttons */}
        <SocialButtons />
      </main>
      <Footer />
    </div>
  )
}
