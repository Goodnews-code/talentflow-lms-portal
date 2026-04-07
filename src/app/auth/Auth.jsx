const AuthPage = ({ sectionImage, rest }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-50 overflow-hidden">
        <img
          src={sectionImage}
          alt="Authentication illustration"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        {rest}
      </div>
    </div>
  );
};

export default AuthPage;
