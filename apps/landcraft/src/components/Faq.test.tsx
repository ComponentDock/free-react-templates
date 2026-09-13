import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Faq from './Faq'

describe('Faq', () => {
  it('renders the section heading', () => {
    render(<Faq />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all FAQ questions', () => {
    render(<Faq />)
    expect(screen.getByRole('button', { name: /general inquiries/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /how it works/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /service areas/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /pricing/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /additional information/i })).toBeInTheDocument()
  })

  it('shows the first item answer by default', () => {
    render(<Faq />)
    expect(screen.getByText(/Feel free to reach out/i)).toBeInTheDocument()
  })

  it('toggles answers when questions are clicked', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(screen.getByRole('button', { name: /how it works/i }))
    expect(screen.getByText(/free consultation/i)).toBeInTheDocument()
    // First item should now be closed
    expect(screen.queryByText(/Feel free to reach out/i)).not.toBeInTheDocument()
  })

  it('collapses an open item when clicked again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    await user.click(screen.getByRole('button', { name: /general inquiries/i }))
    expect(screen.queryByText(/Feel free to reach out/i)).not.toBeInTheDocument()
  })
})
