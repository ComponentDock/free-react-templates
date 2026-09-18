import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the full page after preloader completes', async () => {
    render(<App />)

    // Preloader should be visible initially
    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()

    // Wait for preloader to dismiss (1.5s + buffer)
    const sidebar = await screen.findByText('Snapfold', {}, { timeout: 3000 })
    expect(sidebar).toBeInTheDocument()
  })

  it('renders hero slider with first slide content', async () => {
    render(<App />)

    const heading = await screen.findByRole(
      'heading',
      { name: /project no\. 1/i },
      { timeout: 3000 },
    )
    expect(heading).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText(/Capturing moments/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders navigation links in sidebar', async () => {
    render(<App />)

    await screen.findByText('Snapfold', {}, { timeout: 3000 })
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', async () => {
    render(<App />)

    await screen.findByText('Snapfold', {}, { timeout: 3000 })
    const footerLink = screen.getByRole('link', { name: /component dock/i })
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('navigates to next slide', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByRole('heading', { name: /project no\. 1/i }, { timeout: 3000 })
    await user.click(screen.getByRole('button', { name: /next slide/i }))

    expect(screen.getByRole('heading', { name: /project no\. 2/i })).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByRole('heading', { name: /project no\. 1/i }, { timeout: 3000 })
    await user.click(screen.getByRole('button', { name: /previous slide/i }))

    expect(screen.getByRole('heading', { name: /project no\. 2/i })).toBeInTheDocument()
  })

  it('opens and closes search overlay', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Snapfold', {}, { timeout: 3000 })
    await user.click(screen.getByRole('button', { name: /search$/i }))

    expect(screen.getByRole('dialog', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search here...')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(screen.queryByRole('dialog', { name: /search/i })).not.toBeInTheDocument()
  })

  it('closes search overlay on Escape', async () => {
    const user = userEvent.setup()
    render(<App />)

    await screen.findByText('Snapfold', {}, { timeout: 3000 })
    await user.click(screen.getByRole('button', { name: /search$/i }))

    expect(screen.getByRole('dialog', { name: /search/i })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: /search/i })).not.toBeInTheDocument()
  })
})
