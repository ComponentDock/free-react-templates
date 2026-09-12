import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders five Instagram image links', () => {
    render(<Instagram />)
    const links = screen.getAllByRole('link')
    const instaLinks = links.filter((l) => l.getAttribute('href') === 'https://instagram.com')
    expect(instaLinks).toHaveLength(5)
  })
})
