import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'
import type { PortfolioItem } from './Portfolio'

const mockItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fashion Shot',
    category: 'fashion',
    image: 'https://picsum.photos/seed/test1/600/400',
  },
  {
    id: 2,
    title: 'Wedding Day',
    category: 'wedding',
    image: 'https://picsum.photos/seed/test2/600/400',
  },
  {
    id: 3,
    title: 'Motion Blur',
    category: 'motion',
    image: 'https://picsum.photos/seed/test3/600/400',
  },
  {
    id: 4,
    title: 'Portrait',
    category: 'portrait',
    image: 'https://picsum.photos/seed/test4/600/400',
  },
]

describe('Portfolio', () => {
  it('renders all items when filter is all', () => {
    render(<Portfolio items={mockItems} />)
    expect(screen.getByText('Fashion Shot')).toBeDefined()
    expect(screen.getByText('Wedding Day')).toBeDefined()
    expect(screen.getByText('Motion Blur')).toBeDefined()
    expect(screen.getByText('Portrait')).toBeDefined()
  })

  it('filters items by category', async () => {
    const user = userEvent.setup()
    render(<Portfolio items={mockItems} />)
    await user.click(screen.getByText('fashion'))
    expect(screen.getByText('Fashion Shot')).toBeDefined()
    expect(screen.queryByText('Wedding Day')).toBeNull()
  })

  it('shows all items when All filter clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio items={mockItems} />)
    await user.click(screen.getByText('fashion'))
    await user.click(screen.getByText('all'))
    expect(screen.getByText('Fashion Shot')).toBeDefined()
    expect(screen.getByText('Wedding Day')).toBeDefined()
  })

  it('uses default items when none provided', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
  })

  it('renders filter buttons', () => {
    render(<Portfolio items={mockItems} />)
    expect(screen.getByText('all')).toBeDefined()
    expect(screen.getByText('wedding')).toBeDefined()
    expect(screen.getByText('motion')).toBeDefined()
    expect(screen.getByText('portrait')).toBeDefined()
    expect(screen.getByText('fashion')).toBeDefined()
  })
})
