import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Reviews } from './Reviews'

function track() {
  return screen
    .getAllByRole('figure')
    .map((fig) => fig.parentElement as HTMLElement)
    .find((el) => el.style.transform !== undefined) as HTMLElement
}

describe('Reviews', () => {
  it('renders the section heading and subtitle', () => {
    render(<Reviews />)
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Listeners Say' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Hear from the community/)).toBeInTheDocument()
  })

  it('shows review cards with star rating, quote, author, and role', () => {
    render(<Reviews />)
    expect(screen.getByText(/The only show I never skip/)).toBeInTheDocument()
    expect(screen.getByText('Priya Kapoor')).toBeInTheDocument()
    expect(screen.getByText('Founder, Launchpad Labs')).toBeInTheDocument()
    expect(screen.getByText('Kim Nielsen')).toBeInTheDocument()
    expect(screen.getByText('Listener since Season 1')).toBeInTheDocument()
    // inactive slides are aria-hidden, so count in the DOM instead of the a11y tree
    expect(document.querySelectorAll('[aria-label="5 out of 5 stars"]')).toHaveLength(6)
  })

  it('starts on the first slide with prev disabled by clamp', async () => {
    const user = userEvent.setup()
    render(<Reviews />)
    expect(track().style.transform).toBe('translateX(-0%)')
    const dots = screen.getAllByRole('button', { name: /Go to review/ }) as HTMLElement[]
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')

    // prev at index 0 stays at 0 (clamp branch)
    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('next steps forward and clamps at the last slide', async () => {
    const user = userEvent.setup()
    render(<Reviews />)
    const next = screen.getByRole('button', { name: 'Next review' })
    await user.click(next)
    expect(track().style.transform).toBe('translateX(-100%)')
    // walk to the end, then one more (clamp branch)
    for (let i = 0; i < 6; i += 1) {
      await user.click(next)
    }
    expect(track().style.transform).toBe('translateX(-500%)')
  })

  it('prev steps backward', async () => {
    const user = userEvent.setup()
    render(<Reviews />)
    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track().style.transform).toBe('translateX(-100%)')
    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('dot indicators set the current slide', async () => {
    const user = userEvent.setup()
    render(<Reviews />)
    const dots = screen.getAllByRole('button', { name: /Go to review/ }) as HTMLElement[]
    await user.click(dots[2]!)
    expect(track().style.transform).toBe('translateX(-200%)')
    expect(dots[2]!).toHaveAttribute('aria-current', 'true')
    expect(dots[0]!).toHaveAttribute('aria-current', 'false')
  })
})
