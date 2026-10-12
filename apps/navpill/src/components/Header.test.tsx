import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

const noop = () => {}

describe('Header', () => {
  it('floats transparent and absolute near the top, with no pinning and no chrome', () => {
    render(<Header isOpen={false} onToggle={noop} toggleRef={createRef<HTMLButtonElement>()} />)

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('absolute', 'top-8', 'w-full', 'z-[1999]')
    expect(header.className).not.toMatch(/fixed|sticky|bg-|border|shadow/)
  })

  it('steps its container at the reference widths and centres it with 15px gutters', () => {
    render(<Header isOpen={false} onToggle={noop} toggleRef={createRef<HTMLButtonElement>()} />)

    const container = screen.getByTestId('header-container')

    expect(container).toHaveClass(
      'mx-auto',
      'w-full',
      'px-[15px]',
      'sm:max-w-[540px]',
      'md:max-w-[720px]',
      'lg:max-w-[960px]',
      'xl:max-w-[1140px]',
    )
  })

  it('hides the row below 1200px and the toggle at 1200px and wider', () => {
    render(<Header isOpen={false} onToggle={noop} toggleRef={createRef<HTMLButtonElement>()} />)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const navColumn = nav.parentElement as HTMLElement
    const logoColumn = screen.getByRole('link', { name: 'Navpill' }).closest('div') as HTMLElement

    expect(navColumn).toHaveClass('hidden', 'w-full', 'md:w-10/12', 'xl:block')
    expect(logoColumn).toHaveClass('w-11/12', 'xl:w-1/6')

    const toggle = screen.getByRole('button', { name: 'Toggle the site menu' })
    const toggleColumn = toggle.parentElement as HTMLElement

    expect(toggleColumn).toHaveClass('inline-block', 'xl:hidden', 'relative', 'top-[3px]', 'py-4')
  })

  it('hands the toggle click straight to the app', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    render(<Header isOpen={false} onToggle={onToggle} toggleRef={createRef<HTMLButtonElement>()} />)

    await user.click(screen.getByRole('button', { name: 'Toggle the site menu' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
