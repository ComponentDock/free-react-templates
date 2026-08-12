import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('composes every section in the source order with a footer crediting Component Dock', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'New Collection' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Clothing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Global Sale' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular Products' })).toBeInTheDocument()
    expect(screen.getByText('Mango')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('opens and closes the cart drawer from the header cart button', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('dialog', { name: 'Cart' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Cart' }))
    expect(screen.getByRole('dialog', { name: 'Cart' })).toBeInTheDocument()
    expect(screen.getAllByText('Button Through Strap Mini Dress')).toHaveLength(3)
    expect(screen.getByText('$232.00')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close cart' }))
    expect(screen.queryByRole('dialog', { name: 'Cart' })).not.toBeInTheDocument()
  })
})
