import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the eyebrow, heading, and the skewed View All Projects button', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What we have done!')
    const button = screen.getByRole('link', { name: 'View All Projects' })
    expect(button.className).toContain('-skew-x-[30deg]')
  })

  it('renders four project cards with photo, skewed orange chip title, and blurb', () => {
    const { container } = render(<Projects />)
    for (const title of [
      'Freight Carrier',
      'Freight Forwarder',
      'Import-Export',
      'Agricultural Truck',
    ]) {
      const label = screen.getByText(title)
      const chip = label.parentElement as HTMLElement
      expect(chip.className).toContain('-skew-x-[32deg]')
      expect(chip.className).toContain('bg-brand')
      expect(label.className).toContain('skew-x-[30deg]')
    }
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(4)
    for (const article of articles) {
      expect(article.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/drayage-project-'),
      )
      expect(article.querySelector('.bg-navy')).not.toBeNull()
    }
  })
})
