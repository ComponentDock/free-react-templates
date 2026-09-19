const messages = [
  'Free shipping on orders over $100',
  '30 day returns, no questions asked',
  'Carbon neutral delivery on every order',
]

export function AnnouncementBar() {
  return (
    <div className="bg-warm-900 text-warm-100 text-center py-2.5 text-xs tracking-widest">
      <p>{messages[0]}</p>
    </div>
  )
}
