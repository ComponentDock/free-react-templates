import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the navy band with the eyebrow and white heading', () => {
    const { container } = render(<ChooseUs />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-navy')
    expect(screen.getByText('Our Benefit')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why people choose us?')
  })

  it('renders the four benefit items and the bleeding side image', () => {
    const { container } = render(<ChooseUs />)
    for (const title of ['Warehouse Storage', 'Security Cargo', 'Easy Payment', 'Fast Delivery']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    const img = screen.getByRole('img', { name: /Warehouse team staging/ })
    expect(img).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/seed/drayage-benefit'),
    )
    const imageColumn = img.parentElement
    expect(imageColumn?.className).toContain('md:-mt-[50px]')
    expect(container.querySelectorAll('article, svg')).not.toHaveLength(0)
  })
})
