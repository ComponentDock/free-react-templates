import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FaqNews } from './FaqNews'

describe('FaqNews', () => {
  it('shows FAQ and News headings', () => {
    render(<FaqNews />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    const texts = headings.map((h) => h.textContent)
    expect(texts).toContain('Faq & Stuff')
    expect(texts).toContain('Latest News')
  })

  it('renders 3 FAQ items', () => {
    render(<FaqNews />)
    expect(screen.getByText(/What insurance plans do you accept/)).toBeInTheDocument()
    expect(screen.getByText(/How do I schedule an appointment/)).toBeInTheDocument()
    expect(screen.getByText(/What are your visiting hours/)).toBeInTheDocument()
  })

  it('toggles FAQ accordion on click', async () => {
    const user = userEvent.setup()
    render(<FaqNews />)
    // First item is open by default
    const firstAnswer = screen.getByText(/We accept most major insurance/)
    expect(firstAnswer).toBeInTheDocument()

    // Click to close
    const firstBtn = screen.getByRole('button', { name: /What insurance plans/ })
    await user.click(firstBtn)
    expect(screen.queryByText(/We accept most major insurance/)).not.toBeInTheDocument()

    // Click second to open
    const secondBtn = screen.getByRole('button', { name: /How do I schedule/ })
    await user.click(secondBtn)
    expect(screen.getByText(/You can schedule an appointment/)).toBeInTheDocument()
  })

  it('renders 3 news posts with titles and authors', () => {
    render(<FaqNews />)
    expect(screen.getByText('Advances in Preventive Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Understanding Modern Diagnostic Imaging')).toBeInTheDocument()
    expect(screen.getByText('Why Regular Health Checkups Matter')).toBeInTheDocument()
    expect(screen.getByText('by Dr. Sarah Mitchell')).toBeInTheDocument()
  })

  it('shows comment counts', () => {
    render(<FaqNews />)
    expect(screen.getByText('4 Comments')).toBeInTheDocument()
    expect(screen.getByText('2 Comments')).toBeInTheDocument()
    expect(screen.getByText('6 Comments')).toBeInTheDocument()
  })
})
