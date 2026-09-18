import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

vi.mock('swiper/react', () => ({
  Swiper: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-testid={props['data-testid'] ?? 'swiper'}>{children}</div>
  ),
  SwiperSlide: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
}))

vi.mock('swiper/modules', () => ({
  Navigation: {},
  Thumbs: {},
}))

vi.mock('swiper/css', () => ({}))
vi.mock('swiper/css/navigation', () => ({}))
vi.mock('swiper/css/thumbs', () => ({}))

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Shuttervibe — Photography Portfolio')
  })

  it('renders the header, gallery, and footer on the home page', () => {
    render(<App />)
    expect(screen.getByText('Shuttervibe')).toBeInTheDocument()
    expect(screen.getByTestId('gallery-main')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('navigates to photos page when Photos link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const photosLinks = screen.getAllByText('Photos')
    await user.click(photosLinks[0] as Element)
    expect(screen.getByTestId('photo-grid')).toBeInTheDocument()
    expect(screen.queryByTestId('gallery-main')).not.toBeInTheDocument()
  })

  it('navigates back to home page', async () => {
    const user = userEvent.setup()
    render(<App />)

    const photosLinks = screen.getAllByText('Photos')
    await user.click(photosLinks[0] as Element)
    expect(screen.getByTestId('photo-grid')).toBeInTheDocument()

    // Home appears in both desktop nav and mobile menu — click the first one
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[0] as Element)
    expect(screen.getByTestId('gallery-main')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()

    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    const closeBtn = dialog.querySelector('button[aria-label="Close menu"]') as Element
    await user.click(closeBtn)
  })
})
