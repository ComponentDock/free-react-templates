import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pink plan card with its medallion, price, list and white pill', () => {
    render(<Pricing />)

    const panel = screen.getByRole('tabpanel')
    expect(panel).toHaveClass('bg-pricing')
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-monthly')
    expect(screen.getByRole('heading', { level: 3, name: 'Grid plan' })).toBeInTheDocument()
    expect(screen.getByText('$ 05.00')).toHaveClass('text-[35px]', 'font-black', 'border-white')

    for (const feature of [
      'Site traffic lifted by 50%',
      'Social channels wired up',
      'Ten free optimisation passes',
      'Support at any hour, every day',
    ]) {
      expect(screen.getByText(feature)).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: 'Get the plan' })).toHaveClass('bg-white', 'rounded-pill')
    expect(screen.getByRole('heading', { level: 2, name: 'Pricing that scales with you' })).toHaveClass(
      'text-navy-heading',
    )
  })

  it('swaps the plan content when the Monthly/Yearly tabs are clicked', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const monthly = screen.getByRole('tab', { name: 'Monthly' })
    const yearly = screen.getByRole('tab', { name: 'Yearly' })
    expect(monthly).toHaveAttribute('aria-selected', 'true')
    expect(monthly).toHaveClass('bg-pricing', 'rounded-l-pill')
    expect(yearly).toHaveClass('bg-peach', 'rounded-r-pill', 'text-navy')
    expect(yearly).toHaveAttribute('tabindex', '-1')

    await user.click(yearly)

    expect(yearly).toHaveAttribute('aria-selected', 'true')
    expect(yearly).toHaveAttribute('tabindex', '0')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-labelledby', 'tab-yearly')
    expect(screen.getByText('$ 50.00')).toBeInTheDocument()
    expect(screen.getByText('per year, two months free')).toBeInTheDocument()
  })

  it('moves between the tabs with the arrow keys and ignores every other key', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    const monthly = screen.getByRole('tab', { name: 'Monthly' })
    const yearly = screen.getByRole('tab', { name: 'Yearly' })

    monthly.focus()
    await user.keyboard('{ArrowRight}')
    expect(yearly).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{ArrowUp}')
    expect(yearly).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{ArrowLeft}')
    expect(monthly).toHaveAttribute('aria-selected', 'true')
  })
})
