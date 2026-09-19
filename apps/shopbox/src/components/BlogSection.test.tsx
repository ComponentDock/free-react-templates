import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('From the Blog')
  })

  it('renders 3 blog post cards', () => {
    render(<BlogSection />)
    expect(screen.getByText('Spring Style Guide 2026')).toBeInTheDocument()
    expect(screen.getByText('Accessorize Like a Pro')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Fashion Choices')).toBeInTheDocument()
  })

  it('renders post excerpts', () => {
    render(<BlogSection />)
    expect(screen.getByText(/Explore the freshest trends/)).toBeInTheDocument()
    expect(screen.getByText(/From bags to watches/)).toBeInTheDocument()
    expect(screen.getByText(/How to build a wardrobe/)).toBeInTheDocument()
  })

  it('renders post dates and categories', () => {
    render(<BlogSection />)
    expect(screen.getByText(/Mar 15, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/Mar 10, 2026/)).toBeInTheDocument()
    expect(screen.getByText(/Mar 5, 2026/)).toBeInTheDocument()
  })

  it('renders post categories', () => {
    render(<BlogSection />)
    const meta = document.querySelectorAll('.mb-2.text-xs.text-gray-400')
    const texts = Array.from(meta).map((el) => el.textContent ?? '')
    expect(texts.some((t) => t.includes('Fashion'))).toBe(true)
    expect(texts.some((t) => t.includes('Lifestyle'))).toBe(true)
    expect(texts.some((t) => t.includes('Sustainability'))).toBe(true)
    expect(screen.getByText('Sustainable Fashion Choices')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<BlogSection />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks.length).toBe(3)
  })

  it('each post has an image', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    images.forEach((img) => {
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/shopbox-blog')
    })
  })

  it('Read More links are clickable', async () => {
    const user = userEvent.setup()
    render(<BlogSection />)
    const readMore = screen.getAllByText('Read More →')[0]!
    await user.click(readMore)
    expect(readMore).toBeInTheDocument()
  })

  it('post titles are links', async () => {
    const user = userEvent.setup()
    render(<BlogSection />)
    const title = screen.getByText('Spring Style Guide 2026')
    expect(title.tagName).toBe('A')
    await user.click(title)
    expect(title).toBeInTheDocument()
  })

  it('uses 3-column grid on desktop', () => {
    render(<BlogSection />)
    const grid = screen.getByText('Spring Style Guide 2026').closest('article')!.parentElement!
    expect(grid.className).toContain('md:grid-cols-3')
  })
})
