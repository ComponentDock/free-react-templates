import { ARTICLES } from '../content'
import { ArticleCard } from './ArticleCard'

/**
 * `auto-fit` with a 280px minimum does all the responsive work: one column up
 * to 611px, two from 612, three from 928, and never four (four tracks need
 * 1,228px inside a 1,180px container). The gap is a `clamp`, so there is not a
 * single width media query on the page.
 */
export function ArticleGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,3vw,36px)]">
      {ARTICLES.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}
