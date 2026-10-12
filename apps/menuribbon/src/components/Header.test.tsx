import { createRef } from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { MENU_ID, NAV } from '../lib/site'
import { Header } from './Header'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value })
}

function setRectTop(element: HTMLElement, top: number) {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({ top } as DOMRect)
}

function setWidth(element: HTMLElement, width: number) {
  Object.defineProperty(element, 'offsetWidth', { configurable: true, value: width })
}

function renderHeader(isOpen = false) {
  const toggleRef = createRef<HTMLButtonElement>()
  const onToggle = vi.fn()
  const view = render(<Header isOpen={isOpen} onToggle={onToggle} toggleRef={toggleRef} />)

  return { toggleRef, onToggle, ...view }
}

describe('Header', () => {
  it('lays the white bar out in flow with the wordmark, the row and the hamburger', () => {
    renderHeader()

    const header = screen.getByRole('banner')

    expect(header).toHaveAttribute('data-stuck', 'false')
    expect(header).toHaveClass('relative', 'z-[1999]', 'w-full', 'bg-white', 'py-12', 'lg:py-4')
    expect(header).toHaveClass('transition-all', 'duration-300', 'ease-[ease]')
    expect(header).not.toHaveClass('fixed')
    expect(header.style.width).toBe('')

    const wrapper = screen.getByTestId('sticky-wrapper')

    expect(wrapper).toHaveClass('relative', 'z-[100]', 'w-full')
    expect(wrapper).toContainElement(header)

    expect(within(header).getByRole('link', { name: 'Menuribbon' })).toHaveAttribute('href', '#top')
    expect(within(header).getByTestId('header-container')).toHaveClass(
      'mx-auto',
      'px-[15px]',
      'sm:max-w-[540px]',
      'md:max-w-[720px]',
      'lg:max-w-[960px]',
      'xl:max-w-[1140px]',
    )

    const nav = within(header).getByRole('navigation', { name: 'Primary' })

    expect(nav.parentElement).toHaveClass('hidden', 'text-right', 'lg:block')

    const toggle = within(header).getByRole('button', { name: 'Toggle the site menu' })

    expect(toggle).toHaveAttribute('aria-controls', MENU_ID)
    expect(toggle.parentElement).toHaveClass('absolute', 'top-0', 'right-0', 'lg:hidden')
  })

  it('pins to the top with a white surface, the soft shadow and the wrapper width on scroll', () => {
    renderHeader()

    const header = screen.getByRole('banner')
    const wrapper = screen.getByTestId('sticky-wrapper')

    setWidth(wrapper, 1140)
    setRectTop(wrapper, -120)
    setScrollY(400)
    fireEvent.scroll(window)

    expect(header).toHaveAttribute('data-stuck', 'true')
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'bg-white', 'shadow-sticky')
    expect(header.style.width).toBe('1140px')
    expect(within(header).getByRole('link', { name: 'Menuribbon' })).toHaveClass('text-accent')

    setRectTop(wrapper, 60)
    setScrollY(0)
    fireEvent.scroll(window)

    expect(header).toHaveAttribute('data-stuck', 'false')
    expect(header).not.toHaveClass('fixed')
    expect(header).not.toHaveClass('shadow-sticky')
    expect(header.style.width).toBe('')
  })

  it('drives the panel from the hamburger and mirrors its state on both controls', () => {
    const { onToggle } = renderHeader(true)

    const header = screen.getByRole('banner')
    const toggle = within(header).getByRole('button', { name: 'Toggle the site menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(NAV.length).toBe(
      header.querySelectorAll('nav[aria-label="Primary"] > ul')[0]?.children.length,
    )

    fireEvent.click(toggle)

    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
