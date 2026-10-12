import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PillButton, PillLink } from './Pill'

describe('PillLink', () => {
  it('defaults to the brand pill with the standard padding', () => {
    render(<PillLink href="#pricing">Search now</PillLink>)

    const link = screen.getByRole('link', { name: 'Search now' })
    expect(link).toHaveAttribute('href', '#pricing')
    expect(link).toHaveClass('bg-brand', 'h-[54px]', 'rounded-pill')
  })

  it('supports the white pill on the plan card and the search-bar block shape', () => {
    render(
      <>
        <PillLink href="#plans" variant="white" size="chip" className="mb-[10px]">
          Get the plan
        </PillLink>
        <PillLink href="#search" variant="submit" size="block">
          Search now
        </PillLink>
      </>,
    )

    const plan = screen.getByRole('link', { name: 'Get the plan' })
    expect(plan).toHaveClass('bg-white', 'h-[53px]', 'mb-[10px]')
    expect(screen.getByRole('link', { name: 'Search now' })).toHaveClass(
      'bg-brand',
      'h-[60px]',
      'w-full',
      'rounded-bar',
    )
  })
})

describe('PillButton', () => {
  it('renders a real button that reports its presses', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()

    render(<PillButton onClick={onClick}>Get started</PillButton>)

    await user.click(screen.getByRole('button', { name: 'Get started' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('can act as a form submit control with a custom size', () => {
    render(
      <PillButton type="submit" variant="submit" size="block">
        Search now
      </PillButton>,
    )

    expect(screen.getByRole('button', { name: 'Search now' })).toHaveAttribute('type', 'submit')
  })
})
