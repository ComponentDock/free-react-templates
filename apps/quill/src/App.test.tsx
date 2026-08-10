import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes all sections with the correct landmarks and document title', () => {
    render(<App />)

    expect(document.title).toBe('Quill — Blog Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(main).toHaveTextContent('A Discount Toner Cartridge Is Better Than Ever.')
    expect(main).toHaveTextContent('Latest News from all categories')
    expect(main).toHaveTextContent('Hot topics from Travel Section')
    expect(main).toHaveTextContent('Fashion News This Week')
    expect(main).toHaveTextContent('About Blogger Team')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Load More' })).toHaveLength(2)
  })
})
