import corsExtensionImage from "../assets/cors extention.png";

export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg w-full max-w-screen-lg">
        {/* Error Header */}
        <div className="flex items-center space-x-2 mb-4">
          <strong className="font-bold text-xl">Error:</strong>
        </div>

        {/* Error Description */}
        <div className="mb-4 text-sm text-gray-800">
          I am using a Google API, which has CORS security. Please install the
          CORS extension. I have provided a screenshot below. After installing
          the extension, this website should work fine.
        </div>

        {/* Image (CORS Extension Screenshot) */}
        <img
          src={corsExtensionImage} // Use the imported image here
          alt="CORS Extension"
          className="mt-4 rounded-lg shadow-md w-full"
        />
      </div>
    </div>
  );
}
