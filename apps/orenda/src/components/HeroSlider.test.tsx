import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide with sub-heading, headline and CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Popular Online Courses')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'The New Way To Learn Properly With Us!' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Student learning illustration' })).toBeInTheDocument()
  })

  it('advances to the next slide with the next control and updates the active dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { name: /New Way To Learn/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))

    expect(
      screen.getByRole('heading', { name: 'Best Online Courses For Your Bright Future' }),
    ).toBeInTheDocument()
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]).toHaveAttribute('aria-current', 'false')
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })

  it('goes back to the previous slide with the previous control', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { name: 'The New Way To Learn Properly With Us!' }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via a dot control', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(dots[1]!)
    expect(
      screen.getByRole('heading', { name: 'Best Online Courses For Your Bright Future' }),
    ).toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
  })
})
