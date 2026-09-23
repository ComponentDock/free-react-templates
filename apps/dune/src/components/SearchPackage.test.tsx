import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchPackage } from './SearchPackage'

describe('SearchPackage', () => {
  it('renders the heading and form', () => {
    render(<SearchPackage />)
    expect(
      screen.getByRole('heading', { name: /Search suitable and affordable plan/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Search Package' })).toBeInTheDocument()
  })

  it('renders form fields and submit button', () => {
    render(<SearchPackage />)
    expect(screen.getByPlaceholderText(/Where do you want to go/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search Package/i })).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<SearchPackage />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('prevents form submission default', async () => {
    const user = userEvent.setup()
    render(<SearchPackage />)
    await user.click(screen.getByRole('button', { name: /Search Package/i }))
    expect(screen.getByRole('heading', { name: 'Search Package' })).toBeInTheDocument()
  })
})
