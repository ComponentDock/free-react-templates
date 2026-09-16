import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LeftPanel } from './LeftPanel'

describe('LeftPanel', () => {
  it('renders the countdown component', () => {
    const target = new Date(Date.now() + 86400000)
    render(<LeftPanel targetDate={target} />)

    expect(screen.getByRole('timer', { name: /countdown/i })).toBeInTheDocument()
  })

  it('applies background image via style', () => {
    const target = new Date(Date.now() + 86400000)
    const { container } = render(<LeftPanel targetDate={target} />)

    const section = container.firstElementChild as HTMLElement
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})
