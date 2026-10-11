import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders the three photo slides with their outline-white CTAs', () => {
    const { container } = render(<Carousel />)

    expect(container.querySelector('section')!.id).toBe('carousel')
    expect(screen.getAllByRole('heading', { level: 2, hidden: true })).toHaveLength(3)
    expect(screen.getByText('This is Carousel Bootstrap Enjoy Free UI Kit.')).toBeInTheDocument()
    expect(screen.getByText('We are Sorbet Free UI Kit.')).toBeInTheDocument()
    expect(screen.getByText('Get Sorbet Free UI Kit')).toBeInTheDocument()

    const ctas = screen.getAllByRole('link', { name: 'See all components', hidden: true })
    expect(ctas).toHaveLength(3)
    expect(ctas[0]!.className).toContain('border-white')
    expect(ctas[0]!).toHaveAttribute('href', '#buttons')

    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('moves between slides with the controls and the dots', async () => {
    render(<Carousel />)

    await userEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await userEvent.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    for (let step = 0; step < 3; step += 1) {
      await userEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    }
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
