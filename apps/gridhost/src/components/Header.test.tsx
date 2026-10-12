import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
  act(() => {
    window.dispatchEvent(new Event('scroll'))
  })
}

describe('Header', () => {
  afterEach(() => setScrollY(0))

  it('renders the wordmark, the six destinations and the phone chip over the hero', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Gridhost, back to the top' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Pages', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    const chip = screen.getByRole('link', { name: 'Call support on +1 888 240 1180' })
    expect(chip).toHaveAttribute('href', 'tel:+18882401180')
    expect(chip).toHaveClass('rounded-pill', 'bg-brand', 'px-[29px]')
  })

  it('marks the picked destination and tightens when the page scrolls', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)
    const header = container.querySelector('header')

    expect(header).toHaveAttribute('data-scrolled', 'false')
    expect(header).toHaveClass('absolute', 'bg-transparent')

    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('px-[19px]')

    setScrollY(200)

    expect(header).toHaveAttribute('data-scrolled', 'true')
    expect(header).toHaveClass('fixed', 'bg-header-sticky')
    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('px-[13px]', 'py-[27px]')
  })

  it('opens the mobile panel from its toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Site menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close the menu' }))

    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })
})
