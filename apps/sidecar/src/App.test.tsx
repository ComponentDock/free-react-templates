import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the blog post grid with 8 posts', () => {
    render(<App />)
    const posts = screen.getAllByRole('article')
    expect(posts).toHaveLength(8)
  })

  it('displays bag counter in the header', () => {
    render(<App />)
    const bagButton = screen.getByRole('button', { name: /open shopping bag/i })
    expect(bagButton.textContent).toMatch(/\$150/)
    expect(bagButton.textContent).toMatch(/3 items/)
  })

  it('sidebar is closed by default', () => {
    render(<App />)
    expect(screen.queryByTestId('cart-sidebar')).not.toBeInTheDocument()
  })

  it('clicking bag icon opens the sidebar', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument()
  })

  it('sidebar displays YOUR BAG heading', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    expect(screen.getByRole('heading', { name: /your bag/i })).toBeInTheDocument()
  })

  it('sidebar shows 3 products', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    expect(screen.getAllByTestId('cart-item')).toHaveLength(3)
  })

  it('sidebar shows subtotal and checkout button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument()
  })

  it('close button dismisses sidebar', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close shopping bag/i }))
    expect(screen.queryByTestId('cart-sidebar')).not.toBeInTheDocument()
  })

  it('remove link removes an item and updates subtotal', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open shopping bag/i }))
    const removeButtons = screen.getAllByRole('button', { name: /remove/i })
    expect(removeButtons).toHaveLength(3)
    await user.click(removeButtons[0]!)
    expect(screen.getAllByTestId('cart-item')).toHaveLength(2)
    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText(/2 items/)).toBeInTheDocument()
  })

  it('blog post cards show avatar, title, and date', () => {
    render(<App />)
    const posts = screen.getAllByRole('article')
    for (const post of posts) {
      expect(post.querySelector('img')).toBeInTheDocument()
      expect(post.textContent).toMatch(/How the gut microbes/)
      expect(post.textContent).toMatch(/Posted: Dec 17, 2019/)
    }
  })

  it('responsive: grid has grid class for layout', () => {
    render(<App />)
    const grid = screen.getByTestId('blog-grid')
    expect(grid.className).toContain('grid')
  })

  it('footer links to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
