import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ShowcaseSection, SubHeading } from './section'

describe('ShowcaseSection', () => {
  it('renders a titled band with the optional small sub-label', () => {
    render(
      <ShowcaseSection id="buttons" title="Buttons" subtitle="Pick your style">
        <p>child content</p>
      </ShowcaseSection>,
    )

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('Buttons')
    expect(screen.getByText('Pick your style')).toBeInTheDocument()
    expect(screen.getByText('child content')).toBeInTheDocument()
    expect(document.getElementById('buttons')).not.toBeNull()
  })

  it('renders an untitled band without a heading', () => {
    render(
      <ShowcaseSection>
        <p>only children</p>
      </ShowcaseSection>,
    )

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    expect(screen.getByText('only children')).toBeInTheDocument()
  })

  it('omits the sub-label when the band has a title but no subtitle', () => {
    render(
      <ShowcaseSection title="Inputs">
        <p>fields</p>
      </ShowcaseSection>,
    )

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Inputs')
  })
})

describe('SubHeading', () => {
  it('renders a level-3 heading', () => {
    render(<SubHeading>Sliders</SubHeading>)

    expect(screen.getByRole('heading', { level: 3, name: 'Sliders' })).toBeInTheDocument()
  })
})
