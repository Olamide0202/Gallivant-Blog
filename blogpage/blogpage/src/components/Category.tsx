import FeatureCard from './FeatureCard';
import logo1 from '../assets/logo/1.png'
import logo2 from '../assets/logo/1.png'

// ... other imports ...

export default function Category() {
  const featuredPosts = [
    {
      image: logo1,
      title: "The Golden Sands of Florida and California",
      description: "Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed",
      category: "Solo Travel",
      author: "Adam Smith"
    },
    {
      image: logo2,
      title: "The Golden Sands of Florida and California",
      description: "Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed",
      category: "Solo Travel",
      author: "Adam Smith"
    },
    // ... add more posts as needed
  ];

  return (
    <div>
      {/* ... existing category section ... */}

      <h1 className="flex font-sans font-bold justify-center text-3xl">
        Features Explore
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mx-auto p-8">
        {featuredPosts.map((post, index) => (
          <FeatureCard
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
            category={post.category}
            author={post.author}
          />
        ))}
      </div>

      {/* ... rest of the component ... */}
    </div>
  );
} 