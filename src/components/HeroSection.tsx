import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFeaturedBooks } from '@/hooks/useBooks';

const HeroSection: React.FC = () => {
  const { data: featuredBooks = [] } = useFeaturedBooks();
  const displayedBooks = featuredBooks.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-sm font-medium">Over 10,000 books available</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Discover Your Next
              <span className="block text-gradient-gold">Great Read</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Explore our curated collection of bestsellers, new releases, and timeless classics. 
              Find the perfect book for every mood and moment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
              >
                <Link to="/books">
                  Browse Collection
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/categories">
                  Explore Categories
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold font-display">50K+</p>
                <p className="text-sm text-primary-foreground/70">Happy Readers</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display">10K+</p>
                <p className="text-sm text-primary-foreground/70">Books Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display">4.8</p>
                <p className="text-sm text-primary-foreground/70">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right content - Featured books */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {displayedBooks.map((book, index) => (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  className="absolute transition-all duration-500 hover:z-10"
                  style={{
                    left: `${index * 25}%`,
                    top: `${index * 10}%`,
                    transform: `rotate(${(index - 1) * 5}deg)`,
                    zIndex: displayedBooks.length - index,
                  }}
                >
                  <div className="group relative">
                    <div className="w-48 h-72 rounded-lg overflow-hidden shadow-2xl ring-4 ring-primary-foreground/10 group-hover:ring-gold/50 transition-all duration-300 group-hover:scale-105 group-hover:-rotate-2">
                      <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-4 right-4 bg-card text-foreground p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-display font-semibold text-sm truncate">{book.title}</p>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 80C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
