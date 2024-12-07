interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  author: string;
}

export default function FeatureCard({ image, title, description, category, author }: FeatureCardProps) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <span className="font-medium text-yellow-600 mr-2">
            {category}
          </span>
          <span>by {author}</span>
        </div>
      </div>
    </div>
  );
} 