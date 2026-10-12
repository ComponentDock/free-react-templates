import { render, screen } from '@testing-library/react'
import { MenuToggle } from './MenuToggle'

describe('MenuToggle', () => {
  it('is a labelled button that reports the panel’s state', () => {
    const onToggle = vi.fn()
    const toggleRef = { current: null }

    const { rerender } = render(
      <MenuToggle isOpen={false} onToggle={onToggle} toggleRef={toggleRef} className="lg:hidden" />,
    )

    const toggle = screen.getByRole('button', { name: 'Toggle the site menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'topdeck-menu')
    expect(toggle).toHaveClass('lg:hidden', 'py-4', 'text-white')
    expect(toggle.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')

    toggle.click()

    expect(onToggle).toHaveBeenCalledTimes(1)

    rerender(<MenuToggle isOpen onToggle={onToggle} toggleRef={toggleRef} />)

    expect(screen.getByRole('button', { name: 'Toggle the site menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
