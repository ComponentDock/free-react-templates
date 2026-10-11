import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Band, GroupHeading, LabelRow, SectionHeading } from './Band'

describe('Band', () => {
  it('renders a 7rem section with an optional id and extra classes', () => {
    const { container } = render(
      <Band id="start" className="bg-band">
        <p>body</p>
      </Band>,
    )

    const section = container.querySelector('section')

    expect(section).toHaveAttribute('id', 'start')
    expect(section?.className).toContain('py-28')
    expect(section?.className).toContain('bg-band')
    expect(screen.getByText('body')).toBeInTheDocument()
  })

  it('renders a band without an id', () => {
    const { container } = render(<Band>plain</Band>)

    expect(container.querySelector('section')).not.toHaveAttribute('id')
  })
})

describe('SectionHeading', () => {
  it('renders the band heading as a slate h3', () => {
    render(<SectionHeading className="mb-5">Inputs</SectionHeading>)

    const heading = screen.getByRole('heading', { level: 3, name: 'Inputs' })

    expect(heading.className).toContain('text-heading-slate')
    expect(heading.className).toContain('mb-5')
  })
})

describe('LabelRow', () => {
  it('renders a small gray label beside its demos', () => {
    render(
      <LabelRow label="Sizes">
        <button type="button">Small</button>
      </LabelRow>,
    )

    const label = screen.getByRole('heading', { level: 3, name: 'Sizes' })

    expect(label.querySelector('small')?.className).toContain('text-[#888]')
    expect(screen.getByRole('button', { name: 'Small' })).toBeInTheDocument()
  })
})

describe('GroupHeading', () => {
  it('renders a sub-group heading as an h4', () => {
    render(<GroupHeading>Popovers</GroupHeading>)

    expect(screen.getByRole('heading', { level: 4, name: 'Popovers' })).toBeInTheDocument()
  })
})
