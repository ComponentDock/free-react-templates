import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders subheading, title and optional intro', () => {
    render(<SectionHeading subheading="Services" title="Our Clinic Services" intro="Intro text" />)

    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Clinic Services' })).toBeInTheDocument()
    expect(screen.getByText('Intro text')).toBeInTheDocument()
  })

  it('omits the intro paragraph when not provided', () => {
    render(<SectionHeading subheading="Doctors" title="Our Qualified Doctors" />)
    expect(screen.getByRole('heading', { name: 'Our Qualified Doctors' })).toBeInTheDocument()
    expect(screen.queryByText(/Intro text/)).not.toBeInTheDocument()
  })
})
