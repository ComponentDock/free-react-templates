import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DemoSection } from './DemoSection'

describe('DemoSection', () => {
  it('renders the heading', () => {
    render(<DemoSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Toggle #08')
  })

  it('renders the subtitle', () => {
    render(<DemoSection />)
    expect(screen.getByText('Day & Night Switch Toggle')).toBeInTheDocument()
  })

  it('renders two toggle switches', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(2)
  })

  it('first toggle is unchecked by default', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[0]).not.toBeChecked()
  })

  it('second toggle is checked by default', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[1]).toBeChecked()
  })
})
