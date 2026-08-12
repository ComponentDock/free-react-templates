import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the first slide headline with the highlighted word in orange', () => {
    render(<HeroSlider />)

    const section = screen.getByRole('region', { name: 'Hero' })
    const h1 = within(section).getByRole('heading', { level: 1 })
    expect(h1.textContent).toBe('We Are Leading Industry of Engineers')
    expect(within(h1).getByText('Leading')).toHaveClass('text-brand')
  })

  it('advances to the second slide with the next arrow and wraps with prev', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const section = screen.getByRole('region', { name: 'Hero' })
    const h1 = within(section).getByRole('heading', { level: 1 })

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(h1.textContent).toBe('Experts and High Quality Works')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(h1.textContent).toBe('We Are Leading Industry of Engineers')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(h1.textContent).toBe('Experts and High Quality Works')
  })
})
