import { createRef } from 'react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

const noop = () => {}

function renderHeader(isOpen = false) {
  return render(<Header isOpen={isOpen} onToggle={noop} toggleRef={createRef<HTMLButtonElement>()} />)
}

describe('Header', () => {
  it('floats transparent and absolute at the very top, with no pinning and no chrome', () => {
    renderHeader()

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('absolute', 'top-0', 'w-full', 'z-[1999]')
    expect(header.className).not.toMatch(/fixed|sticky|bg-|border|shadow/)
  })

  it('steps its container at the reference widths and centres it with 15px gutters', () => {
    renderHeader()

    expect(screen.getByTestId('header-container')).toHaveClass(
      'mx-auto',
      'w-full',
      'px-[15px]',
      'sm:max-w-[540px]',
      'md:max-w-[720px]',
      'lg:max-w-[960px]',
      'xl:max-w-[1140px]',
    )
  })

  it('carries 24px of vertical padding and widens it to 3rem from lg up', () => {
    renderHeader()

    expect(screen.getByRole('banner')).toHaveClass('py-6', 'lg:py-12')
  })

  it('holds exactly one wordmark and one hamburger — never a desktop nav row', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    render(<Header isOpen onToggle={onToggle} toggleRef={createRef<HTMLButtonElement>()} />)

    const header = screen.getByRole('banner')

    expect(within(header).getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(within(header).getAllByRole('button')).toHaveLength(1)
    expect(within(header).queryByRole('navigation')).toBeNull()
    expect(within(header).queryByRole('list')).toBeNull()

    await user.click(within(header).getByRole('button', { name: 'Toggle the site menu' }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
