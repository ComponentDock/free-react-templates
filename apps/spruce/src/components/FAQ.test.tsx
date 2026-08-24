import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders 3 accordion items', () => {
    render(<FAQ />)
    // Button names include the +/- icon text
    expect(screen.getByRole('button', { name: /Complete CMS integration\?/ })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What impacts my website performance\?/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /What does the template include\?/ }),
    ).toBeInTheDocument()
  })

  it('second item is open by default (openIndex=1)', () => {
    render(<FAQ />)
    expect(screen.getByText(/Performance depends on image optimization/)).toBeInTheDocument()
    // Other answers should not be visible
    expect(screen.queryByText(/seamlessly integrates with all major/)).not.toBeInTheDocument()
    expect(screen.queryByText(/The template includes all sections/)).not.toBeInTheDocument()
  })

  it('clicking a header expands its answer and collapses others', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // Click first FAQ header
    await user.click(screen.getByRole('button', { name: /Complete CMS integration\?/ }))

    // First answer should now be visible
    expect(screen.getByText(/seamlessly integrates with all major/)).toBeInTheDocument()
    // Second answer should be collapsed
    expect(screen.queryByText(/Performance depends on image optimization/)).not.toBeInTheDocument()
  })

  it('clicking the same header again collapses it', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // First item is closed, click to open
    await user.click(screen.getByRole('button', { name: /Complete CMS integration\?/ }))
    expect(screen.getByText(/seamlessly integrates with all major/)).toBeInTheDocument()

    // Click again to close
    await user.click(screen.getByRole('button', { name: /Complete CMS integration\?/ }))
    expect(screen.queryByText(/seamlessly integrates with all major/)).not.toBeInTheDocument()
  })

  it('only one item is open at a time', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // Open first item
    await user.click(screen.getByRole('button', { name: /Complete CMS integration\?/ }))
    expect(screen.getByText(/seamlessly integrates with all major/)).toBeInTheDocument()

    // Open third item — first should collapse
    await user.click(screen.getByRole('button', { name: /What does the template include\?/ }))
    expect(screen.queryByText(/seamlessly integrates with all major/)).not.toBeInTheDocument()
    expect(screen.getByText(/The template includes all sections/)).toBeInTheDocument()
  })

  it('aria-expanded is set correctly', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const btn1 = screen.getByRole('button', { name: /Complete CMS integration\?/ })
    const btn2 = screen.getByRole('button', { name: /What impacts my website performance\?/ })

    // By default, second is open
    expect(btn1).toHaveAttribute('aria-expanded', 'false')
    expect(btn2).toHaveAttribute('aria-expanded', 'true')

    // Click first
    await user.click(btn1)
    expect(btn1).toHaveAttribute('aria-expanded', 'true')
    expect(btn2).toHaveAttribute('aria-expanded', 'false')
  })
})
