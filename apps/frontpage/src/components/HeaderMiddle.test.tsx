import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderMiddle } from './HeaderMiddle'

describe('HeaderMiddle', () => {
  it('renders the site name as a link', () => {
    render(<HeaderMiddle />)
    const link = screen.getByRole('link', { name: /FrontPage/i })
    expect(link).toHaveAttribute('href', '#home')
  })

  it('renders the banner ad image', () => {
    render(<HeaderMiddle />)
    const img = screen.getByRole('img', { name: 'Advertisement banner' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
