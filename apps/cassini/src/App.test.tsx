import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Cassini')).toBeInTheDocument()
    expect(screen.getByText('Photo Studio')).toBeInTheDocument()
    expect(screen.getByText('See More')).toBeInTheDocument()
    expect(screen.getAllByText('Facebook').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Component Dock').length).toBeGreaterThan(0)
  })

  it('opens and closes the offcanvas menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close menu'))
    const galleryLinks = screen.getAllByText('Gallery')
    const offcanvasGallery = galleryLinks.find((el) =>
      el.getAttribute('style')?.includes('font-secondary'),
    )
    expect(offcanvasGallery!.closest('[aria-hidden]')).toHaveAttribute('aria-hidden', 'true')
  })
})
