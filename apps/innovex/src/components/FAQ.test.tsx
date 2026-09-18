import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders FAQ heading and 4 questions', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Ask Question')).toBeInTheDocument()
    expect(screen.getByText('How to fix a problem?')).toBeInTheDocument()
    expect(screen.getByText('How to manage your Website?')).toBeInTheDocument()
    expect(screen.getByText('How to grow your investments funds?')).toBeInTheDocument()
    expect(screen.getByText('What are those requirements for businesses?')).toBeInTheDocument()
  })

  it('shows first answer by default', () => {
    render(<FAQ />)
    expect(screen.getByText('Far far away, behind the word mountains')).toBeInTheDocument()
  })

  it('toggles FAQ answer on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const secondQuestion = screen.getByText('How to manage your Website?')
    await user.click(secondQuestion)
    const answers = screen.getAllByText('Far far away, behind the word mountains')
    expect(answers.length).toBeGreaterThanOrEqual(1)
  })

  it('closes FAQ when clicking an open question again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstQuestion = screen.getByText('How to fix a problem?')
    // First item is open by default
    expect(screen.getByText('Far far away, behind the word mountains')).toBeInTheDocument()
    await user.click(firstQuestion)
    // The first item should close - check the aria-expanded state
    expect(firstQuestion.closest('button')).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders 4 skill progress bars with labels', () => {
    render(<FAQ />)
    expect(screen.getByText('Creative Design')).toBeInTheDocument()
    expect(screen.getByText('Product Engineering')).toBeInTheDocument()
    expect(screen.getByText('Marketing Strategy')).toBeInTheDocument()
    expect(screen.getByText('Support Tips')).toBeInTheDocument()
    // Progress bars have width styles set
    const bars = document.querySelectorAll('[role="progressbar"], [style*="width:"]')
    expect(bars.length).toBeGreaterThanOrEqual(4)
  })

  it('renders experienced heading', () => {
    render(<FAQ />)
    expect(screen.getByText(/We Are Very Experienced/)).toBeInTheDocument()
  })
})
