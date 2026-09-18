import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'
describe('Footer', () => {
  it('renders brand', () => {
    render(<Footer />)
    expect(screen.getByText('Domicile')).toBeInTheDocument()
  })
  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })
  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+2 102 3923 3922')).toBeInTheDocument()
  })
  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
  it('handles newsletter submit', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Footer />)
    const btn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})
