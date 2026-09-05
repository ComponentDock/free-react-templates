import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DemoSection } from './DemoSection'

describe('DemoSection', () => {
  it('renders the heading', () => {
    render(<DemoSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #15')
  })

  it('renders the subtitle', () => {
    render(<DemoSection />)
    expect(screen.getByText(/animated square-to-tick morphing checkbox/i)).toBeInTheDocument()
  })

  it('renders 4 checkbox items', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)
  })

  it('renders the correct labels', () => {
    render(<DemoSection />)
    expect(screen.getByText('Design the mockups')).toBeInTheDocument()
    expect(screen.getByText('Build the components')).toBeInTheDocument()
    expect(screen.getByText('Write the tests')).toBeInTheDocument()
    expect(screen.getByText('Ship to production')).toBeInTheDocument()
  })

  it('has the first checkbox checked by default', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
  })

  it('marks the last checkbox as disabled', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[3]).toBeDisabled()
  })
})
