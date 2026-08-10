import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Widgets } from './Widgets'

describe('Widgets', () => {
  it('renders the search box with placeholder', () => {
    render(<Widgets />)
    expect(screen.getByPlaceholderText(/type a keyword/i)).toBeInTheDocument()
  })

  it('renders categories with counts', () => {
    render(<Widgets />)
    const categoriesHeading = screen.getByRole('heading', { name: 'Categories' })
    const categoriesBox = categoriesHeading.closest('div')!
    for (const category of ['Fashion', 'Technology', 'Travel', 'Food', 'Photography']) {
      expect(categoriesBox).toHaveTextContent(category)
    }
    for (const count of ['(6)', '(8)', '(2)', '(7)']) {
      expect(categoriesBox).toHaveTextContent(count)
    }
  })

  it('renders three popular articles with distinct titles and meta', () => {
    render(<Widgets />)
    expect(screen.getByRole('heading', { name: 'Popular Articles' })).toBeInTheDocument()
    expect(screen.getByText('Why We Wander: A Love Letter to Slow Travel')).toBeInTheDocument()
    expect(screen.getByText('The Quiet Power of an Early Morning')).toBeInTheDocument()
    expect(screen.getByText('Notes on Cooking for the People You Love')).toBeInTheDocument()
    expect(screen.getByText('Dave Lewis')).toBeInTheDocument()
    expect(screen.getByText('Ana Field')).toBeInTheDocument()
    expect(screen.getByText('Mara Quinn')).toBeInTheDocument()
  })

  it('renders the eight tag pills', () => {
    render(<Widgets />)
    for (const tag of ['animals', 'human', 'people', 'cat', 'dog', 'nature', 'leaves', 'food']) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })

  it('renders the newsletter card with success state on valid submit', async () => {
    const user = userEvent.setup()
    render(<Widgets />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    const input = screen.getByLabelText(/newsletter email/i)
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /^Subscribe$/i }))
    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
  })

  it('shows an error for an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Widgets />)
    await user.type(screen.getByLabelText(/newsletter email/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /^Subscribe$/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('renders archives with the fixed December row and the paragraph widget', () => {
    render(<Widgets />)
    expect(screen.getByRole('heading', { name: 'Archives' })).toBeInTheDocument()
    expect(screen.getByText('December 2018')).toBeInTheDocument()
    expect(screen.queryByText(/decob14/i)).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Paragraph' })).toBeInTheDocument()
  })
})
