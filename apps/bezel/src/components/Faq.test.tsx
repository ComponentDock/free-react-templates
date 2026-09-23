import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders 4 accordion items', () => {
    render(<Faq />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
    expect(screen.getByText('Are your templates responsive?')).toBeInTheDocument()
    expect(screen.getByText('Does it have all the plugins mentioned?')).toBeInTheDocument()
    expect(screen.getByText('Can I use this theme for my client?')).toBeInTheDocument()
    expect(screen.getByText('How often do you release updates?')).toBeInTheDocument()
  })

  it('first item is expanded by default', () => {
    render(<Faq />)
    expect(screen.getByText(/Yes, all our templates are fully responsive/)).toBeInTheDocument()
  })

  it('clicking a question expands the answer', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const secondQuestion = screen.getByText('Does it have all the plugins mentioned?')
    await user.click(secondQuestion)
    expect(screen.getByText(/Absolutely. Every template includes/)).toBeInTheDocument()
  })

  it('clicking an open question collapses it', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstQuestion = screen.getByText('Are your templates responsive?')
    await user.click(firstQuestion)
    expect(
      screen.queryByText(/Yes, all our templates are fully responsive/),
    ).not.toBeInTheDocument()
  })

  it('only one answer is expanded at a time', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const secondQuestion = screen.getByText('Does it have all the plugins mentioned?')
    await user.click(secondQuestion)
    expect(
      screen.queryByText(/Yes, all our templates are fully responsive/),
    ).not.toBeInTheDocument()
    expect(screen.getByText(/Absolutely. Every template includes/)).toBeInTheDocument()
  })
})
