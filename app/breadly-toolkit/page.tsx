"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Clock, BookOpen, Gift, Users, Copy, Check, Instagram, Facebook, Mail, Heart } from "lucide-react"
import { articleImages, guideImages, ebookImages, ebookDownloads, productImages, communityImages } from "@/lib/images"

export default function BonusPage() {
  return (
    <Suspense>
      <BonusPageContent />
    </Suspense>
  )
}

function BonusPageContent() {
  const [copied, setCopied] = useState(false)
  const searchParams = useSearchParams()

  // Read referral link from URL param (passed from Omnisend emails)
  const referralLink = searchParams.get("ref")
  const hasReferral = !!referralLink

  const copyToClipboard = async () => {
    if (!referralLink) return
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const blogPosts = [
    {
      id: 1,
      title: "The Secret to Golden Burger Buns: Bake Like a Pro at Home",
      excerpt: "Discover the techniques professional bakers use to achieve perfectly golden, pillowy soft burger buns every time.",
      category: "Recipes",
      readTime: "7 min read",
      image: articleImages.goldenBurgerBuns,
      url: "https://blog.earthyblissco.com/blog/perfect-homemade-bun"
    },
    {
      id: 2,
      title: "How to Bake the Perfect Fluffy Biscuits: Secrets to Sky-High Layers",
      excerpt: "Master the art of flaky, layered biscuits with our proven techniques for achieving that perfect rise.",
      category: "Recipes",
      readTime: "6 min read",
      image: articleImages.fluffyBiscuits,
      url: "https://blog.earthyblissco.com/blog/fluffy-homemade-biscuits"
    },
    {
      id: 3,
      title: "The Secret to Perfect Focaccia: Don't Skip the Olive Oil",
      excerpt: "Learn why olive oil is the key to achieving that crispy, golden crust and soft, airy interior.",
      category: "Recipes",
      readTime: "8 min read",
      image: articleImages.perfectFocaccia,
      url: "https://blog.earthyblissco.com/blog/easy-focaccia-recipe"
    },
    {
      id: 4,
      title: "How to Make the Perfect Banana Bread (Simple Recipe + Quick Tips)",
      excerpt: "Our foolproof banana bread recipe plus expert tips for achieving moist, flavorful results every time.",
      category: "Recipes",
      readTime: "5 min read",
      image: articleImages.bananaBread,
      url: "https://blog.earthyblissco.com/blog/banana-bread-recipe"
    }
  ]

  const guides = [
    {
      id: 1,
      title: "How to Score Bread: Patterns, Tools, and Why It Matters",
      excerpt: "Learn how to score bread with a lame or razor — depth, angle, patterns, and why it matters for oven spring.",
      category: "Techniques",
      readTime: "7 min read",
      image: guideImages.howToScoreBread,
      url: "https://blog.earthyblissco.com/blog/how-to-score-bread"
    },
    {
      id: 2,
      title: "How to Knead Bread Dough by Hand (With the Windowpane Test)",
      excerpt: "Learn how to knead bread dough by hand with proper technique, timing, and the windowpane test.",
      category: "Techniques",
      readTime: "8 min read",
      image: guideImages.howToKneadDough,
      url: "https://blog.earthyblissco.com/blog/how-to-knead-dough"
    },
    {
      id: 3,
      title: "Egg Wash vs. Milk Wash vs. Butter: The Complete Bread Wash Guide",
      excerpt: "Learn which bread wash gives you the crust you want — glossy, golden, soft, or crispy.",
      category: "Guides",
      readTime: "7 min read",
      image: guideImages.eggWashBreadGuide,
      url: "https://blog.earthyblissco.com/blog/egg-wash-bread-guide"
    }
  ]

  const ebooks = [
    {
      id: 1,
      title: "Starter Rescue",
      subtitle: "The 10-Day System for Growing a Thriving Sourdough Starter",
      image: ebookImages.starterRescue,
      downloadUrl: ebookDownloads.starterRescue,
      format: "PDF"
    },
    {
      id: 2,
      title: "Loaf Lift",
      subtitle: "The Flat Dough Fix - Why your sourdough collapsed and exactly how to fix it",
      image: ebookImages.loafLift,
      downloadUrl: ebookDownloads.loafLift,
      format: "PDF"
    },
    {
      id: 3,
      title: "Everything Sourdough",
      subtitle: "A Beginner's Journey To Perfect Bread",
      image: ebookImages.everythingSourdough,
      downloadUrl: ebookDownloads.everythingSourdough,
      format: "PDF"
    },
    {
      id: 4,
      title: "10-Day Feeding Tracker",
      subtitle: "Track your sourdough starter's progress for 10 days",
      image: ebookImages.feedingTracker,
      downloadUrl: ebookDownloads.feedingTracker,
      format: "PDF"
    }
  ]

  const communityPhotos = communityImages.map((img, i) => ({
    id: i + 1,
    image: img.src,
    alt: img.alt,
  }))

  return (
    <div className="min-h-screen">
      {/* Top Discount Banner */}
      <a href="#gift-sets" className="block py-2.5 px-4 text-center no-underline" style={{ backgroundColor: '#2D150B' }} onClick={(e) => { e.preventDefault(); document.getElementById('gift-sets')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <p className="font-sans text-xs sm:text-sm inline-flex items-center gap-1.5" style={{ color: '#FFEFD2' }}>
          Use code <span className="font-mono font-bold tracking-wider px-2 py-0.5 rounded mx-0.5" style={{ backgroundColor: 'rgba(203, 172, 150, 0.2)', color: '#CBAC96' }}>GIFT15</span> for 15% off our gift sets
          <svg className="h-3 w-3 animate-bounce" style={{ color: '#CBAC96' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </p>
      </a>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#FFEFD2' }}>
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20" style={{ backgroundColor: '#CBAC96' }} />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15" style={{ backgroundColor: '#2D150B' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]" style={{ backgroundColor: '#CBAC96' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Member Exclusive Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: 'rgba(45, 21, 11, 0.08)' }}>
            <Heart className="h-4 w-4" style={{ color: '#2D150B' }} />
            <span className="font-sans text-sm font-medium tracking-wide" style={{ color: '#2D150B' }}>
              Thank You For Your Order
            </span>
          </div>

          {/* Logo */}
          <div className="inline-flex flex-col items-center mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider" style={{ color: '#2D150B' }}>EARTHY</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider" style={{ color: '#2D150B' }}>BLISS</span>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider" style={{ color: '#2D150B' }}>CO.</span>
            </div>
            <div className="h-px w-32" style={{ background: 'linear-gradient(to right, transparent, #CBAC96, transparent)' }} />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight" style={{ color: '#2D150B' }}>
            Your Breadly Toolkit
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: '#3E3E3E' }}>
            Welcome to the family. Here's everything you need to create bakery-quality bread at home.
          </p>

          {/* Trust indicator */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/60 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white" style={{ backgroundColor: '#CBAC96' }}>
                <Users className="h-4 w-4 text-white" />
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-white font-sans text-[10px] font-bold text-white" style={{ backgroundColor: '#2D150B' }}>
                84K
              </div>
            </div>
            <span className="font-sans text-sm" style={{ color: '#3E3E3E' }}>
              You're one of 84,000+ happy bakers
            </span>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Featured Articles
            </h2>
            <p className="font-sans text-muted-foreground text-lg">
              {'Expert insights and techniques for better baking'}
            </p>
          </div>
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 pl-6 pr-4 md:mx-0 md:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow w-[75vw] min-w-[75vw] md:w-auto md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
                <div className="aspect-[4/3] md:aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-3 md:p-6">
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <Badge variant="secondary" className="font-sans text-[10px] md:text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground font-sans">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-sm md:text-lg mb-1 md:mb-2 text-balance leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-xs md:text-sm leading-relaxed line-clamp-2 hidden md:block">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                  <Button variant="outline" className="w-full font-sans bg-transparent text-xs md:text-sm h-8 md:h-10" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guides & Techniques */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Guides & Techniques
            </h2>
            <p className="font-sans text-muted-foreground text-lg">
              {'Master the fundamentals of artisan bread baking'}
            </p>
          </div>
          <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 pl-6 pr-4 md:mx-0 md:px-0" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
            {guides.map((guide) => (
              <Card key={guide.id} className="overflow-hidden hover:shadow-lg transition-shadow w-[75vw] min-w-[75vw] md:w-auto md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
                <div className="aspect-[4/3] md:aspect-video overflow-hidden">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="p-3 md:p-6">
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <Badge variant="secondary" className="font-sans text-[10px] md:text-xs">
                      {guide.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground font-sans">
                      <Clock className="h-3 w-3" />
                      {guide.readTime}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-sm md:text-lg mb-1 md:mb-2 text-balance leading-tight line-clamp-2">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="font-sans text-xs md:text-sm leading-relaxed line-clamp-2 hidden md:block">
                    {guide.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                  <Button variant="outline" className="w-full font-sans bg-transparent text-xs md:text-sm h-8 md:h-10" asChild>
                    <a href={guide.url} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Ebooks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Exclusive Downloads
            </h2>
            <p className="font-sans text-muted-foreground text-lg">
              {'Click any image to access your FREE ebook'}
            </p>
          </div>
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory pb-4 sm:pb-0 -mx-4 pl-6 pr-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}>
            {ebooks.map((ebook) => (
              <Card key={ebook.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden w-[75vw] min-w-[75vw] sm:w-auto sm:min-w-0 snap-start flex-shrink-0 sm:flex-shrink">
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={ebook.image || "/placeholder.svg"}
                    alt={ebook.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <Badge className="font-sans text-[10px] sm:text-xs">{ebook.format}</Badge>
                  </div>
                  <h3 className="font-serif text-sm sm:text-lg font-bold text-foreground mb-1">
                    {ebook.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                    {ebook.subtitle}
                  </p>
                  {ebook.downloadUrl ? (
                    <Button className="w-full font-sans text-xs sm:text-sm h-8 sm:h-9" size="sm" asChild>
                      <a href={ebook.downloadUrl} target="_blank" rel="noopener noreferrer" download>
                        <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Download
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full font-sans text-xs sm:text-sm h-8 sm:h-9" size="sm" disabled>
                      <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="flex flex-col md:grid md:grid-cols-2">
              {/* Top/Left side - Visual */}
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="hidden sm:block absolute top-6 left-6">
                  <Gift className="h-8 w-8 text-primary/40" />
                </div>
                <div className="text-center">
                  <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-primary mb-2">
                    Referral Program
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                    Give $15, Get $15
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Share the joy of artisan baking. When friends make their first purchase, you both save.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8 flex items-center gap-3 justify-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/30 flex items-center justify-center border-2 border-background font-sans text-[10px] sm:text-xs font-bold">
                      84K+
                    </div>
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-muted-foreground">
                    Happy bakers
                  </span>
                </div>
              </div>

              {/* Bottom/Right side - Action */}
              <CardContent className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3">
                      How it works
                    </h3>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-sans text-[10px] sm:text-xs font-bold">
                          1
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-muted-foreground">
                          Share your unique link with a friend
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-sans text-[10px] sm:text-xs font-bold">
                          2
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-muted-foreground">
                          They get $15 off their first order
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-sans text-[10px] sm:text-xs font-bold">
                          3
                        </span>
                        <span className="font-sans text-xs sm:text-sm text-muted-foreground">
                          You get $15 credit when they buy
                        </span>
                      </li>
                    </ul>
                  </div>

                  {hasReferral ? (
                    <>
                      <div className="space-y-2">
                        <label className="font-sans text-xs sm:text-sm font-medium text-foreground">
                          Your referral link
                        </label>
                        <div className="flex gap-2">
                          <div className="flex-1 min-w-0 bg-muted rounded-md px-3 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm truncate">
                            {referralLink}
                          </div>
                          <Button
                            onClick={copyToClipboard}
                            variant={copied ? "default" : "outline"}
                            size="icon"
                            className="flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10"
                          >
                            {copied ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        {copied && (
                          <p className="font-sans text-xs text-primary">
                            Copied!
                          </p>
                        )}
                      </div>

                      <Button className="w-full font-sans text-sm sm:text-base" size="lg" onClick={copyToClipboard}>
                        <Gift className="h-4 w-4 mr-2" />
                        {copied ? "Copied!" : "Copy & Share Your Link"}
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4 sm:p-5 text-center">
                        <Mail className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                        <p className="font-sans text-sm text-foreground font-medium mb-1">
                          Your personal referral link is in your order confirmation email
                        </p>
                        <p className="font-sans text-xs text-muted-foreground">
                          Look for the P.S. at the bottom from Earthy Bliss Co.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Community Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              From Our Baking Community
            </h2>
            <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
              {'See what 84,000+ bakers are creating with their Earthy Bliss tools'}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
            {communityPhotos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square overflow-hidden rounded-lg bg-muted group cursor-pointer"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Card className="inline-block bg-background border-2 border-primary/10">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
                    <Instagram className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-1">
                      Share Your Bake
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mb-3">
                      Tag us <span className="font-semibold text-foreground">@earthyblissco</span> for a chance to be featured
                    </p>
                    <Button asChild variant="outline" size="sm" className="font-sans">
                      <a href="https://instagram.com/earthyblissco" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow on Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ORIGINAL SINGLE SECTION (replaced — to revert, uncomment this and remove the two sections below)
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">Recommended Tools</h2>
            <p className="font-sans text-muted-foreground text-lg">Everything you need to create bakery-quality bread at home</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            — Share the Craft Set card ($69) —
            — Bliss Bag card ($30) —
            — Everything Sourdough Baking Set card —
          </div>
        </div>
      </section>
      END ORIGINAL */}

      {/* Gift15 Discount Banner */}
      <section className="py-6 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#2D150B' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg sm:text-2xl font-bold mb-1" style={{ color: '#FFEFD2' }}>
            Use code <span className="font-mono tracking-wider px-2 py-0.5 rounded mx-1" style={{ backgroundColor: 'rgba(203, 172, 150, 0.2)', color: '#CBAC96' }}>GIFT15</span> for 15% off our gift sets
          </p>
          <p className="font-sans text-xs sm:text-sm" style={{ color: 'rgba(255, 239, 210, 0.6)' }}>
            Share the love of baking with someone special
          </p>
        </div>
      </section>

      {/* Gift Sets — for buying for others */}
      <section id="gift-sets" className="py-20 px-4 sm:px-6 lg:px-8 bg-background scroll-mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Gift Sets for Every Occasion
            </h2>
            <p className="font-sans text-muted-foreground text-lg">
              {"Know someone who'd love great bread? There's a set for that."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Share the Craft Set */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={productImages.shareTheCraftSet}
                  alt="Breadly Share the Craft Set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Share the Craft Set
                </h3>
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                  {'A gift for anyone who loves great bread, whether they bake it or bring it home fresh.'}
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-sans text-2xl font-bold text-primary">From $69</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground mb-4">Free Shipping Available</p>
                <Button className="w-full font-sans" asChild>
                  <a href="https://earthyblissco.com/products/share-the-craft-set" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Everything Sourdough Set */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={productImages.everythingSourdoughSet}
                  alt="Everything Sourdough Set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Everything Sourdough Set
                </h3>
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                  {'Everything a beginner baker needs to get started. Includes our bestselling Breadly knife and e-guides.'}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-sans text-2xl font-bold text-primary">$99</span>
                </div>
                <Button className="w-full font-sans" asChild>
                  <a href="https://earthyblissco.com/products/everything-sourdough-baking-set" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expand Your Toolkit — for existing Breadly owners */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFEFD2' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#2D150B' }}>
              Expand Your Toolkit
            </h2>
            <p className="font-sans text-lg" style={{ color: '#3E3E3E' }}>
              {'For bakers who already own a Breadly'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Bliss Bag */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={productImages.blissBag}
                  alt="The Bliss Bag"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  The Bliss Bag
                </h3>
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                  {'Keeps bread crusty outside and soft inside for days. No more stale loaves.'}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-sans text-2xl font-bold text-primary">$30</span>
                </div>
                <Button className="w-full font-sans" asChild>
                  <a href="https://earthyblissco.com/products/bliss-bags-solo" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Everything Sourdough Baking Set (no Breadly) */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={productImages.everythingSourdoughSet}
                  alt="Everything Sourdough Baking Set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  Everything Sourdough Baking Set
                </h3>
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                  {'The complete baking set for your sourdough journey. Banneton, scraper, lame, and more.'}
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-sans text-2xl font-bold text-primary">Shop Set</span>
                </div>
                <Button className="w-full font-sans" asChild>
                  <a href="https://earthyblissco.com/products/everything-sourdough-baking-set" target="_blank" rel="noopener noreferrer">
                    Shop Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-baseline gap-2 justify-center md:justify-start mb-2">
                <span className="font-serif text-xl font-bold tracking-wider">EARTHY</span>
                <span className="font-serif text-xl font-bold tracking-wider opacity-70">BLISS</span>
                <span className="font-serif text-xl font-bold tracking-wider opacity-50">CO.</span>
              </div>
              <p className="font-sans text-sm opacity-70">
                Handcrafted baking tools since 2011
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/earthyblissco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/earthyblissco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:support@earthyblissco.com"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Shop Link */}
            <div className="text-center md:text-right">
              <Button asChild variant="secondary" size="sm" className="font-sans">
                <a href="https://earthyblissco.com" target="_blank" rel="noopener noreferrer">
                  Visit Our Store
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-background/10 text-center">
            <p className="font-sans text-sm opacity-50 flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 fill-current" /> for bakers everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
