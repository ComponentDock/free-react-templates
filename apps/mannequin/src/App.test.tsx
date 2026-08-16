import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { products } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Mannequin — Fashion Store Template')
  })

  it('composes all sections in the original order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByText('Women Collection 2030'))
    expect(main).toContainElement(screen.getByRole('heading', { level: 2, name: 'New arrivals' }))
    expect(main).toContainElement(screen.getByText('Accessories'))
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    // topbar + header present
    expect(screen.getByText('Free shipping for standard order over $100')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Mannequin' })).toBeInTheDocument()
  })

  it('adds products to the cart and shows the badge', async () => {
    const user = userEvent.setup()
    render(<App />)
    const cartButton = screen.getByRole('button', { name: /Cart, 0 items/ })
    expect(cartButton).toBeInTheDocument()

    await user.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]!)
    expect(screen.getByRole('button', { name: /Cart, 1 items/ })).toBeInTheDocument()
  })

  it('increments quantity when the same product is added twice', async () => {
    const user = userEvent.setup()
    render(<App />)
    const addButton = screen.getAllByRole('button', { name: 'Add to cart' })[0]!
    await user.click(addButton)
    await user.click(addButton)
    expect(screen.getByRole('button', { name: /Cart, 2 items/ })).toBeInTheDocument()
  })

  it('keeps existing items when a different product is added', async () => {
    const user = userEvent.setup()
    render(<App />)
    const addButtons = screen.getAllByRole('button', { name: 'Add to cart' })
    await user.click(addButtons[0]!)
    await user.click(addButtons[1]!)
    // re-add the first product: the map must pass the second item through unchanged
    await user.click(addButtons[0]!)
    expect(screen.getByRole('button', { name: /Cart, 3 items/ })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Cart, 3 items/ }))
    const dialog = screen.getByRole('dialog', { name: 'Shopping cart' })
    expect(within(dialog).getByText(products[0]!.name)).toBeInTheDocument()
    expect(within(dialog).getByText(products[1]!.name)).toBeInTheDocument()
    expect(within(dialog).getByText('2 × $75.00')).toBeInTheDocument()
  })

  it('opens the cart drawer from the header and closes with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('button', { name: 'Add to cart' })[0]!)
    await user.click(screen.getByRole('button', { name: /Cart, 1 items/ }))
    const dialog = screen.getByRole('dialog', { name: 'Shopping cart' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByText(products[0]!.name)).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Shopping cart' })).not.toBeInTheDocument()
  })

  it('opens the search modal from the header and closes with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('opens the quick view modal from a product card and closes with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: `Quick view ${products[0]!.name}` }))
    expect(
      screen.getByRole('dialog', { name: `Quick view ${products[0]!.name}` }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Size')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(
      screen.queryByRole('dialog', { name: `Quick view ${products[0]!.name}` }),
    ).not.toBeInTheDocument()
  })

  it('adds from the quick view modal to the cart', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: `Quick view ${products[0]!.name}` }))
    const dialog = screen.getByRole('dialog', { name: `Quick view ${products[0]!.name}` })
    await user.click(within(dialog).getByRole('button', { name: 'Add to cart' }))
    expect(screen.getByRole('button', { name: /Cart, 1 items/ })).toBeInTheDocument()
  })
})
