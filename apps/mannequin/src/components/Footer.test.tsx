import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    for (const item of ['Women', 'Men', 'Shoes', 'Watches']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Help' })).toBeInTheDocument()
    for (const item of ['Track Order', 'Returns', 'Shipping', 'FAQs']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByText(/8th floor, 379 Hudson St/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders social icons and the Component Dock credit', () => {
    render(<Footer />)
    for (const label of ['Facebook', 'Instagram', 'Pinterest']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows a confirmation after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'you@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
