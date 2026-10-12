import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockMatchMedia } from '../test/match-media'
import { MENU_ID, MENU_LABEL, MENU_TOGGLE_ID, NAV } from '../lib/site'
import { Header } from './Header'

const hamburger = () => screen.getByRole('button', { name: MENU_LABEL })
const region = () => screen.getByTestId('nav-region')

describe('Header — the narrow bar', () => {
  it('is a black bar with the wordmark at one end and the hamburger at the other, floating on the band', () => {
    const { container } = render(<Header />)

    const banner = screen.getByRole('banner')

    expect(banner).toHaveClass('absolute', 'top-0', 'z-[5]', 'w-full', 'py-0', 'md:py-[30px]')
    expect(container.firstElementChild).toBe(banner)

    const nav = within(banner).getByRole('navigation', { name: 'Site navigation' })

    expect(nav).toHaveClass('bg-bar', 'flex-wrap', 'justify-between', 'px-4', 'py-2')
    expect(nav).toHaveClass('md:bg-transparent', 'md:py-0', 'md:flex-nowrap')

    const row = nav.firstElementChild as HTMLElement

    expect(row).toHaveClass('max-md:px-0', 'flex-wrap', 'justify-between')

    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(region()).toHaveAttribute('id', MENU_ID)
    expect(region()).toHaveAttribute('role', 'group')
    expect(region()).toHaveAttribute('aria-labelledby', MENU_TOGGLE_ID)
    expect(region()).toHaveClass('overflow-hidden', 'transition-[height]', 'duration-[350ms]')
    expect(screen.queryByTestId('desktop-nav')).toBeNull()
    expect(screen.queryByTestId('collapse-nav')).toBeNull()
  })

  it('expands the row own-list in place and folds it away again', async () => {
    const user = userEvent.setup()

    render(<Header />)

    await user.click(hamburger())

    expect(hamburger()).toHaveAttribute('aria-expanded', 'true')

    const rows = screen.getByTestId('collapse-nav')

    expect(Array.from(rows.children).map((row) => row.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(screen.getByTestId('collapse-cta')).toBeInTheDocument()

    await user.click(hamburger())

    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('collapse-nav')).toBeNull()
  })
})

describe('Header — the wide row', () => {
  it('shows the row of labels without any interaction, and no expanding region at all', () => {
    mockMatchMedia(true)

    render(<Header />)

    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
    expect(screen.getByTestId('desktop-cta')).toBeInTheDocument()
    expect(region()).not.toHaveClass('overflow-hidden')
    expect(hamburger()).toHaveClass('md:hidden')
  })

  it('folds an open list away when the viewport reaches the wide row', async () => {
    const user = userEvent.setup()
    const media = mockMatchMedia(false)

    render(<Header />)

    await user.click(hamburger())
    expect(screen.getByTestId('collapse-nav')).toBeInTheDocument()

    media.change(true)

    expect(hamburger()).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('collapse-nav')).toBeNull()
    expect(screen.getByTestId('desktop-nav')).toBeInTheDocument()
  })
})
