import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCard from '@/components/BookCard';
import { getNewArrivals } from '@/data/books';

const NewArrivals: React.FC = () => {
  const newArrivals = getNewArrivals();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">New Arrivals</h1>
          <p className="text-muted-foreground mb-8">
            Fresh off the press! Check out the latest additions to our collection.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {newArrivals.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
