import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"

interface Contributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
}

interface ContributorStackProps {
  contributors: Contributor[]
  totalContributors?: number
}

export function ContributorStack({ contributors, totalContributors }: ContributorStackProps) {
  if (contributors.length === 0) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Users className="w-4 h-4" />
        <span>No contributors data</span>
      </div>
    )
  }

  const displayContributors = contributors.slice(0, 5)
  const remainingCount = Math.max(0, (totalContributors || contributors.length) - displayContributors.length)

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2">
        {displayContributors.map((contributor, index) => (
          <Link
            key={contributor.login}
            href={contributor.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="relative">
              <Image
                src={contributor.avatar_url || "/placeholder.svg"}
                alt={contributor.login}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-background shadow-xs group-hover:scale-110 transition-transform duration-200"
                style={{ zIndex: displayContributors.length - index }}
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {contributor.contributions > 99 ? "99+" : contributor.contributions}
              </div>
            </div>
          </Link>
        ))}
        {remainingCount > 0 && (
          <div className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
            +{remainingCount}
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{totalContributors || contributors.length} contributors</span>
        <span className="text-xs text-muted-foreground">{displayContributors[0]?.login} and others</span>
      </div>
    </div>
  )
}
