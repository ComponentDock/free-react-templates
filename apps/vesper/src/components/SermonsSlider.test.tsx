import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SermonsSlider } from './SermonsSlider'

describe('SermonsSlider', () => {
  it('renders the heading and the first slide', () => {
    render(<SermonsSlider />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Vesper Church Sermons' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Sunset Inspire You' }),
    ).toBeInTheDocument()
    expect(screen.getByText('by pastor: Jerry Simon')).toBeInTheDocument()
    // The source renders these CTAs as anchors styled as buttons
    expect(screen.getByRole('link', { name: 'Watch' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download' })).toBeInTheDocument()
  })

  it('navigates between slides with prev and next controls', async () => {
    const user = userEvent.setup()
    render(<SermonsSlider />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Sunset Inspire You' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next sermon' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Developing Spiritual Mentality' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next sermon' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Bible Motivate You' }),
    ).toBeInTheDocument()

    // Next wraps around to the first slide
    await user.click(screen.getByRole('button', { name: 'Next sermon' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Sunset Inspire You' }),
    ).toBeInTheDocument()

    // Previous goes backwards and wraps
    await user.click(screen.getByRole('button', { name: 'Previous sermon' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Bible Motivate You' }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<SermonsSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Bible Motivate You' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Let the Sunset Inspire You' }),
    ).toBeInTheDocument()
  })
})
