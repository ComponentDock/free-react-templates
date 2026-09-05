import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DemoSection } from './DemoSection'

describe('DemoSection', () => {
  it('renders the heading', () => {
    render(<DemoSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #17')
  })

  it('renders the subtitle', () => {
    render(<DemoSection />)
    expect(screen.getByText('Modern animated checkbox with indigo accent')).toBeInTheDocument()
  })

  it('renders all four checkbox labels', () => {
    render(<DemoSection />)
    expect(screen.getByText('Design the mockups')).toBeInTheDocument()
    expect(screen.getByText('Build the components')).toBeInTheDocument()
    expect(screen.getByText('Write the tests')).toBeInTheDocument()
    expect(screen.getByText('Ship to production')).toBeInTheDocument()
  })

  it('renders first checkbox as checked by default', () => {
    render(<DemoSection />)
    const first = screen.getByRole('checkbox', { name: 'Design the mockups' })
    expect(first).toBeChecked()
  })

  it('renders second checkbox as unchecked by default', () => {
    render(<DemoSection />)
    const second = screen.getByRole('checkbox', { name: 'Build the components' })
    expect(second).not.toBeChecked()
  })

  it('renders disabled checkbox as disabled', () => {
    render(<DemoSection />)
    expect(screen.getByRole('checkbox', { name: 'Ship to production' })).toBeDisabled()
  })
})
