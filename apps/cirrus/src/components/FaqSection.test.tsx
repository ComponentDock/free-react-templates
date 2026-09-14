import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FaqSection } from './FaqSection'

describe('FaqSection', () => {
  it('renders the heading', () => {
    render(<FaqSection />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders the FAQs subheading', () => {
    render(<FaqSection />)
    expect(screen.getByText('FAQs')).toBeInTheDocument()
  })

  it('renders all four questions', () => {
    render(<FaqSection />)
    expect(screen.getByText('How to Make an Account?')).toBeInTheDocument()
    expect(screen.getByText('How to manage your Dashboard?')).toBeInTheDocument()
    expect(screen.getByText('How to grow your investments funds?')).toBeInTheDocument()
    expect(screen.getByText('What are those requirements for businesses?')).toBeInTheDocument()
  })

  it('shows the first answer expanded by default', () => {
    render(<FaqSection />)
    expect(screen.getByText(/Simply click the Get Started button/)).toBeInTheDocument()
  })

  it('expands second question and collapses first on click', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    const secondBtn = screen.getByText('How to manage your Dashboard?')
    await user.click(secondBtn)
    expect(secondBtn).toHaveAttribute('aria-expanded', 'true')
    // First collapsed
    const firstBtn = screen.getByText('How to Make an Account?')
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
    // Second answer visible
    expect(screen.getByText(/intuitive dashboard/)).toBeInTheDocument()
  })

  it('collapses an already-open question when clicked again', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    // First question is open by default (openIndex=0)
    const firstBtn = screen.getByText('How to Make an Account?')
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(firstBtn) // collapse
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the FAQ image', () => {
    render(<FaqSection />)
    expect(screen.getByAltText('FAQ illustration')).toBeInTheDocument()
  })
})
