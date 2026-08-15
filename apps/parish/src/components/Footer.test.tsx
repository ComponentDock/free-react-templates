import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand column, link columns, service hours and Component Dock credit', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Parish/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Service Hours' })).toBeInTheDocument()
    expect(screen.getByText('Staff')).toBeInTheDocument()
    expect(screen.getByText('Home Groups')).toBeInTheDocument()
    expect(screen.getByText('Saturday Prayer Meeting')).toBeInTheDocument()
    expect(screen.getByText('Sunday Service')).toBeInTheDocument()
    for (const social of ['twitter page', 'facebook page', 'instagram page']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
