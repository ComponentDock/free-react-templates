import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders five cards, three visible on desktop', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Clients')
    const cards = screen.getAllByRole('figure')
    expect(cards).toHaveLength(5)
    expect(cards[0]!.className).toContain('p-[35px_30px_30px]')
    expect(screen.getByText('Marta Ellison')).toHaveClass('text-[20px]')
    expect(screen.getByText('Developer')).toHaveClass('text-deep-amber')
  })

  it('advances the track and marks the active bar with aria-current', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const bars = screen.getAllByRole('button', { name: /Show testimonial group/ })
    expect(bars).toHaveLength(3)
    const [firstBar, secondBar, thirdBar] = bars as [HTMLElement, HTMLElement, HTMLElement]
    expect(firstBar).toHaveAttribute('aria-current', 'true')
    expect(secondBar).not.toHaveAttribute('aria-current')

    await user.click(thirdBar)
    expect(thirdBar).toHaveAttribute('aria-current', 'true')
    expect(firstBar).not.toHaveAttribute('aria-current')
    expect(thirdBar.className).toContain('bg-brand')
    expect(firstBar.className).toContain('bg-[#ddd]')
    const track = document.querySelector('ul.flex.transition-transform') as HTMLElement
    expect(track.style.transform).toContain('translateX(-66.66')
  })
})
