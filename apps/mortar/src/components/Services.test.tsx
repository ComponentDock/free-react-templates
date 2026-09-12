import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading and all 6 service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()

    const titles = ['Design', 'Development', 'eCommerce', 'Mobile Apps', 'CopyWriting', 'SEO']
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows descriptive text for each service', () => {
    render(<Services />)

    expect(screen.getByText(/stunning visual designs/)).toBeInTheDocument()
    expect(screen.getByText(/expert developers build/)).toBeInTheDocument()
    expect(screen.getByText(/online store with a seamless/)).toBeInTheDocument()
    expect(screen.getByText(/Native and cross-platform/)).toBeInTheDocument()
    expect(screen.getByText(/Compelling content/)).toBeInTheDocument()
    expect(screen.getByText(/Strategic optimization/)).toBeInTheDocument()
  })
})
