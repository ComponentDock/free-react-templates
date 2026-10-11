import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the lavender band with a page of white cards, avatars and star rows', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Testimonial from our Clients',
    )
    expect(container.querySelector('section')?.className).toContain('bg-panel')

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(2)
    expect(cards[0]?.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/tripquest-face-1/120/120',
    )
    expect(cards[0]?.querySelector('img')?.className).toContain('rounded-full')
    expect(cards[0]?.textContent).toContain('Harriet Maxwell')
    expect(cards[1]?.textContent).toContain('Carolyn Craig')

    expect(screen.getByText('Harriet Maxwell rated us 4 out of 5')).toBeInTheDocument()
    expect(cards[0]?.querySelectorAll('svg')).toHaveLength(5)
    expect(screen.getByTestId('testimonial-page')).toHaveTextContent('Page 1 of 2')
  })

  it('pages forward and back through the testimonial set', async () => {
    const user = userEvent.setup()
    const { container } = render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByTestId('testimonial-page')).toHaveTextContent('Page 2 of 2')
    expect(container.textContent).toContain('Marcus Bennett')
    expect(container.textContent).not.toContain('Harriet Maxwell')

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByTestId('testimonial-page')).toHaveTextContent('Page 1 of 2')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByTestId('testimonial-page')).toHaveTextContent('Page 2 of 2')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByTestId('testimonial-page')).toHaveTextContent('Page 1 of 2')
  })
})
