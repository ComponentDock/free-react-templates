import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, first testimonial slide, and the stats row', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'What Our Client Says About Us',
    )

    expect(screen.getByRole('heading', { name: 'Jeff Woodland' })).toBeInTheDocument()
    expect(screen.getByText('Partner')).toBeInTheDocument()
    expect(screen.getByText(/Aliquam earum libero rem maxime/)).toBeInTheDocument()

    const photo = screen.getByRole('img', { name: 'Jeff Woodland' })
    expect(photo).toHaveAttribute('src', expect.stringContaining('id/1027'))

    for (const [value, label] of [
      ['3423', 'Happy Client'],
      ['4398', 'Members'],
      ['50+', 'Staffs'],
      ['2000+', 'Our Followers'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(container.querySelector('section')!.className).toContain('bg-mist')
  })

  it('cycles the slides with prev/next and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const photo = () => screen.getByRole('img', { name: 'Jeff Woodland' }).getAttribute('src') ?? ''

    expect(photo()).toContain('id/1027')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(photo()).toContain('id/996')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(photo()).toContain('id/1011')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(photo()).toContain('id/1027')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(photo()).toContain('id/1011')
  })
})
