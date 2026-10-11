import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowcaseSection, SubHeading } from './section'

describe('ShowcaseSection', () => {
  it('renders the band title, its children and extra classes', () => {
    const { container } = render(
      <ShowcaseSection id="demo" title="Buttons" className="bg-light">
        <span>content</span>
      </ShowcaseSection>,
    )

    const section = container.querySelector('section')!
    expect(section.id).toBe('demo')
    expect(section.className).toContain('bg-light')
    expect(screen.getByRole('heading', { level: 2, name: 'Buttons' })).toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('skips the heading when the band has no title', () => {
    const { container } = render(
      <ShowcaseSection>
        <SubHeading>Sliders</SubHeading>
      </ShowcaseSection>,
    )

    expect(container.querySelector('section')!.getAttribute('id')).toBeNull()
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Sliders' })).toBeInTheDocument()
  })
})

describe('SubHeading', () => {
  it('accepts extra classes', () => {
    render(<SubHeading className="mt-4">Badges</SubHeading>)

    expect(screen.getByRole('heading', { level: 3, name: 'Badges' }).className).toContain('mt-4')
  })
})
