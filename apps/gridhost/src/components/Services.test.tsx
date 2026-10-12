import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centred title and the three hosting kinds with their ordinals', () => {
    render(<Services />)

    expect(screen.getByText('What we run')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Services on the grid' }),
    ).toBeInTheDocument()

    for (const title of ['Shared hosting', 'Reseller hosting', 'Cloud hosting']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    for (const ordinal of ['.01', '.02', '.03']) {
      expect(screen.getByText(ordinal)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'Get started' })).toHaveLength(3)
  })

  it('lets a visitor open a plan from the card title and from the arrow link', async () => {
    const user = userEvent.setup()
    render(<Services />)

    const title = screen.getByRole('link', { name: 'Shared hosting' })
    expect(title).toHaveAttribute('href', '#pricing')

    const arrows = screen.getAllByRole('link', { name: 'Get started' })
    expect(arrows).toHaveLength(3)
    for (const arrow of arrows) {
      expect(arrow).toHaveAttribute('href', '#pricing')
    }

    await user.click(arrows[0] as HTMLElement)
    expect(screen.getByText('What we run')).toBeInTheDocument()
  })

  it('paints the warm half-wash layer behind the cards', () => {
    const { container } = render(<Services />)

    const wash = container.querySelector('[aria-hidden="true"]')
    expect(wash).toHaveClass('h-1/2', 'bg-surface-warm')
  })
})
