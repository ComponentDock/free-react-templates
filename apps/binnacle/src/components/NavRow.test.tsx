import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavRow } from './NavRow'
import { NAV } from '../lib/site'
import { navRowClass } from '../lib/styles'

const current = NAV[0]!
const plain = NAV[1]!

describe('NavRow — one row, in either presentation', () => {
  it('links its own destination and marks the row the page is on', () => {
    render(
      <>
        <ul>
          <NavRow item={current} variant="desktop" />
          <NavRow item={plain} variant="desktop" />
        </ul>
      </>,
    )

    const links = screen.getAllByRole('link') as HTMLAnchorElement[]

    expect(links[0]).toHaveAttribute('href', current.href)
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[1]).not.toHaveAttribute('aria-current')
    expect(links[1]).toHaveTextContent(plain.label)
  })

  it('wears the gold slab permanently on the row the page is on, and hides it elsewhere', () => {
    render(
      <>
        <ul>
          <NavRow item={current} variant="desktop" />
          <NavRow item={plain} variant="desktop" />
        </ul>
      </>,
    )

    const [open, other] = screen.getAllByRole('link') as HTMLAnchorElement[]

    expect(open!.className).toContain('before:scale-x-100')
    expect(open!.className).toContain('text-white')
    expect(other!.className).toContain('before:scale-x-0')
    expect(other!.className).toContain('before:bg-accent')
    expect(other!.className).toContain('hover:before:scale-x-100')
    expect(other!.className).toContain('hover:text-white')
    expect(navRowClass({ variant: 'desktop', current: false })).toContain('before:duration-200')
  })

  it('keeps the design’s 11px tracked-out type and 32px row padding', () => {
    render(
      <ul>
        <NavRow item={plain} variant="desktop" />
      </ul>,
    )

    const link = screen.getByRole('link')

    expect(link.className).toContain('text-[11px]')
    expect(link.className).toContain('tracking-[2px]')
    expect(link.className).toContain('uppercase')
    expect(link.className).toContain('py-[32px]')
    expect(link.className).toContain('px-5')
    expect(link.className).toContain('text-row')
    expect(link.className).not.toContain('underline')
    expect(link.className).not.toContain('border')
  })

  it('stands as a full-width block with no slab inside the panel', () => {
    render(
      <ul>
        <NavRow item={current} variant="panel" />
        <NavRow item={plain} variant="panel" />
      </ul>,
    )

    const [open, other] = screen.getAllByRole('link') as HTMLAnchorElement[]

    expect(open!.className).toContain('text-black')
    expect(open!.className).not.toContain('before:scale-x-100')
    expect(other!.className).toContain('py-[14.4px]')
    expect(other!.className).toContain('text-row')
    expect(other!.className).toContain('max-md:border-b')
    expect(navRowClass({ variant: 'panel', current: true })).toContain('block w-full')
  })

  it('folds the surface it is drawn in once it is followed', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()

    render(
      <ul>
        <NavRow item={plain} variant="panel" onNavigate={onNavigate} />
      </ul>,
    )

    const link = screen.getByRole('link')

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(link)

    expect(onNavigate).toHaveBeenCalledTimes(1)
  })
})
