import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Faculty } from './Faculty'

describe('Faculty', () => {
  it('renders the section heading', () => {
    render(<Faculty />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Faculty Members/i)
  })

  it('renders all 4 faculty member names', () => {
    render(<Faculty />)
    const names = ['Dr. Sarah Mitchell', 'James Rodriguez', 'Emily Chen', 'Michael Okafor']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders faculty designations', () => {
    render(<Faculty />)
    expect(screen.getByText('Data Science Lead')).toBeInTheDocument()
    expect(screen.getByText('Full-Stack Instructor')).toBeInTheDocument()
  })

  it('renders social media icons for each faculty member', () => {
    const { container } = render(<Faculty />)
    // 4 faculty × 3 social icons = 12 social links
    const socialLinks = container.querySelectorAll('a[aria-label]')
    const socialLabels = Array.from(socialLinks).map((a) => a.getAttribute('aria-label'))
    const fbCount = socialLabels.filter((l) => l === 'Facebook').length
    const twCount = socialLabels.filter((l) => l === 'Twitter').length
    const liCount = socialLabels.filter((l) => l === 'LinkedIn').length
    expect(fbCount).toBe(4)
    expect(twCount).toBe(4)
    expect(liCount).toBe(4)
  })

  it('renders faculty photos from picsum', () => {
    render(<Faculty />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(4)
    for (const img of imgs) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})
