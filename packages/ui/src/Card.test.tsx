import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardContent, CardFooter } from '@free-react-templates/ui'

describe('Card', () => {
  it('renders children inside a card container', () => {
    render(<Card>Body</Card>)
    const card = screen.getByText('Body')
    expect(card.className).toContain('rounded-xl')
    expect(card.className).toContain('shadow-sm')
  })

  it('applies a custom className', () => {
    render(<Card className="extra">Body</Card>)
    expect(screen.getByText('Body')).toHaveClass('extra')
  })

  it('renders Header, Content and Footer sections', () => {
    render(
      <Card>
        <CardHeader>Head</CardHeader>
        <CardContent>Body</CardContent>
        <CardFooter>Foot</CardFooter>
      </Card>,
    )
    expect(screen.getByText('Head')).toHaveClass('p-4')
    expect(screen.getByText('Body')).toHaveClass('p-4')
    expect(screen.getByText('Foot')).toHaveClass('p-4')
  })

  it('supports compound access via Card.Header / Card.Content / Card.Footer', () => {
    render(
      <Card>
        <Card.Header>Head</Card.Header>
        <Card.Content>Body</Card.Content>
        <Card.Footer>Foot</Card.Footer>
      </Card>,
    )
    expect(screen.getByText('Head')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(screen.getByText('Foot')).toBeInTheDocument()
  })
})
