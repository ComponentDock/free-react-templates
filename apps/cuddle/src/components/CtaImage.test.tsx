import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaImage } from './CtaImage'

describe('CtaImage', () => {
  it('renders heading and description', () => {
    render(<CtaImage />)

    expect(screen.getByText('Support Us')).toBeInTheDocument()
    expect(
      screen.getByText('The Smallest Act of Kindness is Worth More Than the Grandest Intention'),
    ).toBeInTheDocument()
  })

  it('renders Donate Now and Become A Volunteer buttons', () => {
    render(<CtaImage />)

    expect(screen.getByRole('link', { name: 'Donate Now' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become A Volunteer' })).toBeInTheDocument()
  })

  it('renders background image', () => {
    render(<CtaImage />)

    const img = screen.getByAltText('Volunteers helping community')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/cuddle-cta'))
  })

  it('has section with id cta-image', () => {
    const { container } = render(<CtaImage />)

    const section = container.querySelector('#cta-image')
    expect(section).toBeInTheDocument()
  })

  it('links Donate Now to donate section', () => {
    render(<CtaImage />)

    const donateBtn = screen.getByRole('link', { name: 'Donate Now' })
    expect(donateBtn).toHaveAttribute('href', '#donate')
  })

  it('links Become A Volunteer to volunteer section', () => {
    render(<CtaImage />)

    const volunteerBtn = screen.getByRole('link', { name: 'Become A Volunteer' })
    expect(volunteerBtn).toHaveAttribute('href', '#volunteer')
  })
})
