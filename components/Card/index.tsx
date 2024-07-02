interface CardProps {
    imgUrl: string;
    title: string;
    children: React.ReactNode;
    showSub?: boolean;
    background?: string;
}

const Card = ({
    imgUrl,
    showSub,
    children,
    background,
    title,
}: CardProps) => {
  return (
    <div className="flex justify-center">
      <div
        style={{ backgroundColor: background }}
        className={`flex flex-col md:flex-row md:max-w-xl rounded-lg shadow-lg`}
      >
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={imgUrl}
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          {showSub && (
            <p className="text-gray-500 text-sm mt-2">
              This is the card subtitle
            </p>
          )}
          <p className="text-gray-700 text-base mt-4 mb-4">{children}</p>

          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs uppercase rounded shadow-md"
          >
            Some action
          </button>
        </div>
      </div>
    </div>
  );
};


export default Card;