import { describe, it, expect, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Justice } from './Justice'
import { justice } from '../data'

describe('Justice', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the eyebrow, headline, and supporting copy', () => {
    render(<Justice />)
    expect(screen.getByText(justice.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: justice.headline })).toBeInTheDocument()
    expect(screen.getByText(justice.description)).toBeInTheDocument()
  })

  it('renders the photo with a pulsing gold play circle', () => {
    const { container } = render(<Justice />)
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', justice.image)
    expect(container.querySelector('.bg-brand')).not.toBeNull()
  })

  it('switches tab content when a tab pill is activated', async () => {
    const user = userEvent.setup()
    render(<Justice />)

    const mission = screen.getByRole('tab', { name: 'Our Mission' })
    const vision = screen.getByRole('tab', { name: 'Our Vision' })
    const value = screen.getByRole('tab', { name: 'Our Value' })

    expect(mission).toHaveAttribute('aria-selected', 'true')
    expect(vision).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(justice.tabs[0].content)

    await user.click(vision)
    expect(vision).toHaveAttribute('aria-selected', 'true')
    expect(mission).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByRole('tabpanel')).toHaveTextContent(justice.tabs[1].content)

    await user.click(value)
    expect(screen.getByRole('tabpanel')).toHaveTextContent(justice.tabs[2].content)
  })

  it('animates the years counter from 0 up to 40', () => {
    vi.useFakeTimers()
    render(<Justice />)
    const counter = screen.getByText('0')
    expect(counter).toHaveAttribute('data-number', '40')

    act(() => {
      vi.advanceTimersByTime(40 * 30)
    })
    expect(screen.getByText('40')).toHaveAttribute('data-number', '40')
    expect(screen.getByText('Years of Experienced')).toBeInTheDocument()
  })
})
