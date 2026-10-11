import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShowcaseSection, SubHeading } from './section'

describe('ShowcaseSection', () => {
  it('renders the band title and its children', () => {
    const { container } = render(
      <ShowcaseSection id="demo" title="Buttons" className="bg-light">
        <SubHeading>Pick your style</SubHeading>
      </ShowcaseSection>,
    )

    const section = container.querySelector('section')!
    expect(section.id).toBe('demo')
    expect(section.className).toContain('bg-light')
    expect(screen.getByRole('heading', { level: 2, name: 'Buttons' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pick your style' })).toBeInTheDocument()
  })

  it('renders without an id or extra classes', () => {
    const { container } = render(<ShowcaseSection title="Images">content</ShowcaseSection>)

    expect(container.querySelector('section')!.getAttribute('id')).toBeNull()
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})

describe('SubHeading', () => {
  it('accepts extra classes', () => {
    render(<SubHeading className="mt-4">Badges</SubHeading>)

    expect(screen.getByRole('heading', { level: 3, name: 'Badges' }).className).toContain('mt-4')
  })
})
